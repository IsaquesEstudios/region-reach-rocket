## Objetivo

Transformar `/servicos/hidraulica` em hub com 5 sub-páginas especializadas, cada uma com H1 e cluster de keywords fornecidos, otimizadas para E-E-A-T, GEO (Fortaleza/CE) e SEO on-page. Mesmo padrão já aplicado em Pintura e Elétrica.

## Mapeamento palavra-chave → página

| Rota | H1 (keyword principal) | Keywords secundárias |
|---|---|---|
| `/servicos/hidraulica` (hub) | Empresa de Hidráulica em Fortaleza | empresas de hidráulica, bombeiro hidráulico, encanador, desentupidora, sistema hidráulico |
| `/servicos/hidraulica/servico-hidraulico` | Serviço Hidráulico em Fortaleza | conserto hidráulico, bombeiro hidráulico, conserto de válvula hydra, empresas de hidráulica, sistema hidráulico industrial |
| `/servicos/hidraulica/desentupidora` | Desentupidora em Fortaleza | empresa de desentupir canos, empresa de desentupimento de cano, encanador urgente, desentupir tubulação de água |
| `/servicos/hidraulica/desentupimento-esgoto` | Desentupimento de Esgoto em Fortaleza | desentupidor de cano de esgoto, desentupimento de ralo, encanador urgente, desentupimento esgoto |
| `/servicos/hidraulica/encanador-residencial` | Encanador Residencial em Fortaleza | encanador, serviços hidráulicos residenciais, encanador urgente, serviço de encanador, encanador hidráulico residencial, encanador profissional, encanador e desentupidor |
| `/servicos/hidraulica/encanador-predial` | Encanador Predial em Fortaleza | empresa de encanador, encanador especializado em vazamento, desentupir tubulação de água, encanador para apartamento, encanador detectar vazamento |

Conteúdo único por página. Keywords sobrepostas (ex.: "encanador urgente", "desentupir tubulação de água") tratadas com ângulos distintos: serviço-hidráulico foca em consertos/válvulas/sistemas; desentupidora foca em canos obstruídos; esgoto foca em ralos/rede de esgoto; residencial foca em casas/apartamentos individuais; predial foca em prumadas/condomínios/detecção.

## Nova arquitetura de rotas

```text
src/routes/
  servicos.hidraulica.tsx                      /servicos/hidraulica         (layout <Outlet />)
  servicos.hidraulica.index.tsx                /servicos/hidraulica         (hub)
  servicos.hidraulica.$hidraulicaSlug.tsx      /servicos/hidraulica/:slug   (5 sub-páginas)
```

`servicos.$slug.tsx` continua atendendo os outros 5 serviços (drywall, juntas, segurança, reformas, manutenção). O slug `hidraulica` sai da rota dinâmica — mesmo padrão já feito com `pintura` e `eletrica`.

## Estrutura padrão de cada sub-página (E-E-A-T + GEO + SEO)

~600–900 palavras, sem duplicação:

1. **H1** com keyword principal + "Fortaleza/CE".
2. **Intro autoral (Experience)** — atuação local, tipologia atendida (residências Aldeota/Meireles, condomínios Cocó/Edson Queiroz, indústrias Maracanaú).
3. **Quando contratar** — sintomas/situações (long-tail: vazamento na parede, ralo voltando, conta d'água alta, esgoto entupido).
4. **Serviços/Técnicas** — 4–5 cards (ex.: detecção de vazamento não-invasiva, troca de válvula Hydra/Docol, hidrojateamento, videoinspeção, plantão 24h).
5. **Processo numerado** (5 passos: diagnóstico → orçamento → execução → teste de estanqueidade → entrega).
6. **Normas (Authoritativeness)**: NBR 5626 (água fria), NBR 8160 (esgoto sanitário), NBR 7198 (água quente), ART quando aplicável.
7. **Trust**: equipe CLT, equipamentos próprios (geofone, câmera, hidrojato), garantia escrita, atendimento de emergência.
8. **GEO local**: bairros atendidos (Fortaleza, Maracanaú, Eusébio, Aquiraz, Caucaia), particularidades (pressão da Cagece, maresia em metais, solo arenoso).
9. **FAQ 4–5 perguntas** distintas por página → JSON-LD `FAQPage`.
10. **Links internos** para sub-páginas irmãs + hub + contato.
11. **`QuoteForm` lateral** + CTA WhatsApp pré-preenchido + destaque "Emergência 24h".

## SEO técnico por página

Em cada `head()`:
- `<title>` ≤ 60 chars com keyword + "Fortaleza" + marca.
- `<meta description>` ≤ 155 chars com keyword + diferencial + CTA.
- `og:title`, `og:description`, `og:url`, `og:type=article`, `og:image`.
- `<link rel="canonical">` relativo.
- JSON-LD `Service` (provider LocalBusiness Chico Resolve, areaServed Fortaleza).
- JSON-LD `BreadcrumbList` (Home → Serviços → Hidráulica → Subpágina).
- JSON-LD `FAQPage`.

Hub `/servicos/hidraulica`: JSON-LD `Service` com `hasOfferCatalog` listando as 5 sub-categorias.

## Modelo de dados

Em `src/lib/site.ts`, adicionar (espelho de `pinturaSubservices` / `eletricaSubservices`):

```ts
export type HidraulicaSlug =
  | "servico-hidraulico"
  | "desentupidora"
  | "desentupimento-esgoto"
  | "encanador-residencial"
  | "encanador-predial";

export const hidraulicaSubservices: Array<{
  slug: HidraulicaSlug;
  code: string;                 // "H-01" … "H-05"
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
  related: HidraulicaSlug[];
}> = [ ... ]

export function getHidraulicaSubservice(slug: string) { ... }
```

`serviceContent.hidraulica` (hub) reescrito focando em "empresa de hidráulica" + visão geral + 5 cards.

## Componente compartilhado

Criar `src/components/site/HidraulicaSubPage.tsx` (variação dos templates Pintura/Elétrica):
- Breadcrumb 4 níveis (Home / Serviços / Hidráulica / Subpágina).
- Mesmas seções do padrão estabelecido.
- Reusa `QuoteForm` e WhatsApp.
- Badge "Emergência 24h" (diferencial do cluster — vazamento/entupimento são urgências).

## Navegação e descoberta

- `Header.tsx`: dropdown "Serviços" → "Hidráulica" lista as 5 sub-categorias.
- `Footer.tsx`: coluna de serviços com as 5 sub-páginas sob Hidráulica.
- `ServicesGrid.tsx`: card "Hidráulica" aponta para o hub.
- `src/routes/servicos.tsx`: card já existente, sem mudança estrutural.
- `sitemap[.]xml.ts`: incluir as 5 novas URLs (`hidraulicaSubservices.map(...)`).
- Hub: seção "Especialidades" com 5 cards linkando às sub-páginas.

## Imagens

Gerar 5 imagens em `src/assets/`:
- `hidraulica-servico-hidraulico.jpg` — bombeiro hidráulico instalando tubulação.
- `hidraulica-desentupidora.jpg` — equipamento de desentupimento / hidrojato.
- `hidraulica-desentupimento-esgoto.jpg` — videoinspeção/limpeza de rede de esgoto.
- `hidraulica-encanador-residencial.jpg` — encanador em pia/banheiro residencial.
- `hidraulica-encanador-predial.jpg` — detecção de vazamento em prumada predial.

`servico-hidraulica.jpg` atual permanece no hub. Alt com keyword + "Fortaleza", `loading="eager"` apenas no LCP.

## Conteúdo placeholder

Depoimentos/números seguem como placeholders. Bairros como exemplos plausíveis com `{/* TODO: confirmar bairros atendidos */}`.

## Fora deste escopo

- Outros 5 serviços inalterados (drywall, juntas, segurança, reformas, manutenção).
- Sem alteração de design system, paleta ou tipografia.
- Sem backend (WhatsApp + mailto).
- Sem refatorar Pintura/Elétrica existentes.

## Critério de pronto

- 5 novas rotas + hub `/servicos/hidraulica` reescrito.
- Cada rota com title/description/canonical/JSON-LD únicos.
- H1 exato conforme keyword fornecida.
- Sitemap, Header, Footer e Hub linkando as 5 páginas.
- Build limpo, sem duplicação de conteúdo.
