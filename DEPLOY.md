# Deploy no Coolify

Este projeto é um app TanStack Start cujo build, por padrão, é direcionado ao runtime
Cloudflare Workers (`workerd`). Para rodar em uma VPS com Coolify, empacotamos esse bundle
em um container Docker que executa o `workerd` via `wrangler` em modo local.

## Arquivos preparados

- `Dockerfile` — build multi-stage (Bun para build + Node 22 slim para runtime), executando o `wrangler.json` gerado em `dist/server`.
- `.dockerignore` — evita enviar `node_modules`, `dist`, `.env` etc. para o contexto do build.
- `docker-compose.yml` — útil para testar localmente antes de subir.
- `.env.example` — modelo das variáveis necessárias.

## Passo a passo no Coolify

1. **Criar o recurso**
   - No painel Coolify: **+ New Resource → Application → Public/Private Repository**.
   - Aponte para o repositório deste projeto.
   - **Build Pack**: selecione **Dockerfile**.
   - **Dockerfile Location**: `/Dockerfile`.

2. **Porta exposta**
   - Em **Network**, defina **Port (Exposes)** = `3000`.
   - O Coolify cuidará do proxy HTTPS (Traefik) automaticamente.

3. **Variáveis de ambiente**
   Cole o conteúdo do `.env.example` em **Environment Variables** e preencha os valores reais.

   **Importante:** as variáveis `VITE_*` precisam ser marcadas como **Build Variable** no
   Coolify (ou adicionadas como **Build Arg**), pois o Vite as injeta no bundle do client
   durante o build — se forem apenas runtime, ficarão `undefined` no navegador.

   Se a página carregar por alguns segundos e depois cair em **“Algo deu errado ao carregar
   a página”**, abra o console do navegador: se aparecer `Missing Supabase environment
   variable(s)`, o build foi feito sem essas `VITE_*`. Corrija as variáveis como **Build
   Variable/Build Arg** e rode **rebuild sem cache**.

   Variáveis necessárias:
   - `VITE_SUPABASE_URL` (build)
   - `VITE_SUPABASE_PUBLISHABLE_KEY` (build)
   - `VITE_SUPABASE_PROJECT_ID` (build)
   - `SUPABASE_URL` (runtime)
   - `SUPABASE_PUBLISHABLE_KEY` (runtime)
   - `SUPABASE_PROJECT_ID` (runtime)
   - `SUPABASE_SERVICE_ROLE_KEY` (runtime, opcional — só se usar `supabaseAdmin`)
   - `PORT=3000` (runtime)

4. **Domínio**
   - Em **Domains**, adicione seu domínio (ex.: `chicoresolve.com.br`).
   - O Coolify provisiona SSL via Let's Encrypt automaticamente.
   - Aponte no seu DNS um registro `A` para o IP da VPS.

5. **Healthcheck**
   - Já configurado no `docker-compose.yml` (e o Coolify usa o do Dockerfile/serviço).
   - Path: `/`, porta `3000`.

6. **Deploy**
   - Clique em **Deploy**. Acompanhe o log do build.
   - O primeiro deploy demora mais (instala Bun + dependências).

## Testar localmente antes

```bash
cp .env.example .env
# edite .env com seus valores
docker compose up --build
# abra http://localhost:3000
```

## Observações

- **Cloudflare Worker bundle**: o app roda dentro do `workerd` (mesmo runtime do Cloudflare),
  garantindo que server functions, SSR e middlewares do Supabase funcionem igual à preview.
- **Não rode `bun run dev` em produção** — é apenas dev server.
- **Não use o `wrangler.jsonc` da raiz no runtime** — ele aponta para `src/server.ts`, que existe no código-fonte, mas não é copiado para a imagem final. O runtime precisa entrar em `dist/server` e usar o `wrangler.json` gerado pelo build, que aponta para `index.mjs`.
- Se quiser migrar para um adaptador Node puro no futuro (sem `workerd`), será necessário
  trocar o preset `@lovable.dev/vite-tanstack-config` por uma configuração TanStack Start
  customizada com `target: 'node-server'`.
- O `wrangler dev --local` executa o bundle no `workerd` sem precisar de conta Cloudflare nem
  de internet para a API deles — tudo roda dentro do container.
- O runtime precisa ser **Node.js 22+**. Se aparecer no log `Wrangler requires at least Node.js v22.0.0`, o container está usando uma imagem antiga (`node:20-slim`) e vai reiniciar em loop, causando 404 no domínio.
- Se aparecer no log `The entry-point file at "src/server.ts" was not found`, o container ainda está usando uma imagem/configuração antiga ou está rodando o `wrangler.jsonc` da raiz. Faça um deploy com rebuild sem cache para usar o Dockerfile atualizado.
- Se a home renderizar e depois trocar para a tela “Algo deu errado ao carregar a página”, isso é erro de hidratação no navegador. O caso mais comum neste deploy é o bundle client sem `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` porque o Coolify recebeu essas variáveis só como runtime, não como build.

## Atualizações

Cada push na branch configurada dispara um novo build/deploy automático no Coolify
(se **Auto Deploy** estiver ativo).
