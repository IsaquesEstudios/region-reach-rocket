## Problema 1 — Menu fecha ao chegar em "Segurança"

**Causa**: cada item da lista (`<li class="group/item">`) abre seu submenu inline ao hover (`group-hover/item:block`). Conforme o usuário desce o mouse em direção a Segurança, os submenus de Pintura/Elétrica/Hidráulica/Drywall/Juntas se expandem e colapsam, empurrando os itens verticalmente. Esse "salto de layout" faz o ponteiro sair brevemente da área do dropdown, disparando o `onMouseLeave` do container e fechando tudo.

**Correção em `src/components/site/Header.tsx`** (somente o dropdown desktop):
- Remover os submenus inline `group-hover/item:block` de todos os itens (Pintura, Elétrica, Hidráulica, Drywall, Juntas, Segurança). O dropdown passa a listar apenas os hubs (1 linha por serviço), sem expansão vertical no hover.
- Remover os imports de `pinturaSubservices`, `eletricaSubservices`, `hidraulicaSubservices`, `drywallSubservices`, `juntaSubservices`, `segurancaSubservices` que ficarão sem uso.
- Resultado: altura do dropdown fica fixa, sem saltos, e o item Segurança continua sempre acessível. As sub-páginas continuam acessíveis pelos hubs (`/servicos/seguranca`, `/servicos/pintura`, etc.) e pelas grids/cards internos das próprias páginas — nada se perde de SEO ou navegação.

(Sem alterar mobile menu, layout do header ou estilo visual fora do dropdown.)

## Problema 2 — Remover serviço "Manutenção"

Tirar "Manutenção" da listagem de serviços (sem deletar o conteúdo do `site.ts`, para poder reativar depois facilmente).

**Edições mínimas:**
1. `src/lib/site.ts` — remover o objeto `{ slug: "manutencao", ... }` do array `services` (linhas ~139-148). Manter o type `ServiceSlug` e a entrada `manutencao:` em `serviceContent` intactos (não usados se não estiver no array, mas mantém histórico). 
2. `src/components/site/ServicesGrid.tsx` — remover o import `manutencaoImg` e a entrada `manutencao:` do mapa de imagens.
3. `src/routes/servicos.$slug.tsx` — remover o import `manutencaoImg` e a entrada `manutencao:` do mapa de imagens.
4. `src/routes/sitemap[.]xml.ts` — remover a URL `/servicos/manutencao` se estiver listada explicitamente (a rota dinâmica geralmente itera `services`, então cai automaticamente).
5. Header.tsx — como o dropdown agora itera `services`, a Manutenção some automaticamente sem mexer no menu.

Observação: a sub-rota `juntas-dilatacao/manutencao-movimentacao` é outra coisa (Juntas) e **NÃO** será tocada.

## Arquivos modificados
- `src/components/site/Header.tsx`
- `src/lib/site.ts`
- `src/components/site/ServicesGrid.tsx`
- `src/routes/servicos.$slug.tsx`
- `src/routes/sitemap[.]xml.ts` (se aplicável)
