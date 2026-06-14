Adicionar subserviço "Construção de Cisternas" (incluindo tanques de retenção pluvial e cisternas) à seção Obra Estrutural, com estrutura completa de hub + página de detalhe seguindo o padrão dos demais serviços (Pintura, Elétrica, etc.).

1. Dados em src/lib/site.ts
   - Criar interface ObraEstruturalSubservice com os mesmos campos dos demais subserviços (slug, code, h1, shortTitle, metaTitle, metaDescription, summary, keywords, intro, whenToHire[], types[], process[], standards[], trust[], geo, faq[], related[]).
   - Criar type ObraEstruturalSlug = 'construcao-cisternas'.
   - Criar array obraEstruturalSubservices com o primeiro item "Construção de Cisternas em Teresina" (OE-01), conteúdo técnico focado em cisternas de concreto armado, tanques de retenção pluvial, impermeabilização, estrutura de concreto e bombas.
   - Criar helper getObraEstruturalSubservice(slug).

2. Componente de subserviço
   - Criar src/components/site/ObraEstruturalSubPage.tsx seguindo o layout dos SubPage existentes (breadcrumb, hero, quando contratar, tipos, processo, normas, trust, geo, FAQ, formulário lateral, especialidades relacionadas).

3. Rotas
   - Criar src/routes/servicos.obra-estrutural.tsx (layout com <Outlet />).
   - Criar src/routes/servicos.obra-estrutural.index.tsx (hub page listando o subserviço com hero, cards e formulário; SEO com schema.org Service + OfferCatalog).
   - Criar src/routes/servicos.obra-estrutural.$obraEstruturalSlug.tsx (página de detalhe do subserviço com SEO Service + FAQPage + BreadcrumbList).

4. Imagem
   - Gerar imagem de hero para o subserviço (construção de cisterna de concreto armado) em JPG e converter para WebP via ffmpeg, hospedar como asset.

5. Integração
   - routeTree.gen.ts será regenerado automaticamente pelo plugin do TanStack Router.

6. Teste
   - Verificar que /servicos/obra-estrutural renderiza o hub com o card de cisternas.
   - Verificar que /servicos/obra-estrutural/construcao-cisternas renderiza a página de detalhe.