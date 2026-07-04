
## Objetivo
Substituir a tabela `public.posts` atual pela estrutura exata solicitada, para receber a importação vinda do Supabase externo.

## Aviso importante
Isto vai quebrar temporariamente:
- Blog público (`/blog`, `/blog/$slug`)
- Admin de posts (listar, criar, editar)
- Sitemap dinâmico de posts
- Página de autor (lista posts do autor)
- Função `increment_post_views` (referencia `slug` e `status`)
- FKs `posts_tags.post_id` e relacionamentos com `categories`/`profiles`

Nada disso será refatorado neste passo — só a tabela. Depois da migração/importação decidimos como adaptar o front (ou remapear colunas).

## Migração SQL
Executar em uma migration única, nesta ordem:

1. `DROP TABLE public.posts_tags` (depende de posts).
2. `DROP FUNCTION public.increment_post_views(text)`.
3. `DROP TABLE public.posts CASCADE` (remove FKs de `profiles`/`categories` apontando para posts, se houver).
4. Criar a nova tabela exatamente conforme especificado:

```sql
CREATE TABLE public.posts (
  id text NOT NULL PRIMARY KEY,
  "Title" text,
  "Content" text,
  "Date" text,
  "Permalink" text,
  "Image URL" text,
  "Excerpt" text,
  "Categorias" text,
  "Author First Name" text,
  "Slug" text
);
```

5. GRANTs (obrigatório no schema public):
```sql
GRANT SELECT ON public.posts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.posts TO authenticated;
GRANT ALL ON public.posts TO service_role;
```

6. `ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;`

7. Políticas mínimas:
   - `SELECT` público (anon + authenticated): leitura livre — mesma postura da tabela atual para posts publicados. Ex.: `USING (true)`.
   - `INSERT/UPDATE/DELETE`: apenas admin via `has_role(auth.uid(),'admin')`.

## O que NÃO faz parte deste passo
- Não recria `posts_tags` (pode ser recriada depois se necessário).
- Não recria `increment_post_views`.
- Não altera código do front/admin — ele vai quebrar até adaptarmos.
- Não migra dados existentes (a tabela atual será descartada).

## Próximo passo sugerido (fora deste plano)
Depois que você confirmar a importação, planejamos a adaptação do blog/admin para as novas colunas (`"Title"`, `"Slug"`, `"Content"`, etc.) — ou criamos uma view compatível com o código atual.
