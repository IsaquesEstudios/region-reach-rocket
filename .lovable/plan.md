## Objetivo
Criar página do autor (Chico) e integrá-la ao "Quem somos" e ao final de cada artigo do blog.

## 1. Nova rota `/autor/$slug`
Arquivo: `src/routes/autor.$slug.tsx`
- Loader busca `profiles` por `slug` (ou por `id` — ver Perguntas) com `full_name`, `avatar_url`, `bio`.
- Também busca últimos posts publicados desse autor (`posts` where `author_id = profile.id AND status='published'` ordenados por `published_at desc`, limite 6) para listar no final da página.
- Layout:
  - Hero com foto grande (avatar), nome, cargo/subtítulo e bio completa.
  - Seção "Artigos do autor" reutilizando `PostCard`.
  - CTA para WhatsApp / contato.
- `head()` com `title`, `description`, `og:title/description/image` (avatar_url), canonical absoluto e JSON-LD `Person`.
- `errorComponent` e `notFoundComponent`.

Como não existe campo `slug` em `profiles` hoje, opções abaixo em Perguntas.

## 2. Link no "Quem somos"
Arquivo: `src/routes/quem-somos.tsx`
- Adicionar um bloco curto "Conheça o Chico" com foto + nome + 1 linha de bio + botão `Link to="/autor/$slug"` (ou `/autor/chico`).
- Posicionamento: logo após a seção "História / Texto principal", antes dos Pilares.

## 3. Bio do autor no final do artigo
Arquivo: `src/routes/blog.$slug.tsx`
- Já existe um bloco "Sobre o autor" simples ao final. Vamos substituí-lo por um card lateral/destacado com:
  - Avatar maior à esquerda (coluna).
  - Nome, bio e botão "Ver todos os artigos do autor" → `Link to="/autor/$slug"`.
  - Layout em duas colunas em desktop (`md:flex-row`), empilhado em mobile.
- Loader já traz `author` do post; adicionar `id` (ou slug) do autor no `select` para montar o link.

## 4. SEO
- Sitemap (`src/routes/sitemap[.]xml.ts`): incluir `/autor/chico` (autor único no momento) ou iterar autores com posts publicados.
- `head()` da página do autor com metadados próprios.

## Arquivos a mexer
- `src/routes/autor.$slug.tsx` (novo)
- `src/routes/quem-somos.tsx`
- `src/routes/blog.$slug.tsx`
- `src/routes/sitemap[.]xml.ts`

## Perguntas antes de codar
1. **Identificação do autor na URL**: Prefere `/autor/chico` (slug legível — exigiria adicionar coluna `slug` em `profiles` via migration) ou `/autor/{uuid}` (usa o `id` atual, sem migration)?
2. **Conteúdo da página**: Você tem foto/bio/cargo definitivos do Chico para eu já preencher, ou deixo placeholder editável no admin (usando `profiles.full_name`, `avatar_url`, `bio` atuais)?
