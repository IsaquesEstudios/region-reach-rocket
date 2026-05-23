
# Plano — Site Chico Resolve (V1)

Site institucional SEO-otimizado para manutenção predial em Fortaleza/CE, em português, seguindo as estratégias do documento `PROMPT_LOVABLE_ChicoResolve.md` (V1 enxuto: Home + 8 serviços + Contato).

## Direção de Design

Vou usar a direção **Engineering Blueprint** (verde profundo `#064e3b` + acento `#10b981`, tipografia Inter + JetBrains Mono, layout com bordas finas, blocos modulares, índices numerados `01/`, estética de manual de engenharia). Justificativa: é a mais distintiva e técnica das três, e comunica "engenharia séria de manutenção" — não "marketplace de pedreiro" — alinhada com o tom premium do briefing.

## Arquitetura de Rotas (TanStack Start)

```
src/routes/
  __root.tsx                       layout: nav + footer + JSON-LD Organization
  index.tsx                        / — Homepage
  contato.tsx                      /contato
  servicos.tsx                     /servicos — hub
  servicos.pintura.tsx             /servicos/pintura
  servicos.eletrica.tsx            /servicos/eletrica
  servicos.hidraulica.tsx          /servicos/hidraulica
  servicos.drywall.tsx             /servicos/drywall
  servicos.juntas-dilatacao.tsx    /servicos/juntas-dilatacao
  servicos.seguranca.tsx           /servicos/seguranca
  servicos.reformas.tsx            /servicos/reformas
  servicos.manutencao.tsx          /servicos/manutencao
  sitemap[.]xml.ts                 /sitemap.xml gerado
```

Cada rota tem seu próprio `head()` com `title`, `description`, `og:title`, `og:description`, `og:url` e `canonical` específicos (não duplicar canonical no root).

## SEO Técnico

- **Meta tags por rota** seguindo as palavras-chave prioritárias do briefing (ex.: `/servicos/pintura` → "Pintura Profissional Residencial e Comercial | Fortaleza").
- **JSON-LD** via `head().scripts`:
  - `__root.tsx`: `Organization` + `LocalBusiness` (endereço placeholder, telefone, área Fortaleza, serviceType).
  - Cada página de serviço: `Service` + `BreadcrumbList`.
- **`public/robots.txt`**: `User-agent: * / Allow: /` (sem `Sitemap:` até haver domínio).
- **`src/routes/sitemap[.]xml.ts`**: lista as 10 rotas com `BASE_URL=""` (TODO).
- **Acessibilidade**: H1 único por página, alt em todas as imagens, contraste AA, semântica (`<nav>`, `<main>`, `<footer>`, `<section>`).

## Estrutura da Homepage

1. Hero — headline + 2 CTAs (visita técnica + WhatsApp) + imagem
2. 4 pilares (Rigor Técnico / 100% Prazos / NR10-NR35 / Tecnologia)
3. Grid 4×2 de 8 serviços com links para páginas internas
4. 4 segmentos atendidos (Construtoras / Arquitetos / Indústrias / Condomínios)
5. Faixa de estatísticas (98% / 100% / 0 / 500+) — **marcadas como placeholders editáveis**
6. 3 depoimentos (placeholders com nomes genéricos)
7. CTA final verde + telefone + WhatsApp + email
8. Footer completo

## Páginas de Serviço (padrão repetível)

H1 com keyword + introdução (~150 palavras) → tipos/sub-serviços → processo numerado → galeria 3 imagens → benefícios → FAQ (3-4 perguntas) → formulário lateral de orçamento → CTA WhatsApp. Cada página linka internamente para 2-3 outros serviços.

## Componentes Compartilhados

```
src/components/
  site/Header.tsx       nav sticky + CTA "Agendar Visita" + dropdown Serviços
  site/Footer.tsx       4 colunas: marca, serviços, segmentos, contato
  site/Hero.tsx
  site/ServiceCard.tsx
  site/StatsBar.tsx
  site/Testimonials.tsx
  site/CtaBanner.tsx
  site/QuoteForm.tsx    formulário de orçamento (envia para WhatsApp via wa.me)
  site/WhatsAppFab.tsx  botão flutuante mobile
  site/SeoJsonLd.tsx    helper (na verdade injetado via head().scripts)
```

## Identidade Visual

Tokens em `src/styles.css` (oklch):
- `--primary` ≈ verde `#064e3b`
- `--accent` ≈ `#10b981` (verde vibrante para CTAs)
- `--background` branco off-white, `--foreground` quase preto
- Fontes: Inter (body) + JetBrains Mono (labels/numerais) via Google Fonts

## Assets Gerados (IA)

- `src/assets/logo-chico-resolve.png` — wordmark "ChicoResolve" verde+preto, fundo transparente
- `src/assets/hero-fachada.jpg` — fachada predial moderna em Fortaleza com profissional trabalhando
- 8× `src/assets/servico-{slug}.jpg` — uma imagem por serviço (pintura, elétrica, etc.)
- `src/assets/og-default.jpg` — 1200×630 para Open Graph da home

Todas as imagens com `loading="lazy"` exceto hero LCP.

## Contato / WhatsApp

- Botão WhatsApp → `https://wa.me/5586981547477?text=Olá! Gostaria de um orçamento`
- Telefone clicável `tel:+5586981547477`
- Formulário em `/contato` faz `mailto:` ou abre WhatsApp pré-preenchido (sem backend nesta V1 — Lovable Cloud pode ser adicionado depois se quiser receber leads por email)

## Detalhes Técnicos

- Stack já existente: TanStack Start v1 + React 19 + Tailwind v4
- Sem Cloud/backend nesta V1 (formulário usa `wa.me` e `mailto:`)
- Substituir o placeholder em `src/routes/index.tsx` pela homepage real
- Adicionar `<Outlet />` ao `__root.tsx` (já existe) e wrapping com Header/Footer
- Animações sutis com Tailwind (`animate-*`, transitions) — sem libs extras

## Conteúdo Marcado como Placeholder

Conforme combinado: estatísticas (98%/100%/500+), depoimentos, endereço e email serão preenchidos com exemplos genéricos e comentados no código com `{/* TODO: substituir com dado real */}` para você editar depois.

## Fora do escopo desta V1

Páginas de Soluções por segmento, Blog, FAQ dedicada, Portfólio, integração Google Analytics, sistema de contato com backend. Tudo isso pode entrar em V2 depois.

## Critério de "pronto"

- 10 rotas navegáveis, todas com `head()` único
- Sitemap.xml e robots.txt servindo
- JSON-LD `LocalBusiness` + `Service` validável
- Build sem erros, mobile responsivo, lighthouse mobile ≥ 90
