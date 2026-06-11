# Corrigir imagens "quebradas" do site

## Diagnóstico

As 43 imagens `.jpg` em `src/assets/` foram geradas por script Python (PIL) com padrões de ruído colorido — não são fotos reais. Por isso o site mostra retângulos com cores estranhas em vez de fotos profissionais. As `.png` (`pintura-quadra-poliesportiva.png`, `pintura-estacionamento.png`, `pintura-piso-concreto.png`, `reforma-quadras.png` e logos) são fotos reais que você enviou e devem ser preservadas.

## O que vou fazer

1. **Curar 1 URL Unsplash de alta qualidade para cada serviço** (~43 imagens), escolhida pelo conteúdo real (não apenas keyword).

2. **Substituir os `import ... from "@/assets/*.jpg"`** nos arquivos de rotas pelos URLs Unsplash diretamente — mesma estratégia que já está em uso nos hubs (`servicos.reformas.index.tsx`, `servicos.drywall.index.tsx`, etc).

3. **Preservar as .png reais** que você enviou — continuam como `import` local.

4. **Deletar os arquivos `.jpg` quebrados** de `src/assets/` para não poluírem o repositório.

## Arquivos que serão editados (apenas substituição de imports)

- `src/routes/servicos.drywall.$drywallSlug.tsx`
- `src/routes/servicos.eletrica.$eletricaSlug.tsx`
- `src/routes/servicos.hidraulica.$hidraulicaSlug.tsx`
- `src/routes/servicos.juntas-dilatacao.$juntaSlug.tsx`
- `src/routes/servicos.juntas-dilatacao.index.tsx`
- `src/routes/servicos.pintura.$pinturaSlug.tsx` (só os `.jpg`)
- `src/routes/servicos.reformas.$reformaSlug.tsx` (só os `.jpg`)
- `src/routes/servicos.seguranca.$segurancaSlug.tsx`
- `src/routes/servicos.seguranca.index.tsx`

## Não tocarei

- `src/lib/site.ts`, componentes, conteúdo textual, SEO, design system
- Imports de `.png` (fotos reais que você enviou)
- Logos
- URLs Unsplash que já existem nos hubs (já funcionam)

## Resultado

Site com fotos profissionais reais em todas as páginas, sem placeholders coloridos, sem mudar nada além das imagens.
