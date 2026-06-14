// Dados centrais da Chico Resolve.
// TODO: substituir os campos marcados como placeholder com dados reais antes de publicar.

export const site = {
  name: "Chico Resolve",
  legalName: "Chico Resolve — Inteligência em Manutenção Predial",
  tagline: "Inteligência em Manutenção Predial",
  description:
    "Engenharia de manutenção predial em Teresina/PI: pintura, elétrica, hidráulica, drywall, obras estruturais, segurança e reformas com rigor técnico e prazos cumpridos.",
  city: "Teresina",
  region: "PI",
  country: "BR",
  phone: "(86) 98154-7477",
  phoneE164: "+5586981547477",
  whatsappNumber: "5586981547477",
  email: "contato@chicoresolve.com.br", // TODO: confirmar email real
  instagram: "@chico.resolve",
  instagramUrl: "https://instagram.com/chico.resolve",
  serviceArea: "Teresina e Grande Teresina",
  address: {
    city: "Teresina",
    region: "PI",
    country: "BR",
  },
  // TODO: confirmar estatísticas reais antes de publicar
  stats: [
    { value: "98%", label: "Satisfação de Clientes" },
    { value: "100%", label: "Prazos Cumpridos" },
    { value: "0", label: "Acidentes de Trabalho" },
    { value: "500+", label: "Projetos Entregues" },
  ],
};

export const whatsappLink = (text = "Olá! Gostaria de solicitar um orçamento.") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;

export type ServiceSlug =
  | "pintura"
  | "eletrica"
  | "hidraulica"
  | "drywall"
  | "juntas-dilatacao"
  | "seguranca"
  | "reformas"
  | "obra-estrutural"
  | "manutencao";

export interface ServiceMeta {
  slug: ServiceSlug;
  code: string;
  title: string;
  shortTitle: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceMeta[] = [
  {
    slug: "pintura",
    code: "PN",
    shortTitle: "Pintura",
    title: "Pintura Profissional",
    summary:
      "Pintura residencial, comercial e industrial com preparação rigorosa e acabamento impecável em Teresina.",
    metaTitle: "Pintura Profissional Residencial e Comercial | Teresina",
    metaDescription:
      "Pintura residencial, comercial e industrial com acabamento impecável em Teresina. Rigor técnico, materiais de primeira linha e garantia. Solicite orçamento.",
  },
  {
    slug: "eletrica",
    code: "EL",
    shortTitle: "Elétrica",
    title: "Serviços Elétricos",
    summary:
      "Instalação, manutenção preventiva e corretiva conforme NR10 e NBR 5410 para residências, comércios e indústrias.",
    metaTitle: "Eletricista Profissional em Teresina | Elétrica NR10",
    metaDescription:
      "Elétrica residencial, comercial e industrial em Teresina com eletricistas habilitados conforme NR10. Instalação, manutenção e segurança. Orçamento rápido.",
  },
  {
    slug: "hidraulica",
    code: "HD",
    shortTitle: "Hidráulica",
    title: "Hidráulica Predial",
    summary:
      "Detecção de vazamentos, reparos e instalações hidráulicas com mínima intervenção estrutural.",
    metaTitle: "Hidráulica e Encanador em Teresina | Chico Resolve",
    metaDescription:
      "Serviço hidráulico em Teresina: detecção de vazamentos, reparos urgentes, troca de tubulação e manutenção de sistemas. Atendimento rápido.",
  },
  {
    slug: "drywall",
    code: "DW",
    shortTitle: "Drywall",
    title: "Gesso e Drywall",
    summary:
      "Forros, divisórias acústicas e sancas com acabamento premium para escritórios, residências e lojas.",
    metaTitle: "Drywall e Gesso em Teresina | Forros e Divisórias",
    metaDescription:
      "Instalação de drywall, forros de gesso, sancas e divisórias em Teresina. Acabamento premium, execução técnica e prazo garantido.",
  },
  {
    slug: "juntas-dilatacao",
    code: "JD",
    shortTitle: "Juntas",
    title: "Juntas de Dilatação",
    summary:
      "Execução e recuperação técnica de juntas para evitar infiltrações e patologias estruturais.",
    metaTitle: "Juntas de Dilatação em Teresina | Execução e Recuperação",
    metaDescription:
      "Tratamento técnico de juntas de dilatação em Teresina: vedação, recuperação e prevenção de infiltrações em lajes, fachadas e pisos.",
  },
  {
    slug: "seguranca",
    code: "SG",
    shortTitle: "Segurança",
    title: "Segurança Predial",
    summary:
      "Instalação de câmeras, cercas elétricas, SPDA e sistemas integrados de monitoramento.",
    metaTitle: "Câmeras e Cercas Elétricas em Teresina | Segurança Predial",
    metaDescription:
      "Segurança predial em Teresina: instalação de câmeras, cercas elétricas, SPDA e sistemas de monitoramento. Conformidade técnica e atendimento.",
  },
  {
    slug: "reformas",
    code: "RF",
    shortTitle: "Reformas",
    title: "Reformas Completas",
    summary:
      "Execução de reformas residenciais e comerciais com gerenciamento integrado e equipe própria.",
    metaTitle: "Reformas em Teresina | Comerciais e Residenciais",
    metaDescription:
      "Reformas residenciais e comerciais em Teresina com gerenciamento técnico, equipe própria e prazos cumpridos. Solicite uma visita técnica.",
  },
  {
    slug: "obra-estrutural",
    code: "OE",
    shortTitle: "Obra Estrutural",
    title: "Obras Estruturais",
    summary:
      "Execução e recuperação de fundações, pilares, vigas e lajes com planejamento técnico, segurança e controle de qualidade.",
    metaTitle: "Obra Estrutural em Teresina | Chico Resolve",
    metaDescription:
      "Obra estrutural em Teresina: fundações, pilares, vigas, lajes e reforço estrutural com execução técnica, segurança e acompanhamento profissional.",
  },
];

export interface ServiceContent {
  hero: string;
  intro: string;
  bullets: { title: string; text: string }[];
  process: { title: string; text: string }[];
  faq: { q: string; a: string }[];
}

export const serviceContent: Record<ServiceSlug, ServiceContent> = {
  pintura: {
    hero: "Pintura Profissional com Rigor Técnico e Acabamento Impecável",
    intro:
      "Na Chico Resolve, pintura não é só aplicação de tinta — é engenharia de superfície. Atendemos residências de alto padrão, prédios comerciais e plantas industriais em toda Teresina com preparação rigorosa, materiais de primeira linha e equipes treinadas para NR35 (trabalho em altura). O resultado: acabamento uniforme, durabilidade superior e zero retrabalho.",
    bullets: [
      { title: "Pintura Residencial", text: "Casas, apartamentos e coberturas com acabamento liso ou texturizado." },
      { title: "Pintura Comercial", text: "Lojas, escritórios e fachadas executadas em prazos curtos e sem interromper a operação." },
      { title: "Pintura Industrial", text: "Tinta epóxi, poliuretano e revestimentos técnicos para estruturas metálicas." },
    ],
    process: [
      { title: "Análise de Substrato", text: "Identificamos fissuras, infiltrações e pontos de corrosão antes de qualquer demão." },
      { title: "Preparação Técnica", text: "Limpeza, lixamento, selamento e correção de imperfeições com massa adequada." },
      { title: "Aplicação Controlada", text: "Aplicação por demãos controladas para espessura uniforme e estética impecável." },
      { title: "Inspeção Final", text: "Vistoria conjunta com o cliente e garantia formal de 12 a 60 meses." },
    ],
    faq: [
      { q: "Quanto tempo dura uma pintura predial?", a: "Com a preparação correta e tintas premium, a pintura externa dura entre 5 e 8 anos em Teresina." },
      { q: "Vocês fazem antes/depois com cliente?", a: "Sim. Cada projeto inclui registro fotográfico antes, durante e após a execução." },
      { q: "Atendem prédios altos?", a: "Sim. Nossa equipe é certificada em NR35 e usa rapel ou andaimes conforme o caso." },
    ],
  },
  eletrica: {
    hero: "Serviços Elétricos com Conformidade NR10 e Segurança Total",
    intro:
      "Nossa equipe de eletricistas é habilitada conforme a NR10 e executa instalações novas, manutenção preventiva e correção de patologias elétricas em residências, comércios e indústrias de Teresina. Trabalhamos com projeto, ART e laudos técnicos para garantir conformidade e reduzir riscos.",
    bullets: [
      { title: "Elétrica Residencial", text: "Instalação de quadros, tomadas, iluminação e automação residencial." },
      { title: "Elétrica Comercial", text: "Fiação estruturada, quadros de carga e adequação para vistorias do corpo de bombeiros." },
      { title: "Elétrica Industrial", text: "Subestações, motores, painéis e manutenção preditiva com termografia." },
    ],
    process: [
      { title: "Levantamento de Carga", text: "Diagnóstico completo da instalação existente e dimensionamento adequado." },
      { title: "Projeto e ART", text: "Projeto elétrico assinado por engenheiro responsável quando aplicável." },
      { title: "Execução com EPIs", text: "Equipe NR10 com EPIs e EPCs certificados para zero acidente." },
      { title: "Laudo e Entrega", text: "Entrega com laudo, fotos e orientação de manutenção preventiva." },
    ],
    faq: [
      { q: "Vocês emitem ART?", a: "Sim, em projetos que exigem Anotação de Responsabilidade Técnica emitimos via engenheiro parceiro." },
      { q: "Atendem emergência?", a: "Sim. Temos atendimento rápido para falhas críticas em condomínios e empresas." },
      { q: "Trabalham com NR10?", a: "Sim. Todos os eletricistas são treinados e atualizados na NR10." },
    ],
  },
  hidraulica: {
    hero: "Hidráulica Predial com Detecção de Vazamentos sem Quebra",
    intro:
      "Resolvemos vazamentos, entupimentos, reformas de prumadas e instalação de sistemas hidráulicos completos em Teresina. Trabalhamos com geofone e câmeras de inspeção para localizar problemas com a menor intervenção estrutural possível.",
    bullets: [
      { title: "Detecção de Vazamentos", text: "Localização precisa com equipamento sem necessidade de quebrar paredes." },
      { title: "Reparos e Trocas", text: "Substituição de tubulação, registros, conexões e louças com agilidade." },
      { title: "Sistemas de Bombeamento", text: "Instalação e manutenção de bombas, pressurizadores e reservatórios." },
    ],
    process: [
      { title: "Inspeção Técnica", text: "Análise da rede hidráulica e localização do problema com equipamentos." },
      { title: "Orçamento Detalhado", text: "Orçamento claro com escopo, prazo e materiais especificados." },
      { title: "Execução Limpa", text: "Equipe protege o ambiente e finaliza o serviço com o mínimo de bagunça." },
      { title: "Teste e Garantia", text: "Teste de estanqueidade, vistoria com cliente e garantia formal." },
    ],
    faq: [
      { q: "Conseguem achar vazamento sem quebrar piso?", a: "Sim. Usamos geofone e câmeras de inspeção para localizar com precisão milimétrica." },
      { q: "Atendem condomínios?", a: "Sim, prumadas inteiras, recalques e reservatórios são parte da nossa rotina." },
      { q: "Qual o prazo de atendimento?", a: "Vazamentos críticos são atendidos no mesmo dia ou no dia seguinte." },
    ],
  },
  drywall: {
    hero: "Gesso e Drywall com Acabamento Premium",
    intro:
      "Forros lisos, sancas iluminadas, divisórias acústicas e parede de drywall executados com perfilados galvanizados, placas de qualidade e acabamento que dispensa retoques. Projetos residenciais e corporativos em Teresina.",
    bullets: [
      { title: "Forros de Gesso e Drywall", text: "Forros lisos, rebaixados, em desnível e com iluminação embutida." },
      { title: "Divisórias", text: "Paredes de drywall com isolamento acústico e térmico." },
      { title: "Acabamentos Especiais", text: "Sancas, nichos, painéis e detalhes decorativos sob medida." },
    ],
    process: [
      { title: "Projeto e Marcação", text: "Marcação precisa com nível a laser e validação com o cliente." },
      { title: "Estrutura", text: "Perfilados galvanizados de qualidade ancorados conforme normas técnicas." },
      { title: "Fechamento", text: "Placas de drywall ou gesso parafusadas e tratadas com fita microperfurada." },
      { title: "Acabamento", text: "Massa, lixamento fino e entrega pronta para pintura." },
    ],
    faq: [
      { q: "Drywall ou gesso, qual usar?", a: "Drywall é mais rápido e seco; gesso acartonado é tradicional. Indicamos conforme o projeto." },
      { q: "Tem garantia?", a: "Sim, oferecemos garantia de execução e indicamos pintor parceiro." },
      { q: "Quanto tempo dura uma obra?", a: "Forros pequenos saem em 1 a 3 dias; divisórias dependem da metragem." },
    ],
  },
  "juntas-dilatacao": {
    hero: "Execução e Recuperação de Juntas de Dilatação",
    intro:
      "Juntas mal executadas causam infiltrações e patologias estruturais sérias. Nossa equipe executa e recupera juntas em fachadas, lajes, garagens e pisos industriais com materiais flexíveis de alta durabilidade.",
    bullets: [
      { title: "Execução Nova", text: "Juntas em obras novas com perfis e selantes adequados." },
      { title: "Recuperação", text: "Remoção do selante envelhecido e tratamento técnico do substrato." },
      { title: "Diagnóstico Técnico", text: "Inspeção de fissuras, movimentações e infiltrações associadas." },
    ],
    process: [
      { title: "Vistoria", text: "Identificação de pontos críticos e classificação da patologia." },
      { title: "Remoção e Limpeza", text: "Retirada do selante antigo e limpeza do substrato." },
      { title: "Aplicação Técnica", text: "Cordão de apoio, primer e selante poliuretânico ou silicone estrutural." },
      { title: "Inspeção de Estanqueidade", text: "Teste e relatório fotográfico do serviço." },
    ],
    faq: [
      { q: "Qual a vida útil de uma junta?", a: "Selantes de qualidade duram 8 a 15 anos dependendo da exposição." },
      { q: "Vocês emitem laudo?", a: "Sim, entregamos relatório técnico com fotos e materiais utilizados." },
      { q: "Atendem fachadas em altura?", a: "Sim, com equipe NR35 treinada para rapel e andaimes." },
    ],
  },
  seguranca: {
    hero: "Segurança Predial: Câmeras, Cercas Elétricas e SPDA",
    intro:
      "Projetamos e instalamos sistemas de segurança eletrônica para residências, condomínios, indústrias e comércios. Câmeras IP, gravadores, cercas elétricas, alarmes e SPDA (para-raios) — tudo com documentação técnica e manutenção contratada.",
    bullets: [
      { title: "Câmeras de Segurança", text: "CFTV IP em alta resolução com acesso remoto pelo celular." },
      { title: "Cercas Elétricas", text: "Cercas com central de choque e integração com alarme." },
      { title: "SPDA / Para-raios", text: "Projeto e instalação de Sistema de Proteção contra Descargas Atmosféricas." },
    ],
    process: [
      { title: "Visita Técnica", text: "Análise do perímetro e identificação de vulnerabilidades." },
      { title: "Projeto", text: "Plano de instalação com posicionamento ideal de cada equipamento." },
      { title: "Instalação", text: "Equipamentos homologados instalados por profissionais certificados." },
      { title: "Treinamento", text: "Cliente treinado para uso do sistema e contrato de manutenção opcional." },
    ],
    faq: [
      { q: "Consigo ver as câmeras no celular?", a: "Sim, todos os sistemas são integrados com app de visualização remota." },
      { q: "Cerca elétrica é segura?", a: "Sim, segue norma ABNT NBR e usa central homologada que não causa dano permanente." },
      { q: "Fazem manutenção?", a: "Sim, oferecemos contratos mensais ou trimestrais de manutenção preventiva." },
    ],
  },
  reformas: {
    hero: "Reformas Residenciais e Comerciais com Gerenciamento Integrado",
    intro:
      "Reformamos apartamentos, casas, lojas e escritórios em Teresina com equipe própria multidisciplinar — pintura, elétrica, hidráulica, drywall e acabamentos. Um único responsável técnico, um cronograma claro e zero terceirização descontrolada.",
    bullets: [
      { title: "Reformas Residenciais", text: "Apartamentos e casas com reforma parcial ou completa." },
      { title: "Reformas Comerciais", text: "Lojas e escritórios entregues prontos para operar." },
      { title: "Adequações Técnicas", text: "Adaptações para vistorias, acessibilidade e novas instalações." },
    ],
    process: [
      { title: "Briefing e Visita", text: "Entendimento das necessidades e levantamento técnico do imóvel." },
      { title: "Orçamento e Cronograma", text: "Orçamento detalhado por etapa com cronograma físico-financeiro." },
      { title: "Execução com Gestão", text: "Equipe própria com mestre de obras responsável e relatórios semanais." },
      { title: "Entrega Limpa", text: "Limpeza fina, vistoria conjunta e termo de entrega assinado." },
    ],
    faq: [
      { q: "Vocês são responsáveis pelo cronograma?", a: "Sim, cronograma físico-financeiro com multa contratual se descumprido." },
      { q: "Trabalham com arquiteto do cliente?", a: "Sim, executamos projetos de qualquer arquiteto ou designer parceiro." },
      { q: "Reforma incomoda os vizinhos?", a: "Respeitamos horários de condomínio e fazemos contenção de pó/ruído." },
    ],
  },
  "obra-estrutural": {
    hero: "Obras Estruturais com Planejamento, Segurança e Precisão",
    intro:
      "Executamos estruturas de concreto armado para obras residenciais, comerciais e prediais em Teresina. Da fundação à concretagem de pilares, vigas e lajes, cada etapa segue projeto, sequência executiva e controle de qualidade para entregar estabilidade, durabilidade e segurança.",
    bullets: [
      { title: "Fundações", text: "Execução de sapatas, blocos, baldrames e demais soluções previstas no projeto estrutural." },
      { title: "Concreto Armado", text: "Montagem de formas e armaduras, concretagem de pilares, vigas, escadas e lajes." },
      { title: "Reforço Estrutural", text: "Intervenções corretivas e reforços definidos a partir de avaliação e projeto técnico." },
    ],
    process: [
      { title: "Visita e Análise Técnica", text: "Levantamos as condições do local, acessos, interferências e requisitos da execução." },
      { title: "Planejamento da Obra", text: "Definimos etapas, equipe, materiais, segurança e cronograma conforme o projeto estrutural." },
      { title: "Execução Controlada", text: "Realizamos formas, armações e concretagens com conferência técnica em cada fase." },
      { title: "Inspeção e Entrega", text: "Registramos os serviços, verificamos o acabamento e entregamos a etapa estrutural documentada." },
    ],
    faq: [
      { q: "A Chico Resolve executa a estrutura completa?", a: "Sim. Executamos fundações, pilares, vigas, lajes e escadas conforme o projeto estrutural da obra." },
      { q: "Vocês fazem reforço estrutural?", a: "Sim, desde que a intervenção seja definida por avaliação e projeto de profissional habilitado." },
      { q: "É necessário ter projeto estrutural?", a: "Sim. O projeto orienta dimensões, armaduras, resistência do concreto e sequência segura de execução." },
    ],
  },
  manutencao: {
    hero: "Manutenção Predial Inteligente para Condomínios e Indústrias",
    intro:
      "Contratos de manutenção preventiva e corretiva que cobrem pintura, elétrica, hidráulica, drywall, segurança e estrutura. Você tem um único fornecedor confiável, relatórios fotográficos mensais e custos previsíveis. Ideal para síndicos, gerentes de facilities e empresas.",
    bullets: [
      { title: "Condomínios", text: "Atendimento técnico mensal com check-list e relatório para o síndico." },
      { title: "Indústrias e Empresas", text: "Manutenção que respeita produção, com janelas programadas." },
      { title: "Manutenção Corretiva", text: "Atendimento rápido para falhas críticas, 24h em contratos premium." },
    ],
    process: [
      { title: "Diagnóstico Inicial", text: "Inventário das instalações e priorização de criticidade." },
      { title: "Plano Anual", text: "Cronograma mensal com escopo, prazos e custos previsíveis." },
      { title: "Execução Programada", text: "Equipe multidisciplinar executa preventiva e corretiva conforme plano." },
      { title: "Relatório Mensal", text: "Relatório fotográfico mensal com itens executados e recomendações." },
    ],
    faq: [
      { q: "Qual o prazo mínimo de contrato?", a: "Contratos a partir de 6 meses, com possibilidade de teste de 1 mês." },
      { q: "Cobrem todos os serviços?", a: "Sim, pintura, elétrica, hidráulica, drywall, juntas, segurança e reformas leves." },
      { q: "Como funciona o atendimento de urgência?", a: "Síndico ou gestor abre chamado via WhatsApp dedicado, atendimento em até 24h." },
    ],
  },
};

// ============================================================================
// Pintura: hub + sub-páginas otimizadas para clusters de palavras-chave.
// Cada sub-página tem H1 = keyword principal + conteúdo único focado em E-E-A-T,
// GEO local Teresina/PI e SEO técnico (Service + Breadcrumb + FAQPage JSON-LD).
// ============================================================================

export type PinturaSlug =
  | "piso-concreto"
  | "residencial"
  | "apartamento"
  | "industrial"
  | "quadra-poliesportiva";

export interface PinturaSubservice {
  slug: PinturaSlug;
  code: string;
  h1: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  keywords: string[];
  intro: string;
  whenToHire: { title: string; text: string }[];
  types: { title: string; text: string }[];
  process: { title: string; text: string }[];
  standards: string[];
  trust: string[];
  geo: string;
  faq: { q: string; a: string }[];
  related: PinturaSlug[];
}

export const pinturaSubservices: PinturaSubservice[] = [
  {
    slug: "piso-concreto",
    code: "PN-01",
    h1: "Pintura para Piso de Concreto",
    shortTitle: "Piso de Concreto",
    metaTitle: "Pintura para Piso de Concreto em Teresina | Chico Resolve",
    metaDescription:
      "Pintura de piso de concreto em Teresina com tinta epóxi e acrílica de alto tráfego. Preparação técnica, antiderrapante e garantia. Solicite orçamento.",
    summary:
      "Pintura de piso de concreto com epóxi e acrílico para garagens, galpões, oficinas e áreas técnicas.",
    keywords: ["pintura de piso", "pintar piso", "pintura piso concreto", "tinta epóxi para piso"],
    intro:
      "Pintar piso de concreto exige muito mais do que aplicar tinta sobre a superfície. Na Chico Resolve executamos pintura de piso em galpões, garagens de condomínios, oficinas, áreas de serviço e laboratórios em toda Teresina e Grande Teresina. Cada projeto começa com diagnóstico de umidade, abertura de poros, correção de fissuras e seleção da tinta certa — epóxi, poliuretano ou acrílico de alto tráfego — para que o piso resista a impacto, óleos, lavagem constante e o clima quente e seco do Piauí.",
    whenToHire: [
      { title: "Garagem desgastada", text: "Concreto poroso liberando pó, manchas de óleo e marcas de pneus." },
      { title: "Galpão industrial", text: "Necessidade de demarcação de áreas, sinalização e resistência química." },
      { title: "Pós-obra", text: "Piso novo de contrapiso que precisa selar e ganhar acabamento técnico." },
    ],
    types: [
      { title: "Pintura Epóxi", text: "Tinta epóxi bicomponente autonivelante para alto tráfego e resistência química. Ideal para pintar piso de oficinas e indústrias." },
      { title: "Acrílico de Alto Tráfego", text: "Pintura de piso acrílica para garagens de condomínios e áreas externas, com secagem rápida." },
      { title: "Antiderrapante", text: "Adição de carga mineral para rampas, áreas molhadas e escadas." },
      { title: "Demarcação Viária", text: "Faixas amarelas, vagas, setas e sinalização de segurança conforme NR-12." },
    ],
    process: [
      { title: "Diagnóstico do Substrato", text: "Medição de umidade, identificação de fissuras, contaminação por óleo e teste de aderência." },
      { title: "Preparação Mecânica", text: "Lixamento com diamantadora ou jateamento para abrir o poro do concreto." },
      { title: "Tratamento e Primer", text: "Correção de buracos, aplicação de primer epóxi penetrante para selar a superfície." },
      { title: "Aplicação Técnica", text: "Duas a três demãos da tinta especificada com rolo, trincha ou rodo dentado." },
      { title: "Cura e Entrega", text: "Liberação para tráfego leve em 24h e tráfego pesado em 7 dias, com termo de garantia." },
    ],
    standards: ["NBR 14050 (sistemas epóxi)", "NR-18 (segurança em obras)", "NR-6 (EPI)", "FDS dos produtos aplicados"],
    trust: [
      "Garantia contratual de 24 a 60 meses conforme o sistema aplicado",
      "Equipe própria CLT treinada em aplicação de epóxi",
      "Relatório fotográfico de cada etapa do serviço",
      "Tintas de marcas homologadas (Sherwin-Williams, WEG, Eucatex)",
    ],
    geo: "Atendemos toda Teresina, com obras concluídas em galpões do Distrito Industrial, garagens de condomínios na Jóquei, Fátima e Ininga, e áreas técnicas em Timon-MA, União e José de Freitas. Trabalhamos com sistemas resistentes à calor e poeira típica do interior do Piauí.",
    faq: [
      { q: "Quanto custa pintar piso de concreto em Teresina?", a: "O valor depende do sistema (acrílico, epóxi ou poliuretano) e da metragem. Pintura acrílica parte de R$ 35/m² e epóxi autonivelante a partir de R$ 95/m². Fazemos visita técnica gratuita para orçamento exato." },
      { q: "Preciso esperar o concreto curar antes de pintar?", a: "Sim. Concretos novos precisam de no mínimo 28 dias de cura, e o teste de umidade deve indicar abaixo de 4% antes da aplicação de epóxi." },
      { q: "A tinta epóxi resiste a óleo e produtos químicos?", a: "Sim. Os sistemas epóxi que usamos são resistentes a óleos, graxas, detergentes e a maioria dos solventes industriais." },
      { q: "Qual a durabilidade da pintura de piso?", a: "Em uso comercial moderado, de 5 a 10 anos. Em áreas industriais de tráfego pesado, 3 a 6 anos com manutenção." },
      { q: "Vocês fazem antiderrapante para áreas molhadas?", a: "Sim. Adicionamos carga mineral ou microesferas à última demão para garantir aderência em rampas, vestiários e cozinhas industriais." },
    ],
    related: ["industrial", "quadra-poliesportiva", "apartamento"],
  },
  {
    slug: "residencial",
    code: "PN-02",
    h1: "Pintura Residencial em Teresina",
    shortTitle: "Residencial",
    metaTitle: "Pintura Residencial em Teresina | Chico Resolve",
    metaDescription:
      "Empresa de pintura residencial em Teresina. Pintura de casa, parede e fachada com pintor profissional, orçamento em 24h e garantia formal.",
    summary:
      "Empresa de pintura residencial com pintor profissional para casas, apartamentos e coberturas em Teresina.",
    keywords: [
      "empresa de pintura residencial",
      "serviço de pintura residencial",
      "pintura de casa",
      "pintura de parede",
      "pintor de casa",
      "orçamento de pintura residencial",
      "pinturas residenciais e comerciais",
    ],
    intro:
      "A Chico Resolve é uma empresa de pintura residencial em Teresina com equipe própria, CLT e treinamento contínuo. Executamos pintura de casa, pintura de parede interna e externa, repintura de fachada e acabamentos especiais (textura, grafiato, efeito cimento queimado). Nosso serviço de pintura residencial nasceu da experiência atendendo bairros como Jóquei, Fátima, Ininga, Cabral e Noivos — onde umidade do mar, sol forte e poeira exigem preparação rigorosa e tintas certas. Cada pintor de casa da nossa equipe é treinado em técnicas modernas (lixamento, massa corrida, selagem com fundo preparador) para um acabamento durável e sem retoques.",
    whenToHire: [
      { title: "Mudou de casa", text: "Antes de instalar móveis, é mais barato e rápido pintar com a casa vazia." },
      { title: "Parede manchada ou descascando", text: "Sinal de infiltração ou tinta vencida — exige tratamento antes da nova demão." },
      { title: "Vai vender ou alugar", text: "Pintura nova valoriza o imóvel em 5% a 15% e acelera negociação." },
      { title: "Reforma parcial", text: "Trocou piso, fez gesso ou drywall — a pintura fecha o serviço com acabamento." },
    ],
    types: [
      { title: "Pintura Interna", text: "Pintura de parede em quartos, salas, cozinha e área de serviço com tintas laváveis e antimofo." },
      { title: "Pintura Externa de Casa", text: "Pintura de fachada residencial com tinta acrílica premium resistente ao sol e à calor e poeira de Teresina." },
      { title: "Texturas e Efeitos", text: "Grafiato, textura projetada, cimento queimado e efeitos decorativos sob medida." },
      { title: "Esquadrias e Detalhes", text: "Portas, janelas, batentes, rodapés e portões — esmalte sintético ou base d'água." },
    ],
    process: [
      { title: "Visita Técnica Gratuita", text: "Vistoria do imóvel, levantamento de área, identificação de patologias e proposta no mesmo dia." },
      { title: "Orçamento de Pintura Residencial em 24h", text: "Orçamento detalhado por ambiente, com material e mão de obra discriminados." },
      { title: "Proteção e Preparação", text: "Cobrimos móveis e piso, lixamos, aplicamos massa e selador conforme cada parede." },
      { title: "Aplicação por Demãos", text: "Mínimo de duas demãos com rolo de lã ou pistola, respeitando o tempo de secagem." },
      { title: "Vistoria e Garantia", text: "Vistoria conjunta com o cliente e termo de garantia formal de 12 a 36 meses." },
    ],
    standards: ["NBR 13245 (pintura de edificações)", "NR-35 (trabalho em altura para fachadas)", "NR-6 (EPI)", "Tintas com selo Inmetro"],
    trust: [
      "Empresa formalizada com CNPJ — emitimos NF de serviço",
      "Pintor de casa CLT com treinamento e EPI completo",
      "Garantia de 12 a 36 meses por escrito",
      "Antes/depois fotografado em todos os projetos",
      "Atendimento pelo mesmo profissional do início ao fim",
    ],
    geo: "Nosso serviço de pintura residencial atende todos os bairros de Teresina — Jóquei, Fátima, Ininga, São Cristóvão, Horto, Morros, Cabral, Noivos, Bela Vista, Dirceu — e cidades da Grande Teresina como Timon-MA, Altos, José de Freitas e União. Como atendemos pinturas residenciais e comerciais, indicamos a tinta certa para o clima quente e seco: anti-mofo nos ambientes internos e acrílico premium nas fachadas.",
    faq: [
      { q: "Quanto custa pintar uma casa em Teresina?", a: "Em média R$ 20 a R$ 45 por m² incluindo mão de obra e material básico. O orçamento de pintura residencial varia conforme estado das paredes, número de demãos e tipo de tinta. Fazemos visita gratuita." },
      { q: "Em quanto tempo vocês entregam a pintura de uma casa de 100 m²?", a: "Uma casa de 100 m² com paredes em bom estado leva de 4 a 6 dias úteis com equipe de 2 pintores." },
      { q: "Preciso comprar a tinta ou vocês fornecem?", a: "Trabalhamos das duas formas. Se preferir, fornecemos a tinta com desconto de revenda e nota fiscal." },
      { q: "Vocês fazem pintura sem cheiro forte?", a: "Sim. Trabalhamos com tintas à base de água, classificadas como baixo VOC, ideais para apartamentos habitados e quartos infantis." },
      { q: "A pintura tem garantia?", a: "Sim. Damos de 12 a 36 meses de garantia por escrito conforme o sistema aplicado, cobrindo descascamento e bolhas em condições normais de uso." },
    ],
    related: ["apartamento", "piso-concreto", "industrial"],
  },
  {
    slug: "apartamento",
    code: "PN-03",
    h1: "Pintura de Apartamento em Teresina",
    shortTitle: "Apartamento",
    metaTitle: "Pintura de Apartamento em Teresina | Chico Resolve",
    metaDescription:
      "Pintura de apartamento em Teresina com pintor experiente em condomínios. Empresa pintura predial regularizada, orçamento rápido e horários respeitados.",
    summary:
      "Pintura de apartamento com equipe que respeita horário de condomínio, cobertura de mobília e acabamento premium.",
    keywords: [
      "pintura de apartamento",
      "empresa pintura predial",
      "contratar pintor",
      "serviços de pinturas em geral",
    ],
    intro:
      "Pintar apartamento envolve desafios que casas não têm: horário restrito de obras, normas do condomínio, elevador de serviço, vizinhos sensíveis a cheiro e ruído. A Chico Resolve é uma empresa pintura predial regularizada que atende edifícios em toda Teresina com equipes treinadas para esse contexto. Cuidamos da documentação para o síndico, usamos tintas com baixo odor, protegemos hall, elevador e portaria, e entregamos o apartamento limpo e pronto para morar. Se você precisa contratar pintor com referências e nota fiscal, oferecemos serviços de pinturas em geral — paredes, teto, esquadrias e áreas técnicas.",
    whenToHire: [
      { title: "Antes da mudança", text: "Pintar com o apartamento vazio é mais rápido, barato e evita móveis manchados." },
      { title: "Entrega das chaves", text: "Apartamento novo com defeitos de pintura ou cor padrão da construtora que não agrada." },
      { title: "Reforma do banheiro/cozinha", text: "Após troca de azulejo, é hora de retocar paredes adjacentes e teto." },
      { title: "Manchas e infiltração", text: "Identificamos a origem (geralmente vizinho superior) antes de pintar." },
    ],
    types: [
      { title: "Apartamento Vazio", text: "Pintura completa de paredes, tetos, batentes, portas e rodapés com prazo otimizado." },
      { title: "Apartamento Habitado", text: "Pintura por ambientes com cobertura total de móveis e descarte adequado de resíduos." },
      { title: "Repintura de Áreas Úmidas", text: "Banheiros, lavanderia e cozinha com tinta antimofo e impermeabilizante." },
      { title: "Acabamentos Decorativos", text: "Paredes de destaque, papel de parede, microcimento e tinta efeito." },
    ],
    process: [
      { title: "Vistoria com o Síndico", text: "Levantamos a norma do condomínio: horários, uso de elevador, taxa de obra." },
      { title: "Orçamento Detalhado", text: "Proposta com escopo, prazo, marcas de tinta e forma de pagamento." },
      { title: "Proteção e Isolamento", text: "Cobertura plástica de móveis, lonas no piso e fita crepe em rodapés e tomadas." },
      { title: "Execução Silenciosa", text: "Aplicação respeitando horário de descanso (7h-17h ou 8h-18h conforme o prédio)." },
      { title: "Entrega Limpa", text: "Remoção de resíduos, limpeza fina e vistoria final com o morador." },
    ],
    standards: ["Convenção de condomínio do edifício", "NR-35 quando houver fachada", "NR-6 (EPI)", "Tintas baixo VOC para ambientes habitados"],
    trust: [
      "Empresa pintura predial com CNPJ e ART quando aplicável",
      "Documentação completa para entrega ao síndico",
      "Pintor identificado com uniforme e crachá",
      "Cobertura de seguro contra danos a terceiros",
      "Pagamento parcelado em até 6x sem juros",
    ],
    geo: "Atendemos edifícios em Teresina inteira — incluindo prédios na Centro, Mocambinho, Satélite, Jóquei, Fátima, Ininga, Bela Vista e Morros — além de empreendimentos em Timon-MA, Altos e José de Freitas. Trabalhamos com tintas resistentes à umidade típica de apartamentos em zona urbana.",
    faq: [
      { q: "Quanto custa pintar um apartamento de 70 m² em Teresina?", a: "Em média de R$ 2.500 a R$ 5.500 incluindo material e mão de obra, dependendo do estado das paredes e tipo de tinta. Fazemos visita gratuita para orçamento exato." },
      { q: "Vocês respeitam horário de condomínio?", a: "Sim. Cumprimos rigorosamente o horário definido pelo síndico, geralmente das 8h às 17h em dias úteis." },
      { q: "Fornecem documentação para a administração?", a: "Sim. Entregamos contrato, ART quando aplicável, lista de colaboradores e ASOs para o síndico autorizar a obra." },
      { q: "Quanto tempo demora a pintura de um apartamento vazio?", a: "Um apartamento de 2 quartos (70 m²) leva de 3 a 5 dias úteis com equipe de 2 pintores." },
      { q: "Trabalham com apartamento habitado?", a: "Sim. Pintamos por ambientes, cobrimos os móveis, lixamos com aspirador para conter o pó e usamos tinta sem cheiro." },
    ],
    related: ["residencial", "piso-concreto", "industrial"],
  },
  {
    slug: "industrial",
    code: "PN-04",
    h1: "Pintura Industrial em Teresina",
    shortTitle: "Industrial",
    metaTitle: "Pintura Industrial em Teresina | Chico Resolve",
    metaDescription:
      "Empresa de pintura industrial em Teresina: estrutura metálica, galpões, tubulações e pintura de parede com pintor profissional NR-35 e tintas técnicas.",
    summary:
      "Empresa de pintura industrial com pintor profissional certificado em NR-35 para galpões, estruturas metálicas e plantas fabris.",
    keywords: [
      "pintura industrial",
      "empresa de pintura industrial",
      "contratar pintor",
      "pintura de parede",
      "pintor profissional",
    ],
    intro:
      "A Chico Resolve é uma empresa de pintura industrial em Teresina especializada em estruturas metálicas, galpões logísticos, tubulações, tanques, fachadas industriais e pintura de parede em ambientes fabris. Cada pintor profissional da nossa equipe é treinado em NR-35 (trabalho em altura), NR-18 (canteiro de obras) e capacitado em sistemas anticorrosivos — primer epóxi rico em zinco, intermediário epóxi alta espessura e acabamento poliuretânico. Para quem precisa contratar pintor com domínio técnico de tintas industriais (Jotun, Sherwin-Williams Protective, WEG), oferecemos planejamento, execução com inspeção SSPC e relatório de espessura por ponto.",
    whenToHire: [
      { title: "Estrutura metálica enferrujada", text: "Vigas, colunas e cobertura com perda de espessura — exige jateamento e novo sistema." },
      { title: "Galpão novo", text: "Pintura inicial de proteção antes da entrega para operação." },
      { title: "Manutenção preventiva", text: "Repintura periódica para preservar ativos e atender auditorias." },
      { title: "Adequação para certificação", text: "Pintura sinalização, código de cores ABNT e marcações de segurança." },
    ],
    types: [
      { title: "Estruturas Metálicas", text: "Sistema anticorrosivo completo: jateamento, primer rico em zinco, epóxi e acabamento PU." },
      { title: "Pintura de Galpões", text: "Telhas, paredes, pilares e demarcação de áreas operacionais." },
      { title: "Pintura de Parede Industrial", text: "Paredes de alvenaria com tinta acrílica de alta resistência à lavagem e fungos." },
      { title: "Tubulações e Tanques", text: "Código de cores ABNT NBR 6493 para identificação de fluidos e segurança." },
    ],
    process: [
      { title: "Inspeção e Especificação", text: "Avaliação do substrato, medição de espessura existente e definição do sistema." },
      { title: "Preparação SA 2½", text: "Jateamento abrasivo, escovamento mecânico ou hidrojateamento conforme norma SSPC." },
      { title: "Aplicação Controlada", text: "Pintura por airless ou pistola convencional respeitando DFT especificado." },
      { title: "Controle de Qualidade", text: "Medição de espessura úmida e seca, teste de aderência (pull-off) e holiday detector." },
      { title: "Relatório Técnico", text: "Entrega de dossiê com fotos, certificados de tinta, FDS e termo de garantia." },
    ],
    standards: ["NR-35 (trabalho em altura)", "NR-33 (espaço confinado)", "NR-18", "ABNT NBR 6493 (cores de tubulação)", "SSPC-SP10 / Sa 2½", "ART de execução"],
    trust: [
      "Empresa de pintura industrial com CNPJ e equipe CLT",
      "ART de execução com engenheiro responsável",
      "PCMSO, PPRA e ASOs em dia",
      "Tintas Jotun, Sherwin-Williams Protective ou WEG",
      "Garantia formal de 24 a 60 meses conforme sistema",
    ],
    geo: "Atendemos o Distrito Industrial de Teresina (DIT), Demerval Lobão, Timon-MA, DIT e parques industriais ao redor de Teresina. Já executamos serviços em galpões logísticos, fábricas têxteis, indústrias alimentícias e plantas de equipamentos metálicos do Piauí — sempre com sistemas calibrados para o calor extremo do litoral.",
    faq: [
      { q: "Vocês fazem jateamento abrasivo?", a: "Sim. Trabalhamos com jateamento SA 2½ ou SA 3 conforme especificação, com equipamentos próprios e descarte regular do abrasivo." },
      { q: "Emitem ART para pintura industrial?", a: "Sim. Quando a obra exige, emitimos ART de execução assinada por engenheiro responsável." },
      { q: "Qual a duração de uma pintura industrial?", a: "Sistemas anticorrosivos completos duram de 8 a 15 anos em ambiente C3/C4, com inspeção a cada 24 meses." },
      { q: "Trabalham em altura e espaço confinado?", a: "Sim. Equipe certificada em NR-35 e NR-33, com PT (permissão de trabalho) e supervisão de segurança." },
      { q: "Como funciona o controle de qualidade?", a: "Medimos a espessura úmida durante a aplicação, espessura seca após cura e fazemos teste de aderência por pull-off em pontos amostrais." },
    ],
    related: ["piso-concreto", "quadra-poliesportiva", "residencial"],
  },
  {
    slug: "quadra-poliesportiva",
    code: "PN-05",
    h1: "Pintura de Quadra Poliesportiva",
    shortTitle: "Quadra Poliesportiva",
    metaTitle: "Pintura de Quadra Poliesportiva em Teresina | Chico Resolve",
    metaDescription:
      "Pintura de quadra poliesportiva em Teresina com tinta de piso esportivo, demarcação oficial de futsal, vôlei e basquete. Contratar pintor especializado.",
    summary:
      "Pintura de piso esportivo para quadras de futsal, vôlei e basquete com tinta acrílica e demarcação oficial.",
    keywords: ["pintura de quadra poliesportiva", "pintura de piso esportivo", "contratar pintor"],
    intro:
      "A pintura de quadra poliesportiva é um trabalho técnico que combina pintura de piso esportivo de alto desempenho com demarcação rigorosa das modalidades. A Chico Resolve atende escolas, condomínios, clubes, academias e prefeituras em Teresina e região com sistemas acrílicos esportivos resistentes ao sol, chuva e ao impacto de bolas e calçados. Se você precisa contratar pintor experiente em quadras — capaz de medir e demarcar futsal, basquete, vôlei e handebol no mesmo piso — oferecemos projeto de paginação, aplicação técnica e garantia formal.",
    whenToHire: [
      { title: "Quadra desbotada", text: "Cores apagadas pelo sol e demarcações ilegíveis comprometem o jogo e a segurança." },
      { title: "Quadra nova", text: "Concreto liso recém-entregue precisa de proteção, cor e demarcação." },
      { title: "Mudança de modalidade", text: "Adaptar a quadra para receber novas modalidades exige nova paginação." },
      { title: "Eventos e campeonatos", text: "Renovar a pintura antes de eventos para visual profissional." },
    ],
    types: [
      { title: "Pintura Acrílica Esportiva", text: "Tinta acrílica 100% específica para piso esportivo, com aditivos UV e antiderrapante." },
      { title: "Pintura de Piso Esportivo Coberta", text: "Sistema epóxi ou PU para ginásios cobertos com alto brilho e durabilidade." },
      { title: "Demarcação Multimodal", text: "Linhas de futsal, vôlei, basquete e handebol em cores normatizadas no mesmo piso." },
      { title: "Pintura de Arquibancada", text: "Bancadas de concreto e estrutura metálica pintadas em conjunto com a quadra." },
    ],
    process: [
      { title: "Diagnóstico do Piso", text: "Avaliação da idade do concreto, fissuras, umidade ascendente e infiltrações." },
      { title: "Preparação e Selagem", text: "Lixamento, fechamento de fissuras com massa epóxi e aplicação de selador penetrante." },
      { title: "Demãos de Base", text: "Aplicação de duas demãos da cor principal (ex.: verde) sobre toda a área." },
      { title: "Demarcação Oficial", text: "Marcação com trena, esquadro e linha — fita crepe técnica e pincel para linhas retas." },
      { title: "Acabamento e Entrega", text: "Demão final, vistoria com cliente e liberação para uso em 7 dias." },
    ],
    standards: ["Medidas oficiais CBFS (futsal), CBV (vôlei), CBB (basquete)", "NBR 13245", "NR-18", "Tintas com selo Inmetro"],
    trust: [
      "Demarcação conforme medidas oficiais das confederações",
      "Garantia de 24 meses para pintura de piso esportivo coberto",
      "Garantia de 18 meses para quadras descobertas",
      "Tintas técnicas de fabricantes nacionais homologados",
      "Registro fotográfico antes/durante/depois",
    ],
    geo: "Pintamos quadras em escolas particulares e municipais, condomínios residenciais, clubes e prefeituras de Teresina, Timon-MA, Altos, José de Freitas, União e cidades vizinhas. Trabalhamos com sistemas resistentes ao sol intenso e chuvas concentradas do clima piauiense.",
    faq: [
      { q: "Quanto custa pintar uma quadra poliesportiva em Teresina?", a: "O valor médio varia de R$ 60 a R$ 130 por m² incluindo preparação, pintura e demarcação. Quadras cobertas com sistema epóxi/PU custam mais. Solicite visita técnica." },
      { q: "A demarcação segue medidas oficiais?", a: "Sim. Trabalhamos com as medidas das confederações brasileiras (CBFS, CBV, CBB) para que a quadra possa receber competições oficiais e escolares." },
      { q: "Quanto tempo demora a pintura completa de uma quadra?", a: "Uma quadra de 800 m² leva de 6 a 10 dias úteis dependendo do clima — concretos novos exigem 28 dias de cura antes da pintura." },
      { q: "A tinta é antiderrapante?", a: "Sim. As tintas acrílicas esportivas têm carga mineral que garante coeficiente de atrito adequado para a prática esportiva segura." },
      { q: "Conseguem pintar várias modalidades no mesmo piso?", a: "Sim. Demarcamos até 4 modalidades sobrepostas usando cores diferentes (preto, branco, amarelo, azul) conforme o padrão de cada modalidade." },
    ],
    related: ["piso-concreto", "industrial", "residencial"],
  },
];

export const getPinturaSubservice = (slug: string): PinturaSubservice | undefined =>
  pinturaSubservices.find((s) => s.slug === slug);

// ============================================================================
// Elétrica: hub + sub-páginas otimizadas para clusters de palavras-chave.
// H1 = keyword principal; conteúdo único focado em E-E-A-T, GEO Teresina/PI,
// normas NR-10 / NBR 5410 e Service + Breadcrumb + FAQPage JSON-LD.
// ============================================================================

export type EletricaSlug = "industrial" | "residencial" | "predial";

export interface EletricaSubservice {
  slug: EletricaSlug;
  code: string;
  h1: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  keywords: string[];
  intro: string;
  whenToHire: { title: string; text: string }[];
  types: { title: string; text: string }[];
  process: { title: string; text: string }[];
  standards: string[];
  trust: string[];
  geo: string;
  faq: { q: string; a: string }[];
  related: EletricaSlug[];
}

export const eletricaSubservices: EletricaSubservice[] = [
  {
    slug: "industrial",
    code: "EL-01",
    h1: "Eletricista Industrial em Teresina",
    shortTitle: "Industrial",
    metaTitle: "Eletricista Industrial em Teresina | Chico Resolve",
    metaDescription:
      "Eletricista industrial em Teresina com eletricistas certificados NR-10 e SEP. Empresa de elétrica para CCM, painéis, manutenção e emergência 24h.",
    summary:
      "Eletricista industrial certificado NR-10/SEP para painéis, CCM, motores e manutenção preventiva e corretiva em indústrias.",
    keywords: [
      "eletricista industrial",
      "eletricistas certificados",
      "empresa de elétrica",
      "eletricista de manutenção",
      "orçamento eletricista",
      "eletricista emergência",
    ],
    intro:
      "A Chico Resolve é uma empresa de elétrica industrial em Teresina com eletricistas certificados em NR-10 básico e NR-10 SEP (Sistema Elétrico de Potência). Atendemos indústrias, galpões logísticos e plantas fabris com instalação, ampliação e manutenção de painéis elétricos, CCM (Centro de Controle de Motores), barramentos, inversores de frequência, soft-starters e sistemas de aterramento. Como eletricista de manutenção, também executamos termografia, ajuste de proteções, ensaio de relés e plano de manutenção preventiva. Para emergências, mantemos plantão de eletricista emergência 24h para evitar paradas de produção em indústrias do Distrito Industrial de Teresina (DIT), DIT e Demerval Lobão.",
    whenToHire: [
      { title: "Parada não programada", text: "Disjuntor que desarma, motor que não parte ou painel com sinais de aquecimento — risco de incêndio e perda de produção." },
      { title: "Ampliação de carga", text: "Nova linha de produção, máquina importada ou ampliação de galpão exige redimensionamento elétrico e ART." },
      { title: "Adequação à NR-10", text: "Diagramas atualizados, prontuário das instalações, sinalização e EPCs para passar em auditoria." },
      { title: "Manutenção preventiva", text: "Termografia, reaperto de conexões e teste de proteções para evitar falhas críticas." },
    ],
    types: [
      { title: "Painéis e CCM", text: "Montagem, manutenção e retrofit de painéis de comando, CCM e quadros de distribuição em baixa tensão (NBR 5410) e média tensão (NBR 14039)." },
      { title: "Motores e Acionamentos", text: "Instalação e manutenção de motores trifásicos, inversores de frequência, soft-starters e proteções térmicas." },
      { title: "Aterramento e SPDA", text: "Malha de aterramento conforme NBR 5419, equipotencialização e instalação de para-raios para proteger ativos." },
      { title: "Termografia e Preditiva", text: "Inspeção termográfica de painéis e conexões, gerando laudo com pontos críticos e plano de correção." },
      { title: "Eletricista Emergência 24h", text: "Plantão para falhas críticas com tempo de resposta acordado em contrato — reduz paradas de produção." },
    ],
    process: [
      { title: "Diagnóstico Técnico", text: "Inspeção do prontuário NR-10, medição de carga, termografia e levantamento de não conformidades." },
      { title: "Projeto e Orçamento", text: "Orçamento eletricista detalhado com diagrama unifilar, lista de materiais e cronograma de parada." },
      { title: "Execução com Permissão de Trabalho", text: "PT (Permissão de Trabalho), análise preliminar de risco, bloqueio e etiquetagem (LOTO) antes de qualquer intervenção." },
      { title: "Testes e Comissionamento", text: "Testes de continuidade, isolamento, sequência de fase, partida controlada de motores e ajuste de proteções." },
      { title: "Entrega com ART e Laudo", text: "Entrega com ART CREA-CE, laudo técnico, diagrama atualizado e plano de manutenção." },
    ],
    standards: [
      "NR-10 (segurança em instalações elétricas)",
      "NR-10 SEP (Sistema Elétrico de Potência)",
      "NBR 5410 (baixa tensão)",
      "NBR 14039 (média tensão)",
      "NBR 5419 (SPDA)",
      "ART CREA-CE",
      "PT, APR e LOTO",
    ],
    trust: [
      "Eletricistas certificados NR-10 e NR-10 SEP com reciclagem em dia",
      "ART de execução assinada por engenheiro eletricista",
      "Equipe própria CLT com PCMSO, PPRA e ASOs atualizados",
      "Eletricista emergência 24h para clientes com contrato",
      "Termografia e laudo técnico inclusos em contratos preventivos",
    ],
    geo: "Atendemos indústrias do Distrito Industrial de Teresina (DIT), Complexo Industrial e Portuário do DIT (DIT), Demerval Lobão, Timon-MA e plantas fabris em toda a Grande Teresina. Conhecemos a particularidade do fornecimento da concessionária local Piauí e dimensionamos sistemas resistentes à corrosão pela calor e poeira em instalações próximas ao litoral.",
    faq: [
      { q: "Vocês emitem ART para serviços industriais?", a: "Sim. Toda obra industrial é entregue com ART (Anotação de Responsabilidade Técnica) assinada por engenheiro eletricista registrado no CREA-CE." },
      { q: "Quanto custa contratar um eletricista industrial em Teresina?", a: "Manutenções pontuais partem de R$ 350 por chamado técnico e contratos mensais variam conforme criticidade. Fazemos visita técnica gratuita para orçamento eletricista detalhado." },
      { q: "Atendem emergência 24h?", a: "Sim. Clientes com contrato têm eletricista emergência 24h com SLA acordado, ideal para indústrias que não podem parar." },
      { q: "Trabalham com média tensão?", a: "Sim. Nossos eletricistas têm NR-10 SEP e executamos instalações e manutenções conforme NBR 14039 para subestações até 15 kV." },
      { q: "Fazem termografia preventiva?", a: "Sim. Termografia de painéis e conexões é parte do nosso plano de manutenção preventiva — entregamos laudo com fotos térmicas e plano de ação." },
    ],
    related: ["predial", "residencial"],
  },
  {
    slug: "residencial",
    code: "EL-02",
    h1: "Eletricista Residencial em Teresina",
    shortTitle: "Residencial",
    metaTitle: "Eletricista Residencial em Teresina | Chico Resolve",
    metaDescription:
      "Eletricista residencial em Teresina com eletricistas certificados e eletricista instalador. Serviço eletricista, emergência 24h e orçamento rápido.",
    summary:
      "Eletricista residencial certificado para instalação de quadros, tomadas, iluminação, chuveiros e atendimento de emergência em Teresina.",
    keywords: [
      "eletricista residencial",
      "eletricistas certificados",
      "eletricista instalador",
      "orçamento eletricista",
      "serviço eletricista",
      "eletricista emergência",
    ],
    intro:
      "A Chico Resolve oferece serviço eletricista residencial em Teresina com eletricistas certificados em NR-10 e foco em segurança da família. Atuamos como eletricista instalador (quadros de distribuição, tomadas, pontos de iluminação, chuveiros, ar-condicionado, automação básica) e como eletricista emergência para curto-circuito, queda de energia, chuveiro queimado ou ponto que aquece. Cada visita começa por diagnóstico com alicate amperímetro e checagem do quadro — antes de qualquer reparo, identificamos a causa para que o problema não volte. Trabalhamos das residências da Jóquei, Fátima e Ininga às casas de Cabral, Noivos e Timon-MA.",
    whenToHire: [
      { title: "Disjuntor desarmando", text: "Disjuntor cai sempre que liga chuveiro, microondas ou ar-condicionado — sinal de sobrecarga ou curto." },
      { title: "Tomada queimando ou aquecendo", text: "Cheiro de plástico, escurecimento ou ponto que esquenta indica conexão frouxa e risco de incêndio." },
      { title: "Reforma ou mudança", text: "Instalação de novos pontos, troca de quadro, adição de DR/DPS e atualização à NBR 5410." },
      { title: "Falta de energia parcial", text: "Apenas parte da casa sem luz indica falha em circuito específico, exige eletricista emergência." },
    ],
    types: [
      { title: "Instalação de Quadros", text: "Eletricista instalador de quadros de distribuição com DR (proteção a choque) e DPS (proteção contra surtos), atualizando a casa à NBR 5410." },
      { title: "Tomadas e Iluminação", text: "Novos pontos de tomada, iluminação LED, lustres pesados, fitas de LED e dimerização." },
      { title: "Chuveiros e Ar-Condicionado", text: "Circuito dedicado, disjuntor dimensionado e cabo correto para chuveiro, split e máquina de lavar." },
      { title: "Automação Residencial", text: "Interruptores inteligentes, cortina motorizada, iluminação por celular e integração com assistentes de voz." },
      { title: "Eletricista Emergência 24h", text: "Atendimento rápido para falha geral, curto-circuito, ponto queimado ou risco de choque — atendemos no mesmo dia." },
    ],
    process: [
      { title: "Visita Técnica com Diagnóstico", text: "Inspeção do quadro, medição de corrente e tensão, checagem de aterramento e identificação da causa raiz." },
      { title: "Orçamento Eletricista Detalhado", text: "Proposta clara com material, mão de obra, prazo e garantia — sem custos surpresa no fim do serviço." },
      { title: "Execução com Energia Desligada", text: "Sempre que possível, intervenção com circuito desenergizado, bloqueio e teste de ausência de tensão." },
      { title: "Testes Funcionais", text: "Teste de DR, sequência de fase, continuidade de aterramento e medição de tensão após o serviço." },
      { title: "Garantia e Recibo", text: "Recibo formal, nota fiscal opcional e garantia de 90 dias sobre o serviço executado." },
    ],
    standards: [
      "NR-10 (segurança em instalações elétricas)",
      "NBR 5410 (instalações elétricas de baixa tensão)",
      "NBR 5419 (SPDA quando aplicável)",
      "NR-6 (EPI)",
      "Padrão de entrada concessionária local Piauí",
    ],
    trust: [
      "Eletricistas certificados NR-10 com curso e reciclagem documentados",
      "Eletricista identificado com uniforme, crachá e EPI",
      "Garantia de 90 dias por escrito sobre o serviço",
      "Nota fiscal emitida quando solicitada",
      "Atendimento de eletricista emergência no mesmo dia",
    ],
    geo: "Atendemos residências em todos os bairros de Teresina — Jóquei, Fátima, Ininga, São Cristóvão, Horto, Morros, Cabral, Noivos, Bela Vista, Dirceu, Mocambinho e Centro — além de Timon-MA, Altos, José de Freitas e União. Trabalhamos com o padrão de entrada da concessionária local Piauí e dimensionamos proteções considerando a alta umidade do litoral.",
    faq: [
      { q: "Quanto custa um eletricista residencial em Teresina?", a: "Visita técnica de diagnóstico parte de R$ 150 (abatida do serviço). Serviços simples como troca de tomada partem de R$ 90; troca de quadro completa varia conforme número de circuitos. Solicite orçamento eletricista gratuito por WhatsApp." },
      { q: "Atendem emergência no mesmo dia?", a: "Sim. Para eletricista emergência (curto-circuito, sem energia, ponto queimando) priorizamos atendimento no mesmo dia em Teresina." },
      { q: "Por que preciso de DR e DPS no quadro?", a: "O DR protege contra choque elétrico, exigido pela NBR 5410 em áreas molhadas e tomadas externas. O DPS protege equipamentos contra surtos (raios, oscilações da rede). Ambos são considerados padrão moderno de segurança residencial." },
      { q: "Vocês emitem nota fiscal?", a: "Sim. Somos empresa formalizada com CNPJ e emitimos NF de serviço quando solicitada." },
      { q: "Trabalham com automação residencial?", a: "Sim. Instalamos interruptores inteligentes, automação de iluminação e integração com Alexa e Google Home." },
    ],
    related: ["predial", "industrial"],
  },
  {
    slug: "predial",
    code: "EL-03",
    h1: "Eletricista Predial em Teresina",
    shortTitle: "Predial",
    metaTitle: "Eletricista Predial em Teresina | Chico Resolve",
    metaDescription:
      "Eletricista predial em Teresina para condomínios e edifícios comerciais. Empresa de elétrica com eletricistas certificados, manutenção e emergência 24h.",
    summary:
      "Eletricista predial para condomínios residenciais e comerciais — barramentos, áreas comuns, bombas, iluminação e contratos de manutenção.",
    keywords: [
      "eletricista predial",
      "eletricistas certificados",
      "empresa de elétrica",
      "eletricista de manutenção",
      "orçamento eletricista",
      "eletricista emergência",
    ],
    intro:
      "Como empresa de elétrica especializada em condomínios e edifícios comerciais de Teresina, a Chico Resolve atua como eletricista predial com eletricistas certificados NR-10 para instalações coletivas: barramento blindado, prumadas, quadros de medição, áreas comuns, garagens, bombas de recalque, pressurização de escadas, iluminação de emergência e sistemas de detecção. Atendemos síndicos, administradoras e gerentes prediais com contratos de eletricista de manutenção (preventiva mensal + corretiva por chamado) e plantão de eletricista emergência 24h para falhas em elevadores, bombas e iluminação de circulação. Cada serviço gera relatório fotográfico para a administração e atende às exigências do Corpo de Bombeiros do Piauí.",
    whenToHire: [
      { title: "Falha em bomba de recalque", text: "Reservatório superior sem abastecer indica falha no painel, sensor de nível ou motor — afeta toda a coluna." },
      { title: "Iluminação de emergência apagada", text: "Luminárias autônomas com bateria vencida ou painel central com falha — não conformidade com Bombeiros." },
      { title: "Renovação do AVCB", text: "Vistoria do Corpo de Bombeiros exige instalações elétricas conformes, SPDA, iluminação e detecção operantes." },
      { title: "Curto em área comum", text: "Garagem, hall ou corredor sem energia — eletricista emergência para isolar circuito e religar." },
    ],
    types: [
      { title: "Quadros e Barramentos Prediais", text: "Manutenção e retrofit de quadros de medição, barramentos blindados e quadros de áreas comuns em condomínios." },
      { title: "Bombas e Pressurização", text: "Painéis de comando de bombas de recalque, incêndio, drenagem e pressurização de escadas (segurança contra incêndio)." },
      { title: "Iluminação de Emergência e Detecção", text: "Manutenção de luminárias autônomas, centrais de iluminação de emergência e detectores de fumaça para AVCB." },
      { title: "SPDA Predial", text: "Inspeção e manutenção do Sistema de Proteção contra Descargas Atmosféricas conforme NBR 5419." },
      { title: "Contrato de Eletricista de Manutenção", text: "Visitas mensais com checklist, relatório fotográfico ao síndico e atendimento de chamados corretivos." },
    ],
    process: [
      { title: "Vistoria Inicial do Edifício", text: "Levantamento de quadros, áreas comuns, bombas, SPDA e iluminação de emergência, com checklist documentado." },
      { title: "Plano e Orçamento", text: "Proposta de contrato com escopo, periodicidade, SLA de emergência e orçamento eletricista mensal fixo." },
      { title: "Manutenção Preventiva Mensal", text: "Reaperto de conexões, teste de DRs, inspeção termográfica, troca de lâmpadas e verificação de baterias." },
      { title: "Atendimento Corretivo e Emergência", text: "Chamados via WhatsApp com prioridade definida; eletricista emergência 24h para falhas críticas." },
      { title: "Relatório ao Síndico", text: "Relatório mensal com fotos, itens executados, pendências e recomendações para a próxima assembleia." },
    ],
    standards: [
      "NR-10 (segurança em instalações elétricas)",
      "NBR 5410 (instalações de baixa tensão)",
      "NBR 5419 (SPDA)",
      "IT do Corpo de Bombeiros do Piauí (CBMEPI)",
      "Convenção de condomínio do edifício",
      "ART de manutenção CREA-CE",
    ],
    trust: [
      "Empresa de elétrica com CNPJ, contrato e nota fiscal",
      "Eletricistas certificados NR-10 identificados com uniforme e crachá",
      "Eletricista emergência 24h com SLA por escrito",
      "Relatório fotográfico mensal para a administração",
      "ART de manutenção para apresentar em assembleia e ao seguro predial",
    ],
    geo: "Atendemos edifícios residenciais e comerciais em Teresina inteira — incluindo prédios na Centro, Jóquei, Fátima, Ininga, Bela Vista, Morros e Cabral — além de empreendimentos em Timon-MA, Altos e José de Freitas. Conhecemos as exigências da concessionária local Piauí para entrada de energia e do CBMEPI para vistoria do AVCB.",
    faq: [
      { q: "Qual o prazo mínimo de contrato de eletricista predial?", a: "Trabalhamos com contratos a partir de 6 meses, com possibilidade de período de teste de 1 mês para o síndico avaliar o atendimento." },
      { q: "Como funciona o eletricista emergência 24h?", a: "O síndico ou zelador aciona um WhatsApp dedicado; eletricistas certificados respondem em até 1h e comparecem conforme criticidade definida no contrato." },
      { q: "Vocês ajudam na renovação do AVCB?", a: "Sim. Vistoriamos iluminação de emergência, detecção, SPDA e quadros, corrigimos não conformidades e emitimos laudo para a vistoria do Corpo de Bombeiros." },
      { q: "Emitem ART de manutenção?", a: "Sim. Em contratos com responsabilidade técnica continuada, emitimos ART de manutenção registrada no CREA-CE." },
      { q: "Atendem condomínios pequenos?", a: "Sim. Temos planos para edifícios a partir de 8 unidades com mensalidade compatível com condomínios de pequeno porte." },
    ],
    related: ["industrial", "residencial"],
  },
];

export const getEletricaSubservice = (slug: string): EletricaSubservice | undefined =>
  eletricaSubservices.find((s) => s.slug === slug);

// ============================================================================
// Hidráulica: hub + sub-páginas otimizadas para clusters de palavras-chave.
// H1 = keyword principal; conteúdo único focado em E-E-A-T, GEO Teresina/PI,
// normas NBR 5626/8160 e Service + Breadcrumb + FAQPage JSON-LD.
// ============================================================================

export type HidraulicaSlug =
  | "servico-hidraulico"
  | "desentupidora"
  | "desentupimento-esgoto"
  | "encanador-residencial"
  | "encanador-predial";

export interface HidraulicaSubservice {
  slug: HidraulicaSlug;
  code: string;
  h1: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  keywords: string[];
  intro: string;
  whenToHire: { title: string; text: string }[];
  types: { title: string; text: string }[];
  process: { title: string; text: string }[];
  standards: string[];
  trust: string[];
  geo: string;
  faq: { q: string; a: string }[];
  related: HidraulicaSlug[];
}

export const hidraulicaSubservices: HidraulicaSubservice[] = [
  {
    slug: "servico-hidraulico",
    code: "HD-01",
    h1: "Serviço Hidráulico em Teresina",
    shortTitle: "Serviço Hidráulico",
    metaTitle: "Serviço Hidráulico em Teresina | Chico Resolve",
    metaDescription:
      "Serviço hidráulico em Teresina com bombeiro hidráulico: conserto hidráulico, troca de válvula Hydra e sistema hidráulico industrial. Emergência 24h.",
    summary:
      "Conserto hidráulico completo com bombeiro hidráulico — válvulas Hydra, sistemas industriais e tubulação predial em Teresina.",
    keywords: [
      "serviço hidráulico",
      "conserto hidráulico",
      "bombeiro hidráulico",
      "conserto de válvula hydra",
      "empresas de hidráulica",
      "sistema hidráulico industrial",
    ],
    intro:
      "A Chico Resolve é uma das empresas de hidráulica de Teresina com bombeiro hidráulico próprio para conserto hidráulico em residências, condomínios e indústrias. Executamos desde a substituição de uma válvula Hydra ou Docol que perdeu a vedação até a montagem de sistema hidráulico industrial completo — barriletes, recalque, hidrômetros, registros de gaveta e esfera, prumadas em CPVC ou PPR e tubulação de água quente. Cada chamado começa por diagnóstico com manômetro e inspeção visual da rede; só depois entregamos orçamento por escrito. Atendemos com nota fiscal, garantia e relatório fotográfico do antes e depois.",
    whenToHire: [
      { title: "Válvula Hydra escapando água", text: "Descarga que não fecha, gotejamento contínuo ou vazamento pelo reparo — exige troca do kit de vedação ou da válvula completa." },
      { title: "Conta d'água subiu sem motivo", text: "Indício de vazamento oculto na rede de água fria — exige geofone e inspeção da prumada." },
      { title: "Pressão baixa nos chuveiros", text: "Bomba pressurizadora danificada, registro fechado ou tubulação obstruída por incrustação." },
      { title: "Obra ou ampliação industrial", text: "Nova linha de produção, ampliação de cozinha industrial ou troca de barrilete exige projeto e bombeiro hidráulico." },
    ],
    types: [
      { title: "Conserto Hidráulico em Geral", text: "Troca de torneiras, registros, sifões, flexíveis, engates, válvulas de descarga e reparos rápidos no mesmo dia." },
      { title: "Conserto de Válvula Hydra e Docol", text: "Substituição completa ou troca do kit reparo de válvulas Hydra Master, Hydra Max, Docol Benefit e similares com vedação testada." },
      { title: "Sistema Hidráulico Industrial", text: "Projeto e execução de barriletes, recalque, hidrômetros setoriais, ar comprimido e linhas de processo em aço carbono ou inox." },
      { title: "Bombas e Pressurizadores", text: "Instalação e manutenção de bombas de recalque, pressurizadores residenciais e conjuntos elevatórios prediais." },
      { title: "Emergência 24h", text: "Plantão para vazamento crítico, rompimento de prumada ou falha em bomba — atendimento imediato em Teresina." },
    ],
    process: [
      { title: "Diagnóstico Técnico", text: "Inspeção da rede, medição de pressão com manômetro, geofone quando necessário e identificação da causa raiz." },
      { title: "Orçamento por Escrito", text: "Proposta detalhada com material, mão de obra, prazo e garantia — sem cobrança surpresa no fim do serviço." },
      { title: "Execução Limpa", text: "Proteção do ambiente, equipe uniformizada, ferramentas próprias e descarte adequado do entulho." },
      { title: "Teste de Estanqueidade", text: "Pressurização da rede, verificação de cada conexão e teste com cliente presente." },
      { title: "Entrega com Garantia", text: "Recibo formal, NF quando solicitada e garantia de 90 dias a 12 meses conforme o serviço." },
    ],
    standards: [
      "NBR 5626 (instalação predial de água fria)",
      "NBR 7198 (instalação de água quente)",
      "NBR 5648 (PVC soldável)",
      "NBR 15813 (PPR para água quente e fria)",
      "NR-6 (EPI) e NR-18 (canteiro)",
    ],
    trust: [
      "Empresa de hidráulica com CNPJ — emite nota fiscal e contrato",
      "Bombeiro hidráulico CLT identificado com uniforme e crachá",
      "Equipamentos próprios: geofone, manômetro, prensa para PPR e máquina de solda",
      "Garantia de 90 dias a 12 meses por escrito",
      "Atendimento de emergência hidráulica 24h",
    ],
    geo: "Atendemos toda Teresina — Jóquei, Fátima, Ininga, São Cristóvão, Horto, Cabral, Noivos, Dirceu, Centro — além de indústrias no Distrito Industrial de Teresina (DIT), DIT e plantas em Timon-MA, Altos e José de Freitas. Conhecemos as particularidades da pressão fornecida pela rede de água local e dimensionamos sistemas resistentes à calor e poeira em metais cromados do interior do Piauí.",
    faq: [
      { q: "Quanto custa um conserto hidráulico em Teresina?", a: "Visita técnica parte de R$ 120 (abatida do serviço). Trocas pontuais (torneira, registro, sifão) partem de R$ 90 mais material. Para sistema hidráulico industrial, orçamento sob projeto." },
      { q: "Vocês trocam válvula Hydra no mesmo dia?", a: "Sim. Conserto de válvula Hydra é executado no mesmo dia: levamos o kit reparo ou a válvula completa dependendo do estado." },
      { q: "Atendem indústrias?", a: "Sim. Projetamos e executamos sistema hidráulico industrial — barriletes, recalque, água de processo e ar comprimido — com ART quando aplicável." },
      { q: "Tem garantia no serviço?", a: "Sim. Garantia de 90 dias para reparos pontuais e até 12 meses para instalação de rede nova." },
      { q: "Vocês emitem nota fiscal?", a: "Sim. Como empresa formalizada, emitimos NF de serviço sempre que solicitada." },
    ],
    related: ["encanador-residencial", "encanador-predial", "desentupidora"],
  },
  {
    slug: "desentupidora",
    code: "HD-02",
    h1: "Desentupidora em Teresina",
    shortTitle: "Desentupidora",
    metaTitle: "Desentupidora em Teresina 24h | Chico Resolve",
    metaDescription:
      "Desentupidora em Teresina com empresa de desentupir canos e encanador urgente. Desentupir tubulação de água com hidrojato. Atendimento 24h.",
    summary:
      "Desentupidora com hidrojateamento e equipamento próprio para desentupir canos e tubulação de água em Teresina — encanador urgente 24h.",
    keywords: [
      "desentupidora",
      "empresa de desentupir canos",
      "empresa de desentupimento de cano",
      "encanador urgente",
      "desentupir tubulação de agua",
    ],
    intro:
      "A Chico Resolve é uma desentupidora em Teresina com equipamento próprio para desentupir canos de cozinha, banheiro, pia, máquina de lavar e tubulação de água em residências, condomínios e empresas. Como empresa de desentupimento de cano, usamos hidrojateamento de alta pressão e máquinas rotativas (roto-rooter) que removem gordura, sabão, raízes e incrustações sem quebrar piso ou parede. Funcionamos como encanador urgente: chamado por WhatsApp, técnico no local em poucas horas, sem cobrar deslocamento dentro de Teresina. Cada serviço inclui teste de vazão após o desentupimento e relatório com fotos do antes e depois.",
    whenToHire: [
      { title: "Pia da cozinha não escoa", text: "Acúmulo de gordura no sifão e na coluna — exige hidrojato ou mola para liberar o caminho." },
      { title: "Vaso sanitário entupido", text: "Papel, absorvente ou objeto preso — máquina rotativa resolve sem quebra do vaso." },
      { title: "Tubulação de água com baixa vazão", text: "Incrustação calcária ou ferrugem reduzindo o fluxo — exige desentupir tubulação de água com pressão controlada." },
      { title: "Caixa de gordura transbordando", text: "Saturação da caixa de gordura e da rede primária — sucção e hidrojato para limpeza completa." },
    ],
    types: [
      { title: "Desentupir Canos de Cozinha", text: "Pia, sifão e coluna obstruídos por gordura — hidrojato e máquina rotativa para remoção completa, sem quebra." },
      { title: "Desentupir Vaso e Banheiro", text: "Vaso sanitário, ralo de box e bidê com obstrução, incluindo retirada de objetos com câmera de inspeção." },
      { title: "Desentupir Tubulação de Água", text: "Limpeza de tubulação obstruída por incrustação ou corpo estranho, restabelecendo vazão sem trocar a coluna." },
      { title: "Caixa de Gordura e Inspeção", text: "Limpeza, sucção e higienização de caixa de gordura, caixa de inspeção e ralos de área externa." },
      { title: "Encanador Urgente 24h", text: "Atendimento de emergência para vazamento, transbordo e obstrução — saída imediata em Teresina." },
    ],
    process: [
      { title: "Atendimento por WhatsApp", text: "Cliente envia descrição e fotos — orientação inicial e janela de atendimento confirmada no mesmo contato." },
      { title: "Vistoria no Local", text: "Identificação do ponto de obstrução, escolha do equipamento (hidrojato, mola, sucção) e orçamento fechado antes de iniciar." },
      { title: "Desentupimento Técnico", text: "Execução com proteção do ambiente, sem quebra desnecessária e com EPIs adequados ao serviço." },
      { title: "Teste de Vazão", text: "Liberação de água com cliente presente para confirmar restabelecimento completo do fluxo." },
      { title: "Garantia e Recomendações", text: "Garantia de 30 a 90 dias e orientação para evitar nova obstrução (uso de tela, descarte correto de gordura)." },
    ],
    standards: [
      "NBR 8160 (sistemas prediais de esgoto sanitário)",
      "NBR 5626 (água fria)",
      "NR-6 (EPI) e NR-33 (espaços confinados quando aplicável)",
      "Procedimentos de biossegurança para esgoto",
    ],
    trust: [
      "Empresa de desentupir canos com CNPJ, nota fiscal e contrato",
      "Hidrojato, máquina rotativa e sucção próprios — não terceirizamos equipamento",
      "Encanador urgente 24h via WhatsApp dedicado",
      "Garantia de 30 a 90 dias por escrito",
      "Sem cobrança de visita técnica em Teresina",
    ],
    geo: "Como desentupidora em Teresina, atendemos todos os bairros — Jóquei, Fátima, Ininga, São Cristóvão, Horto, Morros, Cabral, Noivos, Bela Vista, Dirceu, Mocambinho e Centro — além de Timon-MA, Altos, José de Freitas e União. Atuamos em condomínios, casas, indústrias e estabelecimentos comerciais com equipamentos compatíveis com a rede da rede de água local.",
    faq: [
      { q: "Quanto custa uma desentupidora em Teresina?", a: "Desentupimentos simples (pia, vaso) partem de R$ 150. Hidrojateamento de coluna ou caixa de gordura tem orçamento por extensão e grau de obstrução. Sem taxa de visita." },
      { q: "Vocês atendem 24h?", a: "Sim. Funcionamos como encanador urgente 24h — chamados via WhatsApp são respondidos em minutos e a equipe sai imediatamente em casos críticos." },
      { q: "Precisa quebrar a parede para desentupir?", a: "Na maioria dos casos, não. Hidrojato e máquina rotativa entram pelos ralos e caixas de inspeção sem nenhuma quebra." },
      { q: "Conseguem desentupir tubulação de água potável?", a: "Sim. Para tubulação de água com incrustação, usamos pressão controlada para evitar dano à rede de PVC, CPVC ou PPR." },
      { q: "Tem garantia?", a: "Sim. Garantia de 30 a 90 dias dependendo do tipo de obstrução e da causa identificada." },
    ],
    related: ["desentupimento-esgoto", "encanador-residencial", "encanador-predial"],
  },
  {
    slug: "desentupimento-esgoto",
    code: "HD-03",
    h1: "Desentupimento de Esgoto em Teresina",
    shortTitle: "Desentupimento de Esgoto",
    metaTitle: "Desentupimento de Esgoto em Teresina | Chico Resolve",
    metaDescription:
      "Desentupimento de esgoto em Teresina com desentupidor de cano de esgoto, desentupimento de ralo e encanador urgente. Hidrojato e videoinspeção 24h.",
    summary:
      "Desentupimento de esgoto, desentupimento de ralo e desobstrução de rede com hidrojato e videoinspeção — encanador urgente em Teresina.",
    keywords: [
      "desentupimento de esgoto",
      "desentupidor de cano de esgoto",
      "desentupimento de ralo",
      "encanador urgente",
      "desentupimento esgoto",
    ],
    intro:
      "Desentupimento de esgoto exige equipamento certo e técnica — não é trabalho para mola de aço alugada. A Chico Resolve atua como desentupidor de cano de esgoto em Teresina com hidrojato de alta pressão, máquinas rotativas profissionais e câmera de videoinspeção para localizar a causa exata da obstrução (raízes invasivas, gordura, papel, incrustação ou ruptura). Fazemos desentupimento de ralo de box, ralo sifonado, ralo de cozinha, ramal predial, caixa de gordura e ligação com a rede pública. Funcionamos como encanador urgente 24h porque desentupimento esgoto crítico não pode esperar — refluxo em condomínio, transbordo em restaurante ou esgoto na sala de casa exigem resposta imediata.",
    whenToHire: [
      { title: "Ralo voltando água suja", text: "Sinal clássico de obstrução na rede primária — exige hidrojato no ramal, não só no ralo." },
      { title: "Cheiro forte de esgoto em casa", text: "Sifão seco, ralo sem fecho hídrico ou ruptura no esgoto subterrâneo." },
      { title: "Vaso transbordando", text: "Obstrução depois do vaso, na coluna ou na caixa de inspeção — exige videoinspeção." },
      { title: "Caixa de gordura saturada", text: "Restaurante, condomínio ou cozinha doméstica com caixa cheia precisa de sucção e hidrojato preventivo." },
    ],
    types: [
      { title: "Desentupimento de Ralo", text: "Ralo de box, sifonado, de cozinha e de quintal — remoção de cabelo, gordura, fragmentos e incrustação." },
      { title: "Desentupidor de Cano de Esgoto", text: "Coluna de esgoto vertical e ramais horizontais com máquina rotativa de cabo até 30 metros." },
      { title: "Hidrojateamento de Esgoto", text: "Hidrojato de até 4.000 PSI que corta raízes, gordura solidificada e incrustação sem ferir a tubulação." },
      { title: "Videoinspeção de Tubulação", text: "Câmera colorida com transmissão ao vivo para identificar trincas, rupturas e o ponto exato da obstrução." },
      { title: "Limpeza de Caixa de Gordura e Inspeção", text: "Sucção do volume saturado, higienização e plano de manutenção preventiva mensal ou trimestral." },
    ],
    process: [
      { title: "Triagem por WhatsApp", text: "Cliente descreve o problema e envia fotos; orientação inicial e janela de atendimento — encanador urgente quando crítico." },
      { title: "Vistoria e Diagnóstico", text: "Inspeção dos ralos, caixas de passagem e prumada; uso de câmera quando necessário para localizar a obstrução." },
      { title: "Orçamento Fechado", text: "Valor por escrito antes do início, sem alteração no fim — incluindo descarte adequado do resíduo." },
      { title: "Execução com Biossegurança", text: "Hidrojato ou máquina rotativa com EPIs completos, proteção do ambiente e desinfecção do entorno." },
      { title: "Teste e Garantia", text: "Vazão liberada com cliente presente, descarte adequado e garantia de 30 a 90 dias por escrito." },
    ],
    standards: [
      "NBR 8160 (sistemas prediais de esgoto sanitário)",
      "NBR 13969 (tratamento de efluentes)",
      "NR-6 (EPI) e NR-33 (espaços confinados)",
      "Procedimentos de biossegurança",
      "Diretrizes rede de água local para ligação na rede pública",
    ],
    trust: [
      "Desentupidor de cano de esgoto com equipe própria e equipamento profissional",
      "Hidrojato e câmera de videoinspeção próprios — sem aluguel",
      "Encanador urgente 24h para emergência de esgoto",
      "Descarte adequado do resíduo conforme norma ambiental",
      "Garantia formal de 30 a 90 dias",
    ],
    geo: "Atendemos desentupimento esgoto em todos os bairros de Teresina — incluindo restaurantes da Dirceu e Centro, condomínios em Jóquei, Fátima e Ininga, e residências em Cabral, Noivos e Bela Vista — além de Timon-MA, Altos, José de Freitas e União. Conhecemos as particularidades da rede coletora da rede de água local e do solo arenoso do interior do Piauí que favorece infiltração de raízes.",
    faq: [
      { q: "Quanto custa o desentupimento de esgoto em Teresina?", a: "Desentupimento de ralo simples parte de R$ 150. Hidrojateamento de coluna de esgoto ou ramal predial é orçado por extensão e grau de obstrução, após vistoria gratuita." },
      { q: "Qual a diferença entre máquina rotativa e hidrojato?", a: "Máquina rotativa quebra a obstrução com cabo metálico; hidrojato corta com água em alta pressão (até 4.000 PSI). Para gordura solidificada, raízes e limpeza completa, o hidrojato é superior." },
      { q: "Vocês fazem videoinspeção?", a: "Sim. Câmera colorida com transmissão ao vivo localiza trincas, raízes e o ponto exato da obstrução, evitando quebras desnecessárias." },
      { q: "Atendem condomínios e restaurantes?", a: "Sim. Atendemos contratos de manutenção preventiva mensal ou trimestral para caixas de gordura, ramais prediais e estação de tratamento." },
      { q: "Atendem emergência no mesmo dia?", a: "Sim. Para esgoto transbordando ou refluxo crítico, mobilizamos encanador urgente em até 2 horas em Teresina." },
    ],
    related: ["desentupidora", "encanador-predial", "encanador-residencial"],
  },
  {
    slug: "encanador-residencial",
    code: "HD-04",
    h1: "Encanador Residencial em Teresina",
    shortTitle: "Encanador Residencial",
    metaTitle: "Encanador Residencial em Teresina | Chico Resolve",
    metaDescription:
      "Encanador residencial em Teresina com encanador profissional e urgente. Serviços hidráulicos residenciais, encanador e desentupidor com garantia.",
    summary:
      "Encanador hidráulico residencial profissional para vazamento, troca de tubulação, desentupimento e instalação em casas e apartamentos.",
    keywords: [
      "encanador residencial",
      "encanador",
      "serviços hidráulicos residenciais",
      "encanador urgente",
      "serviço de encanador",
      "encanador hidráulico residencial",
      "encanador profissional",
      "encanador e desentupidor",
      "desentupir tubulação de agua",
    ],
    intro:
      "A Chico Resolve oferece serviço de encanador residencial em Teresina com encanador profissional CLT, uniformizado e identificado para atender casas e apartamentos com tranquilidade. Cobrimos toda a linha de serviços hidráulicos residenciais: troca de torneiras, registros e flexíveis, instalação de máquina de lavar e tanquinho, conserto de descarga, troca de tubulação aparente ou embutida, detecção de vazamento, desentupir tubulação de água e desobstrução de ralos. Como encanador e desentupidor, resolvemos numa visita problemas que outros precisariam dividir em dois chamados. Funcionamos também como encanador urgente: chamados via WhatsApp com saída imediata para vazamento, ralo transbordando ou chuveiro sem pressão.",
    whenToHire: [
      { title: "Vazamento na parede ou teto", text: "Mancha, bolha na pintura ou pingo — indica vazamento na tubulação embutida, exige geofone." },
      { title: "Conta d'água alta sem motivo", text: "Possível vazamento oculto — encanador profissional faz teste de hidrômetro e localiza o ponto." },
      { title: "Reforma de banheiro ou cozinha", text: "Reposicionamento de pontos de água, instalação de novo aquecedor, máquina de lavar ou lava-louças." },
      { title: "Ralo voltando ou pia entupida", text: "Encanador e desentupidor numa só visita — sem precisar contratar duas empresas." },
    ],
    types: [
      { title: "Reparos Rápidos", text: "Troca de torneira, registro, sifão, flexível, engate e válvula de descarga no mesmo dia." },
      { title: "Detecção de Vazamento", text: "Geofone e câmera para localizar vazamento embutido sem quebrar piso ou parede desnecessariamente." },
      { title: "Troca de Tubulação", text: "Substituição de coluna de água fria, água quente em PPR e ramais danificados por incrustação ou corrosão." },
      { title: "Instalação de Equipamentos", text: "Máquina de lavar, tanquinho, lava-louças, aquecedor a gás, ducha higiênica, filtro de água e softener." },
      { title: "Encanador e Desentupidor", text: "Desentupir tubulação de água, vasos, ralos e pias — encanador residencial completo em uma visita." },
    ],
    process: [
      { title: "Agendamento por WhatsApp", text: "Cliente envia descrição e fotos; janela de atendimento confirmada e técnico chega no horário combinado." },
      { title: "Vistoria com Orçamento", text: "Encanador profissional avalia o problema, identifica a causa e entrega orçamento por escrito antes de iniciar." },
      { title: "Execução Limpa", text: "Proteção de móveis e piso, ferramentas próprias, descarte adequado de material e mínimo de quebra." },
      { title: "Teste com o Cliente", text: "Abertura de água, verificação de vazamento e pressão com cliente presente." },
      { title: "Recibo e Garantia", text: "Recibo formal, NF se solicitada e garantia de 90 dias a 12 meses conforme o serviço." },
    ],
    standards: [
      "NBR 5626 (instalação predial de água fria)",
      "NBR 7198 (água quente)",
      "NBR 8160 (esgoto sanitário)",
      "Padrão rede de água local para ligação predial",
      "NR-6 (EPI)",
    ],
    trust: [
      "Encanador hidráulico residencial CLT, identificado com uniforme e crachá",
      "Empresa formalizada com CNPJ, contrato e nota fiscal",
      "Garantia de 90 dias a 12 meses por escrito",
      "Encanador urgente 24h via WhatsApp dedicado",
      "Geofone próprio para detecção sem quebra",
    ],
    geo: "Atendemos residências em todos os bairros de Teresina — Jóquei, Fátima, Ininga, São Cristóvão, Horto, Morros, Cabral, Noivos, Bela Vista, Dirceu, Mocambinho e Centro — além de casas em Timon-MA, Altos, José de Freitas e União. Trabalhamos com tubulação compatível com o padrão rede de água local e tintas/vedantes resistentes à calor e poeira em metais expostos no interior do Piauí.",
    faq: [
      { q: "Quanto custa um encanador residencial em Teresina?", a: "Visita técnica parte de R$ 120 (abatida do serviço). Serviços simples como troca de torneira partem de R$ 80; detecção de vazamento sem quebra a partir de R$ 280. Orçamento gratuito por WhatsApp." },
      { q: "Vocês conseguem detectar vazamento sem quebrar parede?", a: "Sim. Usamos geofone eletrônico, câmera de inspeção e teste de pressão para localizar o ponto exato — só quebramos o estritamente necessário." },
      { q: "Atendem emergência?", a: "Sim. Encanador urgente 24h para vazamento, ralo transbordando ou rompimento de tubulação — saída imediata em Teresina." },
      { q: "Vocês também desentopem ralos e canos?", a: "Sim. Atuamos como encanador e desentupidor — desentupir tubulação de água, vasos, ralos e pias na mesma visita." },
      { q: "Tem garantia escrita?", a: "Sim. Garantia de 90 dias para reparos pontuais e até 12 meses para troca de tubulação ou instalação nova." },
    ],
    related: ["encanador-predial", "servico-hidraulico", "desentupidora"],
  },
  {
    slug: "encanador-predial",
    code: "HD-05",
    h1: "Encanador Predial em Teresina",
    shortTitle: "Encanador Predial",
    metaTitle: "Encanador Predial em Teresina | Chico Resolve",
    metaDescription:
      "Encanador predial em Teresina para condomínios e apartamentos. Empresa de encanador especializado em vazamento e detecção sem quebra. 24h.",
    summary:
      "Empresa de encanador predial para condomínios e edifícios — detecção de vazamento, prumadas, recalque, apartamentos e manutenção preventiva.",
    keywords: [
      "encanador predial",
      "empresa de encanador",
      "encanador especializado em vazamento",
      "desentupir tubulação de agua",
      "encanador para apartamento",
      "encanador detectar vazamento",
    ],
    intro:
      "Como empresa de encanador especializada em edifícios, a Chico Resolve atua como encanador predial em Teresina com foco em condomínios, edifícios comerciais e atendimento de encanador para apartamento. Cuidamos das instalações coletivas — prumadas de água fria e quente, barriletes, hidrômetros individualizados, bombas de recalque, reservatórios, sistema de combate a incêndio e rede de esgoto — e do que é privativo de cada unidade. Como encanador especializado em vazamento, usamos geofone, câmera termográfica e gás traçador para encanador detectar vazamento na prumada sem quebrar o apartamento do vizinho. Atendemos síndicos, administradoras e moradores com contrato de manutenção, plantão de emergência 24h e relatório fotográfico mensal para a assembleia.",
    whenToHire: [
      { title: "Vazamento no teto do apartamento de baixo", text: "Pode ser do vizinho de cima ou da prumada predial — exige encanador especializado em vazamento com geofone." },
      { title: "Pressão fraca em toda a coluna", text: "Falha no recalque, registro fechado ou incrustação na prumada — afeta vários apartamentos." },
      { title: "Conta d'água do condomínio subindo", text: "Vazamento em área comum, em prumada ou em hidrômetro descalibrado — exige inspeção completa." },
      { title: "Renovação do AVCB", text: "Sistema de combate a incêndio exige teste de pressão, registros operantes e laudo de hidráulica." },
    ],
    types: [
      { title: "Detecção de Vazamento Predial", text: "Encanador detectar vazamento com geofone, câmera termográfica e gás traçador na prumada, sem quebra desnecessária." },
      { title: "Encanador para Apartamento", text: "Serviços hidráulicos privativos: vazamento em parede, troca de registro, conserto de válvula Hydra, instalação de aquecedor." },
      { title: "Prumadas e Barriletes", text: "Manutenção e substituição de prumadas de água fria/quente e barriletes em CPVC, PPR ou aço galvanizado." },
      { title: "Bombas de Recalque e Reservatórios", text: "Manutenção de bombas, boias, sensores de nível, limpeza de reservatório e desinfecção conforme Anvisa." },
      { title: "Desentupir Tubulação de Água", text: "Desobstrução de tubulação predial por incrustação ou corpo estranho, restabelecendo vazão para a coluna afetada." },
    ],
    process: [
      { title: "Vistoria Inicial", text: "Levantamento do barrilete, prumadas, recalque, reservatórios e ramais — checklist documentado para o síndico." },
      { title: "Plano e Orçamento", text: "Proposta de contrato com escopo, periodicidade, SLA de emergência e valor mensal fixo." },
      { title: "Manutenção Preventiva", text: "Inspeção mensal de bombas, registros, válvulas e prumadas; teste de pressão e identificação precoce de patologias." },
      { title: "Atendimento Corretivo e Emergência", text: "Chamados via WhatsApp com prioridade; encanador urgente 24h para vazamento crítico em prumada ou recalque." },
      { title: "Relatório ao Síndico", text: "Relatório fotográfico mensal com itens executados, pendências e recomendações para a próxima assembleia." },
    ],
    standards: [
      "NBR 5626 (água fria predial)",
      "NBR 7198 (água quente)",
      "NBR 8160 (esgoto sanitário)",
      "NBR 13714 (sistemas de combate a incêndio por hidrantes)",
      "Portaria Anvisa para limpeza de reservatório",
      "Convenção de condomínio do edifício",
    ],
    trust: [
      "Empresa de encanador com CNPJ, contrato e nota fiscal",
      "Encanador especializado em vazamento com geofone e câmera termográfica próprios",
      "Encanador urgente 24h com SLA por escrito",
      "Relatório fotográfico mensal para a administração",
      "Equipe própria CLT — sem terceirização de risco",
    ],
    geo: "Atendemos edifícios residenciais e comerciais em Teresina inteira — incluindo prédios na Centro, Jóquei, Fátima, Ininga, Bela Vista, Morros e Cabral — além de empreendimentos em Timon-MA, Altos e José de Freitas. Conhecemos a particularidade da pressão da rede de água local em zonas altas da cidade e dimensionamos sistemas considerando a corrosão acelerada por calor e poeira em metais expostos.",
    faq: [
      { q: "Qual o prazo mínimo do contrato de encanador predial?", a: "Contratos a partir de 6 meses com possibilidade de 1 mês de teste para o síndico avaliar o atendimento." },
      { q: "Como vocês detectam vazamento em prumada sem quebrar o apartamento do vizinho?", a: "Usamos geofone eletrônico, câmera termográfica e, em casos complexos, gás traçador — localizamos o ponto exato e quebramos o mínimo necessário." },
      { q: "Atendem encanador para apartamento de morador, mesmo sem contrato?", a: "Sim. Atendemos chamados avulsos por unidade com orçamento por escrito antes da execução." },
      { q: "Vocês fazem manutenção de bombas de recalque?", a: "Sim. Inspeção mensal, teste de boias e sensores, limpeza de reservatório, desinfecção e troca de selo mecânico quando necessário." },
      { q: "Têm plantão 24h?", a: "Sim. Encanador urgente 24h via WhatsApp dedicado para vazamento em prumada, recalque parado ou rompimento crítico." },
    ],
    related: ["encanador-residencial", "servico-hidraulico", "desentupimento-esgoto"],
  },
];

export const getHidraulicaSubservice = (slug: string): HidraulicaSubservice | undefined =>
  hidraulicaSubservices.find((s) => s.slug === slug);

// ============================================================================
// Drywall: hub + sub-páginas otimizadas para clusters de palavras-chave.
// H1 = keyword principal; conteúdo único focado em E-E-A-T, GEO Teresina/PI,
// SEO técnico (Service + Breadcrumb + FAQPage JSON-LD).
// ============================================================================

export type DrywallSlug =
  | "instalacao-drywall"
  | "gesso-acartonado"
  | "gesseiro"
  | "forro-de-gesso"
  | "parede-de-drywall"
  | "divisoria-de-ambiente";

export interface DrywallSubservice {
  slug: DrywallSlug;
  code: string;
  h1: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  keywords: string[];
  intro: string;
  whenToHire: { title: string; text: string }[];
  types: { title: string; text: string }[];
  process: { title: string; text: string }[];
  standards: string[];
  trust: string[];
  geo: string;
  faq: { q: string; a: string }[];
  related: DrywallSlug[];
}

export const drywallSubservices: DrywallSubservice[] = [
  {
    slug: "instalacao-drywall",
    code: "DW-01",
    h1: "Instalação de Drywall em Teresina",
    shortTitle: "Instalação de Drywall",
    metaTitle: "Instalação de Drywall em Teresina | Chico Resolve",
    metaDescription:
      "Instalação de drywall em Teresina com empresa de drywall regularizada. Paredes, forros e divisórias com orçamento drywall rápido e garantia escrita.",
    summary:
      "Instalação de drywall completa — paredes, forros e divisórias — com perfis galvanizados, placa certificada e execução por equipe própria em Teresina.",
    keywords: [
      "instalação de drywall",
      "empresa de drywall",
      "orçamento drywall",
    ],
    intro:
      "A Chico Resolve é uma empresa de drywall em Teresina com equipe própria CLT dedicada à instalação de drywall em obras novas, reformas e ampliações comerciais. Executamos a montagem completa do sistema — marcação a laser, montantes e guias galvanizados, fechamento com placa standard, RU (resistente à umidade) ou RF (resistente ao fogo), tratamento de juntas com fita microperfurada e massa em três demãos — pronto para receber pintura. Cada orçamento drywall que entregamos é detalhado por ambiente, com metragem de placa, quantidade de perfis, isolamento (lã de rocha ou de vidro), portas e nichos, sem custo escondido depois.",
    whenToHire: [
      { title: "Obra nova ou ampliação", text: "Dividir sala, criar suíte, fechar varanda — drywall sobe em dias, sem alvenaria pesada." },
      { title: "Escritório ou loja comercial", text: "Layout que precisa mudar rápido sem gerar entulho ou paralisar a operação." },
      { title: "Esconder fiação e tubulação", text: "Forro ou parede para passar elétrica, hidráulica, ar-condicionado e cabeamento estruturado." },
      { title: "Conforto acústico", text: "Apartamento, hotel ou consultório que precisa isolar ruído entre ambientes." },
    ],
    types: [
      { title: "Parede Drywall ST (Standard)", text: "Placa branca padrão para áreas secas — quartos, salas e escritórios. Espessura 12,5 mm com perfis 48, 70 ou 90 mm." },
      { title: "Drywall RU (Verde / Umidade)", text: "Placa resistente à umidade para banheiros, cozinhas e áreas próximas ao mar — proteção contra mofo." },
      { title: "Drywall RF (Rosa / Fogo)", text: "Placa corta-fogo para shafts, casa de máquinas e compartimentação exigida pelo Corpo de Bombeiros." },
      { title: "Forro Drywall", text: "Forro liso, em desnível ou com sanca aberta para iluminação indireta — pronto para pintura em pouco tempo." },
      { title: "Divisória com Isolamento", text: "Parede dupla com lã de rocha ou de vidro para isolamento acústico e térmico." },
    ],
    process: [
      { title: "Visita Técnica e Medição", text: "Levantamento com trena a laser, conferência de prumo, registro de pontos elétricos e hidráulicos existentes." },
      { title: "Orçamento Drywall Detalhado", text: "Proposta por escrito com m² de placa, perfis, isolamento, portas, prazo e garantia — em até 24h úteis." },
      { title: "Montagem da Estrutura", text: "Marcação, fixação de guias no piso e teto, montantes a cada 40 ou 60 cm e reforço para TV, pia ou bancada." },
      { title: "Fechamento e Massa", text: "Parafusamento das placas, tratamento de juntas com fita microperfurada e massa em três demãos com lixamento fino." },
      { title: "Entrega Pronto para Pintura", text: "Limpeza do ambiente, vistoria conjunta e termo de garantia formal de 12 meses." },
    ],
    standards: [
      "NBR 15758 (sistemas construtivos em chapas de gesso)",
      "NBR 14715 (chapas de gesso para drywall)",
      "NBR 15217 (perfis de aço para drywall)",
      "NR-18 (canteiro de obras) e NR-35 (altura quando aplicável)",
    ],
    trust: [
      "Empresa de drywall com CNPJ, contrato e nota fiscal",
      "Fornecedores homologados Knauf, Placo e Gypsum",
      "Equipe própria CLT — sem terceirização de risco",
      "Orçamento drywall fechado, sem alteração no fim da obra",
      "Garantia escrita de 12 meses",
    ],
    geo: "Atendemos instalação de drywall em toda Teresina — Jóquei, Fátima, Ininga, São Cristóvão, Cabral, Noivos, Dirceu, Centro — e em obras de Timon-MA, Altos, José de Freitas e União. Em zonas urbanas com calor e poeira, recomendamos placa RU em áreas úmidas e cuidado redobrado com fixadores galvanizados para evitar corrosão acelerada típica do clima piauiense.",
    faq: [
      { q: "Quanto custa a instalação de drywall em Teresina?", a: "Parede drywall simples parte de R$ 110/m² incluindo material e mão de obra; forro liso de gesso a partir de R$ 95/m². Visita técnica gratuita para orçamento drywall exato." },
      { q: "Qual o prazo para montar uma parede de drywall?", a: "Uma parede de 10 m² fica pronta para pintura em 2 a 3 dias úteis com equipe de 2 montadores, contando massa e lixamento." },
      { q: "Drywall serve para banheiro e cozinha?", a: "Sim, desde que use placa RU (verde, resistente à umidade) e tratamento de juntas adequado. Áreas com contato direto e contínuo com água ainda exigem impermeabilização." },
      { q: "Vocês entregam a parede pronta para pintar?", a: "Sim. Entregamos com massa nivelada e lixamento fino — pintor pode aplicar selador no dia seguinte." },
      { q: "Tem garantia na instalação?", a: "Sim, garantia formal de 12 meses cobrindo trincas em juntas e desnivelamento em condições normais de uso." },
    ],
    related: ["gesso-acartonado", "parede-de-drywall", "forro-de-gesso"],
  },
  {
    slug: "gesso-acartonado",
    code: "DW-02",
    h1: "Gesso Acartonado em Teresina",
    shortTitle: "Gesso Acartonado",
    metaTitle: "Gesso Acartonado em Teresina | Chico Resolve",
    metaDescription:
      "Gesso acartonado em Teresina com placa drywall certificada Knauf, Placo e Gypsum. Drywall ou gesso acartonado: indicação técnica e orçamento.",
    summary:
      "Instalação de gesso acartonado (placa drywall) para paredes, forros e revestimentos com orientação técnica sobre drywall ou gesso tradicional.",
    keywords: [
      "gesso acartonado",
      "drywall ou gesso acartonado",
      "drywood gesso acartonado",
      "placa de gesso",
    ],
    intro:
      "Gesso acartonado e drywall são o mesmo sistema construtivo: uma placa de gesso revestida por duas folhas de cartão fixada em estrutura metálica galvanizada. A Chico Resolve trabalha em Teresina com gesso acartonado das marcas Knauf, Placo e Gypsum (incluindo linhas tipo Drywood gesso acartonado) — todas certificadas pela ABNT NBR 14715. A dúvida \"drywall ou gesso acartonado?\" surge porque no Nordeste ainda é comum o gesso liso tradicional (em pasta, aplicado direto na alvenaria) para forros. Cada sistema tem seu uso: gesso acartonado é mais rápido, seco, leve e permite isolamento; o gesso tradicional rende em forro fixo de pequena área. Orientamos a melhor escolha por ambiente.",
    whenToHire: [
      { title: "Comparar drywall e gesso tradicional", text: "Antes de fechar obra, vale entender custo, prazo e desempenho de cada sistema." },
      { title: "Obra com prazo curto", text: "Gesso acartonado dispensa cura úmida e libera o ambiente para pintura em poucos dias." },
      { title: "Reforma sem entulho", text: "Placa drywall gera fração do entulho de alvenaria — ideal para apartamento habitado." },
      { title: "Estrutura leve", text: "Lajes com sobrecarga limitada exigem sistema leve — gesso acartonado pesa muito menos que tijolo." },
    ],
    types: [
      { title: "Placa ST (Standard)", text: "Placa de gesso branca padrão para áreas secas — parede de quarto, sala, escritório, forro residencial." },
      { title: "Placa RU (Verde)", text: "Gesso acartonado com aditivo hidrofugante para banheiros, cozinhas, lavanderias e áreas com calor e poeira." },
      { title: "Placa RF (Rosa)", text: "Placa drywall corta-fogo para shafts, casa de máquinas, escadas enclausuradas e compartimentação." },
      { title: "Placa Acústica e Performance", text: "Linhas técnicas de fabricantes como Knauf Diamond e Placo Phonique para alto desempenho acústico." },
      { title: "Drywood Gesso Acartonado", text: "Linhas premium com maior resistência mecânica e acabamento superior — opção para projetos de alto padrão." },
    ],
    process: [
      { title: "Diagnóstico do Projeto", text: "Visita técnica e levantamento da finalidade (parede, forro, divisória) para indicar o tipo certo de placa." },
      { title: "Especificação Técnica", text: "Orçamento com marca, tipo de placa (ST, RU, RF), espessura, perfil e isolamento — sem genérico." },
      { title: "Aquisição com Fornecedor Homologado", text: "Compra direta de revendas autorizadas Knauf, Placo, Gypsum com nota fiscal e lote rastreável." },
      { title: "Montagem e Fechamento", text: "Estrutura metálica, parafusamento, tratamento de juntas com fita e massa em três demãos." },
      { title: "Acabamento e Entrega", text: "Lixamento fino, limpeza e entrega pronta para selador e pintura." },
    ],
    standards: [
      "NBR 14715 (chapas de gesso para drywall)",
      "NBR 15758 (sistemas construtivos em drywall)",
      "NBR 15217 (perfis de aço)",
      "Certificação ABNT e selo Inmetro nas placas",
    ],
    trust: [
      "Apenas placa drywall certificada — sem genérico sem origem",
      "Fornecedores homologados Knauf, Placo, Gypsum (e linhas Drywood)",
      "Orientação técnica honesta sobre drywall ou gesso acartonado por ambiente",
      "Equipe própria treinada nos manuais dos fabricantes",
      "Garantia escrita de 12 meses",
    ],
    geo: "Atendemos com gesso acartonado em Teresina inteira — Jóquei, Fátima, Ininga, Cabral, Noivos, Dirceu — além de Timon-MA, Altos, José de Freitas e União. Para edifícios em zona urbana (Centro, Mocambinho, Satélite) indicamos placa drywall RU como padrão para qualquer parede em contato com fachada externa, pois a calor e poeira acelera a deterioração de placas standard.",
    faq: [
      { q: "Qual a diferença entre drywall e gesso acartonado?", a: "Nenhuma. Drywall é o nome do sistema construtivo; gesso acartonado é o nome técnico da placa que compõe o sistema. Comercialmente são sinônimos." },
      { q: "Drywall ou gesso acartonado: o que escolher?", a: "Para parede e divisória, sempre drywall (gesso acartonado). Para forro liso simples em pequena área, gesso tradicional em pasta ainda é alternativa econômica." },
      { q: "O que é Drywood gesso acartonado?", a: "Drywood é uma das linhas premium disponíveis no mercado, com placas de maior resistência mecânica e acabamento. Trabalhamos com as principais marcas certificadas." },
      { q: "Placa drywall verde é à prova d'água?", a: "Não é à prova d'água, é resistente à umidade. Suporta vapor e respingos, mas áreas com água direta e contínua precisam de impermeabilização." },
      { q: "Onde aplicar placa RF (rosa)?", a: "Shafts, casa de máquinas, escadas enclausuradas, paredes de cozinha industrial e qualquer compartimentação corta-fogo exigida pelo Corpo de Bombeiros." },
    ],
    related: ["instalacao-drywall", "parede-de-drywall", "forro-de-gesso"],
  },
  {
    slug: "gesseiro",
    code: "DW-03",
    h1: "Gesseiro em Teresina",
    shortTitle: "Gesseiro",
    metaTitle: "Gesseiro Profissional em Teresina | Chico Resolve",
    metaDescription:
      "Gesseiro profissional em Teresina, colocador de drywall e mão de obra drywall com equipe CLT. Preço gesseiro honesto e orçamento detalhado.",
    summary:
      "Gesseiro profissional e colocador de drywall com equipe própria CLT para mão de obra de qualidade — preço justo e garantia escrita em Teresina.",
    keywords: [
      "gesseiro",
      "gesseiro profissional",
      "colocador de drywall",
      "mão de obra drywall",
      "preço gesseiro",
    ],
    intro:
      "Encontrar gesseiro profissional confiável em Teresina é um dos maiores gargalos de quem reforma. A Chico Resolve mantém equipe própria de gesseiro e colocador de drywall em regime CLT, com treinamento contínuo nos manuais Knauf e Placo, EPI completo e ferramentas adequadas (nível a laser, parafusadeira de impacto, lixadeira com aspirador). Quando você contrata nossa mão de obra drywall, não recebe diarista de internet — recebe profissional identificado, com crachá, registrado, supervisionado por um responsável técnico. O preço gesseiro que apresentamos é fechado por escrito; nada de aumento no fim da obra alegando \"trabalho a mais\".",
    whenToHire: [
      { title: "Cansou de gesseiro que some no meio da obra", text: "Equipe CLT com supervisão garante presença diária até a entrega." },
      { title: "Precisa de qualidade de acabamento", text: "Gesseiro profissional treinado em massa em três demãos elimina ondulação e marca de junta." },
      { title: "Obra grande exige equipe", text: "Forro, parede e divisória em paralelo só andam com vários colocadores de drywall em sincronia." },
      { title: "Quer preço gesseiro fechado", text: "Orçamento por escrito com escopo, prazo e forma de pagamento — sem aditivo surpresa." },
    ],
    types: [
      { title: "Gesseiro para Forro Liso", text: "Forro de gesso acartonado nivelado a laser, juntas tratadas e entrega pronta para pintar." },
      { title: "Colocador de Drywall para Paredes", text: "Montagem de estrutura, fechamento, fita e massa em paredes e divisórias internas." },
      { title: "Gesseiro para Sanca e Detalhe", text: "Sanca aberta com fita LED, nichos, painéis e detalhes decorativos com acabamento de joalheria." },
      { title: "Mão de Obra Drywall para Construtoras", text: "Pacotes de mão de obra por m² para empreiteiras e construtoras que precisam de equipe estável." },
      { title: "Reparo e Manutenção", text: "Conserto pontual de trinca em junta, furo de TV e remoção de placa danificada." },
    ],
    process: [
      { title: "Visita Técnica", text: "Vistoria do local, conferência do projeto e medição precisa antes de qualquer cotação." },
      { title: "Preço Gesseiro por Escrito", text: "Orçamento detalhado com m², materiais, prazo e garantia — sem valor verbal." },
      { title: "Equipe Identificada", text: "Gesseiro profissional CLT com uniforme, crachá e EPI; supervisor passa para checar a obra." },
      { title: "Execução Limpa", text: "Proteção de piso e móveis, recolhimento diário de entulho e respeito ao horário de condomínio." },
      { title: "Vistoria e Garantia", text: "Vistoria conjunta com o cliente e termo de garantia formal de 12 meses." },
    ],
    standards: [
      "NBR 15758 (sistemas construtivos drywall)",
      "NBR 14715 (chapas de gesso)",
      "NR-6 (EPI), NR-18 (canteiro), NR-35 (altura)",
      "Manuais técnicos Knauf e Placo",
    ],
    trust: [
      "Gesseiro profissional CLT — sem diarista anônimo",
      "Mão de obra drywall com supervisão e responsável técnico",
      "Preço gesseiro fechado, sem aditivo surpresa",
      "Crachá e uniforme — você sabe quem está na sua casa",
      "Garantia escrita de 12 meses",
    ],
    geo: "Disponibilizamos gesseiro e colocador de drywall em toda Teresina — Jóquei, Fátima, Ininga, São Cristóvão, Horto, Morros, Cabral, Noivos, Dirceu, Mocambinho, Centro — além de Timon-MA, Altos, José de Freitas e União. Conhecemos as exigências de condomínios do Centro (horário, taxa de obra, uso de elevador de serviço) e operamos dentro das regras.",
    faq: [
      { q: "Quanto é o preço gesseiro em Teresina?", a: "Mão de obra drywall para parede parte de R$ 55/m² e forro liso a partir de R$ 45/m² (só mão de obra). Material à parte ou incluso conforme preferência do cliente." },
      { q: "Vocês cobram visita técnica?", a: "Não. Visita e orçamento são gratuitos dentro de Teresina e Grande Teresina." },
      { q: "O gesseiro fornece o material ou o cliente?", a: "Trabalhamos das duas formas. Quando fornecemos, indicamos marcas certificadas Knauf, Placo ou Gypsum com nota fiscal e desconto de revenda." },
      { q: "Quantos dias leva uma obra com vocês?", a: "Forro de 20 m² leva 3 a 4 dias úteis; parede de 10 m² leva 2 a 3 dias úteis. Equipe pode ser aumentada para acelerar prazos." },
      { q: "Como é a forma de pagamento?", a: "Entrada na assinatura, parcela no meio da obra e saldo na entrega, com vistoria final. Aceitamos PIX, cartão e transferência." },
    ],
    related: ["instalacao-drywall", "parede-de-drywall", "forro-de-gesso"],
  },
  {
    slug: "forro-de-gesso",
    code: "DW-04",
    h1: "Forro de Gesso em Teresina",
    shortTitle: "Forro de Gesso",
    metaTitle: "Forro de Gesso em Teresina | Chico Resolve",
    metaDescription:
      "Forro de gesso em Teresina: instalação, orçamento forro de gesso e conserto de teto de gesso com equipe especializada e garantia escrita.",
    summary:
      "Instalação de forro de gesso liso, em desnível e com sanca, além de conserto de teto de gesso com trinca, mancha ou afundamento em Teresina.",
    keywords: [
      "forro de gesso",
      "orçamento forro de gesso",
      "conserto de teto de gesso",
      "instalação forro de gesso",
    ],
    intro:
      "Forro de gesso transforma o ambiente — esconde laje irregular, integra iluminação embutida, melhora acústica e valoriza o imóvel. A Chico Resolve executa instalação forro de gesso em residências, lojas, consultórios e escritórios em Teresina, com duas tecnologias: forro em placa de gesso acartonado (drywall) fixado em estrutura metálica e forro tradicional em gesso liso. Também atuamos no conserto de teto de gesso quando aparece trinca em junta, mancha de infiltração ou afundamento por fixação falha. Cada orçamento forro de gesso é detalhado por m², com indicação de sanca, spot, fita LED e materiais — sem valor genérico.",
    whenToHire: [
      { title: "Laje aparente ou irregular", text: "Forro esconde imperfeições e nivela visualmente todo o ambiente." },
      { title: "Quer iluminação embutida", text: "Spots, fita LED e sanca aberta exigem forro com altura mínima e estrutura adequada." },
      { title: "Teto de gesso com trinca ou mancha", text: "Trinca em junta ou mancha amarelada indica infiltração ou falha de fixação — exige conserto técnico." },
      { title: "Ar-condicionado split a embutir", text: "Forro com recorte para evaporadora e dreno alinhado é solução comum em apartamentos novos." },
    ],
    types: [
      { title: "Forro Liso de Drywall", text: "Forro em placa de gesso acartonado com perfis galvanizados — pronto para pintura, sem juntas aparentes." },
      { title: "Forro em Desnível e Rebaixos", text: "Diferenças de altura para destacar mesa de jantar, hall de entrada ou bar — efeito arquitetônico marcante." },
      { title: "Sanca Aberta com Fita LED", text: "Sanca perimetral aberta para fita LED indireta — cria iluminação cênica acolhedora." },
      { title: "Sanca Fechada e Tabicado", text: "Detalhe clássico para projetos residenciais que demandam acabamento mais sóbrio." },
      { title: "Conserto de Teto de Gesso", text: "Reparo de trinca, mancha e afundamento, com investigação da causa (infiltração, parafuso solto, vibração)." },
    ],
    process: [
      { title: "Visita Técnica e Medição", text: "Levantamento de pé-direito, conferência de instalação elétrica e hidráulica acima da laje." },
      { title: "Orçamento Forro de Gesso Detalhado", text: "Proposta com m², tipo de sanca, spots, fita LED, recorte para split e prazo — em até 24h úteis." },
      { title: "Montagem da Estrutura", text: "Tirantes, perfis e travessas niveladas a laser, com reforço para luminárias e ar-condicionado." },
      { title: "Fechamento e Acabamento", text: "Placas parafusadas, juntas tratadas com fita e massa em três demãos, lixamento fino." },
      { title: "Entrega Pronta para Pintura", text: "Vistoria conjunta, limpeza do ambiente e termo de garantia formal." },
    ],
    standards: [
      "NBR 15758 (sistemas drywall — forro)",
      "NBR 14715 (chapas de gesso)",
      "NBR 15217 (perfis de aço)",
      "Manuais Knauf e Placo para forros",
    ],
    trust: [
      "Empresa formalizada com CNPJ, contrato e nota fiscal",
      "Equipe especializada em instalação forro de gesso e sanca",
      "Conserto de teto de gesso com diagnóstico da causa, não só pintura disfarçada",
      "Garantia escrita de 12 meses",
      "Orçamento forro de gesso por escrito, sem valor verbal",
    ],
    geo: "Instalamos forro de gesso em apartamentos, casas e salas comerciais em Teresina — Jóquei, Fátima, Ininga, São Cristóvão, Horto, Cabral, Noivos, Dirceu — e em Timon-MA, Altos, José de Freitas e União. Em apartamentos em zona urbana, recomendamos ventilação adequada do entreforro para evitar condensação favorecida pelo clima quente e úmido de Teresina.",
    faq: [
      { q: "Quanto custa o orçamento de forro de gesso em Teresina?", a: "Forro liso parte de R$ 95/m² (drywall) ou R$ 75/m² (gesso tradicional), incluindo material e mão de obra. Sanca aberta com fita LED tem valor adicional por metro linear." },
      { q: "Qual o prazo da instalação de forro de gesso?", a: "Uma sala de 20 m² fica pronta em 3 a 4 dias úteis com massa e lixamento. Apartamento completo (3 quartos + áreas comuns) leva 7 a 10 dias úteis." },
      { q: "Vocês fazem conserto de teto de gesso?", a: "Sim. Atendemos desde reparo pontual de trinca até substituição de placa afundada por infiltração. Investigamos a causa antes do reparo." },
      { q: "Drywall ou gesso liso para forro?", a: "Drywall (gesso acartonado) é mais rápido, leve, permite desmonte e suporta sanca e spots com facilidade. Gesso liso ainda compete em forro fixo de pequena área e custo enxuto." },
      { q: "Posso embutir spots e fita LED depois?", a: "Recomendamos definir antes da montagem para reforço na estrutura. Após pronto, ainda é possível, mas exige recorte e retoque." },
    ],
    related: ["instalacao-drywall", "gesso-acartonado", "gesseiro"],
  },
  {
    slug: "parede-de-drywall",
    code: "DW-05",
    h1: "Parede de Drywall em Teresina",
    shortTitle: "Parede de Drywall",
    metaTitle: "Parede de Drywall em Teresina | Chico Resolve",
    metaDescription:
      "Parede de drywall em Teresina: instalação, reparo em parede de drywall e reforço em parede de drywall com orçamento drywall rápido e garantia.",
    summary:
      "Instalação, reparo e reforço em parede de drywall com fixação adequada para TV, bancada, prateleira e pia — orçamento drywall em 24h.",
    keywords: [
      "parede de drywall",
      "reparo em parede de drywall",
      "reforço em parede de drywall",
      "orçamento drywall",
    ],
    intro:
      "Parede de drywall bem executada não treme, não tem trinca em junta e suporta tudo o que precisa — TV grande, prateleira pesada, bancada de cozinha, pia de banheiro. A Chico Resolve faz instalação, reparo em parede de drywall e reforço em parede de drywall em Teresina com técnica correta: chapa metálica embutida na estrutura para suportar carga, bucha específica para drywall, fita microperfurada na junta e massa em três demãos. Quando o problema é trinca, furo ou afundamento, fazemos diagnóstico (estrutural ou estético?) antes de tampar. O orçamento drywall é fechado por escrito após visita técnica gratuita.",
    whenToHire: [
      { title: "Vai instalar TV ou prateleira pesada", text: "Sem reforço em parede de drywall, a TV cai. Reforço com chapa metálica resolve antes do problema." },
      { title: "Apareceu trinca na junta", text: "Trinca em junta vertical ou horizontal indica fita mal aplicada, junta sem alívio ou movimentação estrutural." },
      { title: "Furo de soco ou móvel", text: "Furo em parede de drywall tem reparo simples, sem trocar a placa inteira." },
      { title: "Vai fixar bancada ou pia", text: "Cozinha americana, lavabo e closet exigem reforço dimensionado para a carga de uso." },
    ],
    types: [
      { title: "Instalação de Parede de Drywall", text: "Parede nova com estrutura metálica, placa ST/RU/RF conforme ambiente, fita e massa em três demãos." },
      { title: "Reparo em Parede de Drywall", text: "Conserto de furo, trinca em junta e afundamento, com massa e lixamento até desaparecer." },
      { title: "Reforço em Parede de Drywall", text: "Chapa metálica ou madeirit embutido para suportar TV, prateleira, espelho, bancada e pia." },
      { title: "Troca de Placa Danificada", text: "Substituição de placa molhada, com mofo ou quebrada, sem trocar a estrutura inteira." },
      { title: "Reforço Acústico Pós-Obra", text: "Abertura controlada para inserir lã de rocha quando a parede foi montada sem isolamento." },
    ],
    process: [
      { title: "Diagnóstico", text: "Identificamos se a trinca é estética (junta) ou estrutural (montante solto ou movimentação) antes de tampar." },
      { title: "Orçamento Drywall Fechado", text: "Proposta com material, mão de obra, prazo e garantia por escrito — sem cobrança extra no fim." },
      { title: "Execução Limpa", text: "Lonas de proteção, lixadeira com aspirador, recolhimento diário de pó e respeito ao horário do condomínio." },
      { title: "Tratamento Técnico", text: "Fita microperfurada, massa em três demãos, lixamento fino e selador antes da pintura." },
      { title: "Vistoria e Garantia", text: "Aprovação do cliente com luz rasante e termo de garantia formal de 12 meses." },
    ],
    standards: [
      "NBR 15758 (sistemas drywall — parede)",
      "NBR 14715 (chapas de gesso)",
      "NBR 15217 (perfis de aço)",
      "Manuais Knauf e Placo para reforços e fixação",
    ],
    trust: [
      "Empresa de drywall com CNPJ, contrato e nota fiscal",
      "Reforço em parede de drywall dimensionado para a carga real (não só bucha de fixação)",
      "Reparo em parede de drywall com massa em três demãos — sem disfarce",
      "Garantia escrita de 12 meses",
      "Orçamento drywall em até 24h úteis após visita gratuita",
    ],
    geo: "Atendemos parede de drywall em todos os bairros de Teresina — Jóquei, Fátima, Ininga, São Cristóvão, Morros, Cabral, Noivos, Dirceu, Mocambinho — além de Timon-MA, Altos, José de Freitas e União. Em áreas próximas ao mar (Centro, Mocambinho), priorizamos parafusos com tratamento anticorrosivo e placa RU para suportar a calor e poeira.",
    faq: [
      { q: "Quanto custa o orçamento drywall para parede em Teresina?", a: "Parede de drywall simples parte de R$ 110/m² (material + mão de obra). Reforço para TV, prateleira ou pia tem valor adicional por ponto reforçado. Visita gratuita." },
      { q: "Posso fazer reparo em parede de drywall sem trocar a placa inteira?", a: "Sim. Furos pequenos e médios são reparados com gesso e fita; só trocamos a placa quando há mofo, ruptura grande ou afundamento estrutural." },
      { q: "Quanto peso aguenta uma parede de drywall?", a: "Com bucha específica de drywall, cada ponto suporta entre 25 e 50 kg. Para TV grande, prateleira ou pia, fazemos reforço em parede de drywall com chapa metálica capaz de suportar 100 kg ou mais." },
      { q: "Trinca em junta aparece de novo se eu só pintar por cima?", a: "Sim. Trinca em junta tem causa (fita mal aplicada, junta sem alívio ou movimentação). O reparo correto remove a fita, aplica fita microperfurada e massa em três demãos." },
      { q: "Tem garantia no reparo e no reforço?", a: "Sim, garantia escrita de 12 meses cobrindo retorno de trinca e desempenho do reforço em condições normais de uso." },
    ],
    related: ["instalacao-drywall", "gesseiro", "divisoria-de-ambiente"],
  },
  {
    slug: "divisoria-de-ambiente",
    code: "DW-06",
    h1: "Divisória de Ambiente em Teresina",
    shortTitle: "Divisória de Ambiente",
    metaTitle: "Divisória de Ambiente em Teresina | Chico Resolve",
    metaDescription:
      "Divisória de ambiente em Teresina: ripada, drywall, placa de gesso na parede, divisórias para escritório e industrial com instalação técnica.",
    summary:
      "Divisória de ambiente em drywall, ripada, placa de gesso e perfilado — soluções para escritório, área externa e indústria em Teresina.",
    keywords: [
      "divisória de ambiente",
      "divisoria de ambiente ripada",
      "placa de gesso na parede",
      "divisória para area externa",
      "divisórias de ambientes para escritório",
      "divisoria de ambiente industrial",
    ],
    intro:
      "Dividir ambiente sem alvenaria é a forma mais rápida, leve e reversível de mudar um espaço. A Chico Resolve executa em Teresina divisória de ambiente em várias linguagens: drywall (gesso acartonado), divisória ripada de madeira para hall e sala, perfilado naval com miolo colmeia para escritórios, divisória para área externa com placa cimentícia e divisória de ambiente industrial em chapa metálica ou painel sanduíche. Cada solução vai por uso, exigência acústica, orçamento e prazo. Quando o cliente pede simplesmente \"placa de gesso na parede\" para separar a sala, mostramos o sistema correto — placa drywall em estrutura metálica é seguro, durável e reversível.",
    whenToHire: [
      { title: "Dividir sala ou criar suíte", text: "Drywall ou divisória ripada permitem mudar layout em dias, sem entulho de alvenaria." },
      { title: "Escritório precisa de salas privativas", text: "Divisórias de ambientes para escritório em perfilado naval ou drywall com porta integrada." },
      { title: "Área externa coberta ou semi-coberta", text: "Divisória para área externa exige placa cimentícia ou painel resistente à umidade e à calor e poeira." },
      { title: "Indústria precisa setorizar produção", text: "Divisória de ambiente industrial em chapa metálica, painel sanduíche ou drywall RF para áreas técnicas." },
    ],
    types: [
      { title: "Divisória de Drywall", text: "Parede em placa drywall (gesso acartonado) com estrutura metálica, isolamento opcional e acabamento pronto para pintura." },
      { title: "Divisória de Ambiente Ripada", text: "Ripado de madeira (cumaru, freijó ou MDF ripado) vertical para dividir sem fechar — separa visual e ventila." },
      { title: "Placa de Gesso na Parede para Dividir", text: "Quando pedem placa de gesso na parede, executamos com sistema drywall completo — fita, massa e acabamento, não placa solta colada." },
      { title: "Divisórias de Ambientes para Escritório", text: "Perfilado naval (eucatex/colmeia) ou drywall com porta, vidro e cabeamento estruturado embutido." },
      { title: "Divisória para Área Externa", text: "Placa cimentícia (CRFS) sobre estrutura metálica galvanizada, resistente à umidade e calor e poeira de Teresina." },
      { title: "Divisória de Ambiente Industrial", text: "Chapa metálica, painel sanduíche, placa RF ou drywall acústico para setorizar produção, vestiário e depósito." },
    ],
    process: [
      { title: "Briefing e Visita", text: "Entendemos o uso (residencial, escritório, externa, industrial), exigência acústica e estética antes de propor o sistema." },
      { title: "Orçamento por Sistema", text: "Comparativo entre drywall, ripada, perfilado, cimentícia e metálica com prós, contras, prazo e custo." },
      { title: "Montagem Técnica", text: "Estrutura nivelada a laser, fixação adequada ao piso e teto, isolamento e reforço conforme uso." },
      { title: "Acabamento Final", text: "Tratamento de junta, lixamento, instalação de batente e porta, e acabamento conforme material escolhido." },
      { title: "Entrega e Garantia", text: "Vistoria conjunta com o cliente e garantia escrita de 12 meses." },
    ],
    standards: [
      "NBR 15758 (drywall — paredes e divisórias)",
      "NBR 14715 (chapas de gesso)",
      "NBR 11675 (divisórias leves internas moduladas)",
      "NBR 15498 (placas cimentícias)",
      "NR-12 e NR-18 para divisória de ambiente industrial",
    ],
    trust: [
      "Empresa com CNPJ, contrato e nota fiscal",
      "Variedade de sistemas — não empurramos drywall onde cabe ripada, cimentícia ou metálica",
      "Equipe própria CLT, com responsável técnico em campo",
      "Garantia escrita de 12 meses",
      "Orçamento detalhado por sistema, sem genérico",
    ],
    geo: "Executamos divisória de ambiente em Teresina inteira — Jóquei, Fátima, Ininga, São Cristóvão, Cabral, Noivos, Dirceu, Mocambinho, Centro — e em obras de Timon-MA, Altos, José de Freitas e União. Para divisória para área externa em zona urbana, indicamos placa cimentícia sobre perfil galvanizado tratado contra calor e poeira; para divisória de ambiente industrial em galpões do Distrito Industrial, painel sanduíche ou chapa metálica com pintura epóxi.",
    faq: [
      { q: "Qual divisória de ambiente é mais barata?", a: "Drywall é, em geral, a mais econômica para uso interno seco. Ripada e perfilado naval ficam em faixa parecida; cimentícia e metálica industrial saem mais caras pelo material e fixação." },
      { q: "Divisoria de ambiente ripada bloqueia som?", a: "Não. Ripada separa visualmente e permite ventilação, mas não veda som. Para privacidade acústica, indicamos drywall com isolamento ou perfilado com miolo colmeia." },
      { q: "Posso usar placa de gesso na parede para dividir banheiro?", a: "Sim, mas com placa drywall RU (verde, resistente à umidade) sobre estrutura metálica galvanizada e impermeabilização nas áreas de contato direto com água." },
      { q: "Que sistema é melhor para divisória para área externa em Teresina?", a: "Placa cimentícia (CRFS) sobre estrutura galvanizada é o padrão para clima quente e seco — resiste à umidade, à calor e poeira e ao sol forte." },
      { q: "Vocês instalam divisórias de ambientes para escritório com porta e vidro?", a: "Sim. Perfilado naval e drywall com porta de madeira, vidro temperado e bandeira para iluminação são parte do nosso pacote para escritórios." },
    ],
    related: ["instalacao-drywall", "parede-de-drywall", "gesso-acartonado"],
  },
];

export const getDrywallSubservice = (slug: string): DrywallSubservice | undefined =>
  drywallSubservices.find((s) => s.slug === slug);

// ============================================================================
// Reformas: hub + sub-páginas otimizadas para clusters de palavras-chave
// (apartamento, empresa de reforma, comercial, casa, banheiro, telhado,
//  fachada, piscina, pisos, cozinha, quadras esportivas e quarto).
// Cada sub-página tem H1 = keyword principal + conteúdo único focado em
// E-E-A-T (Experience, Expertise, Authoritativeness, Trust), GEO local
// Teresina/PI e SEO técnico (Service + Breadcrumb + FAQPage JSON-LD).
// ============================================================================

export type ReformaSlug =
  | "apartamento"
  | "empresa-de-reforma"
  | "comercial"
  | "casa"
  | "banheiro"
  | "telhado"
  | "fachada"
  | "piscina"
  | "pisos"
  | "cozinha"
  | "quadras-esportivas"
  | "quarto";

export interface ReformaSubservice {
  slug: ReformaSlug;
  code: string;
  h1: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  keywords: string[];
  intro: string;
  whenToHire: { title: string; text: string }[];
  types: { title: string; text: string }[];
  process: { title: string; text: string }[];
  standards: string[];
  trust: string[];
  geo: string;
  faq: { q: string; a: string }[];
  related: ReformaSlug[];
}

export const reformaSubservices: ReformaSubservice[] = [
  {
    slug: "apartamento",
    code: "RF-01",
    h1: "Reforma de Apartamento em Teresina",
    shortTitle: "Apartamento",
    metaTitle: "Reforma de Apartamento em Teresina | Chico Resolve",
    metaDescription:
      "Empresa de reforma de apartamento em Teresina: reforma predial, apartamento pequeno, antigo e renovação de cozinha de apartamento com cronograma cumprido.",
    summary:
      "Reforma de apartamento completa ou parcial com gerenciamento técnico, equipe própria CLT e respeito às normas do condomínio.",
    keywords: [
      "reforma de apartamento",
      "empresa de reforma de apartamento",
      "reforma predial",
      "reforma de apartamento pequeno",
      "reforma apartamento antigo",
      "renovação de cozinha apartamento",
    ],
    intro:
      "A Chico Resolve é uma empresa de reforma de apartamento em Teresina com mais de 500 obras entregues — de reforma de apartamento pequeno de 40 m² na Satélite até reforma apartamento antigo de 220 m² na Jóquei. Atuamos em reforma predial completa: demolição controlada, alvenaria, hidráulica, elétrica, drywall, pintura, marcenaria sob medida e renovação de cozinha apartamento com bancada nova, hidráulica realocada e instalação de coifa. Cada projeto entra com responsável técnico em campo, ART quando exigida pelo síndico, ASOs da equipe e cronograma físico-financeiro semanal — porque reformar no 12º andar de um prédio na Centro é muito diferente de reformar em casa térrea.",
    whenToHire: [
      { title: "Apartamento recém-adquirido", text: "Personalizar acabamentos antes de mobiliar, com a unidade vazia, reduz custo em até 30%." },
      { title: "Apartamento antigo (20+ anos)", text: "Prumadas hidráulicas, fiação e janelas precisam ser revistas para evitar prejuízo futuro." },
      { title: "Reforma de apartamento pequeno", text: "Otimização de layout, marcenaria sob medida e integração de ambientes para ganhar área útil." },
      { title: "Renovação de cozinha apartamento", text: "Troca de bancada, revestimento, instalação de coifa e nova rede de gás/elétrica." },
    ],
    types: [
      { title: "Reforma Completa", text: "Demolição, alvenaria, instalações novas, acabamentos, pintura e entrega com chave na mão." },
      { title: "Reforma Parcial", text: "Cozinha, banheiros, área de serviço ou suíte com o restante do apartamento habitado." },
      { title: "Reforma Predial em Áreas Comuns", text: "Halls, fachada, garagem, salão de festas e áreas de lazer contratadas pelo condomínio." },
      { title: "Renovação de Cozinha de Apartamento", text: "Bancada em quartzo/silestone, revestimento, marcenaria planejada e instalações novas." },
    ],
    process: [
      { title: "Visita Técnica e Briefing", text: "Levantamento da planta, conferência das normas do condomínio e entendimento do estilo desejado." },
      { title: "Orçamento Detalhado", text: "Proposta por etapa (demolição, instalações, acabamentos) com cronograma físico-financeiro." },
      { title: "Documentação ao Síndico", text: "Contrato, ART quando aplicável, ASOs e plano de gerenciamento de resíduos entregues à administração." },
      { title: "Execução com Mestre de Obras", text: "Equipe própria com mestre responsável, controle de horário e proteção de áreas comuns." },
      { title: "Entrega Chave na Mão", text: "Limpeza fina, vistoria conjunta, manual do proprietário e garantia formal por escrito." },
    ],
    standards: [
      "NBR 16280 (reformas em edificações)",
      "NBR 5410 (instalações elétricas)",
      "NBR 5626 (instalações hidráulicas)",
      "NR-35 (trabalho em altura)",
      "Convenção e regimento do condomínio",
    ],
    trust: [
      "Empresa de reforma de apartamento com CNPJ ativo e nota fiscal",
      "ART de execução com engenheiro responsável quando exigido",
      "Mestre de obras CLT em tempo integral no canteiro",
      "Cronograma físico-financeiro com multa contratual em caso de atraso",
      "Garantia de 12 meses sobre execução conforme NBR 16280",
    ],
    geo: "Atendemos reforma de apartamento em todos os edifícios de Teresina — Centro, Mocambinho, Satélite, Jóquei, Fátima, Ininga, São Cristóvão, Horto, Morros, Bela Vista, Cabral e Noivos — além de empreendimentos em Timon-MA, Altos e José de Freitas. Para reforma predial em prédios urbanos, usamos materiais resistentes à calor e poeira (parafusos galvanizados, tintas acrílicas premium e selantes poliuretânicos).",
    faq: [
      { q: "Quanto custa uma reforma de apartamento em Teresina?", a: "Reformas parciais (cozinha ou banheiro) partem de R$ 25 mil; reformas completas variam de R$ 1.200 a R$ 2.800 por m² conforme padrão de acabamento. Fazemos visita técnica gratuita e orçamento detalhado em até 5 dias." },
      { q: "Vocês atendem reforma de apartamento pequeno (até 50 m²)?", a: "Sim. Reforma de apartamento pequeno é uma das nossas especialidades — integração sala/cozinha, marcenaria sob medida e otimização do layout para ganhar área útil." },
      { q: "Como funciona a reforma de apartamento antigo?", a: "Reforma apartamento antigo exige diagnóstico de prumadas, fiação e janelas. Fazemos sondagem inicial sem custo e indicamos o escopo necessário para evitar retrabalho." },
      { q: "Reforma predial em áreas comuns precisa de assembleia?", a: "Sim, intervenções estruturais ou estéticas em áreas comuns exigem aprovação em assembleia. Entregamos memorial descritivo, orçamento e ART para o síndico apresentar." },
      { q: "Qual o prazo de uma renovação de cozinha apartamento?", a: "Em média 25 a 45 dias úteis, incluindo demolição, hidráulica, elétrica, revestimento, marcenaria e instalação de eletrodomésticos." },
    ],
    related: ["casa", "cozinha", "banheiro"],
  },
  {
    slug: "empresa-de-reforma",
    code: "RF-02",
    h1: "Empresa de Reforma em Teresina",
    shortTitle: "Empresa de Reforma",
    metaTitle: "Empresa de Reforma em Teresina | Chico Resolve",
    metaDescription:
      "Empresa de reforma residencial em Teresina: reformas e construções, empresa de construção e reforma, especializada em pequenas reformas e reformas em geral.",
    summary:
      "Empresa de reforma residencial e construção com equipe multidisciplinar, contrato formal e gestão integrada de obra em Teresina.",
    keywords: [
      "empresa de reforma",
      "empresa de reforma residencial",
      "reformas e construções",
      "empresa de reformas residenciais",
      "empresa especializada em pequenas reformas",
      "empresa de construção e reforma",
      "reformas em geral",
    ],
    intro:
      "A Chico Resolve é uma empresa de reforma residencial em Teresina estruturada como prestadora de reformas e construções, com CNPJ ativo, NF de serviço, mestre de obras CLT, engenheiro responsável e cobertura de seguro de obra. Para clientes que procuram uma empresa de reformas residenciais para um projeto único e para clientes que precisam de uma empresa especializada em pequenas reformas (troca de piso, pintura de uma sala, instalação de bancada), temos pacotes desenhados para cada porte. Como empresa de construção e reforma fazemos reformas em geral — pintura, elétrica, hidráulica, drywall, alvenaria, marcenaria, esquadrias e impermeabilização — sob um único responsável técnico, evitando o caos de contratar profissionais separados.",
    whenToHire: [
      { title: "Reforma sem dor de cabeça", text: "Um único contrato, um responsável técnico e um cronograma — sem terceirizar decisões para o cliente." },
      { title: "Pequenos reparos urgentes", text: "Empresa especializada em pequenas reformas: trocar piso de um cômodo, refazer um banheiro, instalar bancada." },
      { title: "Reformas e construções de ampliação", text: "Quarto novo, suíte, lavabo, área gourmet — projeto, execução e legalização em um só fornecedor." },
      { title: "Cliente corporativo ou condomínio", text: "Contratos com NF, ART, garantia e relatórios fotográficos para prestação de contas." },
    ],
    types: [
      { title: "Reformas Residenciais", text: "Apartamentos, casas e coberturas — completas ou parciais, com gerenciamento integrado." },
      { title: "Pequenas Reformas", text: "Serviços rápidos: pintura, troca de piso, instalações pontuais, marcenaria e reparos." },
      { title: "Reformas e Construções", text: "Ampliações, garagens, áreas de lazer, lavabos e suítes novas." },
      { title: "Reformas em Geral para Condomínios", text: "Halls, fachadas, salões de festas, áreas técnicas e adequação para vistoria." },
    ],
    process: [
      { title: "Atendimento e Visita", text: "Conversa para entender o objetivo, visita técnica gratuita e levantamento inicial." },
      { title: "Proposta com Escopo Claro", text: "Orçamento por etapa, prazo realista e forma de pagamento parcelada." },
      { title: "Contrato e Cronograma", text: "Contrato com obrigações, garantia, multa por atraso e cronograma físico-financeiro." },
      { title: "Execução Acompanhada", text: "Mestre de obras CLT, relatório fotográfico semanal por WhatsApp e visitas técnicas do engenheiro." },
      { title: "Entrega e Pós-Obra", text: "Vistoria conjunta, limpeza fina, manual de garantia e atendimento pós-obra por 12 meses." },
    ],
    standards: [
      "NBR 16280 (reformas em edificações)",
      "NBR 5410 (elétrica) e NBR 5626 (hidráulica)",
      "NR-18 (canteiro de obras) e NR-6 (EPI)",
      "Gestão de resíduos conforme CONAMA 307",
      "Código de Defesa do Consumidor para serviços contratados",
    ],
    trust: [
      "Empresa de reforma residencial com CNPJ ativo e nota fiscal eletrônica",
      "Engenheiro responsável e ART para obras com intervenção estrutural",
      "Equipe própria CLT — sem subcontratar pedreiro de aplicativo",
      "Cobertura de seguro de obra para danos a terceiros",
      "Garantia formal de 12 a 60 meses conforme o item executado",
    ],
    geo: "Como empresa de reformas residenciais atendemos toda Teresina — Jóquei, Fátima, Ininga, São Cristóvão, Horto, Cabral, Noivos, Bela Vista, Dirceu, Mocambinho e Centro — e cidades da Grande Teresina: Timon-MA, Altos, José de Freitas, União e Demerval Lobão. Para reformas em geral próximas ao litoral, ajustamos os materiais ao clima de calor e poeira.",
    faq: [
      { q: "Vocês são uma empresa de reforma formalizada?", a: "Sim. Somos empresa de construção e reforma com CNPJ ativo, alvará de funcionamento, NF de serviço, engenheiro responsável e ART quando o escopo exige." },
      { q: "Trabalham com pequenas reformas?", a: "Sim. Somos empresa especializada em pequenas reformas — pintura de um cômodo, troca de piso, instalação de bancada, reforma de um banheiro." },
      { q: "Como funciona o contrato em reformas e construções?", a: "Contrato com objeto, escopo, prazo, forma de pagamento parcelada, garantia formal e multa contratual em caso de atraso." },
      { q: "Atendem reformas em geral em condomínios?", a: "Sim. Entregamos toda documentação ao síndico (ART, ASOs, plano de gerenciamento de resíduos) e respeitamos horário e regras internas." },
      { q: "Vocês fazem orçamento gratuito?", a: "Sim. A visita técnica e o orçamento detalhado são gratuitos para Teresina e Grande Teresina." },
    ],
    related: ["apartamento", "casa", "comercial"],
  },
  {
    slug: "comercial",
    code: "RF-03",
    h1: "Reforma Comercial em Teresina",
    shortTitle: "Comercial",
    metaTitle: "Reforma Comercial em Teresina | Lojas, Escritórios e Restaurantes",
    metaDescription:
      "Reforma comercial em Teresina: reforma de loja em shopping, escritórios, restaurantes e retrofit comercial com empreiteira de prazo garantido.",
    summary:
      "Reforma comercial completa para lojas, escritórios, restaurantes e adequação de imóvel comercial com prazo garantido em contrato.",
    keywords: [
      "reforma comercial",
      "reformas de escritórios",
      "reformas de restaurantes",
      "empreiteira para loja de shopping",
      "retrofit comercial",
      "reforma de loja em shopping",
      "adequação de imóvel comercial",
      "reforma comercial rápida",
      "empreiteira obra comercial prazo garantido",
    ],
    intro:
      "A Chico Resolve executa reforma comercial em Teresina com a urgência que o varejo exige — reforma de loja em shopping em janelas noturnas, reformas de escritórios entre sexta e segunda, reformas de restaurantes em paradas técnicas curtas e retrofit comercial completo de salas corporativas e lajes inteiras. Atuamos como empreiteira para loja de shopping atendendo padrões de Iguatemi, RioMar e North Shopping (horário, ruído, descarte de entulho, alvarás internos) e como empreiteira obra comercial prazo garantido para franquias com inauguração agendada. Cuidamos de adequação de imóvel comercial: piso epóxi para área técnica, divisórias drywall acústicas, forro modular, exaustão para cozinha industrial, ar-condicionado VRF, sprinklers, alarme de incêndio e laudo do corpo de bombeiros.",
    whenToHire: [
      { title: "Abertura ou troca de ponto", text: "Reforma de loja em shopping ou rua com prazo curto e fiscalização rigorosa." },
      { title: "Adequação para vistoria", text: "Bombeiros, vigilância sanitária, acessibilidade NBR 9050 — adequação de imóvel comercial completa." },
      { title: "Retrofit corporativo", text: "Retrofit comercial de andares inteiros: piso elevado, forro modular, ar-condicionado VRF e cabeamento estruturado." },
      { title: "Reformas de restaurantes", text: "Exaustão de coifa, gordura, piso antiderrapante, área de manipulação e adequação à RDC ANVISA." },
    ],
    types: [
      { title: "Reforma de Loja em Shopping", text: "Execução em horário noturno (22h-6h) respeitando regras do condomínio do shopping." },
      { title: "Reformas de Escritórios", text: "Open space, salas privativas, recepção e sala de reuniões — entrega pronta para operar." },
      { title: "Reformas de Restaurantes", text: "Cozinha, salão, sanitários, exaustão, gordura e adequação para alvará da ANVISA." },
      { title: "Retrofit Comercial", text: "Atualização de fachada, instalações, climatização e sistemas prediais em prédios comerciais." },
    ],
    process: [
      { title: "Briefing e Visita Técnica", text: "Entendimento do uso, prazo de inauguração e exigências de shopping/condomínio." },
      { title: "Orçamento e Cronograma com Multa", text: "Empreiteira obra comercial prazo garantido — cronograma com multa contratual em caso de atraso." },
      { title: "Aprovações e Alvarás", text: "Memorial descritivo para administração do shopping, bombeiros e vigilância sanitária." },
      { title: "Execução em Janelas Curtas", text: "Equipes em turnos para reforma comercial rápida sem perda de faturamento do cliente." },
      { title: "Entrega com Laudos", text: "AVCB, laudo elétrico, ART e relatório fotográfico para o cliente apresentar à vistoria." },
    ],
    standards: [
      "NBR 9077 (saídas de emergência) e Lei do Corpo de Bombeiros do Piauí",
      "RDC 216 ANVISA (restaurantes e manipulação de alimentos)",
      "NBR 9050 (acessibilidade)",
      "NR-10 (segurança em eletricidade) e NR-35 (altura)",
      "Regimento interno do shopping ou condomínio comercial",
    ],
    trust: [
      "Empreiteira para loja de shopping com experiência em horário noturno",
      "Empreiteira obra comercial prazo garantido com multa em contrato",
      "Equipes em dois turnos para reforma comercial rápida",
      "Engenheiro responsável e ART para entrega ao corpo de bombeiros",
      "Pacote completo: civil, elétrica, hidráulica, exaustão, climatização e laudos",
    ],
    geo: "Atendemos reforma comercial em Teresina inteira — Centro, Jóquei, Fátima, Ininga, São Cristóvão, Joaquim Távora, Satélite, Centro — e em shoppings como Iguatemi, RioMar Teresina, RioMar Kennedy, North Shopping Jóquei, North Shopping União, Parangaba e Via Sul. Para reformas de restaurantes e adequação de imóvel comercial em Grande Teresina (Timon-MA, Altos, José de Freitas), seguimos as exigências específicas de cada município.",
    faq: [
      { q: "Quanto tempo demora a reforma de loja em shopping?", a: "Lojas de até 80 m² geralmente saem em 20 a 30 dias corridos com equipe em turno noturno. Pacotes de reforma comercial rápida para inauguração agendada são acordados em contrato com multa por atraso." },
      { q: "Vocês entregam AVCB e laudo dos bombeiros?", a: "Sim. Como empreiteira para loja de shopping fazemos toda adequação de imóvel comercial (extintores, sinalização, saídas, sprinklers quando exigido) e acompanhamos a vistoria do corpo de bombeiros." },
      { q: "Fazem reformas de escritórios sem parar a operação?", a: "Sim. Reformas de escritórios são feitas por blocos ou em horário noturno para não interromper a empresa." },
      { q: "O que entra no retrofit comercial?", a: "Retrofit comercial inclui atualização de fachada, climatização (VRF/VRV), piso elevado, forro modular, iluminação LED, automação predial e adequação às normas atuais." },
      { q: "Atendem reformas de restaurantes com cozinha em operação?", a: "Sim, com paradas técnicas programadas (segundas-feiras, períodos de baixa) e adequação total à RDC 216 da ANVISA." },
    ],
    related: ["empresa-de-reforma", "cozinha", "fachada"],
  },
  {
    slug: "casa",
    code: "RF-04",
    h1: "Reforma de Casa em Teresina",
    shortTitle: "Casa",
    metaTitle: "Reforma de Casa em Teresina | Reforma Residencial Completa",
    metaDescription:
      "Empresa de reforma de casas em Teresina: reforma residencial completa, retrofit residencial, ampliação de casa, execução de projeto com contrato.",
    summary:
      "Reforma residencial completa de casas — execução de projeto, retrofit, ampliação e empreiteira com contrato em Teresina.",
    keywords: [
      "reforma de casa",
      "reforma residencial",
      "reformas residenciais",
      "empresa de reforma de casas",
      "reforma de residência",
      "execução de projeto residencial",
      "retrofit residencial",
      "ampliação de casa preço",
      "empreiteira com contrato para reforma",
    ],
    intro:
      "A Chico Resolve é uma empresa de reforma de casas em Teresina especializada em reforma residencial completa, retrofit residencial de imóveis com 20+ anos e ampliação de casa (quarto, suíte, garagem, área gourmet) com cronograma físico-financeiro. Como empreiteira com contrato para reforma, formalizamos toda obra: contrato com escopo, prazo, garantia e multa por atraso. Trabalhamos com execução de projeto residencial de arquitetos parceiros ou desenvolvemos o projeto com nosso escritório técnico. Reformas residenciais executadas pela Chico Resolve incluem fundações reforçadas, alvenaria, cobertura, instalações novas (elétrica NBR 5410, hidráulica NBR 5626), drywall, esquadrias, pintura premium e paisagismo.",
    whenToHire: [
      { title: "Casa antiga precisando de reforma", text: "Retrofit residencial completo: fiação, hidráulica, telhado, esquadrias e fachada renovadas." },
      { title: "Ampliação de área", text: "Quarto novo, suíte, escritório, garagem ou área gourmet executados sob projeto." },
      { title: "Reforma de residência herdada", text: "Adequação para morar, vender ou alugar — orçamento detalhado e prazo definido." },
      { title: "Execução de projeto residencial", text: "Você tem o projeto pronto do arquiteto — entregamos a casa construída conforme planta." },
    ],
    types: [
      { title: "Reforma Residencial Completa", text: "Demolição, fundações, alvenaria, cobertura, instalações e acabamentos." },
      { title: "Retrofit Residencial", text: "Atualização de instalações, esquadrias, cobertura e estética em casas antigas." },
      { title: "Ampliação de Casa", text: "Quartos novos, suítes, garagem e área de lazer com fundação e cobertura próprias." },
      { title: "Execução de Projeto de Arquiteto", text: "Casa entregue exatamente conforme planta, com responsável técnico em campo." },
    ],
    process: [
      { title: "Visita Técnica e Levantamento", text: "Sondagem da estrutura existente, fundação, instalações e cobertura." },
      { title: "Orçamento e Cronograma", text: "Orçamento detalhado por etapa, com cronograma físico-financeiro semanal." },
      { title: "Contrato com Garantia", text: "Empreiteira com contrato para reforma: objeto, escopo, prazo, multa e garantia formal." },
      { title: "Execução com Engenheiro", text: "Mestre de obras CLT em tempo integral e visitas semanais do engenheiro responsável." },
      { title: "Entrega Chave na Mão", text: "Limpeza fina, vistoria conjunta com habite-se, manual e garantia de 12 meses sobre execução." },
    ],
    standards: [
      "NBR 16280 (reformas) e NBR 12721 (orçamento)",
      "NBR 5410 (elétrica), NBR 5626 (hidráulica), NBR 13714 (incêndio em residências)",
      "Código de Obras do Município de Teresina",
      "NR-18 (canteiro de obras) e NR-35 (altura)",
      "Plano Diretor e legislação de uso do solo",
    ],
    trust: [
      "Empresa de reforma de casas com CNPJ ativo e nota fiscal",
      "Empreiteira com contrato para reforma — modelo formal, registrado em cartório se desejado",
      "Engenheiro responsável e ART para qualquer intervenção estrutural",
      "Cronograma físico-financeiro com pagamento por etapa entregue",
      "Garantia de 12 meses sobre execução conforme NBR 16280 e 5 anos sobre estrutura",
    ],
    geo: "Atuamos em reforma de casa em todos os bairros de Teresina — Jóquei, Fátima, Ininga, Cabral, Noivos, Bela Vista, Recanto das Palmeiras, Saci, Parque Piauí, Itararé, Lagoa Alegre, Dirceu — e em Grande Teresina: Timon-MA, Altos (Centro), José de Freitas, Demerval Lobão e União. Para reforma residencial urbana aplicamos materiais e técnicas anti-calor e poeira (esquadrias de alumínio anodizado, ferragens em inox, tintas acrílicas premium).",
    faq: [
      { q: "Qual a ampliação de casa preço médio?", a: "Ampliação de casa varia de R$ 2.500 a R$ 4.500 por m² conforme padrão de acabamento, fundação necessária e cobertura. Visita técnica gratuita." },
      { q: "Vocês fazem execução de projeto residencial de outro arquiteto?", a: "Sim. Como empresa de reforma de casas executamos projetos de qualquer arquiteto ou designer, mantendo total fidelidade ao desenho aprovado." },
      { q: "Trabalham com contrato registrado?", a: "Sim. Somos empreiteira com contrato para reforma — modelo formal com escopo, prazo, garantia e multa por atraso. Pode ser registrado em cartório se preferir." },
      { q: "Qual a diferença entre reforma residencial e retrofit residencial?", a: "Reforma residencial muda layout/acabamento; retrofit residencial moderniza instalações, esquadrias, cobertura e estética sem mexer na estrutura principal." },
      { q: "Reformas residenciais têm garantia?", a: "Sim. 12 meses sobre execução (NBR 16280) e 5 anos sobre solidez e segurança estrutural conforme Código Civil." },
    ],
    related: ["apartamento", "telhado", "fachada"],
  },
  {
    slug: "banheiro",
    code: "RF-05",
    h1: "Reforma de Banheiro em Teresina",
    shortTitle: "Banheiro",
    metaTitle: "Reforma de Banheiro em Teresina | Simples e Completa",
    metaDescription:
      "Reforma de banheiro em Teresina: reforma simples de banheiro, construção e reforma com hidráulica nova, impermeabilização e acabamento premium.",
    summary:
      "Reforma de banheiro completa ou reforma simples de banheiro com troca de revestimento, louças, hidráulica e impermeabilização técnica.",
    keywords: [
      "reforma de banheiro",
      "construção e reforma",
      "reforma de banheiro simples",
      "reforma simples de banheiro",
    ],
    intro:
      "Reforma de banheiro é o serviço de construção e reforma mais pedido em Teresina — e o que mais gera retrabalho quando feito por mão de obra sem qualificação. A Chico Resolve executa reforma de banheiro simples (troca de revestimento, louças e metais com hidráulica preservada) e reforma completa (demolição até a estrutura, nova rede hidráulica, impermeabilização com manta asfáltica ou argamassa polimérica, cerâmica de piso e parede, marcenaria sob medida e louças suspensas). Como cuidamos da hidráulica, impermeabilização e revestimento sob o mesmo contrato, eliminamos o famoso problema da goteira no vizinho de baixo seis meses depois da obra.",
    whenToHire: [
      { title: "Banheiro com infiltração", text: "Manchas no teto do vizinho ou descolamento de azulejos indicam falha de impermeabilização." },
      { title: "Atualização estética", text: "Reforma simples de banheiro só com troca de revestimento, louças e metais." },
      { title: "Reforma completa", text: "Demolição até a contrapiso, nova rede hidráulica e impermeabilização do zero." },
      { title: "Suíte do casal", text: "Box ampliado, banheira, ducha higiênica, iluminação cênica e marcenaria planejada." },
    ],
    types: [
      { title: "Reforma de Banheiro Simples", text: "Troca de piso/parede, louças, metais e bancada, sem mexer na hidráulica oculta." },
      { title: "Reforma Completa", text: "Demolição total, hidráulica nova, impermeabilização, revestimento e acabamentos." },
      { title: "Banheiro Acessível", text: "Adequação conforme NBR 9050 — barras de apoio, box sem desnível, vaso acessível." },
      { title: "Lavabo Sob Medida", text: "Bancada esculpida, cuba de apoio, iluminação cênica e revestimento de destaque." },
    ],
    process: [
      { title: "Vistoria e Diagnóstico", text: "Identificação de vazamentos ocultos, estado da impermeabilização e ralos." },
      { title: "Projeto Hidráulico", text: "Definição da nova posição de pontos hidráulicos, ralos e caimento do piso." },
      { title: "Demolição e Impermeabilização", text: "Demolição controlada, regularização do contrapiso e aplicação de manta ou argamassa polimérica." },
      { title: "Revestimento e Acabamentos", text: "Assentamento de cerâmica/porcelanato com rejunte epóxi nas áreas molhadas." },
      { title: "Teste de Estanqueidade", text: "Teste de 72h com água acumulada e entrega com termo de garantia formal." },
    ],
    standards: [
      "NBR 5626 (hidráulica predial)",
      "NBR 9575 (impermeabilização)",
      "NBR 13818 (cerâmica para revestimento)",
      "NBR 9050 (acessibilidade quando aplicável)",
      "NBR 16280 (reformas em edificações)",
    ],
    trust: [
      "Hidráulica e impermeabilização sob o mesmo contrato — fim do empurra-empurra",
      "Teste de estanqueidade de 72h documentado em fotos",
      "Rejunte epóxi nas áreas molhadas para evitar mofo",
      "Garantia de 12 meses sobre execução e 5 anos sobre impermeabilização",
      "Materiais de marcas referência (Deca, Roca, Eliane, Portobello, Vedacit)",
    ],
    geo: "Atendemos reforma de banheiro em todos os bairros de Teresina, com foco em edifícios urbanos (Centro, Mocambinho, Satélite, Fátima) onde a umidade ataca rejunte e selantes mais rápido. Em Grande Teresina atendemos Timon-MA, Altos, José de Freitas e União. Para imóveis perto do mar indicamos rejunte epóxi e ferragens em inox 316.",
    faq: [
      { q: "Quanto custa uma reforma simples de banheiro em Teresina?", a: "Reforma de banheiro simples (sem mexer em hidráulica oculta) parte de R$ 6 mil para banheiro de 4 m². Reforma completa fica entre R$ 12 mil e R$ 30 mil dependendo do acabamento." },
      { q: "Quanto tempo demora a reforma de banheiro?", a: "Reforma simples: 5 a 8 dias úteis. Reforma completa com hidráulica nova: 15 a 25 dias úteis incluindo cura da impermeabilização." },
      { q: "Vocês fazem impermeabilização com garantia?", a: "Sim. Aplicamos manta asfáltica ou argamassa polimérica conforme NBR 9575 e damos garantia de 5 anos com teste de estanqueidade documentado." },
      { q: "Posso usar o banheiro durante a obra?", a: "Em apartamentos com 2 banheiros, isolamos o reformado e mantemos o outro em uso. Em casas com 1 só banheiro, planejamos a obra para minimizar o tempo sem uso." },
      { q: "Trabalham com construção e reforma de banheiros acessíveis?", a: "Sim. Executamos banheiro acessível conforme NBR 9050 — barras de apoio, box nivelado, vaso com altura adequada e área de manobra para cadeira." },
    ],
    related: ["apartamento", "cozinha", "pisos"],
  },
  {
    slug: "telhado",
    code: "RF-06",
    h1: "Reforma de Telhado em Teresina",
    shortTitle: "Telhado",
    metaTitle: "Reforma de Telhado em Teresina | Manutenção de Telhados",
    metaDescription:
      "Reforma de telhado residencial em Teresina: manutenção de telhados, troca de telhas, calhas, rufos e empresas de telhados e coberturas com NR-35.",
    summary:
      "Reforma e manutenção de telhados residenciais com troca de telhas, calhas, rufos e impermeabilização, com equipe certificada NR-35.",
    keywords: [
      "reforma de telhado",
      "construção e reforma",
      "reforma de telhados",
      "manutenção de telhados",
      "reforma de telhado residencial",
      "reforma de telhados residenciais",
      "empresas de telhados e coberturas",
      "manutenção telhado",
    ],
    intro:
      "A Chico Resolve está entre as empresas de telhados e coberturas mais procuradas em Teresina para reforma de telhado residencial e manutenção telhado preventiva. Atuamos em construção e reforma de coberturas: troca completa de telhas cerâmicas, telhas de fibrocimento ou telhas metálicas, substituição de madeiramento (caibros, ripas, terças), instalação de manta térmica e subcobertura, calhas e rufos em aço galvanizado pintado, e impermeabilização de lajes técnicas. Toda nossa equipe é certificada em NR-35 (trabalho em altura) com cinto, talabarte, linha de vida e plano de resgate antes de subir no telhado.",
    whenToHire: [
      { title: "Goteira ou infiltração", text: "Manchas no forro e pingos no inverno são sinais claros de manutenção telhado urgente." },
      { title: "Telhas envelhecidas (15+ anos)", text: "Telhas cerâmicas vencidas perdem porosidade e absorvem mais água do que escoam." },
      { title: "Compra de imóvel", text: "Vistoria pré-compra com laudo técnico do estado da cobertura antes de fechar negócio." },
      { title: "Manutenção preventiva anual", text: "Limpeza de calhas, troca de telhas quebradas e reaperto de fixadores antes do inverno." },
    ],
    types: [
      { title: "Troca Completa de Telhado", text: "Remoção do telhado existente, revisão ou troca do madeiramento, instalação de subcobertura e telhas novas." },
      { title: "Manutenção de Telhados", text: "Troca de telhas quebradas, limpeza de calhas, reaperto de cumeeiras, impermeabilização localizada." },
      { title: "Calhas, Rufos e Condutores", text: "Calhas em aço galvanizado pintado, rufos de acabamento e tubos de queda com dimensionamento correto." },
      { title: "Coberturas Industriais e Comerciais", text: "Telha sanduíche, telha termoacústica, policarbonato e galvalume para galpões e lojas." },
    ],
    process: [
      { title: "Vistoria Técnica", text: "Inspeção do telhado, madeiramento, calhas e rufos com fotos do antes." },
      { title: "Orçamento Detalhado", text: "Proposta com escopo (madeiramento, telha, calha, rufo, manta), prazo e forma de pagamento." },
      { title: "Montagem com NR-35", text: "Linha de vida, andaimes ou plataforma, equipe com cinto e talabarte certificados." },
      { title: "Execução e Acabamento", text: "Troca/revisão do madeiramento, subcobertura, telhas, cumeeiras, calhas e rufos." },
      { title: "Teste e Garantia", text: "Teste com mangueira em pontos críticos, relatório fotográfico do depois e garantia formal." },
    ],
    standards: [
      "NBR 15310 (telha cerâmica)",
      "NBR 8039 (projeto e execução de telhados com telha cerâmica)",
      "NBR 7196 (telhas de fibrocimento)",
      "NR-35 (trabalho em altura) e NR-18 (canteiro de obras)",
      "ABNT NBR 10844 (drenagem pluvial)",
    ],
    trust: [
      "Empresas de telhados e coberturas com equipe própria certificada em NR-35",
      "Linha de vida e plano de resgate antes de qualquer trabalho em altura",
      "Madeira tratada com cupinicida e impermeabilização garantida por escrito",
      "Calhas e rufos em aço galvanizado pintado com 5 anos de garantia",
      "Relatório fotográfico antes/depois e laudo técnico para vistoria",
    ],
    geo: "Atendemos reforma de telhado residencial em todos os bairros de Teresina — Jóquei, Fátima, Ininga, Cabral, Noivos, Lagoa Alegre, Recanto das Palmeiras, Bela Vista, Itararé, Parque Piauí — e em casas de praia em Timon-MA, Altos (Centro), José de Freitas (Cumbuco), Demerval Lobão e União. Para reforma de telhados residenciais urbanos usamos parafusos em inox e telhas com tratamento UV reforçado.",
    faq: [
      { q: "Quanto custa uma reforma de telhado em Teresina?", a: "Manutenção telhado pontual parte de R$ 1.500. Troca completa de telhado residencial fica entre R$ 180 e R$ 380 por m² conforme telha (cerâmica, fibrocimento, metálica) e estado do madeiramento." },
      { q: "Vocês trabalham com manutenção de telhados preventiva?", a: "Sim. Oferecemos contrato anual de manutenção telhado: limpeza de calhas, troca de telhas quebradas, vedação de cumeeiras e relatório fotográfico — ideal antes do inverno." },
      { q: "Trocam o madeiramento podre por cupim?", a: "Sim. Identificamos peças comprometidas, substituímos por madeira tratada (autoclave) e aplicamos cupinicida na estrutura remanescente." },
      { q: "Trabalham com construção e reforma de telhado novo?", a: "Sim. Em obras de ampliação ou construção, executamos todo o telhado — estrutura, subcobertura, telha, calha e rufo." },
      { q: "Qual telha indicar para casa em Teresina?", a: "Para clima quente e urbano indicamos telha cerâmica esmaltada (térmica) ou telha sanduíche com isolamento. Para custo-benefício, fibrocimento com manta térmica." },
    ],
    related: ["fachada", "casa", "empresa-de-reforma"],
  },
  {
    slug: "fachada",
    code: "RF-07",
    h1: "Reforma de Fachada em Teresina",
    shortTitle: "Fachada",
    metaTitle: "Reforma de Fachada em Teresina | Predial e Residencial",
    metaDescription:
      "Reforma de fachada predial e residencial em Teresina: construção e reforma de fachadas com pintura, revestimento, juntas e impermeabilização.",
    summary:
      "Reforma de fachada predial e residencial — pintura, revestimento, juntas de dilatação e impermeabilização com equipe NR-35.",
    keywords: [
      "reforma de fachada",
      "reforma de fachada predial",
      "construção e reforma",
      "reforma de fachada residencial",
    ],
    intro:
      "A reforma de fachada é, em Teresina, um serviço de engenharia: calor e poeira, vento, sol forte e chuva concentrada agridem a pele do edifício mais do que em qualquer outra capital. A Chico Resolve executa reforma de fachada predial e reforma de fachada residencial cobrindo lavagem técnica, recuperação de fissuras, tratamento de juntas de dilatação, troca de revestimento cerâmico quando necessário, impermeabilização de platibandas, pintura com tintas acrílicas premium (Sherwin-Williams, Suvinil, Coral) e instalação ou substituição de ACM e pastilhas. Toda obra de construção e reforma de fachada conta com plano de resgate NR-35, montagem certificada de balancim ou andaime fachadeiro, sinalização e gerenciamento de risco para terceiros.",
    whenToHire: [
      { title: "Pintura descascando ou desbotada", text: "Sinal de tinta vencida ou aplicação sobre substrato úmido — exige diagnóstico antes de repintar." },
      { title: "Fissuras na fachada", text: "Trincas em torno de janelas, sacadas ou juntas precisam de tratamento antes da pintura." },
      { title: "Infiltração em apartamento", text: "Mancha interna em parede de fachada quase sempre vem de junta de dilatação envelhecida." },
      { title: "Valorização do imóvel", text: "Fachada renovada valoriza prédios em até 20% e acelera vendas de unidades." },
    ],
    types: [
      { title: "Pintura de Fachada", text: "Lavagem, tratamento de pontos críticos, selador e duas demãos de tinta acrílica premium." },
      { title: "Tratamento de Juntas de Dilatação", text: "Remoção do selante envelhecido e aplicação de poliuretano estrutural com cordão de apoio." },
      { title: "Recuperação Estrutural", text: "Reparo de cobrimento de concreto, ferragens corroídas e fissuras com argamassa polimérica." },
      { title: "Troca de Revestimento", text: "Substituição de pastilhas, cerâmicas ou aplicação de ACM em fachadas modernas." },
    ],
    process: [
      { title: "Vistoria e Mapeamento", text: "Mapeamento da fachada com fotos por pavimento, identificando patologias por trecho." },
      { title: "Memorial Descritivo", text: "Memorial com sistema construtivo, marcas de material e cronograma para apresentar à assembleia." },
      { title: "Montagem NR-35", text: "Balancim, cadeira suspensa ou andaime fachadeiro com ART de montagem e plano de resgate." },
      { title: "Execução por Pavimento", text: "Lavagem, tratamento, primer e pintura/colocação de revestimento pavimento a pavimento." },
      { title: "Inspeção e Garantia", text: "Inspeção conjunta com síndico e termo de garantia formal por etapa do serviço." },
    ],
    standards: [
      "NBR 13245 (pintura de edificações)",
      "NBR 15575 (desempenho de edificações)",
      "NBR 9575 (impermeabilização)",
      "NR-35 (trabalho em altura) e NR-18 (canteiro)",
      "ART de montagem de balancim/andaime fachadeiro",
    ],
    trust: [
      "Equipe própria CLT certificada em NR-35 com reciclagem anual",
      "ART de montagem de balancim ou andaime fachadeiro emitida por engenheiro",
      "Tintas acrílicas premium com 8 anos de garantia em fachada externa",
      "Mapeamento fotográfico de patologias por pavimento antes da obra",
      "Plano de gerenciamento de risco para pedestres e veículos no entorno",
    ],
    geo: "Atendemos reforma de fachada predial em prédios da Centro, Mocambinho, Satélite, Fátima, Jóquei, Ininga, São Cristóvão, Horto, Morros, Cabral e Noivos. Para reforma de fachada residencial atuamos em toda Teresina e Grande Teresina (Timon-MA, Altos, José de Freitas, União). Em prédios urbanos especificamos sistema de pintura acrílico com primer fixador e tratamento adicional de juntas com selante poliuretânico.",
    faq: [
      { q: "Quanto custa uma reforma de fachada predial em Teresina?", a: "Pintura de fachada parte de R$ 45 por m² de área aplicada; recuperação estrutural fica entre R$ 80 e R$ 250 por m² conforme patologia. Mapeamento e orçamento são gratuitos." },
      { q: "Quanto tempo dura a pintura de fachada?", a: "Em Teresina, com tinta acrílica premium e preparação correta, a pintura de fachada dura de 5 a 8 anos. Prédios na Centro costumam pedir repintura no menor intervalo por causa da calor e poeira." },
      { q: "Vocês trabalham com construção e reforma de fachada residencial?", a: "Sim. Reforma de fachada residencial inclui pintura, recuperação de revestimentos, cobogós, esquadrias e ACM em casas e sobrados." },
      { q: "Como funciona a aprovação da obra na assembleia?", a: "Entregamos memorial descritivo, orçamento detalhado, ART do engenheiro e cronograma para o síndico convocar assembleia. Acompanhamos a reunião se necessário." },
      { q: "Atendem prédios altos?", a: "Sim. Trabalhamos com balancim elétrico, cadeira suspensa e andaime fachadeiro em prédios de até 30 pavimentos com plano de resgate NR-35." },
    ],
    related: ["telhado", "casa", "comercial"],
  },
  {
    slug: "piscina",
    code: "RF-08",
    h1: "Reforma de Piscina em Teresina",
    shortTitle: "Piscina",
    metaTitle: "Reforma de Piscina em Teresina | Vazamento e Impermeabilização",
    metaDescription:
      "Reforma de piscina de alvenaria e azulejo em Teresina: impermeabilização de piscina com vazamento, conserto e reparo estrutural com garantia.",
    summary:
      "Reforma de piscina de alvenaria e azulejo, impermeabilização, conserto de vazamento e reparo estrutural com teste de estanqueidade.",
    keywords: [
      "reforma piscina",
      "reforma de piscina de alvenaria",
      "reforma de piscina de azulejo",
      "impermeabilização de piscina com vazamento",
      "conserto de vazamento de piscina",
      "reparo estrutural em piscina",
    ],
    intro:
      "Reforma de piscina em Teresina envolve três frentes técnicas: reparo estrutural em piscina (trinca em parede, recalque diferencial, fissura no fundo), impermeabilização de piscina com vazamento (argamassa polimérica, manta líquida acrílica ou sistema epóxi) e troca de revestimento (pastilha cerâmica, pastilha de vidro, vinil ou pintura epóxi). A Chico Resolve executa reforma de piscina de alvenaria e reforma de piscina de azulejo com diagnóstico técnico do vazamento (teste de evaporação e teste de pressão hidrostática nas tubulações), conserto de vazamento de piscina com localização precisa, e entrega com teste de estanqueidade de 7 dias antes da liberação para uso.",
    whenToHire: [
      { title: "Nível da água baixando", text: "Mais de 5 mm/dia além da evaporação normal indica vazamento. Diagnóstico técnico antes de quebrar." },
      { title: "Pastilhas soltando", text: "Pastilhas caindo sinalizam falha de argamassa colante ou impermeabilização vencida." },
      { title: "Trinca estrutural", text: "Trinca de mais de 1 mm exige reparo estrutural em piscina com tratamento técnico." },
      { title: "Piscina antiga sem uso", text: "Reativação envolve laudo estrutural, nova impermeabilização e revestimento." },
    ],
    types: [
      { title: "Reforma de Piscina de Alvenaria", text: "Reparo estrutural, impermeabilização e revestimento novo em piscinas de concreto armado." },
      { title: "Reforma de Piscina de Azulejo", text: "Troca de pastilha cerâmica ou de vidro com rejunte epóxi para áreas submersas." },
      { title: "Impermeabilização com Vazamento", text: "Localização do vazamento, reparo estrutural e nova impermeabilização com sistema certificado." },
      { title: "Conserto de Vazamento", text: "Teste de evaporação, teste de pressão nas tubulações e reparo localizado quando viável." },
    ],
    process: [
      { title: "Diagnóstico do Vazamento", text: "Teste de evaporação de 48h e teste de pressão hidrostática nas tubulações de recalque e retorno." },
      { title: "Esvaziamento e Vistoria", text: "Esvaziamento controlado, vistoria estrutural e relatório técnico com fotos." },
      { title: "Reparo Estrutural", text: "Tratamento de trincas, recomposição de ferragens e regularização da superfície." },
      { title: "Impermeabilização Técnica", text: "Argamassa polimérica em duas demãos cruzadas ou manta líquida conforme o sistema da piscina." },
      { title: "Revestimento e Estanqueidade", text: "Assentamento de pastilha com rejunte epóxi, teste de estanqueidade de 7 dias e laudo de entrega." },
    ],
    standards: [
      "NBR 9575 e NBR 9574 (impermeabilização)",
      "NBR 10821 (piscinas — requisitos)",
      "NBR 6118 (estruturas de concreto)",
      "NR-18 e NR-35 quando aplicável",
      "FDS dos produtos químicos aplicados",
    ],
    trust: [
      "Diagnóstico do vazamento com teste técnico documentado",
      "Reparo estrutural em piscina com argamassa polimérica e tela de fibra de vidro",
      "Impermeabilização com sistema certificado e 5 anos de garantia formal",
      "Rejunte epóxi nas áreas submersas (resistente a cloro)",
      "Teste de estanqueidade de 7 dias antes da liberação para uso",
    ],
    geo: "Atendemos reforma de piscina em Teresina inteira — Jóquei, Fátima, Ininga, Cabral, Noivos, Recanto das Palmeiras, Parque Piauí — e em casas de praia e condomínios em Timon-MA, Altos (Centro), José de Freitas (Cumbuco, Icaraí), Demerval Lobão e União. Em piscinas próximas ao mar usamos rejunte epóxi e fixadores em inox 316 por causa da insolação intensa.",
    faq: [
      { q: "Como saber se a piscina tem vazamento?", a: "Marque o nível, cubra para evitar evaporação e meça em 24h. Perda acima de 5 mm/dia indica vazamento. Fazemos teste de evaporação técnico gratuito." },
      { q: "Quanto custa impermeabilização de piscina com vazamento?", a: "Depende da metragem e do sistema. Impermeabilização com argamassa polimérica + nova pastilha parte de R$ 280 por m² de espelho d'água. Conserto de vazamento pontual fica entre R$ 1.500 e R$ 5.000." },
      { q: "Vocês fazem reforma de piscina de azulejo antiga?", a: "Sim. Removemos o revestimento antigo, tratamos a estrutura, reimpermeabilizamos e aplicamos pastilha nova com rejunte epóxi." },
      { q: "Quanto tempo demora uma reforma de piscina de alvenaria?", a: "De 15 a 30 dias úteis dependendo do tamanho, sistema de impermeabilização e tempo de cura entre etapas." },
      { q: "Tem garantia?", a: "Sim. 5 anos sobre impermeabilização e reparo estrutural, e 12 meses sobre execução de revestimento conforme NBR 16280." },
    ],
    related: ["banheiro", "casa", "fachada"],
  },
  {
    slug: "pisos",
    code: "RF-09",
    h1: "Reforma de Pisos em Teresina",
    shortTitle: "Pisos",
    metaTitle: "Reforma de Pisos em Teresina | Laminado, Vinílico e Porcelanato",
    metaDescription:
      "Reforma de pisos em Teresina: instalação de piso laminado e vinílico, empresa de instalação de pisos com orçamento para trocar piso e garantia.",
    summary:
      "Reforma e instalação de pisos — laminado, vinílico, porcelanato e cerâmica — com nivelamento técnico e garantia formal.",
    keywords: [
      "reforma de pisos",
      "reforma de piso laminado",
      "orçamento para trocar piso",
      "empresa de instalação de pisos",
      "instalação de piso vinílico",
    ],
    intro:
      "A Chico Resolve é uma empresa de instalação de pisos em Teresina que executa reforma de pisos em apartamento habitado, casas, lojas e escritórios. Trabalhamos com instalação de piso vinílico (cola, click ou colado em manta), reforma de piso laminado (HDF 8 a 12 mm), porcelanato 60×120 cm e 90×90 cm, cerâmica, piso de madeira engenheirada e piso elevado modular. Todo orçamento para trocar piso começa com avaliação do contrapiso (umidade, planicidade, nivelamento) — sem essa etapa, qualquer piso novo soa oco, levanta nas pontas ou trinca em até 12 meses. Por isso garantimos por escrito o nivelamento com autonivelante quando necessário.",
    whenToHire: [
      { title: "Piso descolando ou trincado", text: "Cerâmica oca, porcelanato rachado ou laminado inflado indicam contrapiso comprometido." },
      { title: "Atualização estética", text: "Trocar carpete por piso vinílico, cerâmica antiga por porcelanato grande formato." },
      { title: "Pré-mudança", text: "Aproveitar o imóvel vazio para trocar o piso de toda a área social em poucos dias." },
      { title: "Apartamento na planta", text: "Substituir o piso padrão da construtora antes de receber as chaves." },
    ],
    types: [
      { title: "Instalação de Piso Vinílico", text: "Manta, régua colada ou click — ideal para apartamento habitado, rápido e sem quebra-quebra." },
      { title: "Reforma de Piso Laminado", text: "HDF de 8 a 12 mm com manta acústica, ideal para quartos e áreas secas." },
      { title: "Porcelanato Grande Formato", text: "60×120, 90×90 e 120×120 cm com rejunte mínimo, ideal para sala e cozinha." },
      { title: "Cerâmica e Porcelanato Externo", text: "Revestimentos para áreas externas, varandas e áreas de piscina com superfície antiderrapante." },
    ],
    process: [
      { title: "Visita Técnica e Medição", text: "Medição da área, avaliação do contrapiso e teste de umidade para indicar o sistema correto." },
      { title: "Orçamento para Trocar Piso", text: "Orçamento detalhado com material, mão de obra, retirada de entulho e rodapés." },
      { title: "Preparação do Contrapiso", text: "Remoção do piso antigo, regularização e aplicação de autonivelante quando necessário." },
      { title: "Assentamento Técnico", text: "Assentamento com argamassa AC-III, dupla colagem em porcelanato grande formato, rejunte adequado." },
      { title: "Acabamento e Limpeza", text: "Rodapé, soleira, limpeza pós-obra e termo de garantia formal sobre instalação." },
    ],
    standards: [
      "NBR 13753 (cerâmica para piso)",
      "NBR 13753 / 13816 (revestimento cerâmico)",
      "NBR 14081 (argamassa colante)",
      "NBR 9050 (acessibilidade em soleiras)",
      "FDS da argamassa e do rejunte aplicados",
    ],
    trust: [
      "Empresa de instalação de pisos com CNPJ ativo e nota fiscal",
      "Orçamento para trocar piso detalhado e gratuito em até 48h",
      "Nivelamento com autonivelante quando o contrapiso exigir",
      "Equipe própria CLT — sem subempreitar montadores",
      "Garantia formal de 12 meses sobre instalação de piso vinílico, laminado, cerâmica e porcelanato",
    ],
    geo: "Atendemos reforma de pisos em todo Teresina — Jóquei, Fátima, Ininga, Cabral, Noivos, Bela Vista, Recanto das Palmeiras, Parque Piauí, Itararé, Dirceu, Centro e Mocambinho — e em Timon-MA, Altos, José de Freitas, Demerval Lobão e União. Em apartamentos urbanos indicamos porcelanato técnico de baixa absorção e rejunte epóxi nas áreas molhadas.",
    faq: [
      { q: "Quanto custa instalação de piso vinílico em Teresina?", a: "Instalação de piso vinílico click parte de R$ 35/m² (mão de obra) + material. Régua colada fica em torno de R$ 45/m². Visita técnica e orçamento para trocar piso são gratuitos." },
      { q: "Quanto tempo demora uma reforma de piso laminado?", a: "Em uma sala de 30 m², a reforma de piso laminado leva 1 a 2 dias úteis, sem quebra-quebra e com mínimo de barulho." },
      { q: "Vocês retiram o piso antigo?", a: "Sim. Removemos o piso existente, descartamos o entulho conforme CONAMA 307 e regularizamos o contrapiso antes do novo." },
      { q: "Posso colocar piso vinílico sobre cerâmica?", a: "Sim, desde que a cerâmica esteja firme (sem peças ocas), nivelada e seca. Avaliamos o substrato durante a visita técnica." },
      { q: "Trabalham com porcelanato grande formato?", a: "Sim. Instalamos porcelanato 60×120, 90×90, 120×120 e 120×240 cm com dupla colagem e técnica de assentamento específica para grandes peças." },
    ],
    related: ["banheiro", "cozinha", "apartamento"],
  },
  {
    slug: "cozinha",
    code: "RF-10",
    h1: "Reforma de Cozinha em Teresina",
    shortTitle: "Cozinha",
    metaTitle: "Reforma de Cozinha em Teresina | Pequena, Simples e Completa",
    metaDescription:
      "Reforma de cozinha em Teresina: reforma de cozinha pequena e simples, empreiteira para reforma de cozinha, troca de revestimento e hidráulica.",
    summary:
      "Reforma de cozinha pequena, simples ou completa com retrofit, troca de revestimento, porcelanato e reforma hidráulica.",
    keywords: [
      "reforma de cozinha",
      "reforma de cozinha pequena",
      "reforma de cozinha simples",
      "empreiteira para reforma de cozinha",
      "orçamento para obra na cozinha",
      "remodelação de cozinha preço",
      "empresa de retrofit de cozinha",
      "empreiteiro para fazer cozinha",
      "troca de revestimento de cozinha",
      "colocação de porcelanato cozinha",
      "reforma hidráulica de cozinha",
    ],
    intro:
      "A Chico Resolve é empreiteira para reforma de cozinha em Teresina com pacote completo: reforma hidráulica de cozinha (nova rede de água quente e fria, esgoto, pia, máquina de lavar louças, filtro), troca de revestimento de cozinha (porcelanato de piso, revestimento de parede, faixa decorativa), colocação de porcelanato cozinha grande formato com dupla colagem, instalação elétrica nova com circuito exclusivo para forno, micro-ondas e coifa, marcenaria sob medida em MDF/MDP com puxadores embutidos, bancada em quartzo, silestone ou granito, e adequação da coifa com tubulação até a fachada. Tanto reforma de cozinha pequena (5–8 m²) quanto reforma de cozinha simples ou retrofit completo entram com orçamento para obra na cozinha detalhado e prazo em contrato.",
    whenToHire: [
      { title: "Cozinha apertada", text: "Reforma de cozinha pequena com integração à sala, marcenaria sob medida e ganho de bancada." },
      { title: "Atualização estética", text: "Reforma de cozinha simples com troca de revestimento, pintura e novo armário planejado." },
      { title: "Vazamento ou má pressão", text: "Reforma hidráulica de cozinha completa, com nova prumada e pontos certos para cada equipamento." },
      { title: "Cozinha gourmet", text: "Empresa de retrofit de cozinha: cooktop, forno embutido, coifa exaustora, ilha e adega." },
    ],
    types: [
      { title: "Reforma de Cozinha Pequena", text: "Otimização de layout, marcenaria planejada e iluminação para ganhar funcionalidade." },
      { title: "Reforma de Cozinha Simples", text: "Pintura, troca de revestimento e atualização de pia, torneira e armário sem mexer em hidráulica." },
      { title: "Retrofit de Cozinha", text: "Hidráulica, elétrica, gás, revestimento, marcenaria e bancada novas — chave na mão." },
      { title: "Cozinha Gourmet", text: "Ilha, bancada de pedra, coifa exaustora e integração com varanda ou sala." },
    ],
    process: [
      { title: "Visita Técnica", text: "Levantamento de medidas, ponto de hidráulica/elétrica/gás e entendimento da rotina da família." },
      { title: "Orçamento para Obra na Cozinha", text: "Orçamento detalhado por etapa (demolição, instalações, revestimento, marcenaria, bancada)." },
      { title: "Demolição Controlada", text: "Demolição com proteção do restante do apartamento, descarte conforme CONAMA 307." },
      { title: "Instalações Novas", text: "Reforma hidráulica de cozinha completa, circuitos elétricos dedicados e ponto de gás verificado." },
      { title: "Revestimento e Acabamento", text: "Colocação de porcelanato cozinha, revestimento de parede, marcenaria, bancada e instalação dos eletros." },
    ],
    standards: [
      "NBR 5626 (hidráulica) e NBR 5410 (elétrica)",
      "NBR 13103 (instalações internas de gás GLP)",
      "NBR 13753 (assentamento de cerâmica)",
      "NBR 16280 (reformas em edificações)",
      "RDC 216 ANVISA para cozinhas comerciais",
    ],
    trust: [
      "Empreiteira para reforma de cozinha com hidráulica, elétrica e gás sob o mesmo contrato",
      "Empresa de retrofit de cozinha com engenheiro responsável e ART",
      "Colocação de porcelanato cozinha com dupla colagem em peças grandes",
      "Garantia de 12 meses sobre execução e 5 anos sobre impermeabilização",
      "Empreiteiro para fazer cozinha CLT — sem subempreitar marceneiro de aplicativo",
    ],
    geo: "Atendemos reforma de cozinha em todos os edifícios e casas de Teresina — Jóquei, Fátima, Ininga, São Cristóvão, Horto, Cabral, Noivos, Bela Vista, Centro, Mocambinho e Dirceu — e em Timon-MA, Altos, José de Freitas, Demerval Lobão e União. Em cozinhas urbanas indicamos puxadores e ferragens em inox 304/316 e bancadas em quartzo para resistir à calor e poeira.",
    faq: [
      { q: "Qual a remodelação de cozinha preço médio em Teresina?", a: "Reforma de cozinha simples (sem mexer em hidráulica) parte de R$ 12 mil. Reforma de cozinha pequena completa fica entre R$ 25 mil e R$ 45 mil. Cozinha gourmet com ilha varia de R$ 60 mil a R$ 150 mil." },
      { q: "Vocês fazem reforma hidráulica de cozinha completa?", a: "Sim. Trocamos prumadas internas, redimensionamos pontos para máquina de lavar louças, filtro, gelo, dispenser e coifa. Teste de estanqueidade obrigatório antes do revestimento." },
      { q: "Quanto custa a colocação de porcelanato cozinha grande formato?", a: "Mão de obra para colocação de porcelanato cozinha 60×120 ou 90×90 parte de R$ 80/m² com dupla colagem e rejunte epóxi. Visita técnica e orçamento para obra na cozinha são gratuitos." },
      { q: "Vocês fazem troca de revestimento de cozinha sem mexer no resto?", a: "Sim. Reforma de cozinha simples só com troca de revestimento e pintura, mantendo armários e bancada existentes." },
      { q: "Quanto tempo dura uma reforma de cozinha?", a: "Reforma simples: 7 a 12 dias. Reforma completa com hidráulica e marcenaria nova: 30 a 45 dias úteis." },
    ],
    related: ["apartamento", "banheiro", "pisos"],
  },
  {
    slug: "quadras-esportivas",
    code: "RF-11",
    h1: "Reforma de Quadras Esportivas em Teresina",
    shortTitle: "Quadras Esportivas",
    metaTitle: "Reforma de Quadras Esportivas em Teresina | Poliesportiva e Society",
    metaDescription:
      "Reforma de quadras esportivas em Teresina: empreiteira para quadra poliesportiva, revitalização de Society, pintura epóxi, grama sintética e alambrado.",
    summary:
      "Reforma e revitalização de quadras esportivas — poliesportiva, Society, society, com pintura epóxi, grama sintética e alambrado.",
    keywords: [
      "reforma de quadras esportivas",
      "reforma de quadras",
      "orçamento reforma quadra condomínio",
      "empreiteira para quadra poliesportiva",
      "empresa de reforma de quadra esportiva",
      "revitalização de quadra de Society",
      "pintura epóxi para quadra esportiva",
      "instalação de grama sintética esportiva",
      "troca de alambrado de quadra",
      "conserto de piso de quadra trincado",
    ],
    intro:
      "A Chico Resolve é empreiteira para quadra poliesportiva e empresa de reforma de quadra esportiva em Teresina com obras entregues em condomínios, clubes, escolas e centros de treinamento. Executamos reforma de quadras esportivas em piso de concreto (conserto de piso de quadra trincado com tratamento de fissura ativa), pintura epóxi para quadra esportiva (sistema epóxi à base d'água, demarcação oficial conforme FIBA/CBF), revitalização de quadra de Society (substituição de grama sintética, manta de absorção de impacto, drenagem perimetral), instalação de grama sintética esportiva monofilamento, troca de alambrado de quadra (postes galvanizados, tela revestida em PVC) e troca de iluminação por LED. Orçamento reforma quadra condomínio entregue com memorial descritivo para apresentação em assembleia.",
    whenToHire: [
      { title: "Piso trincado", text: "Conserto de piso de quadra trincado com selagem de fissura e novo sistema de pintura." },
      { title: "Grama sintética desgastada", text: "Revitalização de quadra de Society com nova manta, brita de drenagem e grama monofilamento." },
      { title: "Alambrado oxidado", text: "Troca de alambrado de quadra com postes galvanizados e tela revestida em PVC anti-calor e poeira." },
      { title: "Pintura desbotada", text: "Pintura epóxi para quadra esportiva com nova demarcação oficial e lacre de proteção UV." },
    ],
    types: [
      { title: "Quadra Poliesportiva", text: "Empreiteira para quadra poliesportiva: piso, pintura epóxi, demarcação oficial, alambrado e iluminação." },
      { title: "Quadra de Society", text: "Revitalização de quadra de Society com brita, manta, grama sintética monofilamento e drenagem." },
      { title: "Reforma de Piso", text: "Conserto de piso de quadra trincado, regularização, primer e novo sistema de pintura esportiva." },
      { title: "Estrutura e Alambrado", text: "Troca de alambrado de quadra, traves, postes de iluminação, redes e bancos de reserva." },
    ],
    process: [
      { title: "Vistoria e Diagnóstico", text: "Avaliação do piso, fissuras, drenagem, alambrado, iluminação e demarcações existentes." },
      { title: "Memorial e Orçamento", text: "Orçamento reforma quadra condomínio com memorial para assembleia e ART." },
      { title: "Preparação do Piso", text: "Lavagem, regularização, selagem de fissuras e primer epóxi penetrante." },
      { title: "Sistema Esportivo", text: "Pintura epóxi para quadra esportiva ou instalação de grama sintética esportiva conforme tipo." },
      { title: "Entrega com Demarcação", text: "Demarcação oficial das modalidades (futsal, vôlei, basquete, handebol) e termo de garantia." },
    ],
    standards: [
      "NBR 16071 (pisos esportivos)",
      "Regulamentos FIBA, FIVB, CBF e CBFS para demarcação oficial",
      "NBR 5410 (iluminação) e iluminância conforme NBR 8995",
      "NBR 16280 (reformas em edificações)",
      "ART de execução com engenheiro responsável",
    ],
    trust: [
      "Empresa de reforma de quadra esportiva com obras em condomínios e escolas em Teresina",
      "Memorial descritivo gratuito para apresentação em assembleia",
      "Pintura epóxi para quadra esportiva à base d'água, com proteção UV e demarcação oficial",
      "Grama sintética esportiva monofilamento de fabricantes homologados (8+ anos de durabilidade)",
      "Garantia de 24 a 60 meses conforme o sistema aplicado",
    ],
    geo: "Atendemos reforma de quadras em condomínios, clubes e escolas em Teresina — Jóquei, Ininga, Cabral, Noivos, Bela Vista, Recanto das Palmeiras, Parque Piauí, Itararé, Dirceu, Centro — e em Timon-MA, Altos, José de Freitas, Demerval Lobão e União. Para quadras próximas ao mar especificamos tela de alambrado revestida em PVC e estrutura galvanizada a fogo contra calor e poeira.",
    faq: [
      { q: "Qual o preço médio de uma reforma de quadras esportivas em Teresina?", a: "Pintura epóxi para quadra esportiva parte de R$ 95/m². Revitalização de quadra de Society fica entre R$ 180 e R$ 280/m² incluindo brita, manta e grama. Visita e orçamento reforma quadra condomínio são gratuitos." },
      { q: "Vocês fazem conserto de piso de quadra trincado?", a: "Sim. Conserto de piso de quadra trincado com selagem flexível de fissura, regularização e novo sistema de pintura epóxi." },
      { q: "Quanto tempo demora a instalação de grama sintética esportiva?", a: "Quadra de Society padrão (20×40 m): 7 a 12 dias úteis incluindo preparo da base, drenagem, manta e instalação da grama monofilamento." },
      { q: "Trocam alambrado oxidado?", a: "Sim. Troca de alambrado de quadra com postes galvanizados a fogo, tela revestida em PVC e portões de acesso reforçados." },
      { q: "Atendem condomínios com orçamento para assembleia?", a: "Sim. Entregamos orçamento reforma quadra condomínio com memorial descritivo, fotos, prazo e ART para o síndico apresentar em assembleia." },
    ],
    related: ["pisos", "empresa-de-reforma", "comercial"],
  },
  {
    slug: "quarto",
    code: "RF-12",
    h1: "Reforma de Quarto em Teresina",
    shortTitle: "Quarto",
    metaTitle: "Reforma de Quarto em Teresina | Suíte e Quarto Infantil",
    metaDescription:
      "Reforma de quarto em Teresina: suíte do casal, quarto infantil e home office com troca de piso, pintura, marcenaria sob medida e instalações elétricas.",
    summary:
      "Reforma de quarto, suíte e home office com troca de piso, pintura, marcenaria sob medida, iluminação cênica e instalações novas.",
    keywords: [
      "reforma de quarto",
      "reforma de suíte",
      "reforma de quarto de casal",
      "reforma de quarto infantil",
      "reforma de home office",
    ],
    intro:
      "A reforma de quarto é o serviço mais rápido e com melhor retorno estético na rotina da casa: em 5 a 10 dias úteis, um cômodo sai do mofo, da pintura desbotada e do piso vencido e vira ambiente novo. A Chico Resolve executa reforma de quarto em apartamento e casa em Teresina com pacote completo: troca de piso (laminado, vinílico ou porcelanato), pintura com tinta antimofo, marcenaria sob medida (guarda-roupa, painel de TV, escrivaninha), iluminação cênica em LED com dimmer, ponto de tomada USB, ar-condicionado split inverter e isolamento acústico em drywall quando necessário. Atendemos suíte do casal, quarto infantil com regras de segurança (NBR 14725 para pintura, mobiliário sem cantos vivos) e home office com cabeamento estruturado para internet.",
    whenToHire: [
      { title: "Mudança de filho ou casamento", text: "Adaptar quarto infantil para adolescente ou criar suíte do casal antes da mudança." },
      { title: "Pintura ou piso vencidos", text: "Reforma rápida com troca de piso, pintura e marcenaria — ambiente novo em uma semana." },
      { title: "Home office", text: "Adequação acústica, iluminação adequada, ponto de internet e marcenaria com escrivaninha." },
      { title: "Suíte do casal", text: "Integração com banheiro, closet planejado, iluminação cênica e isolamento acústico." },
    ],
    types: [
      { title: "Suíte do Casal", text: "Reforma do quarto + banheiro + closet com integração visual e iluminação cênica." },
      { title: "Quarto Infantil", text: "Tinta antimofo lavável, mobiliário sem cantos vivos e iluminação dimerizável." },
      { title: "Home Office", text: "Isolamento acústico em drywall, cabeamento estruturado, iluminação adequada e marcenaria." },
      { title: "Quarto de Hóspedes", text: "Reforma multiuso com sofá-cama, marcenaria sob medida e closet/guarda-roupa." },
    ],
    process: [
      { title: "Visita Técnica e Briefing", text: "Levantamento de medidas, conversa sobre uso do quarto e preferências estéticas." },
      { title: "Orçamento e Prazo", text: "Orçamento detalhado por etapa (demolição, piso, pintura, marcenaria, instalações)." },
      { title: "Proteção e Demolição", text: "Cobertura plástica do restante do apartamento, demolição controlada e descarte regular." },
      { title: "Execução Integrada", text: "Piso, pintura, marcenaria, elétrica e ar-condicionado executados em sequência otimizada." },
      { title: "Entrega Limpa", text: "Limpeza fina, vistoria conjunta, manual de manutenção e garantia formal." },
    ],
    standards: [
      "NBR 16280 (reformas em edificações)",
      "NBR 5410 (instalações elétricas)",
      "NBR 15575 (desempenho — conforto acústico)",
      "NBR 14725 (rotulagem de tintas) para quarto infantil",
      "Convenção do condomínio quando aplicável",
    ],
    trust: [
      "Reforma de quarto em 5 a 10 dias úteis com cronograma definido em contrato",
      "Equipe própria CLT com proteção do restante do apartamento",
      "Tintas antimofo e baixo VOC, especialmente em quarto infantil",
      "Garantia formal de 12 meses sobre execução conforme NBR 16280",
      "Atendimento pós-obra para ajustes finos por até 90 dias",
    ],
    geo: "Atendemos reforma de quarto em apartamentos e casas em Teresina — Jóquei, Fátima, Ininga, São Cristóvão, Horto, Cabral, Noivos, Bela Vista, Recanto das Palmeiras, Parque Piauí, Itararé, Dirceu, Centro e Mocambinho — e em Timon-MA, Altos, José de Freitas, Demerval Lobão e União. Em quartos em zona urbana especificamos tinta acrílica premium antimofo e ferragens em inox para a marcenaria.",
    faq: [
      { q: "Quanto custa uma reforma de quarto em Teresina?", a: "Reforma de quarto simples (piso, pintura, ponto de ar-condicionado) parte de R$ 8 mil. Suíte do casal completa com closet e banheiro fica entre R$ 35 mil e R$ 70 mil." },
      { q: "Quanto tempo demora uma reforma de quarto?", a: "Quarto padrão (12 m²) com troca de piso, pintura e marcenaria: 5 a 10 dias úteis. Suíte completa com banheiro: 20 a 35 dias úteis." },
      { q: "Vocês fazem reforma de quarto infantil com tinta segura?", a: "Sim. Usamos tinta acrílica baixo VOC, lavável e antimofo, conforme NBR 14725, e mobiliário sob medida sem cantos vivos." },
      { q: "Trabalham com isolamento acústico em quarto?", a: "Sim. Aplicamos parede drywall com lã de rocha, janela acústica e selantes em portas e tomadas para quarto de bebê ou home office." },
      { q: "Posso morar no apartamento durante a reforma do quarto?", a: "Sim. Isolamos o quarto reformado com plástico bolha e fita, mantendo o restante do apartamento habitável durante a obra." },
    ],
    related: ["apartamento", "casa", "cozinha"],
  },
];

export const getReformaSubservice = (slug: string): ReformaSubservice | undefined =>
  reformaSubservices.find((s) => s.slug === slug);

// ============================================================================
// JUNTAS DE DILATAÇÃO — Hub + sub-páginas otimizadas para EEAT, GEO Teresina
// e SEO técnico (Service + Breadcrumb + FAQPage JSON-LD).
// ============================================================================

export type JuntaSlug =
  | "tratamento-dilatacao"
  | "vedacao-fachada"
  | "manutencao-movimentacao"
  | "recuperacao-estrutural"
  | "infiltracao"
  | "impermeabilizacao"
  | "rachadura-entre-predios"
  | "vazamento-fachada";

export interface JuntaSubservice {
  slug: JuntaSlug;
  code: string;
  h1: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  keywords: string[];
  intro: string;
  whenToHire: { title: string; text: string }[];
  types: { title: string; text: string }[];
  process: { title: string; text: string }[];
  standards: string[];
  trust: string[];
  geo: string;
  faq: { q: string; a: string }[];
  related: JuntaSlug[];
}

export const juntaSubservices: JuntaSubservice[] = [
  {
    slug: "tratamento-dilatacao",
    code: "JD-01",
    h1: "Tratamento de Juntas de Dilatação em Teresina",
    shortTitle: "Tratamento de Juntas",
    metaTitle: "Tratamento de Juntas de Dilatação em Teresina | Chico Resolve",
    metaDescription:
      "Empresa especializada em tratamento de juntas de dilatação em Teresina: remoção do selante envelhecido, primer, backer rod e selante poliuretânico com garantia.",
    summary:
      "Tratamento técnico completo de juntas de dilatação em lajes, pisos, fachadas e garagens, com diagnóstico, remoção controlada e selante de alta durabilidade.",
    keywords: [
      "tratamento de juntas de dilatação",
      "tratamento de junta de dilatação",
      "empresa de tratamento de juntas",
      "selante para junta de dilatação",
      "junta de dilatação tratamento técnico",
    ],
    intro:
      "Junta de dilatação não é uma rachadura — é um espaço técnico previsto em projeto para acomodar a movimentação natural do concreto por variação térmica, retração de cura e cargas dinâmicas. Quando o selante envelhece, racha ou descola, a junta deixa de ser estanque e passa a ser a principal porta de entrada para infiltrações, corrosão de armadura e patologias estruturais. A Chico Resolve faz tratamento de juntas de dilatação em Teresina com protocolo técnico completo: vistoria, classificação da patologia, remoção controlada do selante envelhecido, limpeza do substrato, aplicação de primer compatível, instalação de cordão de apoio (backer rod) no diâmetro correto e aplicação de selante poliuretânico ou silicone estrutural conforme a exposição (fachada exposta à calor e poeira, laje sob sol direto, piso de garagem com tráfego pesado). Cada serviço sai com relatório fotográfico, ficha técnica dos materiais aplicados e garantia formal por escrito.",
    whenToHire: [
      { title: "Selante descolado ou rachado", text: "Quando o cordão de selante perde aderência, abre fendas ou apresenta fissuras visíveis a olho nu." },
      { title: "Infiltração logo abaixo da junta", text: "Manchas de umidade no teto do andar inferior alinhadas com a junta da laje ou da fachada." },
      { title: "Junta com mais de 8 anos sem manutenção", text: "Vida útil do selante poliuretânico em Teresina varia de 8 a 12 anos por causa da calor e poeira e UV intenso." },
      { title: "Obra nova com selagem mal executada", text: "Bolhas, descontinuidade, falta de primer ou ausência de backer rod — refazemos conforme NBR." },
    ],
    types: [
      { title: "Tratamento em Lajes de Cobertura", text: "Junta de dilatação de cobertura com selante poliuretânico de alto módulo, resistente a UV e variação térmica." },
      { title: "Tratamento em Fachadas", text: "Selagem vertical em fachadas pré-moldadas, ACM ou alvenaria com selante e cordão dimensionados para o movimento esperado." },
      { title: "Tratamento em Pisos e Garagens", text: "Selante poliuretânico de alta dureza para juntas com tráfego de veículos, áreas de carga e descarga." },
      { title: "Tratamento em Áreas Molhadas", text: "Piscinas, reservatórios, sacadas e varandas com selante estrutural compatível com imersão e produtos químicos." },
    ],
    process: [
      { title: "Vistoria Técnica", text: "Classificação da patologia (envelhecimento, descolamento, fissuração, infiltração) e mapa de juntas com fotos." },
      { title: "Remoção Controlada", text: "Retirada do selante envelhecido com ferramenta adequada, sem danificar bordas do concreto." },
      { title: "Limpeza e Primer", text: "Limpeza com escova, ar comprimido e álcool isopropílico; aplicação de primer compatível com o substrato." },
      { title: "Cordão de Apoio e Selante", text: "Backer rod de polietileno dimensionado e selante poliuretânico ou silicone estrutural aplicado em cordão contínuo." },
      { title: "Acabamento e Inspeção", text: "Alisamento com espátula, ensaio de estanqueidade por aspersão e relatório fotográfico entregue ao cliente." },
    ],
    standards: [
      "NBR 9575 (impermeabilização — projeto)",
      "NBR 9574 (execução de impermeabilização)",
      "NBR 15575 (desempenho de edificações)",
      "NR-35 (trabalho em altura)",
      "Manual técnico do fabricante do selante (Sika, Mapei, Vedacit, Hey'di)",
    ],
    trust: [
      "Empresa especializada em tratamento de juntas com CNPJ ativo e nota fiscal",
      "Equipe CLT certificada em NR-35 para tratamento em fachada e altura",
      "Materiais de marcas homologadas: Sikaflex, Mapeflex, Vedaflex",
      "Garantia formal de 5 anos sobre o selante aplicado",
      "Relatório fotográfico antes/durante/depois para prestação de contas ao síndico",
    ],
    geo: "Atendemos tratamento de juntas de dilatação em prédios residenciais e comerciais de toda Teresina — Centro, Mocambinho, Satélite, Fátima, Jóquei, Ininga, São Cristóvão, Horto, Morros, Bela Vista, Cabral e Noivos — e em Timon-MA, Altos e José de Freitas. Para prédios urbanos, especificamos selante poliuretânico de alta resistência à calor e poeira e UV intenso típicos do clima de Teresina.",
    faq: [
      { q: "Qual a diferença entre rachadura e junta de dilatação?", a: "Junta de dilatação é um vão técnico previsto em projeto para acomodar movimentação; rachadura é uma patologia não prevista. O tratamento é diferente para cada caso e começa com diagnóstico técnico." },
      { q: "Quanto tempo dura o selante de junta em Teresina?", a: "Selante poliuretânico de qualidade aplicado por equipe técnica dura de 8 a 12 anos em Teresina, considerando a exposição à calor e poeira e ao UV intenso." },
      { q: "Posso usar silicone comum para tratar a junta?", a: "Não. Silicone comum não tem módulo de elasticidade adequado nem resistência ao UV. O correto é selante poliuretânico ou silicone estrutural compatível com a movimentação esperada." },
      { q: "Vocês entregam laudo do serviço?", a: "Sim. Entregamos relatório fotográfico antes/durante/depois, ficha técnica do material aplicado e garantia formal por 5 anos." },
    ],
    related: ["vedacao-fachada", "infiltracao", "impermeabilizacao"],
  },
  {
    slug: "vedacao-fachada",
    code: "JD-02",
    h1: "Empresa de Vedação de Juntas de Fachada em Teresina",
    shortTitle: "Vedação de Fachada",
    metaTitle: "Vedação de Juntas de Fachada em Teresina | Selamento Predial",
    metaDescription:
      "Empresa de vedação de juntas de fachada e selamento de junta predial em Teresina: rapel, andaime, selante poliuretânico e equipe NR-35 com ART.",
    summary:
      "Vedação de juntas de fachada e selamento de junta predial executados em rapel ou andaime, com equipe NR-35, selante estrutural e ART de execução.",
    keywords: [
      "empresa de vedação de juntas de fachada",
      "vedação de juntas de fachada",
      "selamento de junta predial",
      "selante para fachada predial",
      "vedação de fachada de edifício",
    ],
    intro:
      "A fachada é o componente do prédio que mais sofre — chuva, sol, vento e calor e poeira atuam o ano inteiro sobre as juntas verticais e horizontais. Em Teresina, com sol direto a maior parte do ano e ar carregado de sal, o selante de fachada envelhece mais rápido do que em outras capitais. A Chico Resolve atua como empresa de vedação de juntas de fachada e selamento de junta predial em edifícios residenciais e comerciais, com equipe própria CLT, certificação NR-35 para rapel e andaime suspenso, ART de execução assinada por engenheiro e selante poliuretânico de marca homologada. Atendemos prédios novos (correção de selagem mal executada pela construtora) e prédios antigos com 10, 20 ou 30 anos que nunca passaram por manutenção técnica das juntas — o que costuma estar por trás de manchas, mofo nos apartamentos do último andar e infiltrações que aparecem a cada chuva forte.",
    whenToHire: [
      { title: "Fachada com mais de 8 anos sem manutenção", text: "Selante perde elasticidade e começa a falhar — momento certo para revisão geral antes de surgir infiltração." },
      { title: "Manchas escuras alinhadas com a junta", text: "Indicam que a água está penetrando pela junta e contornando a fachada por trás do revestimento." },
      { title: "Infiltração em apartamento de último andar", text: "Frequentemente causada por junta horizontal de cobertura ou junta vertical no encontro de blocos." },
      { title: "Reforma de fachada predial", text: "Vedação de juntas é etapa obrigatória antes da pintura externa para garantir durabilidade do acabamento." },
    ],
    types: [
      { title: "Selamento Predial em Rapel", text: "Acesso por cordas conforme NR-35 para edifícios sem balanço — método mais ágil e menos invasivo." },
      { title: "Vedação com Andaime Suspenso", text: "Para serviços extensos ou que envolvam mais materiais; mais produtivo em fachadas inteiras." },
      { title: "Vedação Entre Painéis ACM ou Pré-Moldados", text: "Selagem técnica nas juntas entre painéis com selante específico para o tipo de revestimento." },
      { title: "Selagem em Janelas, Esquadrias e Pingadeiras", text: "Pontos críticos de infiltração que costumam ser ignorados — selamos com silicone neutro estrutural." },
    ],
    process: [
      { title: "Inspeção em Altura", text: "Vistoria visual em rapel para mapear cada junta da fachada e classificar a patologia." },
      { title: "Plano de Execução", text: "Definição de método (rapel ou andaime), cronograma e plano de comunicação aos condôminos." },
      { title: "Remoção e Limpeza", text: "Retirada do selante antigo, escovação, ar comprimido e desengordurante no substrato." },
      { title: "Aplicação Técnica", text: "Backer rod dimensionado e selante poliuretânico aplicado em cordão contínuo, alisado com espátula." },
      { title: "Ensaio e Entrega", text: "Teste de estanqueidade por aspersão, relatório fotográfico e ART de execução para o síndico." },
    ],
    standards: [
      "NR-35 (trabalho em altura)",
      "NR-18 (canteiro de obras)",
      "NBR 15812 (rapel industrial — quando aplicável)",
      "NBR 9574 e NBR 9575 (impermeabilização)",
      "Ficha técnica do fabricante (Sika, Mapei, Vedacit)",
    ],
    trust: [
      "Empresa de vedação de juntas de fachada com CNPJ, NF e ART de execução",
      "Equipe própria CLT certificada em NR-35, com ASOs atualizados",
      "Seguro de responsabilidade civil para trabalho em altura",
      "Selantes Sikaflex 11FC, Sikaflex Pro 3 ou Mapeflex PU45 — marcas homologadas",
      "Garantia formal de 5 anos com vistoria anual gratuita opcional",
    ],
    geo: "Atendemos selamento de junta predial em fachadas de edifícios residenciais e comerciais em toda Teresina — Centro, Mocambinho, Fátima, Jóquei, Satélite, Ininga, São Cristóvão, Horto, Cabral, Noivos, Bela Vista, Parque Piauí — e Timon-MA, Altos, José de Freitas. Em prédios da Centro e Dirceu especificamos selantes com resistência reforçada à calor e poeira.",
    faq: [
      { q: "Vocês trabalham em prédio alto?", a: "Sim. Atendemos edifícios de até 40 pavimentos com equipe certificada em NR-35 e ART de execução, em rapel ou andaime suspenso." },
      { q: "Precisa parar o uso do prédio?", a: "Não. Os serviços de vedação de juntas de fachada são feitos pelo lado externo, sem interferir na rotina dos condôminos. Apenas comunicamos os apartamentos da fachada trabalhada no dia." },
      { q: "Qual a diferença para a pintura de fachada?", a: "Pintura é estética e proteção superficial; vedação de juntas é estanqueidade. As duas se complementam — a vedação deve ser feita antes da pintura para garantir durabilidade do acabamento." },
      { q: "O síndico precisa apresentar algo em assembleia?", a: "Sim, recomenda-se apresentar memorial descritivo, orçamento e ART. Entregamos todo o material técnico necessário para aprovação em assembleia." },
    ],
    related: ["tratamento-dilatacao", "vazamento-fachada", "infiltracao"],
  },
  {
    slug: "manutencao-movimentacao",
    code: "JD-03",
    h1: "Manutenção de Junta de Movimentação em Teresina",
    shortTitle: "Manutenção de Junta",
    metaTitle: "Manutenção de Junta de Movimentação em Teresina | Contrato",
    metaDescription:
      "Manutenção preventiva e corretiva de junta de movimentação em prédios, lajes e pisos industriais em Teresina com contrato anual e laudo técnico.",
    summary:
      "Contrato de manutenção preventiva e corretiva de juntas de movimentação em prédios, pisos industriais e estruturas com laudo técnico anual.",
    keywords: [
      "manutenção de junta de movimentação",
      "manutenção de junta de dilatação",
      "contrato de manutenção de juntas",
      "manutenção predial juntas",
      "inspeção de juntas de movimentação",
    ],
    intro:
      "Junta de movimentação não é serviço de uma vez só — é um componente que envelhece e exige inspeção periódica como qualquer outra parte do prédio. A NBR 15575 (norma de desempenho) e a NBR 5674 (manutenção predial) recomendam vistoria técnica das juntas no mínimo a cada 12 meses e renovação do selante a cada 8 a 12 anos. A Chico Resolve oferece contrato de manutenção de junta de movimentação para condomínios, empresas e indústrias em Teresina, com vistoria anual fotografada, plano de manutenção plurianual conforme NBR 5674, atendimento prioritário em correções emergenciais (chuva pesada, infiltração súbita) e relatório técnico para apresentação em assembleia e ao corpo de bombeiros quando aplicável. Atendemos manutenção em juntas estruturais (entre torres), juntas de assentamento (entre térreo e subsolo), juntas térmicas (cobertura) e juntas de construção (entre etapas de concretagem) — cada tipo exige material e técnica específicos.",
    whenToHire: [
      { title: "Condomínio sem plano de manutenção", text: "NBR 5674 exige plano de manutenção predial; juntas são item obrigatório de inspeção." },
      { title: "Pós-temporada de chuvas", text: "Em Teresina, pós-chuvas de março a junho é o melhor momento para inspecionar juntas." },
      { title: "Indústria com piso de concreto", text: "Juntas de pisos industriais sofrem com tráfego pesado e produtos químicos — inspeção semestral é o ideal." },
      { title: "Prédio em garantia construtora", text: "Vistoria técnica antes do fim da garantia para acionar a construtora pelo que não está conforme." },
    ],
    types: [
      { title: "Manutenção Preventiva Anual", text: "Vistoria visual, classificação por criticidade e plano de intervenção plurianual." },
      { title: "Manutenção Corretiva", text: "Reparos pontuais em juntas que falharam — atendimento priorizado em contrato." },
      { title: "Inspeção Pós-Sinistro", text: "Vistoria após chuva forte, vendaval ou movimentação estrutural com laudo técnico." },
      { title: "Manutenção em Pisos Industriais", text: "Inspeção semestral de juntas em galpões, centros logísticos e indústrias com piso de concreto." },
    ],
    process: [
      { title: "Diagnóstico Inicial", text: "Mapa de juntas, classificação por tipo (estrutural, térmica, assentamento, construção) e estado." },
      { title: "Plano de Manutenção", text: "Cronograma plurianual conforme NBR 5674 com criticidade, custo estimado e janela ideal." },
      { title: "Vistoria Anual Fotografada", text: "Inspeção em campo com fichas individualizadas por junta e relatório consolidado." },
      { title: "Intervenções Programadas", text: "Execução de correções em janelas planejadas para minimizar transtorno." },
      { title: "Relatório para Síndico/Gestor", text: "Documento final para apresentação em assembleia, gestor de facilities ou corpo de bombeiros." },
    ],
    standards: [
      "NBR 5674 (manutenção de edificações — gestão)",
      "NBR 15575 (desempenho de edificações)",
      "NBR 16280 (reforma em edificações)",
      "NBR 5675 (manutenção — inspeção)",
      "Lei Municipal de Inspeção Predial (quando aplicável)",
    ],
    trust: [
      "Engenheiro responsável e ART para o plano de manutenção",
      "Vistoria fotografada com ficha individualizada por junta",
      "Equipe NR-35 para manutenção em fachada e altura",
      "Contratos anuais com SLA de atendimento corretivo",
      "Relatórios técnicos compatíveis com Lei de Inspeção Predial",
    ],
    geo: "Atendemos manutenção de junta de movimentação em condomínios residenciais e prédios comerciais de Teresina — Jóquei, Fátima, Ininga, São Cristóvão, Horto, Centro, Satélite, Cabral, Bela Vista — e em galpões e indústrias na Grande Teresina (Demerval Lobão, União, José de Freitas, Timon-MA) com piso de concreto e juntas de movimentação industrial.",
    faq: [
      { q: "Qual a periodicidade ideal da manutenção de juntas?", a: "Inspeção visual anual e renovação completa do selante a cada 8 a 12 anos. Indústrias com piso de concreto exigem inspeção semestral." },
      { q: "O contrato cobre atendimento emergencial?", a: "Sim. Contratos anuais incluem SLA de atendimento corretivo em 48h para falhas críticas." },
      { q: "Vocês emitem ART?", a: "Sim. Emitimos ART de execução para o plano anual de manutenção, exigido pela Lei de Inspeção Predial em diversos municípios." },
      { q: "Atendem indústrias?", a: "Sim. Manutenção de juntas em pisos industriais é uma das nossas linhas — galpões logísticos, indústrias químicas e centros de distribuição." },
    ],
    related: ["tratamento-dilatacao", "recuperacao-estrutural", "vedacao-fachada"],
  },
  {
    slug: "recuperacao-estrutural",
    code: "JD-04",
    h1: "Recuperação de Junta Estrutural em Teresina",
    shortTitle: "Recuperação Estrutural",
    metaTitle: "Recuperação de Junta Estrutural em Teresina | Orçamento",
    metaDescription:
      "Orçamento de recuperação de junta estrutural em Teresina: vazamento junta estrutural prédio, reforço com epóxi, ART e laudo técnico de engenheiro.",
    summary:
      "Recuperação técnica de juntas estruturais e correção de vazamento em junta estrutural de prédio com diagnóstico, ART e laudo de engenheiro.",
    keywords: [
      "orçamento recuperação de junta estrutural",
      "recuperação de junta estrutural",
      "vazamento junta estrutural prédio",
      "reforço de junta estrutural",
      "laudo de junta estrutural",
    ],
    intro:
      "Junta estrutural é a junta de maior responsabilidade do prédio — é ela que separa duas torres, dois blocos ou duas etapas construtivas, e que precisa absorver movimentação diferencial sem comprometer a estrutura. Quando uma junta estrutural falha, o problema vai muito além de uma mancha no teto: começa com vazamento em junta estrutural de prédio, evolui para corrosão da armadura, perda de cobrimento do concreto e, em casos graves, comprometimento da capacidade portante. A Chico Resolve faz recuperação de junta estrutural em Teresina com protocolo de engenharia: vistoria com engenheiro estrutural, classificação da patologia conforme NBR 6118 e NBR 14931, escolha de método (selagem com poliuretano de alta resistência, injeção de epóxi estrutural, reforço com chumbamento ou tratamento da armadura corroída) e execução com ART. O orçamento inclui laudo técnico, plano de execução, ART, materiais homologados e garantia formal — sem improviso e sem terceirização descontrolada.",
    whenToHire: [
      { title: "Vazamento recorrente em junta de prédio", text: "Quando o vazamento volta toda chuva forte mesmo após reparos superficiais — sinal de falha estrutural." },
      { title: "Manchas escuras profundas na junta", text: "Indício de corrosão da armadura por penetração de cloretos (especialmente em prédios urbanos)." },
      { title: "Trincas evolutivas no entorno da junta", text: "Fissuras que aumentam ao longo do tempo merecem investigação estrutural imediata." },
      { title: "Laudo exigido pela construtora ou seguradora", text: "Recuperação estrutural com ART e laudo de engenheiro para acionamento de garantia ou seguro." },
    ],
    types: [
      { title: "Recuperação com Poliuretano Estrutural", text: "Selagem de junta estrutural com selante poliuretânico de alto módulo e resistência mecânica." },
      { title: "Injeção de Epóxi Estrutural", text: "Para juntas com microfissuras estruturais associadas — preenche e reestabelece a continuidade." },
      { title: "Reforço com Chumbamento", text: "Reposicionamento de elementos com chumbador químico quando há perda de ancoragem." },
      { title: "Tratamento de Armadura Corroída", text: "Limpeza mecânica, passivador, argamassa polimérica e reposição do cobrimento de concreto." },
    ],
    process: [
      { title: "Vistoria com Engenheiro", text: "Inspeção em campo com engenheiro estrutural e classificação da patologia conforme NBR 6118." },
      { title: "Diagnóstico e Orçamento", text: "Laudo técnico, plano de execução, ART e orçamento detalhado com prazo." },
      { title: "Preparação Estrutural", text: "Remoção de concreto comprometido, escarificação, tratamento da armadura e limpeza." },
      { title: "Aplicação Estrutural", text: "Selante poliuretânico de alto módulo, injeção de epóxi ou argamassa polimérica conforme o caso." },
      { title: "Ensaio e Entrega", text: "Teste de estanqueidade, relatório fotográfico e ART de execução para registro do condomínio." },
    ],
    standards: [
      "NBR 6118 (projeto de estruturas de concreto)",
      "NBR 14931 (execução de estruturas de concreto)",
      "NBR 5674 (manutenção de edificações)",
      "NBR 9575 e NBR 9574 (impermeabilização)",
      "Resolução CONFEA/CREA para emissão de ART",
    ],
    trust: [
      "Vistoria e laudo por engenheiro civil/estrutural com CREA ativo",
      "ART de projeto e ART de execução para recuperação estrutural",
      "Materiais homologados: Sika, Mapei, Hey'di, Vedacit, BASF",
      "Equipe CLT com EPIs e treinamento em NR-35 quando em altura",
      "Garantia formal de 5 a 10 anos conforme o método aplicado",
    ],
    geo: "Atendemos recuperação de junta estrutural em condomínios residenciais e prédios comerciais em toda Teresina, com foco em edifícios urbanos (Centro, Mocambinho, Satélite, Dirceu), Fátima, Jóquei, Ininga, São Cristóvão, Horto, Cabral e Noivos — onde a calor e poeira acelera a corrosão da armadura. Também atendemos Timon-MA, Altos e José de Freitas.",
    faq: [
      { q: "Como fazer um orçamento de recuperação de junta estrutural?", a: "Solicite uma visita técnica gratuita. Em até 5 dias úteis entregamos laudo com diagnóstico, método proposto, ART, materiais especificados e orçamento detalhado." },
      { q: "Vazamento na junta sempre é estrutural?", a: "Nem sempre. Muitos vazamentos são apenas selante envelhecido. Mas se houve corrosão de armadura ou fissuração no entorno, o tratamento precisa ser estrutural — não cosmético." },
      { q: "Vocês emitem laudo?", a: "Sim. Laudo técnico assinado por engenheiro com CREA ativo, descrição da patologia, método proposto e ART de projeto e execução." },
      { q: "Qual a garantia da recuperação?", a: "5 a 10 anos conforme o método aplicado, com vistoria anual gratuita opcional para acompanhamento." },
    ],
    related: ["rachadura-entre-predios", "tratamento-dilatacao", "manutencao-movimentacao"],
  },
  {
    slug: "infiltracao",
    code: "JD-05",
    h1: "Infiltração em Junta de Dilatação em Teresina",
    shortTitle: "Infiltração em Junta",
    metaTitle: "Infiltração em Junta de Dilatação em Teresina | Reparo",
    metaDescription:
      "Reparo de infiltração em junta de dilatação em Teresina: diagnóstico, remoção, reselagem com poliuretano e teste de estanqueidade com garantia.",
    summary:
      "Diagnóstico e correção de infiltração em junta de dilatação em apartamentos, fachadas, lajes e garagens com teste de estanqueidade.",
    keywords: [
      "infiltração em junta de dilatação",
      "infiltração junta de dilatação fachada",
      "reparo de infiltração em junta",
      "infiltração no teto junta de dilatação",
      "como resolver infiltração em junta",
    ],
    intro:
      "Infiltração em junta de dilatação é, disparado, a principal causa de manchas no teto e nas paredes de apartamentos de cobertura e dos andares logo abaixo de juntas estruturais em Teresina. O sintoma típico é uma mancha amarelada ou esverdeada que escurece a cada chuva forte, geralmente alinhada com a junta da laje superior ou da fachada. A causa, na imensa maioria dos casos, é envelhecimento do selante: ele racha, descola, ou simplesmente nunca foi corretamente aplicado pela construtora. A Chico Resolve resolve infiltração em junta de dilatação em Teresina com protocolo técnico: diagnóstico para confirmar a origem (existem casos em que a infiltração vem de tubulação, não da junta), remoção do selante envelhecido, limpeza do substrato, aplicação de primer, instalação de cordão de apoio e reselagem com selante poliuretânico de alto módulo. Cada serviço termina com ensaio de estanqueidade por aspersão e relatório fotográfico — sem isso, não há como ter certeza de que a infiltração foi efetivamente resolvida.",
    whenToHire: [
      { title: "Mancha amarelada no teto que volta a cada chuva", text: "Sinal clássico de infiltração por junta de dilatação na laje superior." },
      { title: "Apartamento de cobertura com mofo", text: "Cobertura é a área mais vulnerável — junta térmica da laje exposta ao sol e à chuva direta." },
      { title: "Infiltração em parede de fachada", text: "Geralmente associada a junta vertical entre painéis ou ao encontro com janela." },
      { title: "Garagem com gotejamento em junta", text: "Infiltração em junta de laje de garagem traz risco de corrosão da armadura — exige atenção rápida." },
    ],
    types: [
      { title: "Infiltração em Laje de Cobertura", text: "Junta térmica que abre e fecha conforme o sol — exige selante de alta elasticidade." },
      { title: "Infiltração em Fachada", text: "Junta vertical entre painéis ou no encontro com janela — exige selamento em altura com rapel." },
      { title: "Infiltração em Junta de Garagem", text: "Junta de assentamento que sofre tráfego de veículos — exige selante de alta dureza Shore A." },
      { title: "Infiltração em Sacada/Varanda", text: "Junta de cobertura combinada com impermeabilização do piso — exige tratamento integrado." },
    ],
    process: [
      { title: "Diagnóstico da Origem", text: "Vistoria visual e ensaio de aspersão para confirmar que a infiltração vem da junta, não de tubulação." },
      { title: "Remoção do Selante Velho", text: "Retirada do selante envelhecido com ferramenta correta, sem danificar bordas do concreto." },
      { title: "Preparação do Substrato", text: "Limpeza com escova, ar comprimido e álcool isopropílico; aplicação de primer adequado." },
      { title: "Reselagem Técnica", text: "Backer rod de polietileno dimensionado e selante poliuretânico aplicado em cordão contínuo." },
      { title: "Teste de Estanqueidade", text: "Ensaio de aspersão de água por 30 minutos para confirmar que a infiltração foi resolvida." },
    ],
    standards: [
      "NBR 9574 (execução de impermeabilização)",
      "NBR 9575 (projeto de impermeabilização)",
      "NBR 15575 (desempenho de edificações)",
      "NR-35 (trabalho em altura)",
      "Ficha técnica do fabricante (Sika, Mapei, Vedacit)",
    ],
    trust: [
      "Ensaio de estanqueidade por aspersão antes da entrega — sem isso não há garantia real",
      "Selante poliuretânico Sikaflex ou Mapeflex de alto módulo",
      "Equipe CLT com NR-35 para infiltração em altura",
      "Relatório fotográfico antes/durante/depois para o síndico ou seguradora",
      "Garantia formal de 5 anos com vistoria opcional anual",
    ],
    geo: "Atendemos reparo de infiltração em junta de dilatação em apartamentos e prédios de toda Teresina — Centro, Mocambinho, Satélite, Fátima, Jóquei, Ininga, São Cristóvão, Horto, Cabral, Noivos, Dirceu — e em Timon-MA, Altos e José de Freitas. Em apartamentos de cobertura em prédios urbanos, é onde mais atendemos infiltração em junta térmica de laje.",
    faq: [
      { q: "Como sei se a infiltração é da junta ou da tubulação?", a: "Geralmente a infiltração de junta intensifica em dias de chuva, e a de tubulação é constante. Fazemos teste de aspersão para confirmar antes de orçar." },
      { q: "Vocês resolvem o problema em uma visita?", a: "Na maioria dos casos sim — para infiltrações simples em junta de cobertura ou fachada, o serviço é executado em 1 ou 2 dias." },
      { q: "Qual a garantia do reparo?", a: "Garantia formal de 5 anos sobre o selante aplicado, com vistoria anual gratuita opcional." },
      { q: "Atendem em finais de semana?", a: "Sim, para emergências (infiltração ativa em apartamento) atendemos finais de semana mediante agendamento." },
    ],
    related: ["impermeabilizacao", "vazamento-fachada", "tratamento-dilatacao"],
  },
  {
    slug: "impermeabilizacao",
    code: "JD-06",
    h1: "Impermeabilização de Junta de Dilatação em Teresina",
    shortTitle: "Impermeabilização",
    metaTitle: "Impermeabilização de Junta de Dilatação em Teresina | NBR 9574",
    metaDescription:
      "Impermeabilização de junta de dilatação em Teresina conforme NBR 9574: manta asfáltica, poliuretano líquido e selante estrutural com garantia.",
    summary:
      "Impermeabilização técnica de juntas de dilatação em lajes, coberturas e áreas molhadas conforme NBR 9574 com mantas, poliuretano e selantes.",
    keywords: [
      "impermeabilização de junta de dilatação",
      "impermeabilização junta dilatação laje",
      "impermeabilização junta cobertura",
      "manta para junta de dilatação",
      "poliuretano para junta de dilatação",
    ],
    intro:
      "Impermeabilização de junta de dilatação é serviço técnico distinto do selamento simples — combina selante elástico com sistema impermeabilizante (manta asfáltica autoadesiva, manta de PVC ou poliuretano líquido) para garantir estanqueidade durável em áreas críticas como lajes de cobertura, jardins suspensos, piscinas, reservatórios e sacadas. A NBR 9574 define o sistema correto para cada situação, e a NBR 9575 estabelece o projeto: não basta passar manta — o sistema precisa ser dimensionado para o movimento esperado da junta. A Chico Resolve impermeabiliza juntas de dilatação em Teresina seguindo o protocolo: cálculo da movimentação prevista, escolha do sistema (selante + manta, selante + poliuretano líquido, ou sistema híbrido com chapa metálica de cobertura), preparação do substrato, aplicação do selante de fundo, instalação do impermeabilizante e proteção mecânica. Cada projeto é entregue com ART, ensaio de estanqueidade obrigatório e garantia por escrito.",
    whenToHire: [
      { title: "Junta de cobertura com infiltração recorrente", text: "Selante simples não basta — exige sistema impermeabilizante completo conforme NBR 9574." },
      { title: "Junta em jardim suspenso ou ajardinado", text: "Combina selante, manta antirraiz e proteção mecânica para evitar dano por raízes." },
      { title: "Junta em piscina, reservatório ou sauna", text: "Selantes especiais para imersão permanente e contato com cloro e produtos químicos." },
      { title: "Junta em sacada ou varanda", text: "Sistema integrado com impermeabilização do piso e ralo, exige projeto integrado." },
    ],
    types: [
      { title: "Impermeabilização com Manta Asfáltica", text: "Sistema com manta autoadesiva sobre o selante poliuretânico, ideal para junta de cobertura plana." },
      { title: "Impermeabilização com Poliuretano Líquido", text: "Sistema sem emendas, ideal para juntas com geometria complexa e áreas curvas." },
      { title: "Sistema com Perfil Metálico de Cobertura", text: "Tampa de alumínio ou inox sobre selante para juntas de grande abertura e tráfego." },
      { title: "Impermeabilização em Junta Imersa", text: "Para piscina e reservatório com selante estrutural resistente a imersão e cloro." },
    ],
    process: [
      { title: "Cálculo de Movimentação", text: "Dimensionamento do selante e do sistema impermeabilizante para o movimento esperado." },
      { title: "Preparação Estrutural", text: "Regularização das bordas, criação de meia-cana, escarificação e limpeza do substrato." },
      { title: "Aplicação do Selante de Fundo", text: "Backer rod e selante poliuretânico como primeira barreira elástica." },
      { title: "Sistema Impermeabilizante", text: "Manta asfáltica, manta de PVC ou poliuretano líquido conforme projeto." },
      { title: "Ensaio e Proteção Mecânica", text: "Ensaio de estanqueidade por 72h e camada de proteção (argamassa, contrapiso ou perfil metálico)." },
    ],
    standards: [
      "NBR 9574 (execução de impermeabilização)",
      "NBR 9575 (projeto de impermeabilização)",
      "NBR 9952 (manta asfáltica)",
      "NBR 15812 e ABNT NBR 13321",
      "Ficha técnica do fabricante (Sika, Vedacit, Hey'di, Denver)",
    ],
    trust: [
      "Projeto de impermeabilização conforme NBR 9575 com engenheiro responsável",
      "ART de projeto e ART de execução para o sistema completo",
      "Materiais Sika, Vedacit, Denver ou Hey'di homologados",
      "Ensaio de estanqueidade obrigatório por 72h antes da entrega",
      "Garantia formal de 5 a 10 anos conforme o sistema escolhido",
    ],
    geo: "Atendemos impermeabilização de junta de dilatação em prédios e residências de toda Teresina — Centro, Mocambinho, Jóquei, Fátima, Ininga, São Cristóvão, Horto, Satélite, Dirceu, Cabral, Noivos, Bela Vista — e em Timon-MA, Altos e José de Freitas. Em prédios urbanos, especificamos sistemas resistentes à calor e poeira e UV intenso.",
    faq: [
      { q: "Selante e impermeabilização são a mesma coisa?", a: "Não. Selante garante elasticidade da junta; impermeabilização é um sistema completo conforme NBR 9574 que combina selante com manta ou poliuretano líquido para áreas críticas." },
      { q: "Qual o melhor sistema para minha junta?", a: "Depende do tipo (cobertura, garagem, piscina), do movimento esperado e da exposição. Fazemos visita técnica gratuita e indicamos o sistema correto." },
      { q: "Vocês emitem ART de impermeabilização?", a: "Sim. ART de projeto e ART de execução para o sistema completo, exigido em condomínios e obras formais." },
      { q: "Qual a garantia do sistema?", a: "5 a 10 anos conforme o sistema aplicado, com vistoria anual gratuita opcional." },
    ],
    related: ["tratamento-dilatacao", "infiltracao", "vazamento-fachada"],
  },
  {
    slug: "rachadura-entre-predios",
    code: "JD-07",
    h1: "Reparo de Rachadura Entre Prédios em Teresina",
    shortTitle: "Rachadura Entre Prédios",
    metaTitle: "Reparo de Rachadura Entre Prédios em Teresina | Junta Estrutural",
    metaDescription:
      "Reparo de rachadura entre prédios em Teresina: diagnóstico de junta estrutural, selante poliuretânico, perfil metálico e ART de engenheiro.",
    summary:
      "Reparo técnico de rachadura entre prédios e correção da junta estrutural com diagnóstico, selante poliuretânico e ART em Teresina.",
    keywords: [
      "reparo de rachadura entre prédios",
      "rachadura entre torres",
      "rachadura na junta estrutural",
      "junta entre prédios geminados",
      "rachadura entre blocos do condomínio",
    ],
    intro:
      "A rachadura entre dois prédios geminados (ou entre duas torres do mesmo condomínio) raramente é uma rachadura no sentido patológico — quase sempre é a junta estrutural projetada para separar os blocos e absorver movimentação diferencial. Quando o selante dessa junta envelhece, descola ou nunca foi corretamente executado pela construtora, o espaço entre os blocos vira porta de entrada de água, vento e infestação. Pior: o leigo confunde com rachadura estrutural e contrata pedreiro para 'fechar' a junta com cimento — o que pisa numa armadilha, porque enrijecer uma junta de movimentação causa fissuração no entorno e pode comprometer a estrutura. A Chico Resolve faz reparo de rachadura entre prédios em Teresina com diagnóstico correto: confirma que se trata de junta estrutural projetada (e não de patologia), classifica a movimentação, remove material errado se houver, e executa selamento técnico com selante poliuretânico de alto módulo e, quando necessário, perfil metálico de cobertura para juntas de grande abertura.",
    whenToHire: [
      { title: "Espaço aberto entre dois blocos", text: "Quando é possível ver luz ou ar passando entre as torres — junta estrutural sem selante." },
      { title: "Infiltração em apartamento de borda", text: "Apartamentos colados na junta entre torres frequentemente sofrem infiltração lateral." },
      { title: "Tentativa anterior de fechar com cimento", text: "Erro crítico — precisa ser removido e refeito com selante elástico." },
      { title: "Rachadura nova após chuva forte", text: "Pode indicar movimentação maior do que a junta consegue absorver — exige diagnóstico." },
    ],
    types: [
      { title: "Selagem Convencional Entre Torres", text: "Backer rod e selante poliuretânico de alto módulo em juntas de até 30mm." },
      { title: "Junta com Perfil Metálico de Cobertura", text: "Para juntas acima de 30mm, perfil de alumínio extrudado ou inox sobre o selante." },
      { title: "Recuperação de Junta com Cimento Aplicado", text: "Remoção do material rígido errado e reselagem com selante elástico — protocolo técnico completo." },
      { title: "Junta em Marquise ou Pergolado Entre Blocos", text: "Selagem técnica com proteção mecânica para áreas com tráfego de pedestre." },
    ],
    process: [
      { title: "Diagnóstico com Engenheiro", text: "Vistoria para confirmar que se trata de junta estrutural projetada e não de fissura patológica." },
      { title: "Remoção de Material Indevido", text: "Quando há cimento, argamassa ou material rígido aplicado erroneamente, removemos antes." },
      { title: "Preparação das Bordas", text: "Limpeza, escarificação leve e regularização para receber o sistema de selagem." },
      { title: "Selagem Técnica", text: "Backer rod dimensionado, primer e selante poliuretânico em cordão contínuo." },
      { title: "Acabamento e Inspeção", text: "Quando aplicável, instalação de perfil metálico, ensaio de estanqueidade e relatório com ART." },
    ],
    standards: [
      "NBR 6118 (projeto de estruturas de concreto)",
      "NBR 14931 (execução de estruturas de concreto)",
      "NBR 9574 e NBR 9575 (impermeabilização)",
      "NR-35 (trabalho em altura)",
      "Ficha técnica do fabricante (Sika, Mapei, Vedacit)",
    ],
    trust: [
      "Diagnóstico assinado por engenheiro estrutural com CREA ativo",
      "ART de execução para serviço em junta estrutural",
      "Selantes Sikaflex Pro 3, Mapeflex PU45 ou similar homologado",
      "Equipe NR-35 para selagem em altura entre torres",
      "Garantia formal de 5 a 10 anos conforme o sistema aplicado",
    ],
    geo: "Atendemos reparo de rachadura entre prédios em condomínios de Teresina com múltiplas torres — Jóquei, Fátima, Ininga, São Cristóvão, Cabral, Bela Vista, Parque Piauí, Recanto das Palmeiras — e em condomínios novos na Grande Teresina (Timon-MA, Altos, José de Freitas). Em condomínios urbanos da Centro e Mocambinho, usamos sistemas reforçados contra calor e poeira.",
    faq: [
      { q: "É rachadura ou junta de dilatação entre os prédios?", a: "Quase sempre é a junta estrutural projetada para separar os blocos. Confirmamos no diagnóstico com engenheiro antes de qualquer intervenção." },
      { q: "Posso fechar com cimento?", a: "Não. Fechar com cimento uma junta de movimentação causa fissuração no entorno e pode comprometer a estrutura. O correto é selante elástico." },
      { q: "Vocês emitem ART?", a: "Sim, ART de execução assinada por engenheiro com CREA ativo, exigida pela maioria dos condomínios." },
      { q: "A intervenção vai parar o uso do condomínio?", a: "Não. O serviço é feito pelo lado externo, com rapel ou andaime suspenso, sem interferir na rotina." },
    ],
    related: ["recuperacao-estrutural", "vedacao-fachada", "tratamento-dilatacao"],
  },
  {
    slug: "vazamento-fachada",
    code: "JD-08",
    h1: "Conserto de Vazamento em Fachada Predial em Teresina",
    shortTitle: "Vazamento em Fachada",
    metaTitle: "Conserto de Vazamento em Fachada Predial em Teresina | NR-35",
    metaDescription:
      "Conserto de vazamento em fachada predial em Teresina: diagnóstico, selagem em rapel ou andaime, equipe NR-35, ART e garantia formal.",
    summary:
      "Conserto técnico de vazamento em fachada predial com diagnóstico da origem, equipe NR-35 em rapel ou andaime e selagem com selante poliuretânico.",
    keywords: [
      "conserto de vazamento em fachada predial",
      "vazamento em fachada",
      "vazamento na parede externa do prédio",
      "infiltração em fachada predial",
      "empresa de conserto de fachada",
    ],
    intro:
      "Vazamento em fachada predial é um dos problemas que mais geram chamados de síndico em Teresina — combina o clima úmido, o sol forte e a calor e poeira, que envelhecem precocemente qualquer selante mal especificado. Os pontos críticos são sempre os mesmos: junta vertical entre painéis, encontro de janela com alvenaria, peitoril, pingadeira, junta horizontal de cobertura e perímetro de unidades de ar-condicionado mal instaladas. A Chico Resolve faz conserto de vazamento em fachada predial em Teresina com diagnóstico em rapel (vistoria visual da fachada inteira para identificar todos os pontos críticos, não apenas o que está vazando hoje), execução com equipe NR-35 em rapel ou andaime suspenso, selagem com selante poliuretânico de alto módulo e ensaio de aspersão para validar a estanqueidade antes de fechar o serviço. Cada conserto sai com ART, relatório fotográfico, garantia formal por 5 anos e plano de manutenção opcional para evitar recorrência.",
    whenToHire: [
      { title: "Apartamento com infiltração lateral", text: "Mancha na parede externa ou no encontro da janela após chuva forte." },
      { title: "Pingadeira ou peitoril descolando", text: "Pontos clássicos onde a água contorna e entra na parede interna." },
      { title: "Ar-condicionado mal instalado", text: "Furo na fachada sem selamento técnico vira ponto de infiltração permanente." },
      { title: "Pré-vistoria para pintura externa", text: "Antes de repintar a fachada é obrigatório resolver vazamentos para não comprometer a tinta nova." },
    ],
    types: [
      { title: "Vazamento em Junta Vertical de Fachada", text: "Selagem entre painéis pré-moldados, ACM ou alvenaria com selante poliuretânico." },
      { title: "Vazamento em Encontro de Janela", text: "Selagem perimetral entre esquadria de alumínio e alvenaria com silicone neutro estrutural." },
      { title: "Vazamento em Pingadeira/Peitoril", text: "Refixação, calafetagem e selagem técnica do peitoril com proteção do pingo." },
      { title: "Vazamento em Saída de Ar-Condicionado", text: "Reselagem do furo de passagem do tubo e do dreno, com proteção da fachada." },
    ],
    process: [
      { title: "Vistoria em Rapel", text: "Inspeção visual de toda a fachada para mapear todos os pontos críticos." },
      { title: "Diagnóstico e Plano", text: "Classificação por criticidade, cronograma e proposta com orçamento por ponto e total." },
      { title: "Execução com NR-35", text: "Equipe certificada com rapel ou andaime suspenso, com plano de comunicação aos condôminos." },
      { title: "Selagem Técnica", text: "Remoção do selante velho, primer, backer rod e selante poliuretânico de alto módulo." },
      { title: "Ensaio de Aspersão", text: "Teste de estanqueidade por aspersão para validar antes de finalizar o serviço." },
    ],
    standards: [
      "NR-35 (trabalho em altura)",
      "NR-18 (canteiro de obras)",
      "NBR 9574 e NBR 9575 (impermeabilização)",
      "NBR 15575 (desempenho de edificações)",
      "Ficha técnica do fabricante (Sika, Mapei, Vedacit)",
    ],
    trust: [
      "Empresa de conserto de fachada com CNPJ ativo e ART de execução",
      "Equipe própria CLT certificada em NR-35 com ASOs atualizados",
      "Seguro de responsabilidade civil para trabalho em altura",
      "Selantes Sikaflex 11FC, Sikaflex Pro 3 ou Mapeflex PU45 homologados",
      "Garantia formal de 5 anos sobre os pontos selados",
    ],
    geo: "Atendemos conserto de vazamento em fachada predial em toda Teresina, com foco em prédios urbanos onde a calor e poeira acelera a falha de selantes — Centro, Mocambinho, Satélite, Fátima, Jóquei, Ininga, São Cristóvão, Horto, Dirceu — e em Cabral, Noivos, Bela Vista e na Grande Teresina (Timon-MA, Altos, José de Freitas).",
    faq: [
      { q: "Vocês resolvem em uma visita?", a: "Para vazamentos pontuais, sim, em 1 ou 2 dias. Para fachadas inteiras com múltiplos pontos críticos, planejamos cronograma de 1 a 4 semanas conforme a metragem." },
      { q: "É preciso desocupar o apartamento?", a: "Não. O serviço é feito pelo lado externo, apenas comunicamos os apartamentos da fachada trabalhada no dia para fechar janelas." },
      { q: "Qual a garantia do serviço?", a: "5 anos sobre os pontos selados, com vistoria anual gratuita opcional para acompanhamento." },
      { q: "Vocês emitem ART?", a: "Sim, ART de execução assinada por engenheiro com CREA ativo, exigida pela maioria dos condomínios para aprovação em assembleia." },
    ],
    related: ["vedacao-fachada", "infiltracao", "rachadura-entre-predios"],
  },
];

export const getJuntaSubservice = (slug: string): JuntaSubservice | undefined =>
  juntaSubservices.find((s) => s.slug === slug);







// ============================================================================
// SEGURANÇA — Sub-serviços
// ============================================================================

export type SegurancaSlug = "instalacao-cameras" | "instalacao-alarmes";

export interface SegurancaSubservice {
  slug: SegurancaSlug;
  code: string;
  h1: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  keywords: string[];
  intro: string;
  whenToHire: { title: string; text: string }[];
  types: { title: string; text: string }[];
  process: { title: string; text: string }[];
  standards: string[];
  trust: string[];
  geo: string;
  faq: { q: string; a: string }[];
  related: SegurancaSlug[];
}

export const segurancaSubservices: SegurancaSubservice[] = [
  {
    slug: "instalacao-cameras",
    code: "SG-01",
    h1: "Instalação de Câmeras de Segurança em Teresina",
    shortTitle: "Instalação de Câmeras",
    metaTitle: "Instalação de Câmeras de Segurança em Teresina | Chico Resolve",
    metaDescription:
      "Empresa de instalação de câmeras de segurança em Teresina: câmeras IP, monitoramento, videovigilância residencial, predial e comercial com projeto, NF e ART.",
    summary:
      "Instalação técnica de câmeras de segurança, monitoramento e videovigilância para residências, prédios e comércios em Teresina, com projeto, NF e garantia.",
    keywords: [
      "instalação de cameras de segurança",
      "instalar camera de segurança",
      "instalador de câmera residencial",
      "orçamento cameras de segurança",
      "empresa de instalação de câmeras de segurança",
      "instalação de cameras de monitoramento",
      "empresa instalação de câmeras",
      "instalacao de camera externa",
      "serviços de cameras de segurança",
      "instalação de cameras de vigilância",
      "instalação de videovigilância",
      "instalação de cameras predial",
    ],
    intro:
      "Câmera de segurança bem instalada começa antes do furo na parede: começa com projeto. A Chico Resolve atua como empresa de instalação de câmeras de segurança em Teresina com projeto técnico do CFTV (campo de visão, ângulo, lux mínimo, posicionamento sem ponto-cego), dimensionamento de gravador (DVR/NVR), HD de vigilância (não use HD comum — queima em meses), cabeamento estruturado em conduíte e fonte estabilizada com proteção contra surto. Atendemos instalação de câmeras residencial, predial e comercial, com câmeras IP Full HD ou 4K, infravermelho real para visão noturna, áudio bidirecional, reconhecimento facial e acesso remoto pelo celular via app do fabricante (Intelbras, Hikvision, Dahua). Cada instalação termina com configuração de gravação contínua + detecção de movimento, treinamento do cliente no app e nota fiscal com garantia.",
    whenToHire: [
      { title: "Casa ou apartamento sem CFTV", text: "Cobertura completa de portões, garagem, áreas externas e perímetro com câmeras IP e gravação 24h." },
      { title: "Prédio residencial ou comercial", text: "Projeto de CFTV predial conforme assembleia, integração com portaria e gravação centralizada." },
      { title: "Comércio com risco de furto", text: "Cobertura de caixas, depósito, fachada e área de cliente — imagens com qualidade jurídica para BO." },
      { title: "Substituição de sistema antigo", text: "Migração de câmeras analógicas (HD-TVI/AHD) para IP Full HD/4K com mais nitidez e acesso remoto." },
    ],
    types: [
      { title: "Câmeras Residenciais", text: "Instalação de câmera externa e interna para casas e apartamentos, com app no celular e gravação em nuvem opcional." },
      { title: "Câmeras Prediais e Condomínios", text: "Instalação de câmeras predial integrada à portaria, com gravador de alta capacidade e backup." },
      { title: "Câmeras Comerciais e Lojas", text: "Cobertura de PDV, depósito, fachada e estoque, com imagens em qualidade probatória para BO e seguradora." },
      { title: "Câmeras de Monitoramento Externo", text: "Instalação de cameras externa IP67/IP66 com infravermelho real de longo alcance para perímetro, fachada e estacionamento." },
      { title: "Videovigilância com Análise Inteligente", text: "Instalação de videovigilância com detecção de pessoas, veículos, cerca virtual e reconhecimento facial." },
      { title: "Sistemas Híbridos e Substituição", text: "Aproveitamento de cabeamento existente em sistemas mistos (IP + analógico) para reduzir custo da troca." },
    ],
    process: [
      { title: "Visita Técnica e Projeto", text: "Levantamento da planta, mapeamento de pontos cegos, projeto de CFTV com campo de visão de cada câmera e orçamento detalhado." },
      { title: "Dimensionamento do Gravador", text: "Cálculo de capacidade do DVR/NVR, HD de vigilância (Purple/Skyhawk) e taxa de gravação conforme dias de retenção desejados." },
      { title: "Infraestrutura e Cabeamento", text: "Passagem de cabo UTP CAT5e/CAT6 ou coaxial em conduíte, eletrocalha ou canaleta, com fonte estabilizada e DPS." },
      { title: "Instalação e Fixação", text: "Fixação das câmeras com bucha e parafuso adequados ao substrato, calibração de foco, ângulo e infravermelho." },
      { title: "Configuração e Treinamento", text: "Configuração do gravador, gravação contínua + detecção, acesso remoto no app do cliente, NF e treinamento de uso." },
    ],
    standards: [
      "NBR 5410 (instalações elétricas de baixa tensão)",
      "NBR 14565 (cabeamento estruturado)",
      "NR-35 (trabalho em altura) quando aplicável",
      "LGPD (Lei nº 13.709/2018) — sinalização, retenção e tratamento de imagens",
      "Manuais técnicos Intelbras, Hikvision e Dahua",
    ],
    trust: [
      "Empresa de instalação de câmeras de segurança com CNPJ, NF e ART quando aplicável",
      "Câmeras de marcas homologadas Anatel: Intelbras, Hikvision, Dahua",
      "Cabeamento em conduíte e HD de vigilância (Western Digital Purple / Seagate Skyhawk)",
      "Projeto de CFTV entregue ao cliente com posicionamento e campo de visão de cada câmera",
      "Garantia formal de 12 meses sobre serviço + garantia de fábrica nos equipamentos",
      "Treinamento do cliente no app e suporte remoto pós-instalação",
    ],
    geo: "Atendemos serviços de cameras de segurança em residências, condomínios e comércios em toda Teresina — Jóquei, Fátima, Ininga, São Cristóvão, Horto, Centro, Satélite, Mocambinho, Morros, Bela Vista, Cabral, Bela Vista, Parque Piauí, Noivos e Itararé — e em Timon-MA, Altos e José de Freitas. Para imóveis urbanos da Centro e Dirceu especificamos câmeras IP66/IP67 com tratamento anticalor e poeira para garantir vida útil em calor extremo.",
    faq: [
      { q: "Quantas câmeras preciso para uma casa?", a: "Depende da planta, mas a média para casa de 3 quartos em Teresina fica entre 4 e 8 câmeras: portão, garagem, lateral, quintal e áreas internas estratégicas. A visita técnica gratuita define o número exato." },
      { q: "Consigo ver as imagens pelo celular?", a: "Sim. Instalamos câmeras IP com acesso remoto via app do fabricante (iSIC, iVMS, DMSS), com login seguro e notificação por detecção de movimento." },
      { q: "Por quantos dias as câmeras ficam gravando?", a: "Dimensionamos o HD para 15, 30 ou 60 dias de gravação contínua + eventos. O padrão recomendado pelas seguradoras é 30 dias." },
      { q: "Preciso de internet para o CFTV funcionar?", a: "Não. A gravação local no DVR/NVR funciona sem internet. A internet só é necessária para acesso remoto pelo celular." },
      { q: "Vocês fazem orçamento de cameras de segurança gratuito?", a: "Sim. Fazemos visita técnica gratuita em Teresina, entregamos projeto com posicionamento de cada câmera e orçamento detalhado por escrito, sem compromisso." },
      { q: "Câmera externa aguenta sol e chuva de Teresina?", a: "Sim, quando especificada corretamente. Usamos câmeras IP66/IP67 e em região de calor e poeira adicionamos modelos com tratamento anticorrosivo reforçado." },
    ],
    related: ["instalacao-alarmes"],
  },
  {
    slug: "instalacao-alarmes",
    code: "SG-02",
    h1: "Instalação de Alarmes em Teresina",
    shortTitle: "Instalação de Alarmes",
    metaTitle: "Instalação de Alarmes em Teresina | Residencial, Comercial e Predial",
    metaDescription:
      "Instalação de alarmes residencial, comercial e predial em Teresina: central, sensores, sirene, app no celular e integração com câmeras. Orçamento e preço sob medida.",
    summary:
      "Instalação de alarme residencial, comercial e predial com central, sensores sem fio, sirene e integração com câmeras e app no celular.",
    keywords: [
      "instalação de alarmes comerciais",
      "instalação de alarme residencial preço",
      "instalação de alarmes e cameras",
      "instalação de alarme residencial",
      "instalação de alarme predial",
      "instalação de alarme comercial",
    ],
    intro:
      "Alarme bem instalado é prevenção: dissuade o invasor antes de entrar e aciona resposta imediata se a perimetria for violada. A Chico Resolve faz instalação de alarme residencial, comercial e predial em Teresina com centrais Intelbras AMT, JFL Active e PPA, sensores de presença (infravermelho passivo) com imunidade a pets, sensores de abertura magnéticos em portas e janelas, sensores de quebra de vidro em áreas envidraçadas, sirene interna e externa de alta potência e bateria de backup para falta de energia. Integração total com app no celular para armar/desarmar à distância, notificação por evento e integração com câmeras IP para gravação automática quando o alarme dispara. Atendemos instalação de alarmes e câmeras em pacote único — sistema integrado com o mesmo app e custo otimizado. Trabalhamos com instalação de alarme residencial preço justo e orçamento por escrito, considerando metragem, número de aberturas e nível de segurança desejado.",
    whenToHire: [
      { title: "Casa ou apartamento sem proteção", text: "Cobertura de perimetria (portas, janelas, áreas externas) com sensores e sirene de alta potência." },
      { title: "Comércio com risco fora do expediente", text: "Instalação de alarmes comerciais com sensores de presença, abertura e quebra de vidro nos pontos críticos." },
      { title: "Prédio residencial ou condomínio", text: "Instalação de alarme predial em áreas comuns, casa de máquinas, depósito e portaria com central monitorada." },
      { title: "Integração com câmeras existentes", text: "Instalação de alarmes e câmeras no mesmo app — quando o alarme dispara, a câmera grava o evento." },
    ],
    types: [
      { title: "Alarme Residencial", text: "Instalação de alarme residencial com central, teclado, sensores sem fio em portas e janelas, sirene e app no celular." },
      { title: "Alarme Comercial", text: "Instalação de alarme comercial para lojas, escritórios, depósitos e clínicas, com sensores em pontos de risco e gravação de eventos." },
      { title: "Alarme Predial", text: "Instalação de alarme predial em áreas comuns de condomínios, casa de máquinas, garagens e portaria integrado à interfonia." },
      { title: "Alarme + Câmeras Integrados", text: "Instalação de alarmes e câmeras no mesmo sistema, com gravação automática no disparo e notificação por evento." },
      { title: "Alarme com Monitoramento 24h", text: "Integração com central de monitoramento terceirizada para resposta humana 24h em caso de disparo." },
      { title: "Alarme com Bateria de Backup", text: "Operação contínua mesmo na falta de energia, com bateria 12V selada — fundamental em Teresina pelas quedas de rede." },
    ],
    process: [
      { title: "Vistoria e Plano de Cobertura", text: "Mapeamento de portas, janelas, áreas envidraçadas e pontos cegos; definição do número de sensores e tipo (PIR pet, magnético, quebra de vidro)." },
      { title: "Orçamento com Preço Detalhado", text: "Proposta com instalação de alarme residencial preço por equipamento e mão de obra, sem custos surpresa." },
      { title: "Instalação da Central e Sensores", text: "Fixação da central em local protegido, sensores sem fio nas aberturas, sirene interna e externa." },
      { title: "Configuração e App", text: "Configuração de partições (noite, ausente, presente), códigos de usuário, notificações no celular e integração com câmeras." },
      { title: "Treinamento e Entrega", text: "Simulação de armar/desarmar com o cliente, manual prático e NF com garantia de 12 meses." },
    ],
    standards: [
      "NBR 5410 (instalações elétricas de baixa tensão)",
      "Resoluções Anatel sobre equipamentos rádio (centrais sem fio homologadas)",
      "LGPD (Lei nº 13.709/2018) — tratamento de dados de notificação",
      "Manuais técnicos Intelbras AMT, JFL Active e PPA",
      "Boas práticas de segurança eletrônica ABESE",
    ],
    trust: [
      "Empresa com CNPJ, NF e ART quando aplicável",
      "Centrais e sensores de marcas homologadas Anatel: Intelbras, JFL, PPA",
      "Sensores PIR com imunidade a pets (até 25kg) — evita disparo falso",
      "Sirene de alta potência interna + externa com bateria própria",
      "Bateria selada de backup dimensionada para 12h de autonomia",
      "App no celular com notificação push em tempo real",
      "Garantia formal de 12 meses sobre serviço + garantia de fábrica nos equipamentos",
    ],
    geo: "Atendemos instalação de alarme residencial, comercial e predial em toda Teresina — Jóquei, Fátima, Ininga, São Cristóvão, Horto, Centro, Mocambinho, Satélite, Cabral, Noivos, Itararé, Parque Piauí, Bela Vista — e em Timon-MA, Altos e José de Freitas. Para casas urbanas e comércios próximos à orla recomendamos sirene externa com tratamento anticorrosivo e bateria reforçada por causa das oscilações frequentes da rede elétrica.",
    faq: [
      { q: "Qual o preço da instalação de alarme residencial?", a: "Depende do número de portas, janelas e áreas a cobrir. O kit básico (central, 4 sensores, sirene e app) parte de uma faixa acessível; após visita técnica gratuita entregamos orçamento por escrito com instalação de alarme residencial preço fechado." },
      { q: "O alarme funciona se faltar energia?", a: "Sim. Toda instalação inclui bateria selada de 12V com autonomia de até 12h, garantindo proteção mesmo nas quedas comuns da rede em Teresina." },
      { q: "Posso integrar alarmes e câmeras no mesmo app?", a: "Sim. Fazemos instalação de alarmes e câmeras integrados — quando o alarme dispara, a câmera grava o evento e o cliente recebe notificação no celular." },
      { q: "Os sensores disparam por causa do meu pet?", a: "Não. Usamos sensores PIR com imunidade a pets até 25kg, calibrados para ignorar animais e detectar apenas pessoas." },
      { q: "Vocês fazem instalação de alarmes comerciais em loja pequena?", a: "Sim. Fazemos instalação de alarme comercial para qualquer porte, do quiosque ao galpão, com solução dimensionada para o risco e o orçamento." },
      { q: "Tem monitoramento 24h?", a: "Opcional. Integramos com central terceirizada certificada para resposta humana 24h, vigilante e acionamento da PM em caso de invasão confirmada." },
    ],
    related: ["instalacao-cameras"],
  },
];

export const getSegurancaSubservice = (slug: string): SegurancaSubservice | undefined =>
  segurancaSubservices.find((s) => s.slug === slug);

// ============================================================================
// OBRA ESTRUTURAL — Sub-serviços
// ============================================================================

export type ObraEstruturalSlug = "construcao-cisternas";

export interface ObraEstruturalSubservice {
  slug: ObraEstruturalSlug;
  code: string;
  h1: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  keywords: string[];
  intro: string;
  whenToHire: { title: string; text: string }[];
  types: { title: string; text: string }[];
  process: { title: string; text: string }[];
  standards: string[];
  trust: string[];
  geo: string;
  faq: { q: string; a: string }[];
  related: ObraEstruturalSlug[];
}

export const obraEstruturalSubservices: ObraEstruturalSubservice[] = [
  {
    slug: "construcao-cisternas",
    code: "OE-01",
    h1: "Construção de Cisternas em Teresina",
    shortTitle: "Construção de Cisternas",
    metaTitle: "Construção de Cisternas em Teresina | Chico Resolve",
    metaDescription:
      "Construção de cisternas e tanques de retenção pluvial em Teresina, com concreto armado, impermeabilização, tubulação e testes de estanqueidade.",
    summary:
      "Cisternas e tanques de retenção pluvial em concreto armado, com dimensionamento técnico, impermeabilização e sistema hidráulico completo.",
    keywords: [
      "construção de cisternas",
      "cisterna de concreto armado",
      "tanque de retenção pluvial",
      "reservatório de água de chuva",
      "cisterna em Teresina",
    ],
    intro:
      "Executamos cisternas e tanques de retenção pluvial em concreto armado para residências, condomínios, comércios e empreendimentos. A solução é planejada conforme o volume de água, as condições do solo e o uso previsto, integrando estrutura, impermeabilização, entrada e extravasão, filtragem, bombeamento e acesso seguro para manutenção. Cada etapa é controlada para evitar fissuras, infiltrações e falhas de estanqueidade.",
    whenToHire: [
      { title: "Aproveitamento de chuva", text: "Armazenamento de água pluvial para irrigação, lavagem de pisos e outros usos não potáveis." },
      { title: "Controle de alagamentos", text: "Retenção temporária da chuva para reduzir a sobrecarga da drenagem do imóvel ou do condomínio." },
      { title: "Reserva técnica", text: "Reservatório enterrado ou semienterrado para complementar o abastecimento e dar autonomia ao imóvel." },
      { title: "Obra nova ou ampliação", text: "Integração da cisterna ao projeto estrutural e hidrossanitário desde o início da construção." },
    ],
    types: [
      { title: "Cisterna de Concreto Armado", text: "Reservatório moldado no local, dimensionado para suportar empuxo do solo, pressão da água e condições de uso." },
      { title: "Tanque de Retenção Pluvial", text: "Estrutura para amortecer picos de chuva, com entrada, saída controlada, extravasor e acesso para limpeza." },
      { title: "Sistema de Reúso", text: "Captação com descarte inicial, filtragem e bombeamento para jardins, pisos, descargas e áreas comuns." },
      { title: "Impermeabilização e Recuperação", text: "Tratamento interno, juntas, passagens de tubulação e correção de fissuras em reservatórios existentes." },
    ],
    process: [
      { title: "Levantamento e Dimensionamento", text: "Analisamos área de captação, regime de chuvas, demanda, solo, acessos e interferências existentes." },
      { title: "Projeto e Planejamento", text: "Definimos geometria, estrutura, instalações hidráulicas, impermeabilização e sequência executiva." },
      { title: "Escavação e Base", text: "Executamos locação, escavação, regularização, drenagem provisória e fundação conforme projeto." },
      { title: "Estrutura de Concreto", text: "Montagem de formas e armaduras, concretagem controlada de fundo, paredes e cobertura, com tratamento das juntas." },
      { title: "Impermeabilização e Instalações", text: "Aplicamos o sistema especificado e instalamos tubulações, filtros, extravasor, inspeção e bombeamento." },
      { title: "Teste e Entrega", text: "Realizamos teste de estanqueidade, inspeção final, limpeza e orientação para operação e manutenção." },
    ],
    standards: [
      "ABNT NBR 6118 (estruturas de concreto)",
      "ABNT NBR 15527 (aproveitamento de água de chuva)",
      "ABNT NBR 9575 e 9574 (impermeabilização)",
      "ABNT NBR 5626 (sistemas prediais de água)",
      "NR-18 e NR-33 quando aplicáveis",
    ],
    trust: [
      "Execução integrada de estrutura, impermeabilização e hidráulica",
      "Materiais especificados conforme uso, pressão e contato com água",
      "Controle de concretagem e tratamento técnico de juntas e passagens",
      "Teste de estanqueidade antes da liberação do reservatório",
      "Relatório fotográfico e garantia formal de execução",
    ],
    geo: "Atendemos projetos de cisternas e tanques de retenção pluvial em Teresina e Grande Teresina, incluindo residências, condomínios, galpões, comércios e empreendimentos em Timon-MA, Altos e José de Freitas.",
    faq: [
      { q: "Qual a diferença entre cisterna e tanque de retenção?", a: "A cisterna armazena água para uso posterior. O tanque de retenção recebe a chuva e libera o volume de forma controlada para reduzir picos na drenagem; um mesmo sistema pode combinar as duas funções quando projetado para isso." },
      { q: "A água da chuva pode ser usada para beber?", a: "Não sem tratamento específico e controle de qualidade. O uso comum é não potável, como irrigação, lavagem de pisos e descargas sanitárias, com rede devidamente identificada e separada." },
      { q: "Como é definido o tamanho da cisterna?", a: "O volume depende da área de captação, histórico de chuvas, demanda de uso, espaço disponível e exigências locais. Fazemos o levantamento técnico antes do orçamento." },
      { q: "Como evitam vazamentos?", a: "Com projeto estrutural adequado, controle da concretagem, tratamento de juntas e passagens, sistema de impermeabilização compatível e teste de estanqueidade antes da entrega." },
      { q: "Vocês também instalam bombas e filtros?", a: "Sim. Entregamos o sistema completo com entrada, descarte inicial, filtragem, extravasor, bomba, boias, tubulação e pontos de inspeção conforme o escopo." },
    ],
    related: [],
  },
];

export const getObraEstruturalSubservice = (slug: string): ObraEstruturalSubservice | undefined =>
  obraEstruturalSubservices.find((s) => s.slug === slug);
