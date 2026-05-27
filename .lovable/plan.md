## Objetivo

Transformar `/servicos/drywall` em hub com 6 sub-páginas especializadas, cada uma com H1 e cluster de keywords fornecidos, otimizadas para E-E-A-T, GEO (Fortaleza/CE) e SEO on-page. Mesmo padrão já aplicado em Pintura, Elétrica e Hidráulica.

## Mapeamento palavra-chave → página

| Rota | H1 (keyword principal) | Keywords secundárias |
|---|---|---|
| `/servicos/drywall` (hub) | Empresa de Drywall em Fortaleza | instalação de drywall, gesso acartonado, gesseiro, forro de gesso, parede de drywall, divisória de ambiente |
| `/servicos/drywall/instalacao-drywall` | Instalação de Drywall em Fortaleza | empresa de drywall, orçamento drywall, instalação de drywall |
| `/servicos/drywall/gesso-acartonado` | Gesso Acartonado em Fortaleza | drywall ou gesso acartonado, drywood gesso acartonado, placa de gesso |
| `/servicos/drywall/gesseiro` | Gesseiro em Fortaleza | gesseiro profissional, colocador de drywall, mão de obra drywall, preço gesseiro |
| `/servicos/drywall/forro-de-gesso` | Forro de Gesso em Fortaleza | orçamento forro de gesso, conserto de teto de gesso, instalação forro de gesso |
| `/servicos/drywall/parede-de-drywall` | Parede de Drywall em Fortaleza | reparo em parede de drywall, reforço em parede de drywall, orçamento drywall |
| `/servicos/drywall/divisoria-de-ambiente` | Divisória de Ambiente em Fortaleza | divisória de ambiente ripada, placa de gesso na parede, divisória para área externa, divisórias para escritório, divisória industrial |

Conteúdo único por página. Keywords sobrepostas tratadas com ângulos distintos: instalação foca em obra nova/projeto; gesso acartonado foca em materiais e diferença vs gesso tradicional; gesseiro foca em mão de obra/preço; forro foca em teto; parede foca em reparo/reforço; divisória foca em separação de ambientes (incluindo ripada, escritório, industrial, externa).

## Nova arquitetura de rotas

```text
src/routes/
  servicos.drywall.tsx                      /servicos/drywall         (layout <Outlet />)
  servicos.drywall.index.tsx                /servicos/drywall         (hub)
  servicos.drywall.$drywallSlug.tsx         /servicos/drywall/:slug   (6 sub-páginas)
```

`servicos.$slug.tsx` continua atendendo os 4 serviços restantes (juntas, segurança, reformas, manutenção). O slug `drywall` sai da rota dinâmica — mesmo padrão de pintura/eletrica/hidraulica.

## Estrutura padrão de cada sub-página (E-E-A-T + GEO + SEO)

~600–900 palavras, sem duplicação:

1. **H1** com keyword principal + "Fortaleza/CE".
2. **Intro autoral (Experience)** — atuação local, tipologia atendida (residências Aldeota/Meireles, condomínios Cocó, escritórios Centro, indústrias Maracanaú).
3. **Quando contratar** — sintomas/situações (long-tail: dividir sala, rebaixar teto, esconder fiação, isolamento acústico, teto com mancha/quebrado).
4. **Tipos/Técnicas** — 4–5 cards (ex.: placa ST/RU/RF, perfis 48/70/90, isolamento lã de rocha, sancas, divisória ripada).
5. **Processo numerado** (5 passos: medição → projeto → montagem estrutura → fechamento e massa → acabamento).
6. **Normas (Authoritativeness)**: NBR 15217 (perfis), NBR 15758 (sistemas drywall), NBR 14715 (chapas), ABNT NBR 11675 (divisórias).
7. **Trust**: equipe própria, fornecedores Knauf/Placo/Gypsum, garantia escrita, limpeza pós-obra.
8. **GEO local**: bairros atendidos (Fortaleza, Maracanaú, Eusébio, Aquiraz, Caucaia), particularidades (maresia → preferir placa RU em áreas úmidas, clima quente → ventilação no forro).
9. **FAQ 4–5 perguntas** distintas por página → JSON-LD `FAQPage`.
10. **Links internos** para sub-páginas irmãs + hub + contato.
11. **`QuoteForm` lateral** + CTA WhatsApp pré-preenchido.

## SEO técnico por página

Em cada `head()`:
- `<title>` ≤ 60 chars com keyword + "Fortaleza" + marca.
- `<meta description>` ≤ 155 chars com keyword + diferencial + CTA.
- `og:title`, `og:description`, `og:url`, `og:type=article`, `og:image`.
- `<link rel="canonical">` relativo.
- JSON-LD `Service` (provider LocalBusiness Chico Resolve, areaServed Fortaleza).
- JSON-LD `BreadcrumbList` (Home → Serviços → Drywall → Subpágina).
- JSON-LD `FAQPage`.

Hub `/servicos/drywall`: JSON-LD `Service` com `hasOfferCatalog` listando as 6 sub-categorias.

## Modelo de dados

Em `src/lib/site.ts`, adicionar (espelho de `pinturaSubservices`/`eletricaSubservices`/`hidraulicaSubservices`):

```ts
export type DrywallSlug =
  | "instalacao-drywall"
  | "gesso-acartonado"
  | "gesseiro"
  | "forro-de-gesso"
  | "parede-de-drywall"
  | "divisoria-de-ambiente";

export const drywallSubservices: Array<{
  slug: DrywallSlug;
  code: string;                 // "D-01" … "D-06"
  h1: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  keywords: string[];
  intro: string;
  whenToHire: string[];
  types: { title: string; text: string }[];
  process: { title: string; text: string }[];
  standards: string[];
  trust: string[];
  geo: string;
  faq: { q: string; a: string }[];
  related: DrywallSlug[];
}> = [ ... ]

export function getDrywallSubservice(slug: string) { ... }
```

`serviceContent.drywall` (hub) reescrito focando em "empresa de drywall" + visão geral + 6 cards.

## Componente compartilhado

Criar `src/components/site/DrywallSubPage.tsx` (variação dos templates Pintura/Elétrica/Hidráulica):
- Breadcrumb 4 níveis (Home / Serviços / Drywall / Subpágina).
- Mesmas seções do padrão estabelecido.
- Reusa `QuoteForm` e WhatsApp.

## Navegação e descoberta

- `Header.tsx`: dropdown "Serviços" → "Drywall" lista as 6 sub-categorias.
- `Footer.tsx`: coluna de serviços com as 6 sub-páginas sob Drywall.
- `ServicesGrid.tsx`: card "Drywall" aponta para o hub.
- `src/routes/servicos.tsx`: card já existente, sem mudança estrutural.
- `sitemap[.]xml.ts`: incluir as 6 novas URLs (`drywallSubservices.map(...)`).
- Hub: seção "Especialidades" com 6 cards linkando às sub-páginas.

## Imagens

Gerar 6 imagens em `src/assets/`:
- `drywall-instalacao.jpg` — montagem de estrutura metálica drywall.
- `drywall-gesso-acartonado.jpg` — placas de gesso acartonado empilhadas/aplicadas.
- `drywall-gesseiro.jpg` — gesseiro trabalhando com massa/acabamento.
- `drywall-forro-de-gesso.jpg` — forro de gesso instalado com sanca.
- `drywall-parede-de-drywall.jpg` — parede drywall finalizada / reparo.
- `drywall-divisoria-ambiente.jpg` — divisória ripada/escritório.

`servico-drywall.jpg` atual permanece no hub. Alt com keyword + "Fortaleza", `loading="eager"` apenas no LCP.

## Conteúdo placeholder

Depoimentos/números seguem como placeholders. Bairros como exemplos plausíveis com `{/* TODO: confirmar bairros atendidos */}`.

## Fora deste escopo

- Outros 4 serviços inalterados (juntas, segurança, reformas, manutenção).
- Sem alteração de design system, paleta ou tipografia.
- Sem backend (WhatsApp + mailto).
- Sem refatorar Pintura/Elétrica/Hidráulica existentes.

## Critério de pronto

- 6 novas rotas + hub `/servicos/drywall` reescrito.
- Cada rota com title/description/canonical/JSON-LD únicos.
- H1 exato conforme keyword fornecida.
- Sitemap, Header, Footer e Hub linkando as 6 páginas.
- Build limpo, sem duplicação de conteúdo.
