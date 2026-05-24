
## Objetivo

Replicar o padrão hub-and-spoke da Pintura para o serviço de **Elétrica**, criando 3 sub-páginas otimizadas (E-E-A-T + GEO Fortaleza/CE + SEO on-page), cada uma com H1 e cluster de keywords fornecidos.

## Nova arquitetura de rotas

```
src/routes/
  servicos.eletrica.tsx                  /servicos/eletrica            (layout com <Outlet />)
  servicos.eletrica.index.tsx            /servicos/eletrica            (hub — "Empresa de Elétrica")
  servicos.eletrica.$eletricaSlug.tsx    /servicos/eletrica/:slug      (sub-páginas dinâmicas)
```

A rota dinâmica `servicos.$slug.tsx` continua atendendo os outros 6 serviços. O slug `eletrica` é removido dali (passa a ser servido pelas rotas estáticas), igual ao que foi feito com `pintura`.

## Mapeamento palavra-chave → página

| Rota | H1 (keyword principal) | Keywords secundárias |
|---|---|---|
| `/servicos/eletrica` (hub) | Empresa de Elétrica em Fortaleza | eletricistas certificados, empresa de elétrica, orçamento eletricista, eletricista emergência, instalações, manutenção |
| `/servicos/eletrica/industrial` | Eletricista Industrial em Fortaleza | eletricistas certificados, empresa de elétrica, eletricista de manutenção, orçamento eletricista, eletricista emergência |
| `/servicos/eletrica/residencial` | Eletricista Residencial em Fortaleza | eletricistas certificados, eletricista instalador, orçamento eletricista, serviço eletricista, eletricista emergência |
| `/servicos/eletrica/predial` | Eletricista Predial em Fortaleza | eletricistas certificados, empresa de elétrica, eletricista de manutenção, orçamento eletricista, eletricista emergência |

Conteúdo único por página — keywords compartilhadas tratadas com ângulos distintos (industrial: CCM/painéis/NR-10 SEP; residencial: quadros DR/DPS, tomadas, iluminação; predial: condomínios, bombas, áreas comuns, manutenção preventiva).

## Estrutura padrão de cada sub-página (E-E-A-T + GEO + SEO)

Conteúdo ~600–900 palavras, sem duplicação:

1. **H1** com keyword principal + "Fortaleza/CE".
2. **Intro autoral (Experience)** — atuação local, tipologia atendida (indústrias do Distrito Industrial de Maracanaú, residências na Aldeota/Meireles, condomínios na Cocó/Edson Queiroz).
3. **Quando contratar** — sintomas/situações (long-tail).
4. **Serviços/Técnicas** — 4–5 cards (ex.: instalação de quadros, automação, aterramento SPDA, manutenção corretiva, emergência 24h).
5. **Processo numerado** (5 passos: diagnóstico → projeto/medição → execução → testes → entrega com ART).
6. **Normas (Authoritativeness)**: NR-10, NR-10 SEP (industrial), NBR 5410 (BT), NBR 14039 (MT), NBR 5419 (SPDA), ART CREA-CE.
7. **Trust**: eletricistas certificados NR-10, ART, garantia, equipe CLT, atendimento de emergência.
8. **GEO local**: bairros/regiões atendidos (Fortaleza, Maracanaú, Eusébio, Aquiraz, Caucaia), particularidades (rede ENEL CE, maresia em circuitos externos).
9. **FAQ 4–5 perguntas** distintas por página → JSON-LD `FAQPage`.
10. **Links internos** para as 2 sub-páginas irmãs + hub + contato.
11. **`QuoteForm` lateral** + CTA WhatsApp pré-preenchido + destaque "Emergência 24h".

## SEO técnico por página

Em cada `head()`:
- `<title>` ≤ 60 chars com keyword + "Fortaleza" + marca.
- `<meta description>` ≤ 155 chars com keyword + diferencial + CTA.
- `og:title`, `og:description`, `og:url`, `og:type=article`, `og:image`.
- `<link rel="canonical">` relativo à própria rota.
- JSON-LD `Service` (provider = LocalBusiness Chico Resolve, areaServed = Fortaleza, serviceType específico).
- JSON-LD `BreadcrumbList` (Home → Serviços → Elétrica → Subpágina).
- JSON-LD `FAQPage`.

Hub `/servicos/eletrica`: JSON-LD `Service` com `hasOfferCatalog` listando as 3 sub-categorias.

## Modelo de dados

Em `src/lib/site.ts`, adicionar (espelho do `pinturaSubservices`):

```ts
export type EletricaSlug = "industrial" | "residencial" | "predial";

export const eletricaSubservices: Array<{
  slug: EletricaSlug;
  code: string;                 // "E-01" … "E-03"
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
  related: EletricaSlug[];
}> = [ ... ]

export function getEletricaSubservice(slug: string) { ... }
```

Hub `serviceContent.eletrica` reescrito focando em "empresa de elétrica" + visão geral + links para as 3 sub-páginas.

## Componente compartilhado

Criar `src/components/site/EletricaSubPage.tsx` (variação do `PinturaSubPage.tsx`):
- Breadcrumb 4 níveis (Home / Serviços / Elétrica / Subpágina).
- Mesmas seções do padrão Pintura, reusa `QuoteForm` e WhatsApp.
- Badge/realce de "Emergência 24h" (diferencial do cluster elétrico).

## Navegação e descoberta

- `Header.tsx`: no dropdown "Serviços", abaixo de "Elétrica" listar as 3 sub-categorias.
- `Footer.tsx`: coluna de serviços com as 3 sub-páginas sob Elétrica.
- `ServicesGrid.tsx`: card "Elétrica" aponta para o hub.
- `src/routes/servicos.tsx` (índice): bloco "Especialidades em Elétrica" listando as 3.
- `sitemap[.]xml.ts`: incluir as 3 novas URLs.
- Hub: seção "Especialidades" com 3 cards linkando às sub-páginas.

## Imagens

Gerar 3 imagens em `src/assets/`:
- `eletrica-industrial.jpg` — painel elétrico industrial / CCM em galpão.
- `eletrica-residencial.jpg` — eletricista instalando quadro de distribuição em residência.
- `eletrica-predial.jpg` — quadro elétrico de condomínio / barramento predial.

`servico-eletrica.jpg` atual permanece no hub. Alt descritivo com keyword + "Fortaleza", `loading="eager"` apenas no LCP.

## Conteúdo placeholder

Depoimentos/números seguem como placeholders (V1). Bairros citados como exemplos plausíveis com `{/* TODO: confirmar bairros atendidos */}`.

## Fora deste escopo

- Outros 6 serviços inalterados (hidráulica, drywall, etc.).
- Sem alteração de design system, paleta ou tipografia.
- Sem backend (continua WhatsApp + mailto).

## Critério de pronto

- 3 novas rotas + hub `/servicos/eletrica` reescrito.
- Cada rota com title/description/canonical/JSON-LD únicos.
- H1 exato conforme keyword fornecida.
- Sitemap, Header, Footer e Hub linkando as 3 páginas.
- Build limpo, sem duplicação de conteúdo entre páginas.
