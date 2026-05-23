## Objetivo

Transformar a página única `/servicos/pintura` em um hub com 6 sub-páginas, cada uma otimizada para um cluster de palavras-chave fornecido, aplicando boas práticas de E-E-A-T, GEO (SEO local Fortaleza/CE) e SEO on-page.

## Nova arquitetura de rotas

```
src/routes/
  servicos.pintura.tsx                              /servicos/pintura            (hub — "empresa de pintura")
  servicos.pintura.piso-concreto.tsx                /servicos/pintura/piso-concreto
  servicos.pintura.residencial.tsx                  /servicos/pintura/residencial
  servicos.pintura.apartamento.tsx                  /servicos/pintura/apartamento
  servicos.pintura.industrial.tsx                   /servicos/pintura/industrial
  servicos.pintura.quadra-poliesportiva.tsx         /servicos/pintura/quadra-poliesportiva
```

A rota dinâmica atual `servicos.$slug.tsx` continua atendendo os outros 7 serviços (elétrica, hidráulica, etc.). Para evitar conflito com `pintura`, o arquivo `servicos.pintura.tsx` (estático) tem prioridade no roteador e vira o hub. Os 6 slugs do `site.ts` referentes a pintura serão removidos do array dinâmico (somente `pintura` continua linkável a partir do grid de serviços principal).

## Mapeamento palavra-chave → página

| Rota | H1 (keyword principal) | Keywords secundárias no corpo |
|---|---|---|
| `/servicos/pintura` (hub) | Empresa de Pintura em Fortaleza | pintura predial, pintura de fachada predial, pintura de fachada, empresa de pintura de fachada, pintura de piso epóxi |
| `/servicos/pintura/piso-concreto` | Pintura para Piso de Concreto | pintura de piso, pintar piso |
| `/servicos/pintura/residencial` | Pintura Residencial em Fortaleza | empresa de pintura residencial, serviço de pintura residencial, pintura de casa, pintura de parede, pintor de casa, orçamento de pintura residencial, pinturas residenciais e comerciais |
| `/servicos/pintura/apartamento` | Pintura de Apartamento em Fortaleza | empresa pintura predial, contratar pintor, serviços de pinturas em geral |
| `/servicos/pintura/industrial` | Pintura Industrial em Fortaleza | contratar pintor, pintura de parede, pintor profissional, empresa de pintura industrial |
| `/servicos/pintura/quadra-poliesportiva` | Pintura de Quadra Poliesportiva | contratar pintor, pintura de piso esportivo |

## Estrutura padrão de cada sub-página (E-E-A-T + GEO + SEO)

Conteúdo por página (~600–900 palavras, único, sem duplicação entre páginas):

1. **H1** com a keyword principal + "Fortaleza/CE" quando geo-relevante.
2. **Intro autoral (Experience)**: parágrafo que cita execução em Fortaleza, anos de atuação, exemplo de tipologia atendida (ex.: "edifícios residenciais na Aldeota, galpões na BR-116").
3. **Bloco "Quando contratar"** — sintomas/situações que demandam o serviço (gera long-tail e ajuda intent).
4. **Tipos/Técnicas** — 3 a 5 cards (texturas, epóxi, látex PVA, acrílico, demarcação esportiva conforme o caso) usando as keywords secundárias naturalmente.
5. **Processo numerado** com 5 passos (vistoria → preparação → aplicação → controle → entrega) — mostra **Expertise**.
6. **Normas e segurança (Authoritativeness)**: NR-35 (trabalho em altura), NR-6 (EPI), NBR 13245 (pintura de edificações), responsável técnico, ART quando aplicável.
7. **Sinais de Trust**: garantia escrita, ART/laudo, equipe própria CLT, seguro, antes/depois.
8. **GEO local**: menção a bairros/regiões atendidos (Fortaleza, Aquiraz, Caucaia, Eusébio, RMF), clima litorâneo (maresia → tintas e primers específicos).
9. **FAQ com 4–5 perguntas** específicas da página (cada página com perguntas distintas) → JSON-LD `FAQPage`.
10. **Links internos contextuais** para 2–3 sub-páginas irmãs + página de contato.
11. **Formulário lateral `QuoteForm`** + CTA WhatsApp pré-preenchido com o serviço.

## SEO técnico por página

Em cada `head()`:
- `<title>` ≤ 60 chars, com keyword + "Fortaleza" + marca.
- `<meta description>` ≤ 155 chars, com keyword principal + diferencial + CTA.
- `og:title`, `og:description`, `og:url`, `og:type=article`, `og:image` (imagem do serviço).
- `<link rel="canonical">` apontando para a própria rota (relativo).
- JSON-LD `Service` (provider = LocalBusiness Chico Resolve, areaServed = Fortaleza, serviceType específico).
- JSON-LD `BreadcrumbList` (Home → Serviços → Pintura → Subpágina).
- JSON-LD `FAQPage` montado a partir do FAQ da página.

No hub `/servicos/pintura`:
- JSON-LD `Service` com `hasOfferCatalog` listando as 5 sub-categorias como `OfferCatalog` → melhora compreensão semântica (GEO/AI search).

## Modelo de dados

Em `src/lib/site.ts`, adicionar:

```ts
export type PinturaSlug =
  | "piso-concreto" | "residencial" | "apartamento"
  | "industrial" | "quadra-poliesportiva";

export const pinturaSubservices: Array<{
  slug: PinturaSlug;
  code: string;                 // "P-01" … "P-05"
  h1: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  keywords: string[];           // para uso interno/meta
  intro: string;                // ~150 palavras
  whenToHire: string[];
  types: { title: string; text: string }[];
  process: { title: string; text: string }[];
  standards: string[];          // NRs / NBRs aplicáveis
  trust: string[];
  geo: string;                  // parágrafo GEO
  faq: { q: string; a: string }[];
  related: PinturaSlug[];       // 2–3 irmãs
}> = [ ... ]
```

O hub continua usando `serviceContent.pintura` (atual), reescrito para focar em "empresa de pintura" + fachada + epóxi e linkar para as 5 sub-páginas.

## Componente compartilhado

Criar `src/components/site/PinturaSubPage.tsx` (variação enxuta de `ServicePage.tsx`):
- Breadcrumb com 4 níveis (Home / Serviços / Pintura / Subpágina).
- Renderiza todas as seções listadas acima a partir de uma entrada do `pinturaSubservices`.
- Reusa `QuoteForm` e link WhatsApp existentes.

## Atualizações de navegação e descoberta

- `Header.tsx`: no dropdown "Serviços", abaixo de "Pintura" listar as 5 sub-categorias.
- `Footer.tsx`: na coluna de serviços, adicionar as 5 sub-páginas sob Pintura.
- `ServicesGrid.tsx` (home): card "Pintura" continua apontando para o hub.
- `src/routes/servicos.tsx` (índice): incluir bloco "Especialidades em Pintura" listando as 5 sub-páginas.
- `sitemap[.]xml.ts`: incluir as 5 novas URLs.
- Hub `/servicos/pintura`: nova seção "Especialidades" com 5 cards linkando às sub-páginas (boost de interlinking).

## Imagens

Gerar 5 novas imagens (1 por sub-página) em `src/assets/`:
- `pintura-piso-concreto.jpg` — piso industrial com epóxi sendo aplicado.
- `pintura-residencial.jpg` — sala residencial pintada, pintor com rolo.
- `pintura-apartamento.jpg` — apartamento moderno, parede acabada.
- `pintura-industrial.jpg` — galpão industrial, pintura estrutural.
- `pintura-quadra-poliesportiva.jpg` — quadra poliesportiva com demarcação nova.

A imagem atual `servico-pintura.jpg` permanece no hub.

Cada `<img>` com `alt` descritivo contendo a keyword principal + "Fortaleza" e `loading="eager"` apenas no LCP da página.

## Conteúdo placeholder

Como combinado na V1: depoimentos e números seguem como placeholders. Endereço/bairros citados ficam como exemplos plausíveis em Fortaleza, marcados com `{/* TODO: confirmar bairros atendidos */}`.

## Fora deste escopo

- Não criar sub-páginas para os outros 7 serviços (somente pintura conforme pedido).
- Sem backend / sem captura de leads (continua WhatsApp + mailto).
- Sem alteração de design system, fontes ou paleta.

## Critério de pronto

- 5 novas rotas navegáveis + hub `/servicos/pintura` reescrito.
- Cada rota com `<title>`, meta description, canonical, JSON-LD Service + Breadcrumb + FAQPage únicos.
- H1 único por página com a keyword exata fornecida.
- Sitemap atualizado, Header/Footer/Hub linkando as 5 páginas.
- Build limpo, sem duplicação de conteúdo entre páginas.
