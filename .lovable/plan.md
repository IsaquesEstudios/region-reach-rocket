## Objetivo
Manter o Lovable Cloud atual como backend principal (auth, admin, storage, categorias, profiles, tags) e usar um **segundo Supabase externo** apenas como fonte da tabela `posts` (leitura no site público e escrita no admin).

## Como vai funcionar
- Cloud continua responsável por: login/admin, `profiles`, `has_role`, `categories`, `tags`, bucket `blog-images`.
- Supabase externo passa a ser dono de: tabela `posts` (mesmo schema que já criamos aqui).
- O front usa **dois clients Supabase** em paralelo:
  - `supabase` (Cloud) — já existe, não muda.
  - `supabaseExternal` (novo) — só para `.from("posts")`.

## Passos

### 1. Você me fornece as credenciais do Supabase externo
Preciso de três valores (você pega no dashboard do Supabase externo em Project Settings → API):
- **URL do projeto** (ex.: `https://xxxx.supabase.co`) — pública, vai no código.
- **anon/publishable key** — pública, vai no código.
- **service_role key** — secreta, guardada como secret (`EXTERNAL_SUPABASE_SERVICE_ROLE_KEY`) só para a migração de dados.

Também preciso que você:
- Rode no SQL Editor do Supabase externo o mesmo `CREATE TABLE public.posts` + GRANTs + RLS que usamos aqui (eu te mando o SQL pronto).
- Confirme que o RLS do externo permite `SELECT` público (para o site) e `INSERT/UPDATE/DELETE` para o role que o admin vai usar.

### 2. Criar o client externo no código
Novo arquivo `src/integrations/supabase-external/client.ts` exportando `supabaseExternal`, lendo:
- `VITE_EXTERNAL_SUPABASE_URL`
- `VITE_EXTERNAL_SUPABASE_PUBLISHABLE_KEY`

Sem tipos gerados (a Lovable só gera tipos do Cloud) — vou tipar `posts` manualmente num arquivo `types.ts` local com as 10 colunas exatas.

### 3. Trocar apenas as chamadas de `posts` para o client externo
Arquivos afetados (todos usam `supabase.from("posts")`):
- `src/components/admin/PostEditor.tsx` — load/save de posts.
- `src/routes/admin.posts.index.tsx` — lista admin.
- `src/routes/blog.index.tsx` — lista pública.
- `src/routes/blog.$slug.tsx` — post individual.
- `src/routes/autor.$slug.tsx` — posts por autor.
- `src/routes/sitemap[.]xml.ts` — sitemap.
- `src/routes/index.tsx` — se puxar posts recentes.

Todas essas trocam `supabase` por `supabaseExternal` **só na query de posts**. Categorias, tags, profiles, storage e auth continuam no Cloud.

### 4. Migrar os dados atuais de `posts` do Cloud para o externo
Um script one-shot que:
1. `SELECT * FROM posts` no Cloud (via `psql` / read_query aqui).
2. Gera INSERTs.
3. Você cola no SQL Editor do Supabase externo (ou eu rodo via server function usando o `EXTERNAL_SUPABASE_SERVICE_ROLE_KEY`).

Depois disso, a tabela `posts` no Cloud fica órfã (não é mais lida por nada). Podemos deixar como backup ou dropar depois.

### 5. Upload de imagem de capa
O upload no `PostEditor` usa o bucket `blog-images` do Cloud e salva a URL pública em `Image URL`. Isso continua funcionando — a URL é absoluta, não importa em qual banco o registro do post vive. **Não migro imagens.**

### 6. Auth do admin no CRUD do externo
Como o admin está autenticado no Cloud (não no Supabase externo), o RLS do externo não vai ver `auth.uid()` do admin. Duas opções para a política de escrita no externo:
- **Simples**: usar a `anon key` com policy `USING (true)` para INSERT/UPDATE/DELETE. Fácil, mas qualquer um com a anon key escreve. ⚠️
- **Correto**: guardar a `service_role` do externo como secret e fazer um server function `savePost` que valida `has_role(admin)` no Cloud e escreve no externo com service_role. Escritas do admin passam pelo server; leituras públicas continuam diretas com anon.

Vou seguir com a opção **correta** (server function + service_role) — é o padrão seguro.

## Detalhes técnicos

### Novo client
```ts
// src/integrations/supabase-external/client.ts
import { createClient } from "@supabase/supabase-js";
import type { PostsDatabase } from "./types";

const url = import.meta.env.VITE_EXTERNAL_SUPABASE_URL || process.env.EXTERNAL_SUPABASE_URL;
const key = import.meta.env.VITE_EXTERNAL_SUPABASE_PUBLISHABLE_KEY || process.env.EXTERNAL_SUPABASE_PUBLISHABLE_KEY;

export const supabaseExternal = createClient<PostsDatabase>(url!, key!, {
  auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
});
```

### Server function para escrita admin
`src/lib/posts-external.functions.ts`:
- `.middleware([requireSupabaseAuth])` (auth do Cloud)
- Valida `has_role(userId, 'admin')` no Cloud.
- Dentro do handler, cria um client com `EXTERNAL_SUPABASE_SERVICE_ROLE_KEY` e executa insert/update/delete.
- `PostEditor` passa a chamar `savePostFn({ data })` em vez de `supabase.from("posts")`.

### Env vars necessárias
- `VITE_EXTERNAL_SUPABASE_URL` (pública, no `.env`)
- `VITE_EXTERNAL_SUPABASE_PUBLISHABLE_KEY` (pública, no `.env`)
- `EXTERNAL_SUPABASE_URL` (server-side, mesma URL)
- `EXTERNAL_SUPABASE_SERVICE_ROLE_KEY` (secret, via `add_secret`)

## O que NÃO faz parte deste plano
- Não dropo `public.posts` do Cloud agora (fica como backup até você validar).
- Não migro imagens de capa (continuam no bucket do Cloud, URLs absolutas).
- Não migro `categories`, `tags`, `profiles` para o externo — continuam no Cloud.
- Não mexo em auth: login continua sendo Cloud.

## Ordem de execução
1. Você me passa `URL` + `anon key` do externo, cria a tabela lá com o SQL que te dou, e adiciona a `service_role` via `add_secret` quando eu pedir.
2. Eu crio o client externo, o server function de escrita, e troco as chamadas de `posts`.
3. Migro os dados atuais para o externo.
4. Você valida no preview (blog público + admin).
5. Depois de OK, decidimos se dropa `posts` do Cloud.
