
# Auditoria SEO & Imagens — Chico Resolve

Foco exclusivo: imagens, alt, sitemap, metadados e melhorias SEO. Nada de autenticação.

---

## 1. Imagens — conversão para formato leve

**Situação atual:** a maioria já está em `.webp` (bom). Restam **4 PNGs pesados** em `src/assets/` que devem virar `.webp`:

| Arquivo | Tamanho atual |
|---|---|
| `pintura-quadra-poliesportiva.png` | 242 KB |
| `reforma-quadras.png` | 242 KB |
| `pintura-estacionamento.png` | 148 KB |
| `pintura-piso-concreto.png` | 120 KB |

**Ação:** converter para `.webp` (qualidade 82), atualizar imports que os referenciam, remover PNGs originais. Redução estimada: ~60-70% de peso (~500 KB → ~150 KB).

Também converter `public/og-default.jpg` (104 KB) — manter `.jpg` por compatibilidade com crawlers antigos, mas re-encodar para reduzir peso.

Logo e assets já migrados para CDN (`.asset.json`) ficam como estão.

---

## 2. Textos alternativos (alt)

**Situação:** varredura em `src/components/` e `src/routes/` mostrou **29 `<img>` — todas com atributo `alt`**. ✅

**Ação:** revisar qualidade do alt (evitar genéricos tipo "imagem"). Vou fazer uma passada rápida garantindo que cada alt descreva o serviço/contexto (ex.: `alt="Pintura de fachada residencial em Teresina"` em vez de `alt="pintura"`).

---

## 3. Sitemap

**Problemas encontrados em `src/routes/sitemap[.]xml.ts`:**
- `BASE_URL = ""` → URLs no XML saem sem domínio (Google rejeita).
- Faltam: `/quem-somos`, `/blog`, `/blog/$slug` (posts publicados) e páginas index dos subserviços (`/servicos/pintura`, `/servicos/eletrica`, etc.).
- `robots.txt` não anuncia o sitemap.

**Ação:**
- Setar `BASE_URL = "https://region-reach-rocket.lovable.app"` (domínio publicado atual).
- Adicionar `/quem-somos`, `/blog`, index de cada família de serviço.
- Adicionar posts do blog buscando via Supabase (`published_at` não nulo) dentro do handler.
- Adicionar `Sitemap: https://region-reach-rocket.lovable.app/sitemap.xml` em `public/robots.txt`.

Vou te enviar o XML final renderizado no chat após implementar.

---

## 4. Headlines & metadescrições (SEO)

**Problemas graves no `src/routes/__root.tsx`:**
- **Duplicatas** no array `meta` — há dois `title` e três `description`. A última entrada vence, então hoje o site publica:
  - `title = "Chico Resolve"` (perde o título rico "Chico Resolve — Inteligência em Manutenção Predial | Fortaleza")
  - `description = "Reformas e projetos residencias e prediais em teresina piaui"` (com **erro de português**: "residencias" sem acento, "teresina piaui" sem maiúsculas).
- Título raiz diz **"Fortaleza"**, mas o negócio é em **Teresina/PI** (`site.address.city = "Teresina"`). Erro grave de localização SEO.
- `og:image` aponta pra URL `r2.dev` de preview antigo — quebra em produção.

**Ação em `__root.tsx`:**
- Remover todas as entradas duplicadas de `title` / `description` / `og:title` / `og:description` / `og:image` / `twitter:*`.
- Manter apenas defaults sitewide (charset, viewport, og:site_name, og:type, twitter:card). Título/descrição por rota (as leaf routes já sobrescrevem).
- Corrigir `og:image` para `/og-default.jpg` (absoluto: `https://region-reach-rocket.lovable.app/og-default.jpg`).
- Corrigir JSON-LD: `url`, `image` e `telephone` com URL absoluta.

**Revisão das metas por rota (leaf):**
- `/` — já tem título/descrição bons. Ajustar `og:url` e `canonical` para absolutos.
- `/servicos` — idem.
- `/quem-somos`, `/contato`, `/blog`, `/blog/$slug` — verificar e completar `title`, `description`, `og:*`, `canonical` absolutos.
- Rotas de serviço (`/servicos/pintura`, `/servicos/eletrica`, ...): garantir title único do tipo `"{Serviço} em Teresina | Chico Resolve"` e descrição com CTA + localidade.
- `og:image` **só nas leaf routes** (nunca no root) — usar a imagem hero de cada serviço quando existir.

---

## 5. Outras melhorias SEO recomendadas

1. **Fontes**: hoje o Google Fonts é carregado via `<link>` no `__root.tsx`. Está OK, mas adicionar `font-display: swap` já vem no querystring `&display=swap` ✅. Considerar `preload` do `.woff2` do Inter 700 (título) para melhorar LCP.
2. **JSON-LD por rota**:
   - `Service` schema em cada `/servicos/{slug}` (nome, provider, areaServed).
   - `Article` + `BreadcrumbList` em `/blog/$slug` (headline, datePublished, author, image).
   - `BreadcrumbList` em páginas de subserviço.
3. **Imagens responsivas**: adicionar `srcset`/`sizes` nas fotos do `ServicesGrid` e heros — reduz banda em mobile.
4. **`<h1>` único por página**: auditar rotas para garantir um único H1 (Home tem, mas verificar `/servicos/*`).
5. **Links internos**: Footer e Header já têm boa cobertura; adicionar links contextuais entre serviços correlatos (ex.: página de Elétrica → link para Segurança eletrônica) melhora crawl e engajamento.
6. **`lang="pt-BR"`** já está no `<html>` ✅.
7. **404**: página de 404 já customizada ✅.
8. **Performance**: `loading="lazy"` já usado nas imagens de card ✅.

---

## Arquivos que serão tocados

- `src/assets/*.png` → converter 4 arquivos para `.webp` (delete dos PNGs).
- Componentes/rotas que importam esses PNGs (busca por referência).
- `src/routes/__root.tsx` — limpar duplicatas de meta, corrigir cidade, og:image absoluto, JSON-LD.
- `src/routes/sitemap[.]xml.ts` — BASE_URL, novas rotas, blog dinâmico.
- `public/robots.txt` — adicionar diretiva `Sitemap:`.
- `src/routes/quem-somos.tsx`, `contato.tsx`, `blog.index.tsx`, `blog.$slug.tsx` — completar `head()`.
- Páginas de serviço/subserviço — normalizar `title`/`description`/`canonical` absolutos e JSON-LD `Service`.
- (Opcional) melhorias de alt onde estiverem genéricos.

## Detalhes técnicos

- Conversão webp: `sharp` via script Node one-off em `/tmp` (não fica no repo) ou usando `cwebp` via `nix run`. Qualidade 82, mantendo dimensões.
- BASE_URL centralizado numa constante em `src/lib/site.ts` (novo campo `siteUrl`) para reusar em canonical/og:url/JSON-LD e não repetir a string.
- Sitemap com blog: usar o client Supabase server (`SUPABASE_URL` + `SUPABASE_PUBLISHABLE_KEY`) dentro do handler para listar posts com `published_at IS NOT NULL`.

## Entregáveis

1. Site com metadados corretos (título, descrição, cidade certa).
2. Redução de ~350 KB de imagens.
3. Sitemap completo com URLs absolutas — vou colar o XML final no chat.
4. `robots.txt` referenciando o sitemap.
5. JSON-LD estendido para serviços e artigos.
