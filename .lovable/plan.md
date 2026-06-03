# Redesign global no estilo Pooluxe (paleta verde Chico Resolve)

Aplicar a linguagem visual do template **Pooluxe** em todas as páginas do site, mantendo a logo/texto atual e substituindo a paleta atual pela nova:

- `#147322` (verde primário)
- `#46A637` (verde acento / CTA)
- `#2C5925` (verde escuro / hero overlay)
- `#97BF95` (verde claro / detalhes)
- `#F2F2F2` (cinza claro / fundo de seções)

A logo permanece como **wordmark de texto** (sem inserir a imagem enviada).

## Linguagem visual herdada do Pooluxe

- **Hero full-bleed** com imagem de fundo (foto real), overlay verde escuro, headline grande em duas linhas com a segunda linha em cor de destaque (`#46A637`), descrição curta, CTA pill arredondado e badges de confiança (Licensed, Garantia, Preço justo). Card flutuante "Inspeção Gratuita + telefone" no canto inferior direito.
- **Barra de stats** logo abaixo do hero, fundo claro (`#F2F2F2`), 4 colunas com ícone + número grande + label.
- **Cards arredondados** (radius ~16-24px), sombras suaves, em vez do estilo "blueprint" reto/quadrado atual.
- **Tipografia**: títulos em sans pesado/condensado, sem o "uppercase italic" agressivo do estilo atual. Manter Inter como família principal (já carregada), aplicar pesos 700/800 nos H1/H2.
- **Header**: logo à esquerda (wordmark "Chico Resolve"), menu central com dropdowns (Serviços já tem subitens), botão CTA pill "Agendar Visita" à direita.
- **Botões pill** (rounded-full) em vez de quadrados.
- **Seções alternando** fundo branco e `#F2F2F2`.
- **Footer** reorganizado em 4 colunas (Marca/desc, Serviços, Empresa, Contato) com fundo verde escuro (`#2C5925`) e texto claro.

## Páginas afetadas

1. **Home (`src/routes/index.tsx`)** — todos os componentes filhos abaixo.
2. **Header global** (`src/components/site/Header.tsx`).
3. **Footer global** (`src/components/site/Footer.tsx`).
4. **Hub `/servicos`** (`src/routes/servicos.tsx` + `ServicesGrid`).
5. **Hubs setoriais**: `/servicos/pintura`, `/servicos/eletrica`, `/servicos/hidraulica`, `/servicos/drywall` (arquivos `*.index.tsx`).
6. **Subpáginas dinâmicas** (componentes `PinturaSubPage`, `EletricaSubPage`, `HidraulicaSubPage`, `DrywallSubPage`, `ServicePage`).
7. **Contato** (`src/routes/contato.tsx`).

## Trabalho a executar

### 1. Tokens de design (`src/styles.css`)
- Reescrever as variáveis `--primary`, `--accent`, `--secondary`, `--muted`, `--ring`, `--surface`, `--whatsapp` em **oklch** equivalentes aos hex fornecidos.
- Adicionar `--primary-dark` (#2C5925), `--primary-soft` (#97BF95), `--accent-strong` (#46A637) como tokens semânticos.
- Aumentar `--radius` para `1rem` (cards/botões mais arredondados, estilo Pooluxe).
- Adicionar utilitário `--gradient-hero` (overlay verde escuro do hero).
- Remover estilos `uppercase italic` agressivos do CSS base se houver.

### 2. Componentes do site

**`Hero.tsx`** — reescrita completa:
- Full-bleed (sem grid 7/5). Imagem de fundo `hero-fachada.jpg` com overlay `linear-gradient` verde escuro.
- Conteúdo alinhado à esquerda, max-width ~700px, padding generoso.
- H1 em duas linhas: "Manutenção Predial Inteligente." + "Para o seu imóvel." (segunda linha em `--accent-strong`).
- CTA pill verde claro + badges ✓ inline (Licenciada NR10/NR35, Garantia, Orçamento sem custo).
- Card flutuante "Visita Técnica · (85) ..." no canto inferior direito.

**`StatsBar.tsx`** — reposicionar logo após o Hero, fundo `#F2F2F2`, ícones lucide + número grande + label.

**`Pillars.tsx`** — cards arredondados com ícone em círculo verde claro.

**`ServicesGrid.tsx`** — grid 3 colunas, cards arredondados com imagem topo, título, descrição curta e seta. Hover suave.

**`Segments.tsx` / `Testimonials.tsx` / `CtaBanner.tsx`** — adaptar para pill buttons, cards arredondados, fundo alternado, depoimentos com avatar circular + aspas grandes.

**`Header.tsx`** — wordmark "Chico Resolve" à esquerda em peso 800, nav central com chevron nos itens com dropdown (manter estrutura atual de Serviços/sub-rotas), CTA pill à direita. Mobile drawer mantido.

**`Footer.tsx`** — fundo `--primary-dark`, texto claro, 4 colunas, redes sociais em ícones circulares.

### 3. Páginas de serviços (templates compartilhados)
Atualizar `PinturaSubPage`, `EletricaSubPage`, `HidraulicaSubPage`, `DrywallSubPage`, `ServicePage`:
- Hero interno: faixa verde escura com breadcrumb + H1 + descrição (padrão Pooluxe nas inner pages).
- Seções de conteúdo com cards arredondados.
- Sidebar de contato com CTA pill.
- Trocar todas as classes `uppercase italic tracking-tighter` por estilos mais suaves (peso 800, tracking normal).

### 4. Páginas hub (`servicos.*.index.tsx`, `servicos.tsx`, `contato.tsx`)
- Mesmo tratamento de hero interno verde escuro + grid de cards arredondados.
- `contato.tsx`: layout 2 colunas (form arredondado à esquerda, info/mapa à direita).

## Fora de escopo

- Não alterar dados de SEO (títulos, descrições, JSON-LD, sitemap).
- Não tocar em `src/lib/site.ts` (conteúdo permanece igual).
- Não criar novas rotas nem alterar `routeTree.gen.ts`.
- Não substituir a imagem do hero — apenas reusar `hero-fachada.jpg`.
- Não inserir a imagem da logo enviada (wordmark permanece).
- Não mexer em backend, formulário continua enviando para WhatsApp como hoje.

## Detalhes técnicos

- Todas as cores aplicadas via tokens semânticos (`bg-primary`, `text-primary-foreground`, `bg-[--surface]`, etc.). Nenhum hex hardcoded em componentes — somente em `styles.css`.
- Conversão dos hex para oklch (aproximada):
  - `#147322` → `oklch(0.48 0.16 145)` (primary)
  - `#46A637` → `oklch(0.64 0.18 142)` (accent)
  - `#2C5925` → `oklch(0.37 0.10 145)` (primary-dark)
  - `#97BF95` → `oklch(0.78 0.07 145)` (primary-soft)
  - `#F2F2F2` → `oklch(0.96 0 0)` (surface)
- Tipografia mantida (Inter + JetBrains Mono já carregadas).
- Animações: manter `animate-slide-up` existente; adicionar transições suaves nos hovers de card.

## Validação

Após implementar:
1. Build automático precisa passar.
2. Verificar Home, `/servicos`, `/servicos/pintura`, uma subpágina (`/servicos/pintura/residencial`), `/contato` no preview em desktop (1502px) e mobile (375px).
3. Confirmar contraste AA do texto sobre verde escuro e verde primário.
