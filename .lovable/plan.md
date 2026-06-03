## Problema

`src/routes/servicos.tsx` é simultaneamente a página `/servicos` (renderiza `ServicosHub`) e o layout pai de todas as rotas filhas (`/servicos/pintura/...`, `/servicos/eletrica/...`, `/servicos/$slug`, etc.). Como o componente não renderiza `<Outlet />`, o conteúdo do hub aparece em todas as URLs filhas, encobrindo as páginas reais.

## Correção

Converter `servicos.tsx` em um layout puro e mover o conteúdo do hub para `servicos.index.tsx` (que é o padrão TanStack para "página da pasta").

### 1. `src/routes/servicos.tsx` (vira layout)

```tsx
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos")({
  component: () => <Outlet />,
});
```

### 2. `src/routes/servicos.index.tsx` (novo — recebe o hub)

Move integralmente o `head()` (meta, canonical, og) e o componente `ServicosHub` do arquivo antigo, trocando apenas:

```tsx
export const Route = createFileRoute("/servicos/")({ ... });
```

Nenhuma alteração de conteúdo, SEO ou layout do hub — apenas a localização do arquivo muda.

## Fora de escopo

- Não mexer em `Header.tsx`, `Footer.tsx`, sub-páginas, `site.ts`, sitemap nem no design.
- Não tocar em `routeTree.gen.ts` (regenerado automaticamente).

## Resultado esperado

- `/servicos` → hub "Todos os serviços" (igual ao de hoje).
- `/servicos/pintura/piso-concreto` → página individual de Pintura de Piso de Concreto (já implementada, só estava encoberta).
- O mesmo vale para todas as subpáginas de Elétrica, Hidráulica e Drywall.