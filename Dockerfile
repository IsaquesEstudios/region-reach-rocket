# syntax=docker/dockerfile:1.7
# ---------- Stage 1: build ----------
FROM oven/bun:1.2 AS builder

WORKDIR /app

# Instala dependências (cache eficiente)
COPY package.json bun.lock* bunfig.toml* ./
RUN bun install --frozen-lockfile

# Copia o restante do projeto e gera o build de produção
COPY . .

# Variáveis públicas (VITE_*) precisam estar disponíveis no momento do build,
# pois o Vite as substitui estaticamente no bundle do client.
ARG VITE_SUPABASE_URL=https://twjwckdpjgxgfrjssvtx.supabase.co
ARG VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_L5mZqhaIri2_DiA-kgDkig_NKaAWixW
ARG VITE_SUPABASE_PROJECT_ID=twjwckdpjgxgfrjssvtx
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_PUBLISHABLE_KEY=$VITE_SUPABASE_PUBLISHABLE_KEY
ENV VITE_SUPABASE_PROJECT_ID=$VITE_SUPABASE_PROJECT_ID

# Remove o routeTree gerado para forçar geração única e limpa.
# CI=true desativa o watcher do @tanstack/router-plugin, evitando loop
# infinito de "File ... was modified by another process during processing"
# que ocorre em filesystems overlay (Docker) com baixa resolução de mtime.
ENV CI=true
RUN rm -f src/routeTree.gen.ts && bun run build

# ---------- Stage 2: runtime ----------
# O build do Vite/TanStack Start gera um bundle para Cloudflare Workers (workerd),
# que vem embutido no pacote `wrangler`. Usamos uma imagem Node enxuta para
# executar `wrangler deploy --dry-run=false` em modo local (workerd).
FROM node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV WRANGLER_SEND_METRICS=false
ENV SUPABASE_URL=https://twjwckdpjgxgfrjssvtx.supabase.co
ENV SUPABASE_PUBLISHABLE_KEY=sb_publishable_L5mZqhaIri2_DiA-kgDkig_NKaAWixW
ENV SUPABASE_PROJECT_ID=twjwckdpjgxgfrjssvtx

# Copia apenas o necessário para executar o worker já compilado.
# O build gera um wrangler.json dentro de dist/server apontando para index.mjs;
# usar o wrangler.jsonc da raiz faria o runtime procurar src/server.ts, que não
# existe nesta imagem final e causa o 404 por restart em loop.
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# `wrangler dev` em modo local sobe o workerd como servidor HTTP.
# --ip 0.0.0.0 expõe para a rede do container; --port casa com $PORT.
CMD ["sh", "-c", "cd dist/server && ../../node_modules/.bin/wrangler dev --ip 0.0.0.0 --port ${PORT} --local --show-interactive-dev-session=false"]
