
## Problema

O log do Coolify mostra:

```
You are using Node.js 22.6.0. Vite requires Node.js version 20.19+ or 22.12+.
```

O build falha (e o nginx retorna **504 Gateway Time-out**) porque o estágio `builder` do `Dockerfile` usa a imagem `oven/bun:1.1.38`, que vem com Node.js 22.6.0 — versão **abaixo** do mínimo exigido pelo Vite 7.

O estágio runtime já foi corrigido antes para `node:22-slim` (Node 22.11+), mas o **builder** ficou desatualizado.

## Correção

Atualizar apenas o `Dockerfile`, trocando a imagem do estágio de build para uma versão do Bun que traga Node.js 22.12+ (ou mais recente):

```dockerfile
FROM oven/bun:1.2 AS builder
```

A tag `oven/bun:1.2` (atual) empacota Node.js 22.13+, satisfazendo o requisito do Vite. Nenhuma outra mudança de código é necessária — o restante do pipeline (limpeza do `routeTree.gen.ts`, `CI=true`, build, runtime com `node:22-slim` + `wrangler dev --local`) permanece igual.

## Passos após a correção

1. Commit + push no GitHub.
2. No Coolify: **Redeploy** (de preferência com **rebuild sem cache** para garantir que a nova imagem base seja baixada).
3. Acompanhar o log — o `vite build` deve concluir e o container subir na porta 3000.

## Arquivos alterados

- `Dockerfile` — uma linha (imagem do estágio builder).
