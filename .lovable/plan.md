
## Objetivo

Trocar 100% das menções a Fortaleza, Ceará e elementos costeiros pelo equivalente Teresina/PI, garantindo que nenhuma referência ao Ceará permaneça no site nem no banco.

## Decisões já confirmadas

- **Endereço físico**: não temos endereço de atendimento. O site exibirá apenas "Teresina – PI" (sem rua, número, CEP). Remover o bloco de endereço completo do rodapé/contato e do JSON-LD `address`.
- **Bairros/cidades padrão**:
  - Bairros Teresina: Centro, Jóquei, Fátima, Ininga, São Cristóvão, Horto, Morros, Cabral, Noivos, Bela Vista, Dirceu, Mocambinho, Satélite.
  - Vizinhança (Grande Teresina): Timon-MA, Altos, José de Freitas, União, Demerval Lobão.
- **Concessionárias**: não citar nomes — trocar "ENEL Ceará" / "Cagece" por expressões neutras ("concessionária local", "padrão da rede local", "rede de água local").
- **Clima**: trocar "litoral", "maresia", "ar salino", "clima litorâneo", "Praia do Futuro", "Beira Mar", "Mucuripe", "Praia de Iracema", "Pecém", "Distrito Industrial de Maracanaú" pelos equivalentes inland de Teresina: "clima quente e seco", "alta insolação", "calor extremo", "variação térmica", "poeira", "Distrito Industrial de Teresina (DIT)".

## Escopo dos arquivos

Sweep completo nos arquivos que hoje mencionam Fortaleza/CE/bairros/concessionárias/litoral. O grep listou 33 arquivos:

- `src/lib/site.ts` (epicentro — `site.city/region/address`, todos os blocos `geo:` e textos `intro:` dos subserviços, FAQs).
- `src/routes/__root.tsx` (default meta description, JSON-LD Organization `address`/`areaServed`).
- `src/routes/index.tsx`, `src/routes/contato.tsx`, `src/routes/blog.index.tsx`, `src/routes/servicos.index.tsx`, `src/routes/servicos.$slug.tsx` e todas as rotas filhas de serviços (`servicos.pintura.*`, `servicos.eletrica.*`, `servicos.hidraulica.*`, `servicos.drywall.*`, `servicos.juntas-dilatacao.*`, `servicos.seguranca.*`, `servicos.reformas.*`) — `head()` meta title/description/og.
- Componentes de seção: `Hero.tsx`, `CtaBanner.tsx`, `Footer.tsx`, `Testimonials.tsx`, `ServicePage.tsx`, e as `*SubPage.tsx` (Pintura, Eletrica, Hidraulica, Drywall, Juntas, Seguranca, Reformas).
- `Testimonials.tsx`: trocar "Condomínio Edifício Aldeota" e "Região Metropolitana" pelos equivalentes em Teresina (ex.: "Condomínio Edifício Jóquei", "Grande Teresina").

## Banco de dados

Atualizar o único post do blog que cita Fortaleza:
- `posts.id = 75d2f0cb-…` ("Reforma comercial sem fechar a loja"): trocar "Fortaleza" por "Teresina" e ajustar `meta_description`. Migration de UPDATE pontual.

## Regras de substituição (aplicadas globalmente)

| De | Para |
|---|---|
| Fortaleza | Teresina |
| Fortaleza/CE, Fortaleza-CE, Fortaleza – CE | Teresina/PI |
| Ceará, cearense, do Ceará, litoral cearense | Piauí, piauiense, do Piauí, interior do Piauí |
| região metropolitana de Fortaleza, RMF | Grande Teresina |
| Aldeota, Meireles, Cocó, Papicu, Varjota, Dionísio Torres, Edson Queiroz, Sapiranga, Eng. Luciano Cavalcante, Praia do Futuro, Mucuripe, Beira Mar, Praia de Iracema, Guararapes, Joaquim Távora | lista padrão de bairros de Teresina (Centro, Jóquei, Fátima, Ininga, São Cristóvão, Horto, Morros, Cabral, Noivos, Bela Vista, Dirceu, Mocambinho, Satélite) |
| Eusébio, Aquiraz, Caucaia, Maracanaú, Pacajus, Horizonte | Timon-MA, Altos, José de Freitas, União, Demerval Lobão |
| Distrito Industrial de Maracanaú, CIPP, Pecém | Distrito Industrial de Teresina (DIT) |
| ENEL Ceará | (remover; usar "concessionária local" ou suprimir) |
| Cagece | (remover; usar "rede local" ou suprimir) |
| litoral, maresia, ar salino, clima litorâneo, próximo ao mar, orla, salinidade | clima quente e seco, alta insolação, calor extremo, poeira, variação térmica |
| AVCB com CBMCE | AVCB com CBMEPI |
| DDD/contexto | telefone já é (86) — correto para Teresina, **não mexer** |

Após as edições, faço um `grep -ri` de verificação para `fortaleza|cear|aldeota|meirele|messejana|maresia|cagece|enel cear` em `src/` e na coluna `posts.content/excerpt/meta_*` para garantir zero ocorrências.

## Endereço e dados estruturados

Em `src/lib/site.ts`:
- Remover o objeto `address` (rua/numero/CEP) ou reduzir a `{ city: "Teresina", region: "PI", country: "BR" }`.
- Atualizar `site.city = "Teresina"`, `site.region = "PI"`.

Em `__root.tsx` (JSON-LD Organization):
- `address` → apenas `addressLocality: "Teresina"`, `addressRegion: "PI"`, `addressCountry: "BR"` (sem street/postalCode).
- `areaServed` → "Teresina e Grande Teresina".

Footer / Contato:
- Esconder linha de endereço físico; manter telefone, WhatsApp, e-mail, "Atendemos Teresina e Grande Teresina".

## Arquivos não tocados

- `src/integrations/supabase/*` (auto-gerados).
- `src/routeTree.gen.ts`.
- `package.json`, configs.
- Demais rotas administrativas e de blog que não citam localidade.

## Entrega

1. Edição completa de `src/lib/site.ts` (maior arquivo, ~3147 linhas).
2. Edições focadas nos 32 outros arquivos listados.
3. Migration `UPDATE` no post afetado.
4. Verificação final com grep + leitura visual da Home, /servicos, /contato e /blog para confirmar coerência.

## Observação técnica

O telefone já é DDD 86 (Teresina), então `site.phone`, `phoneE164` e `whatsappNumber` ficam intactos.
