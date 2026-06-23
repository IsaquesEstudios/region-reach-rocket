# Deploy no Coolify

Este projeto é um app TanStack Start cujo build, por padrão, é direcionado ao runtime
Cloudflare Workers (`workerd`). Para rodar em uma VPS com Coolify, empacotamos esse bundle
em um container Docker que executa o `workerd` via `wrangler` em modo local.

## Arquivos preparados

- `Dockerfile` — build multi-stage (Bun para build + Node slim para runtime).
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
- Se quiser migrar para um adaptador Node puro no futuro (sem `workerd`), será necessário
  trocar o preset `@lovable.dev/vite-tanstack-config` por uma configuração TanStack Start
  customizada com `target: 'node-server'`.
- O `wrangler dev --local` executa o bundle no `workerd` sem precisar de conta Cloudflare nem
  de internet para a API deles — tudo roda dentro do container.

## Atualizações

Cada push na branch configurada dispara um novo build/deploy automático no Coolify
(se **Auto Deploy** estiver ativo).
