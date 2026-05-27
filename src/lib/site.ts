// Dados centrais da Chico Resolve.
// TODO: substituir os campos marcados como placeholder com dados reais antes de publicar.

export const site = {
  name: "Chico Resolve",
  legalName: "Chico Resolve — Inteligência em Manutenção Predial",
  tagline: "Inteligência em Manutenção Predial",
  description:
    "Engenharia de manutenção predial em Fortaleza/CE: pintura, elétrica, hidráulica, drywall, juntas de dilatação, segurança e reformas com rigor técnico e prazos cumpridos.",
  city: "Fortaleza",
  region: "CE",
  country: "BR",
  phone: "(86) 98154-7477",
  phoneE164: "+5586981547477",
  whatsappNumber: "5586981547477",
  email: "contato@chicoresolve.com.br", // TODO: confirmar email real
  instagram: "@chico.resolve",
  instagramUrl: "https://instagram.com/chico.resolve",
  // TODO: substituir endereço placeholder
  address: {
    street: "Av. Santos Dumont, 0000",
    neighborhood: "Aldeota",
    city: "Fortaleza",
    region: "CE",
    postalCode: "60000-000",
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
      "Pintura residencial, comercial e industrial com preparação rigorosa e acabamento impecável em Fortaleza.",
    metaTitle: "Pintura Profissional Residencial e Comercial | Fortaleza",
    metaDescription:
      "Pintura residencial, comercial e industrial com acabamento impecável em Fortaleza. Rigor técnico, materiais de primeira linha e garantia. Solicite orçamento.",
  },
  {
    slug: "eletrica",
    code: "EL",
    shortTitle: "Elétrica",
    title: "Serviços Elétricos",
    summary:
      "Instalação, manutenção preventiva e corretiva conforme NR10 e NBR 5410 para residências, comércios e indústrias.",
    metaTitle: "Eletricista Profissional em Fortaleza | Elétrica NR10",
    metaDescription:
      "Elétrica residencial, comercial e industrial em Fortaleza com eletricistas habilitados conforme NR10. Instalação, manutenção e segurança. Orçamento rápido.",
  },
  {
    slug: "hidraulica",
    code: "HD",
    shortTitle: "Hidráulica",
    title: "Hidráulica Predial",
    summary:
      "Detecção de vazamentos, reparos e instalações hidráulicas com mínima intervenção estrutural.",
    metaTitle: "Hidráulica e Encanador em Fortaleza | Chico Resolve",
    metaDescription:
      "Serviço hidráulico em Fortaleza: detecção de vazamentos, reparos urgentes, troca de tubulação e manutenção de sistemas. Atendimento rápido.",
  },
  {
    slug: "drywall",
    code: "DW",
    shortTitle: "Drywall",
    title: "Gesso e Drywall",
    summary:
      "Forros, divisórias acústicas e sancas com acabamento premium para escritórios, residências e lojas.",
    metaTitle: "Drywall e Gesso em Fortaleza | Forros e Divisórias",
    metaDescription:
      "Instalação de drywall, forros de gesso, sancas e divisórias em Fortaleza. Acabamento premium, execução técnica e prazo garantido.",
  },
  {
    slug: "juntas-dilatacao",
    code: "JD",
    shortTitle: "Juntas",
    title: "Juntas de Dilatação",
    summary:
      "Execução e recuperação técnica de juntas para evitar infiltrações e patologias estruturais.",
    metaTitle: "Juntas de Dilatação em Fortaleza | Execução e Recuperação",
    metaDescription:
      "Tratamento técnico de juntas de dilatação em Fortaleza: vedação, recuperação e prevenção de infiltrações em lajes, fachadas e pisos.",
  },
  {
    slug: "seguranca",
    code: "SG",
    shortTitle: "Segurança",
    title: "Segurança Predial",
    summary:
      "Instalação de câmeras, cercas elétricas, SPDA e sistemas integrados de monitoramento.",
    metaTitle: "Câmeras e Cercas Elétricas em Fortaleza | Segurança Predial",
    metaDescription:
      "Segurança predial em Fortaleza: instalação de câmeras, cercas elétricas, SPDA e sistemas de monitoramento. Conformidade técnica e atendimento.",
  },
  {
    slug: "reformas",
    code: "RF",
    shortTitle: "Reformas",
    title: "Reformas Completas",
    summary:
      "Execução de reformas residenciais e comerciais com gerenciamento integrado e equipe própria.",
    metaTitle: "Reformas em Fortaleza | Comerciais e Residenciais",
    metaDescription:
      "Reformas residenciais e comerciais em Fortaleza com gerenciamento técnico, equipe própria e prazos cumpridos. Solicite uma visita técnica.",
  },
  {
    slug: "manutencao",
    code: "MP",
    shortTitle: "Manutenção",
    title: "Manutenção Preventiva",
    summary:
      "Contratos de manutenção preventiva e corretiva para condomínios, indústrias e empresas.",
    metaTitle: "Manutenção Predial e de Condomínios em Fortaleza",
    metaDescription:
      "Manutenção preventiva e corretiva para condomínios, indústrias e empresas em Fortaleza. Relatórios técnicos e cronograma garantido.",
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
      "Na Chico Resolve, pintura não é só aplicação de tinta — é engenharia de superfície. Atendemos residências de alto padrão, prédios comerciais e plantas industriais em toda Fortaleza com preparação rigorosa, materiais de primeira linha e equipes treinadas para NR35 (trabalho em altura). O resultado: acabamento uniforme, durabilidade superior e zero retrabalho.",
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
      { q: "Quanto tempo dura uma pintura predial?", a: "Com a preparação correta e tintas premium, a pintura externa dura entre 5 e 8 anos em Fortaleza." },
      { q: "Vocês fazem antes/depois com cliente?", a: "Sim. Cada projeto inclui registro fotográfico antes, durante e após a execução." },
      { q: "Atendem prédios altos?", a: "Sim. Nossa equipe é certificada em NR35 e usa rapel ou andaimes conforme o caso." },
    ],
  },
  eletrica: {
    hero: "Serviços Elétricos com Conformidade NR10 e Segurança Total",
    intro:
      "Nossa equipe de eletricistas é habilitada conforme a NR10 e executa instalações novas, manutenção preventiva e correção de patologias elétricas em residências, comércios e indústrias de Fortaleza. Trabalhamos com projeto, ART e laudos técnicos para garantir conformidade e reduzir riscos.",
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
      "Resolvemos vazamentos, entupimentos, reformas de prumadas e instalação de sistemas hidráulicos completos em Fortaleza. Trabalhamos com geofone e câmeras de inspeção para localizar problemas com a menor intervenção estrutural possível.",
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
      "Forros lisos, sancas iluminadas, divisórias acústicas e parede de drywall executados com perfilados galvanizados, placas de qualidade e acabamento que dispensa retoques. Projetos residenciais e corporativos em Fortaleza.",
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
      "Reformamos apartamentos, casas, lojas e escritórios em Fortaleza com equipe própria multidisciplinar — pintura, elétrica, hidráulica, drywall e acabamentos. Um único responsável técnico, um cronograma claro e zero terceirização descontrolada.",
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
// GEO local Fortaleza/CE e SEO técnico (Service + Breadcrumb + FAQPage JSON-LD).
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
    metaTitle: "Pintura para Piso de Concreto em Fortaleza | Chico Resolve",
    metaDescription:
      "Pintura de piso de concreto em Fortaleza com tinta epóxi e acrílica de alto tráfego. Preparação técnica, antiderrapante e garantia. Solicite orçamento.",
    summary:
      "Pintura de piso de concreto com epóxi e acrílico para garagens, galpões, oficinas e áreas técnicas.",
    keywords: ["pintura de piso", "pintar piso", "pintura piso concreto", "tinta epóxi para piso"],
    intro:
      "Pintar piso de concreto exige muito mais do que aplicar tinta sobre a superfície. Na Chico Resolve executamos pintura de piso em galpões, garagens de condomínios, oficinas, áreas de serviço e laboratórios em toda Fortaleza e região metropolitana. Cada projeto começa com diagnóstico de umidade, abertura de poros, correção de fissuras e seleção da tinta certa — epóxi, poliuretano ou acrílico de alto tráfego — para que o piso resista a impacto, óleos, lavagem constante e o clima litorâneo do Ceará.",
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
    geo: "Atendemos toda Fortaleza, com obras concluídas em galpões do Distrito Industrial, garagens de condomínios na Aldeota, Meireles e Cocó, e áreas técnicas em Eusébio, Maracanaú e Caucaia. Trabalhamos com sistemas resistentes à maresia típica do litoral cearense.",
    faq: [
      { q: "Quanto custa pintar piso de concreto em Fortaleza?", a: "O valor depende do sistema (acrílico, epóxi ou poliuretano) e da metragem. Pintura acrílica parte de R$ 35/m² e epóxi autonivelante a partir de R$ 95/m². Fazemos visita técnica gratuita para orçamento exato." },
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
    h1: "Pintura Residencial em Fortaleza",
    shortTitle: "Residencial",
    metaTitle: "Pintura Residencial em Fortaleza | Chico Resolve",
    metaDescription:
      "Empresa de pintura residencial em Fortaleza. Pintura de casa, parede e fachada com pintor profissional, orçamento em 24h e garantia formal.",
    summary:
      "Empresa de pintura residencial com pintor profissional para casas, apartamentos e coberturas em Fortaleza.",
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
      "A Chico Resolve é uma empresa de pintura residencial em Fortaleza com equipe própria, CLT e treinamento contínuo. Executamos pintura de casa, pintura de parede interna e externa, repintura de fachada e acabamentos especiais (textura, grafiato, efeito cimento queimado). Nosso serviço de pintura residencial nasceu da experiência atendendo bairros como Aldeota, Meireles, Cocó, Edson Queiroz e Sapiranga — onde umidade do mar, sol forte e poeira exigem preparação rigorosa e tintas certas. Cada pintor de casa da nossa equipe é treinado em técnicas modernas (lixamento, massa corrida, selagem com fundo preparador) para um acabamento durável e sem retoques.",
    whenToHire: [
      { title: "Mudou de casa", text: "Antes de instalar móveis, é mais barato e rápido pintar com a casa vazia." },
      { title: "Parede manchada ou descascando", text: "Sinal de infiltração ou tinta vencida — exige tratamento antes da nova demão." },
      { title: "Vai vender ou alugar", text: "Pintura nova valoriza o imóvel em 5% a 15% e acelera negociação." },
      { title: "Reforma parcial", text: "Trocou piso, fez gesso ou drywall — a pintura fecha o serviço com acabamento." },
    ],
    types: [
      { title: "Pintura Interna", text: "Pintura de parede em quartos, salas, cozinha e área de serviço com tintas laváveis e antimofo." },
      { title: "Pintura Externa de Casa", text: "Pintura de fachada residencial com tinta acrílica premium resistente ao sol e à maresia de Fortaleza." },
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
    geo: "Nosso serviço de pintura residencial atende todos os bairros de Fortaleza — Aldeota, Meireles, Cocó, Papicu, Varjota, Dionísio Torres, Edson Queiroz, Sapiranga, Eng. Luciano Cavalcante, Praia do Futuro — e cidades da região metropolitana como Eusébio, Aquiraz, Caucaia e Maracanaú. Como atendemos pinturas residenciais e comerciais, indicamos a tinta certa para o clima litorâneo: anti-mofo nos ambientes internos e acrílico premium nas fachadas.",
    faq: [
      { q: "Quanto custa pintar uma casa em Fortaleza?", a: "Em média R$ 20 a R$ 45 por m² incluindo mão de obra e material básico. O orçamento de pintura residencial varia conforme estado das paredes, número de demãos e tipo de tinta. Fazemos visita gratuita." },
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
    h1: "Pintura de Apartamento em Fortaleza",
    shortTitle: "Apartamento",
    metaTitle: "Pintura de Apartamento em Fortaleza | Chico Resolve",
    metaDescription:
      "Pintura de apartamento em Fortaleza com pintor experiente em condomínios. Empresa pintura predial regularizada, orçamento rápido e horários respeitados.",
    summary:
      "Pintura de apartamento com equipe que respeita horário de condomínio, cobertura de mobília e acabamento premium.",
    keywords: [
      "pintura de apartamento",
      "empresa pintura predial",
      "contratar pintor",
      "serviços de pinturas em geral",
    ],
    intro:
      "Pintar apartamento envolve desafios que casas não têm: horário restrito de obras, normas do condomínio, elevador de serviço, vizinhos sensíveis a cheiro e ruído. A Chico Resolve é uma empresa pintura predial regularizada que atende edifícios em toda Fortaleza com equipes treinadas para esse contexto. Cuidamos da documentação para o síndico, usamos tintas com baixo odor, protegemos hall, elevador e portaria, e entregamos o apartamento limpo e pronto para morar. Se você precisa contratar pintor com referências e nota fiscal, oferecemos serviços de pinturas em geral — paredes, teto, esquadrias e áreas técnicas.",
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
    geo: "Atendemos edifícios em Fortaleza inteira — incluindo prédios na Beira Mar, Mucuripe, Praia de Iracema, Aldeota, Meireles, Cocó, Guararapes e Dionísio Torres — além de empreendimentos em Eusébio, Aquiraz e Caucaia. Trabalhamos com tintas resistentes à umidade típica de apartamentos próximos ao mar.",
    faq: [
      { q: "Quanto custa pintar um apartamento de 70 m² em Fortaleza?", a: "Em média de R$ 2.500 a R$ 5.500 incluindo material e mão de obra, dependendo do estado das paredes e tipo de tinta. Fazemos visita gratuita para orçamento exato." },
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
    h1: "Pintura Industrial em Fortaleza",
    shortTitle: "Industrial",
    metaTitle: "Pintura Industrial em Fortaleza | Chico Resolve",
    metaDescription:
      "Empresa de pintura industrial em Fortaleza: estrutura metálica, galpões, tubulações e pintura de parede com pintor profissional NR-35 e tintas técnicas.",
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
      "A Chico Resolve é uma empresa de pintura industrial em Fortaleza especializada em estruturas metálicas, galpões logísticos, tubulações, tanques, fachadas industriais e pintura de parede em ambientes fabris. Cada pintor profissional da nossa equipe é treinado em NR-35 (trabalho em altura), NR-18 (canteiro de obras) e capacitado em sistemas anticorrosivos — primer epóxi rico em zinco, intermediário epóxi alta espessura e acabamento poliuretânico. Para quem precisa contratar pintor com domínio técnico de tintas industriais (Jotun, Sherwin-Williams Protective, WEG), oferecemos planejamento, execução com inspeção SSPC e relatório de espessura por ponto.",
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
    geo: "Atendemos o Distrito Industrial de Maracanaú, Pacajus, Horizonte, Eusébio, Pecém e parques industriais ao redor de Fortaleza. Já executamos serviços em galpões logísticos, fábricas têxteis, indústrias alimentícias e plantas de equipamentos metálicos do Ceará — sempre com sistemas calibrados para o ambiente salino do litoral.",
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
    metaTitle: "Pintura de Quadra Poliesportiva em Fortaleza | Chico Resolve",
    metaDescription:
      "Pintura de quadra poliesportiva em Fortaleza com tinta de piso esportivo, demarcação oficial de futsal, vôlei e basquete. Contratar pintor especializado.",
    summary:
      "Pintura de piso esportivo para quadras de futsal, vôlei e basquete com tinta acrílica e demarcação oficial.",
    keywords: ["pintura de quadra poliesportiva", "pintura de piso esportivo", "contratar pintor"],
    intro:
      "A pintura de quadra poliesportiva é um trabalho técnico que combina pintura de piso esportivo de alto desempenho com demarcação rigorosa das modalidades. A Chico Resolve atende escolas, condomínios, clubes, academias e prefeituras em Fortaleza e região com sistemas acrílicos esportivos resistentes ao sol, chuva e ao impacto de bolas e calçados. Se você precisa contratar pintor experiente em quadras — capaz de medir e demarcar futsal, basquete, vôlei e handebol no mesmo piso — oferecemos projeto de paginação, aplicação técnica e garantia formal.",
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
    geo: "Pintamos quadras em escolas particulares e municipais, condomínios residenciais, clubes e prefeituras de Fortaleza, Eusébio, Aquiraz, Caucaia, Maracanaú e cidades vizinhas. Trabalhamos com sistemas resistentes ao sol intenso e chuvas concentradas do clima cearense.",
    faq: [
      { q: "Quanto custa pintar uma quadra poliesportiva em Fortaleza?", a: "O valor médio varia de R$ 60 a R$ 130 por m² incluindo preparação, pintura e demarcação. Quadras cobertas com sistema epóxi/PU custam mais. Solicite visita técnica." },
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
// H1 = keyword principal; conteúdo único focado em E-E-A-T, GEO Fortaleza/CE,
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
    h1: "Eletricista Industrial em Fortaleza",
    shortTitle: "Industrial",
    metaTitle: "Eletricista Industrial em Fortaleza | Chico Resolve",
    metaDescription:
      "Eletricista industrial em Fortaleza com eletricistas certificados NR-10 e SEP. Empresa de elétrica para CCM, painéis, manutenção e emergência 24h.",
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
      "A Chico Resolve é uma empresa de elétrica industrial em Fortaleza com eletricistas certificados em NR-10 básico e NR-10 SEP (Sistema Elétrico de Potência). Atendemos indústrias, galpões logísticos e plantas fabris com instalação, ampliação e manutenção de painéis elétricos, CCM (Centro de Controle de Motores), barramentos, inversores de frequência, soft-starters e sistemas de aterramento. Como eletricista de manutenção, também executamos termografia, ajuste de proteções, ensaio de relés e plano de manutenção preventiva. Para emergências, mantemos plantão de eletricista emergência 24h para evitar paradas de produção em indústrias do Distrito Industrial de Maracanaú, Pecém e Pacajus.",
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
    geo: "Atendemos indústrias do Distrito Industrial de Maracanaú, Complexo Industrial e Portuário do Pecém (CIPP), Pacajus, Horizonte, Eusébio e plantas fabris em toda a Região Metropolitana de Fortaleza. Conhecemos a particularidade do fornecimento da ENEL Ceará e dimensionamos sistemas resistentes à corrosão pela maresia em instalações próximas ao litoral.",
    faq: [
      { q: "Vocês emitem ART para serviços industriais?", a: "Sim. Toda obra industrial é entregue com ART (Anotação de Responsabilidade Técnica) assinada por engenheiro eletricista registrado no CREA-CE." },
      { q: "Quanto custa contratar um eletricista industrial em Fortaleza?", a: "Manutenções pontuais partem de R$ 350 por chamado técnico e contratos mensais variam conforme criticidade. Fazemos visita técnica gratuita para orçamento eletricista detalhado." },
      { q: "Atendem emergência 24h?", a: "Sim. Clientes com contrato têm eletricista emergência 24h com SLA acordado, ideal para indústrias que não podem parar." },
      { q: "Trabalham com média tensão?", a: "Sim. Nossos eletricistas têm NR-10 SEP e executamos instalações e manutenções conforme NBR 14039 para subestações até 15 kV." },
      { q: "Fazem termografia preventiva?", a: "Sim. Termografia de painéis e conexões é parte do nosso plano de manutenção preventiva — entregamos laudo com fotos térmicas e plano de ação." },
    ],
    related: ["predial", "residencial"],
  },
  {
    slug: "residencial",
    code: "EL-02",
    h1: "Eletricista Residencial em Fortaleza",
    shortTitle: "Residencial",
    metaTitle: "Eletricista Residencial em Fortaleza | Chico Resolve",
    metaDescription:
      "Eletricista residencial em Fortaleza com eletricistas certificados e eletricista instalador. Serviço eletricista, emergência 24h e orçamento rápido.",
    summary:
      "Eletricista residencial certificado para instalação de quadros, tomadas, iluminação, chuveiros e atendimento de emergência em Fortaleza.",
    keywords: [
      "eletricista residencial",
      "eletricistas certificados",
      "eletricista instalador",
      "orçamento eletricista",
      "serviço eletricista",
      "eletricista emergência",
    ],
    intro:
      "A Chico Resolve oferece serviço eletricista residencial em Fortaleza com eletricistas certificados em NR-10 e foco em segurança da família. Atuamos como eletricista instalador (quadros de distribuição, tomadas, pontos de iluminação, chuveiros, ar-condicionado, automação básica) e como eletricista emergência para curto-circuito, queda de energia, chuveiro queimado ou ponto que aquece. Cada visita começa por diagnóstico com alicate amperímetro e checagem do quadro — antes de qualquer reparo, identificamos a causa para que o problema não volte. Trabalhamos das residências da Aldeota, Meireles e Cocó às casas de Edson Queiroz, Sapiranga e Eusébio.",
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
      "Padrão de entrada ENEL Ceará",
    ],
    trust: [
      "Eletricistas certificados NR-10 com curso e reciclagem documentados",
      "Eletricista identificado com uniforme, crachá e EPI",
      "Garantia de 90 dias por escrito sobre o serviço",
      "Nota fiscal emitida quando solicitada",
      "Atendimento de eletricista emergência no mesmo dia",
    ],
    geo: "Atendemos residências em todos os bairros de Fortaleza — Aldeota, Meireles, Cocó, Papicu, Varjota, Dionísio Torres, Edson Queiroz, Sapiranga, Eng. Luciano Cavalcante, Praia do Futuro, Mucuripe e Beira Mar — além de Eusébio, Aquiraz, Caucaia e Maracanaú. Trabalhamos com o padrão de entrada da ENEL Ceará e dimensionamos proteções considerando a alta umidade do litoral.",
    faq: [
      { q: "Quanto custa um eletricista residencial em Fortaleza?", a: "Visita técnica de diagnóstico parte de R$ 150 (abatida do serviço). Serviços simples como troca de tomada partem de R$ 90; troca de quadro completa varia conforme número de circuitos. Solicite orçamento eletricista gratuito por WhatsApp." },
      { q: "Atendem emergência no mesmo dia?", a: "Sim. Para eletricista emergência (curto-circuito, sem energia, ponto queimando) priorizamos atendimento no mesmo dia em Fortaleza." },
      { q: "Por que preciso de DR e DPS no quadro?", a: "O DR protege contra choque elétrico, exigido pela NBR 5410 em áreas molhadas e tomadas externas. O DPS protege equipamentos contra surtos (raios, oscilações da rede). Ambos são considerados padrão moderno de segurança residencial." },
      { q: "Vocês emitem nota fiscal?", a: "Sim. Somos empresa formalizada com CNPJ e emitimos NF de serviço quando solicitada." },
      { q: "Trabalham com automação residencial?", a: "Sim. Instalamos interruptores inteligentes, automação de iluminação e integração com Alexa e Google Home." },
    ],
    related: ["predial", "industrial"],
  },
  {
    slug: "predial",
    code: "EL-03",
    h1: "Eletricista Predial em Fortaleza",
    shortTitle: "Predial",
    metaTitle: "Eletricista Predial em Fortaleza | Chico Resolve",
    metaDescription:
      "Eletricista predial em Fortaleza para condomínios e edifícios comerciais. Empresa de elétrica com eletricistas certificados, manutenção e emergência 24h.",
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
      "Como empresa de elétrica especializada em condomínios e edifícios comerciais de Fortaleza, a Chico Resolve atua como eletricista predial com eletricistas certificados NR-10 para instalações coletivas: barramento blindado, prumadas, quadros de medição, áreas comuns, garagens, bombas de recalque, pressurização de escadas, iluminação de emergência e sistemas de detecção. Atendemos síndicos, administradoras e gerentes prediais com contratos de eletricista de manutenção (preventiva mensal + corretiva por chamado) e plantão de eletricista emergência 24h para falhas em elevadores, bombas e iluminação de circulação. Cada serviço gera relatório fotográfico para a administração e atende às exigências do Corpo de Bombeiros do Ceará.",
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
      "IT do Corpo de Bombeiros do Ceará (CBMCE)",
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
    geo: "Atendemos edifícios residenciais e comerciais em Fortaleza inteira — incluindo prédios na Beira Mar, Aldeota, Meireles, Cocó, Guararapes, Dionísio Torres e Edson Queiroz — além de empreendimentos em Eusébio, Aquiraz e Caucaia. Conhecemos as exigências da ENEL Ceará para entrada de energia e do CBMCE para vistoria do AVCB.",
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
// H1 = keyword principal; conteúdo único focado em E-E-A-T, GEO Fortaleza/CE,
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
    h1: "Serviço Hidráulico em Fortaleza",
    shortTitle: "Serviço Hidráulico",
    metaTitle: "Serviço Hidráulico em Fortaleza | Chico Resolve",
    metaDescription:
      "Serviço hidráulico em Fortaleza com bombeiro hidráulico: conserto hidráulico, troca de válvula Hydra e sistema hidráulico industrial. Emergência 24h.",
    summary:
      "Conserto hidráulico completo com bombeiro hidráulico — válvulas Hydra, sistemas industriais e tubulação predial em Fortaleza.",
    keywords: [
      "serviço hidráulico",
      "conserto hidráulico",
      "bombeiro hidráulico",
      "conserto de válvula hydra",
      "empresas de hidráulica",
      "sistema hidráulico industrial",
    ],
    intro:
      "A Chico Resolve é uma das empresas de hidráulica de Fortaleza com bombeiro hidráulico próprio para conserto hidráulico em residências, condomínios e indústrias. Executamos desde a substituição de uma válvula Hydra ou Docol que perdeu a vedação até a montagem de sistema hidráulico industrial completo — barriletes, recalque, hidrômetros, registros de gaveta e esfera, prumadas em CPVC ou PPR e tubulação de água quente. Cada chamado começa por diagnóstico com manômetro e inspeção visual da rede; só depois entregamos orçamento por escrito. Atendemos com nota fiscal, garantia e relatório fotográfico do antes e depois.",
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
      { title: "Emergência 24h", text: "Plantão para vazamento crítico, rompimento de prumada ou falha em bomba — atendimento imediato em Fortaleza." },
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
    geo: "Atendemos toda Fortaleza — Aldeota, Meireles, Cocó, Papicu, Varjota, Edson Queiroz, Sapiranga, Praia do Futuro, Beira Mar — além de indústrias no Distrito Industrial de Maracanaú, Pecém e plantas em Eusébio, Aquiraz e Caucaia. Conhecemos as particularidades da pressão fornecida pela Cagece e dimensionamos sistemas resistentes à maresia em metais cromados do litoral cearense.",
    faq: [
      { q: "Quanto custa um conserto hidráulico em Fortaleza?", a: "Visita técnica parte de R$ 120 (abatida do serviço). Trocas pontuais (torneira, registro, sifão) partem de R$ 90 mais material. Para sistema hidráulico industrial, orçamento sob projeto." },
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
    h1: "Desentupidora em Fortaleza",
    shortTitle: "Desentupidora",
    metaTitle: "Desentupidora em Fortaleza 24h | Chico Resolve",
    metaDescription:
      "Desentupidora em Fortaleza com empresa de desentupir canos e encanador urgente. Desentupir tubulação de água com hidrojato. Atendimento 24h.",
    summary:
      "Desentupidora com hidrojateamento e equipamento próprio para desentupir canos e tubulação de água em Fortaleza — encanador urgente 24h.",
    keywords: [
      "desentupidora",
      "empresa de desentupir canos",
      "empresa de desentupimento de cano",
      "encanador urgente",
      "desentupir tubulação de agua",
    ],
    intro:
      "A Chico Resolve é uma desentupidora em Fortaleza com equipamento próprio para desentupir canos de cozinha, banheiro, pia, máquina de lavar e tubulação de água em residências, condomínios e empresas. Como empresa de desentupimento de cano, usamos hidrojateamento de alta pressão e máquinas rotativas (roto-rooter) que removem gordura, sabão, raízes e incrustações sem quebrar piso ou parede. Funcionamos como encanador urgente: chamado por WhatsApp, técnico no local em poucas horas, sem cobrar deslocamento dentro de Fortaleza. Cada serviço inclui teste de vazão após o desentupimento e relatório com fotos do antes e depois.",
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
      { title: "Encanador Urgente 24h", text: "Atendimento de emergência para vazamento, transbordo e obstrução — saída imediata em Fortaleza." },
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
      "Sem cobrança de visita técnica em Fortaleza",
    ],
    geo: "Como desentupidora em Fortaleza, atendemos todos os bairros — Aldeota, Meireles, Cocó, Papicu, Varjota, Dionísio Torres, Edson Queiroz, Sapiranga, Eng. Luciano Cavalcante, Praia do Futuro, Mucuripe e Beira Mar — além de Eusébio, Aquiraz, Caucaia e Maracanaú. Atuamos em condomínios, casas, indústrias e estabelecimentos comerciais com equipamentos compatíveis com a rede da Cagece.",
    faq: [
      { q: "Quanto custa uma desentupidora em Fortaleza?", a: "Desentupimentos simples (pia, vaso) partem de R$ 150. Hidrojateamento de coluna ou caixa de gordura tem orçamento por extensão e grau de obstrução. Sem taxa de visita." },
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
    h1: "Desentupimento de Esgoto em Fortaleza",
    shortTitle: "Desentupimento de Esgoto",
    metaTitle: "Desentupimento de Esgoto em Fortaleza | Chico Resolve",
    metaDescription:
      "Desentupimento de esgoto em Fortaleza com desentupidor de cano de esgoto, desentupimento de ralo e encanador urgente. Hidrojato e videoinspeção 24h.",
    summary:
      "Desentupimento de esgoto, desentupimento de ralo e desobstrução de rede com hidrojato e videoinspeção — encanador urgente em Fortaleza.",
    keywords: [
      "desentupimento de esgoto",
      "desentupidor de cano de esgoto",
      "desentupimento de ralo",
      "encanador urgente",
      "desentupimento esgoto",
    ],
    intro:
      "Desentupimento de esgoto exige equipamento certo e técnica — não é trabalho para mola de aço alugada. A Chico Resolve atua como desentupidor de cano de esgoto em Fortaleza com hidrojato de alta pressão, máquinas rotativas profissionais e câmera de videoinspeção para localizar a causa exata da obstrução (raízes invasivas, gordura, papel, incrustação ou ruptura). Fazemos desentupimento de ralo de box, ralo sifonado, ralo de cozinha, ramal predial, caixa de gordura e ligação com a rede pública. Funcionamos como encanador urgente 24h porque desentupimento esgoto crítico não pode esperar — refluxo em condomínio, transbordo em restaurante ou esgoto na sala de casa exigem resposta imediata.",
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
      "Diretrizes Cagece para ligação na rede pública",
    ],
    trust: [
      "Desentupidor de cano de esgoto com equipe própria e equipamento profissional",
      "Hidrojato e câmera de videoinspeção próprios — sem aluguel",
      "Encanador urgente 24h para emergência de esgoto",
      "Descarte adequado do resíduo conforme norma ambiental",
      "Garantia formal de 30 a 90 dias",
    ],
    geo: "Atendemos desentupimento esgoto em todos os bairros de Fortaleza — incluindo restaurantes da Praia do Futuro e Beira Mar, condomínios em Aldeota, Meireles e Cocó, e residências em Edson Queiroz, Sapiranga e Eng. Luciano Cavalcante — além de Eusébio, Aquiraz, Caucaia e Maracanaú. Conhecemos as particularidades da rede coletora da Cagece e do solo arenoso do litoral cearense que favorece infiltração de raízes.",
    faq: [
      { q: "Quanto custa o desentupimento de esgoto em Fortaleza?", a: "Desentupimento de ralo simples parte de R$ 150. Hidrojateamento de coluna de esgoto ou ramal predial é orçado por extensão e grau de obstrução, após vistoria gratuita." },
      { q: "Qual a diferença entre máquina rotativa e hidrojato?", a: "Máquina rotativa quebra a obstrução com cabo metálico; hidrojato corta com água em alta pressão (até 4.000 PSI). Para gordura solidificada, raízes e limpeza completa, o hidrojato é superior." },
      { q: "Vocês fazem videoinspeção?", a: "Sim. Câmera colorida com transmissão ao vivo localiza trincas, raízes e o ponto exato da obstrução, evitando quebras desnecessárias." },
      { q: "Atendem condomínios e restaurantes?", a: "Sim. Atendemos contratos de manutenção preventiva mensal ou trimestral para caixas de gordura, ramais prediais e estação de tratamento." },
      { q: "Atendem emergência no mesmo dia?", a: "Sim. Para esgoto transbordando ou refluxo crítico, mobilizamos encanador urgente em até 2 horas em Fortaleza." },
    ],
    related: ["desentupidora", "encanador-predial", "encanador-residencial"],
  },
  {
    slug: "encanador-residencial",
    code: "HD-04",
    h1: "Encanador Residencial em Fortaleza",
    shortTitle: "Encanador Residencial",
    metaTitle: "Encanador Residencial em Fortaleza | Chico Resolve",
    metaDescription:
      "Encanador residencial em Fortaleza com encanador profissional e urgente. Serviços hidráulicos residenciais, encanador e desentupidor com garantia.",
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
      "A Chico Resolve oferece serviço de encanador residencial em Fortaleza com encanador profissional CLT, uniformizado e identificado para atender casas e apartamentos com tranquilidade. Cobrimos toda a linha de serviços hidráulicos residenciais: troca de torneiras, registros e flexíveis, instalação de máquina de lavar e tanquinho, conserto de descarga, troca de tubulação aparente ou embutida, detecção de vazamento, desentupir tubulação de água e desobstrução de ralos. Como encanador e desentupidor, resolvemos numa visita problemas que outros precisariam dividir em dois chamados. Funcionamos também como encanador urgente: chamados via WhatsApp com saída imediata para vazamento, ralo transbordando ou chuveiro sem pressão.",
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
      "Padrão Cagece para ligação predial",
      "NR-6 (EPI)",
    ],
    trust: [
      "Encanador hidráulico residencial CLT, identificado com uniforme e crachá",
      "Empresa formalizada com CNPJ, contrato e nota fiscal",
      "Garantia de 90 dias a 12 meses por escrito",
      "Encanador urgente 24h via WhatsApp dedicado",
      "Geofone próprio para detecção sem quebra",
    ],
    geo: "Atendemos residências em todos os bairros de Fortaleza — Aldeota, Meireles, Cocó, Papicu, Varjota, Dionísio Torres, Edson Queiroz, Sapiranga, Eng. Luciano Cavalcante, Praia do Futuro, Mucuripe e Beira Mar — além de casas em Eusébio, Aquiraz, Caucaia e Maracanaú. Trabalhamos com tubulação compatível com o padrão Cagece e tintas/vedantes resistentes à maresia em metais expostos no litoral cearense.",
    faq: [
      { q: "Quanto custa um encanador residencial em Fortaleza?", a: "Visita técnica parte de R$ 120 (abatida do serviço). Serviços simples como troca de torneira partem de R$ 80; detecção de vazamento sem quebra a partir de R$ 280. Orçamento gratuito por WhatsApp." },
      { q: "Vocês conseguem detectar vazamento sem quebrar parede?", a: "Sim. Usamos geofone eletrônico, câmera de inspeção e teste de pressão para localizar o ponto exato — só quebramos o estritamente necessário." },
      { q: "Atendem emergência?", a: "Sim. Encanador urgente 24h para vazamento, ralo transbordando ou rompimento de tubulação — saída imediata em Fortaleza." },
      { q: "Vocês também desentopem ralos e canos?", a: "Sim. Atuamos como encanador e desentupidor — desentupir tubulação de água, vasos, ralos e pias na mesma visita." },
      { q: "Tem garantia escrita?", a: "Sim. Garantia de 90 dias para reparos pontuais e até 12 meses para troca de tubulação ou instalação nova." },
    ],
    related: ["encanador-predial", "servico-hidraulico", "desentupidora"],
  },
  {
    slug: "encanador-predial",
    code: "HD-05",
    h1: "Encanador Predial em Fortaleza",
    shortTitle: "Encanador Predial",
    metaTitle: "Encanador Predial em Fortaleza | Chico Resolve",
    metaDescription:
      "Encanador predial em Fortaleza para condomínios e apartamentos. Empresa de encanador especializado em vazamento e detecção sem quebra. 24h.",
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
      "Como empresa de encanador especializada em edifícios, a Chico Resolve atua como encanador predial em Fortaleza com foco em condomínios, edifícios comerciais e atendimento de encanador para apartamento. Cuidamos das instalações coletivas — prumadas de água fria e quente, barriletes, hidrômetros individualizados, bombas de recalque, reservatórios, sistema de combate a incêndio e rede de esgoto — e do que é privativo de cada unidade. Como encanador especializado em vazamento, usamos geofone, câmera termográfica e gás traçador para encanador detectar vazamento na prumada sem quebrar o apartamento do vizinho. Atendemos síndicos, administradoras e moradores com contrato de manutenção, plantão de emergência 24h e relatório fotográfico mensal para a assembleia.",
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
    geo: "Atendemos edifícios residenciais e comerciais em Fortaleza inteira — incluindo prédios na Beira Mar, Aldeota, Meireles, Cocó, Guararapes, Dionísio Torres e Edson Queiroz — além de empreendimentos em Eusébio, Aquiraz e Caucaia. Conhecemos a particularidade da pressão da Cagece em zonas altas da cidade e dimensionamos sistemas considerando a corrosão acelerada por maresia em metais expostos.",
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
// H1 = keyword principal; conteúdo único focado em E-E-A-T, GEO Fortaleza/CE,
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
    h1: "Instalação de Drywall em Fortaleza",
    shortTitle: "Instalação de Drywall",
    metaTitle: "Instalação de Drywall em Fortaleza | Chico Resolve",
    metaDescription:
      "Instalação de drywall em Fortaleza com empresa de drywall regularizada. Paredes, forros e divisórias com orçamento drywall rápido e garantia escrita.",
    summary:
      "Instalação de drywall completa — paredes, forros e divisórias — com perfis galvanizados, placa certificada e execução por equipe própria em Fortaleza.",
    keywords: [
      "instalação de drywall",
      "empresa de drywall",
      "orçamento drywall",
    ],
    intro:
      "A Chico Resolve é uma empresa de drywall em Fortaleza com equipe própria CLT dedicada à instalação de drywall em obras novas, reformas e ampliações comerciais. Executamos a montagem completa do sistema — marcação a laser, montantes e guias galvanizados, fechamento com placa standard, RU (resistente à umidade) ou RF (resistente ao fogo), tratamento de juntas com fita microperfurada e massa em três demãos — pronto para receber pintura. Cada orçamento drywall que entregamos é detalhado por ambiente, com metragem de placa, quantidade de perfis, isolamento (lã de rocha ou de vidro), portas e nichos, sem custo escondido depois.",
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
    geo: "Atendemos instalação de drywall em toda Fortaleza — Aldeota, Meireles, Cocó, Papicu, Edson Queiroz, Sapiranga, Praia do Futuro, Beira Mar — e em obras de Eusébio, Aquiraz, Caucaia e Maracanaú. Em zonas litorâneas com maresia, recomendamos placa RU em áreas úmidas e cuidado redobrado com fixadores galvanizados para evitar corrosão acelerada típica do clima cearense.",
    faq: [
      { q: "Quanto custa a instalação de drywall em Fortaleza?", a: "Parede drywall simples parte de R$ 110/m² incluindo material e mão de obra; forro liso de gesso a partir de R$ 95/m². Visita técnica gratuita para orçamento drywall exato." },
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
    h1: "Gesso Acartonado em Fortaleza",
    shortTitle: "Gesso Acartonado",
    metaTitle: "Gesso Acartonado em Fortaleza | Chico Resolve",
    metaDescription:
      "Gesso acartonado em Fortaleza com placa drywall certificada Knauf, Placo e Gypsum. Drywall ou gesso acartonado: indicação técnica e orçamento.",
    summary:
      "Instalação de gesso acartonado (placa drywall) para paredes, forros e revestimentos com orientação técnica sobre drywall ou gesso tradicional.",
    keywords: [
      "gesso acartonado",
      "drywall ou gesso acartonado",
      "drywood gesso acartonado",
      "placa de gesso",
    ],
    intro:
      "Gesso acartonado e drywall são o mesmo sistema construtivo: uma placa de gesso revestida por duas folhas de cartão fixada em estrutura metálica galvanizada. A Chico Resolve trabalha em Fortaleza com gesso acartonado das marcas Knauf, Placo e Gypsum (incluindo linhas tipo Drywood gesso acartonado) — todas certificadas pela ABNT NBR 14715. A dúvida \"drywall ou gesso acartonado?\" surge porque no Nordeste ainda é comum o gesso liso tradicional (em pasta, aplicado direto na alvenaria) para forros. Cada sistema tem seu uso: gesso acartonado é mais rápido, seco, leve e permite isolamento; o gesso tradicional rende em forro fixo de pequena área. Orientamos a melhor escolha por ambiente.",
    whenToHire: [
      { title: "Comparar drywall e gesso tradicional", text: "Antes de fechar obra, vale entender custo, prazo e desempenho de cada sistema." },
      { title: "Obra com prazo curto", text: "Gesso acartonado dispensa cura úmida e libera o ambiente para pintura em poucos dias." },
      { title: "Reforma sem entulho", text: "Placa drywall gera fração do entulho de alvenaria — ideal para apartamento habitado." },
      { title: "Estrutura leve", text: "Lajes com sobrecarga limitada exigem sistema leve — gesso acartonado pesa muito menos que tijolo." },
    ],
    types: [
      { title: "Placa ST (Standard)", text: "Placa de gesso branca padrão para áreas secas — parede de quarto, sala, escritório, forro residencial." },
      { title: "Placa RU (Verde)", text: "Gesso acartonado com aditivo hidrofugante para banheiros, cozinhas, lavanderias e áreas com maresia." },
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
    geo: "Atendemos com gesso acartonado em Fortaleza inteira — Aldeota, Meireles, Cocó, Edson Queiroz, Sapiranga, Praia do Futuro — além de Eusébio, Aquiraz, Caucaia e Maracanaú. Para edifícios próximos ao mar (Beira Mar, Mucuripe, Praia de Iracema) indicamos placa drywall RU como padrão para qualquer parede em contato com fachada externa, pois a maresia acelera a deterioração de placas standard.",
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
    h1: "Gesseiro em Fortaleza",
    shortTitle: "Gesseiro",
    metaTitle: "Gesseiro Profissional em Fortaleza | Chico Resolve",
    metaDescription:
      "Gesseiro profissional em Fortaleza, colocador de drywall e mão de obra drywall com equipe CLT. Preço gesseiro honesto e orçamento detalhado.",
    summary:
      "Gesseiro profissional e colocador de drywall com equipe própria CLT para mão de obra de qualidade — preço justo e garantia escrita em Fortaleza.",
    keywords: [
      "gesseiro",
      "gesseiro profissional",
      "colocador de drywall",
      "mão de obra drywall",
      "preço gesseiro",
    ],
    intro:
      "Encontrar gesseiro profissional confiável em Fortaleza é um dos maiores gargalos de quem reforma. A Chico Resolve mantém equipe própria de gesseiro e colocador de drywall em regime CLT, com treinamento contínuo nos manuais Knauf e Placo, EPI completo e ferramentas adequadas (nível a laser, parafusadeira de impacto, lixadeira com aspirador). Quando você contrata nossa mão de obra drywall, não recebe diarista de internet — recebe profissional identificado, com crachá, registrado, supervisionado por um responsável técnico. O preço gesseiro que apresentamos é fechado por escrito; nada de aumento no fim da obra alegando \"trabalho a mais\".",
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
    geo: "Disponibilizamos gesseiro e colocador de drywall em toda Fortaleza — Aldeota, Meireles, Cocó, Papicu, Varjota, Dionísio Torres, Edson Queiroz, Sapiranga, Praia do Futuro, Mucuripe, Beira Mar — além de Eusébio, Aquiraz, Caucaia e Maracanaú. Conhecemos as exigências de condomínios da orla (horário, taxa de obra, uso de elevador de serviço) e operamos dentro das regras.",
    faq: [
      { q: "Quanto é o preço gesseiro em Fortaleza?", a: "Mão de obra drywall para parede parte de R$ 55/m² e forro liso a partir de R$ 45/m² (só mão de obra). Material à parte ou incluso conforme preferência do cliente." },
      { q: "Vocês cobram visita técnica?", a: "Não. Visita e orçamento são gratuitos dentro de Fortaleza e região metropolitana." },
      { q: "O gesseiro fornece o material ou o cliente?", a: "Trabalhamos das duas formas. Quando fornecemos, indicamos marcas certificadas Knauf, Placo ou Gypsum com nota fiscal e desconto de revenda." },
      { q: "Quantos dias leva uma obra com vocês?", a: "Forro de 20 m² leva 3 a 4 dias úteis; parede de 10 m² leva 2 a 3 dias úteis. Equipe pode ser aumentada para acelerar prazos." },
      { q: "Como é a forma de pagamento?", a: "Entrada na assinatura, parcela no meio da obra e saldo na entrega, com vistoria final. Aceitamos PIX, cartão e transferência." },
    ],
    related: ["instalacao-drywall", "parede-de-drywall", "forro-de-gesso"],
  },
  {
    slug: "forro-de-gesso",
    code: "DW-04",
    h1: "Forro de Gesso em Fortaleza",
    shortTitle: "Forro de Gesso",
    metaTitle: "Forro de Gesso em Fortaleza | Chico Resolve",
    metaDescription:
      "Forro de gesso em Fortaleza: instalação, orçamento forro de gesso e conserto de teto de gesso com equipe especializada e garantia escrita.",
    summary:
      "Instalação de forro de gesso liso, em desnível e com sanca, além de conserto de teto de gesso com trinca, mancha ou afundamento em Fortaleza.",
    keywords: [
      "forro de gesso",
      "orçamento forro de gesso",
      "conserto de teto de gesso",
      "instalação forro de gesso",
    ],
    intro:
      "Forro de gesso transforma o ambiente — esconde laje irregular, integra iluminação embutida, melhora acústica e valoriza o imóvel. A Chico Resolve executa instalação forro de gesso em residências, lojas, consultórios e escritórios em Fortaleza, com duas tecnologias: forro em placa de gesso acartonado (drywall) fixado em estrutura metálica e forro tradicional em gesso liso. Também atuamos no conserto de teto de gesso quando aparece trinca em junta, mancha de infiltração ou afundamento por fixação falha. Cada orçamento forro de gesso é detalhado por m², com indicação de sanca, spot, fita LED e materiais — sem valor genérico.",
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
    geo: "Instalamos forro de gesso em apartamentos, casas e salas comerciais em Fortaleza — Aldeota, Meireles, Cocó, Papicu, Varjota, Edson Queiroz, Sapiranga, Praia do Futuro — e em Eusébio, Aquiraz, Caucaia e Maracanaú. Em apartamentos próximos ao mar, recomendamos ventilação adequada do entreforro para evitar condensação favorecida pelo clima quente e úmido de Fortaleza.",
    faq: [
      { q: "Quanto custa o orçamento de forro de gesso em Fortaleza?", a: "Forro liso parte de R$ 95/m² (drywall) ou R$ 75/m² (gesso tradicional), incluindo material e mão de obra. Sanca aberta com fita LED tem valor adicional por metro linear." },
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
    h1: "Parede de Drywall em Fortaleza",
    shortTitle: "Parede de Drywall",
    metaTitle: "Parede de Drywall em Fortaleza | Chico Resolve",
    metaDescription:
      "Parede de drywall em Fortaleza: instalação, reparo em parede de drywall e reforço em parede de drywall com orçamento drywall rápido e garantia.",
    summary:
      "Instalação, reparo e reforço em parede de drywall com fixação adequada para TV, bancada, prateleira e pia — orçamento drywall em 24h.",
    keywords: [
      "parede de drywall",
      "reparo em parede de drywall",
      "reforço em parede de drywall",
      "orçamento drywall",
    ],
    intro:
      "Parede de drywall bem executada não treme, não tem trinca em junta e suporta tudo o que precisa — TV grande, prateleira pesada, bancada de cozinha, pia de banheiro. A Chico Resolve faz instalação, reparo em parede de drywall e reforço em parede de drywall em Fortaleza com técnica correta: chapa metálica embutida na estrutura para suportar carga, bucha específica para drywall, fita microperfurada na junta e massa em três demãos. Quando o problema é trinca, furo ou afundamento, fazemos diagnóstico (estrutural ou estético?) antes de tampar. O orçamento drywall é fechado por escrito após visita técnica gratuita.",
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
    geo: "Atendemos parede de drywall em todos os bairros de Fortaleza — Aldeota, Meireles, Cocó, Papicu, Dionísio Torres, Edson Queiroz, Sapiranga, Praia do Futuro, Mucuripe — além de Eusébio, Aquiraz, Caucaia e Maracanaú. Em áreas próximas ao mar (Beira Mar, Mucuripe), priorizamos parafusos com tratamento anticorrosivo e placa RU para suportar a maresia.",
    faq: [
      { q: "Quanto custa o orçamento drywall para parede em Fortaleza?", a: "Parede de drywall simples parte de R$ 110/m² (material + mão de obra). Reforço para TV, prateleira ou pia tem valor adicional por ponto reforçado. Visita gratuita." },
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
    h1: "Divisória de Ambiente em Fortaleza",
    shortTitle: "Divisória de Ambiente",
    metaTitle: "Divisória de Ambiente em Fortaleza | Chico Resolve",
    metaDescription:
      "Divisória de ambiente em Fortaleza: ripada, drywall, placa de gesso na parede, divisórias para escritório e industrial com instalação técnica.",
    summary:
      "Divisória de ambiente em drywall, ripada, placa de gesso e perfilado — soluções para escritório, área externa e indústria em Fortaleza.",
    keywords: [
      "divisória de ambiente",
      "divisoria de ambiente ripada",
      "placa de gesso na parede",
      "divisória para area externa",
      "divisórias de ambientes para escritório",
      "divisoria de ambiente industrial",
    ],
    intro:
      "Dividir ambiente sem alvenaria é a forma mais rápida, leve e reversível de mudar um espaço. A Chico Resolve executa em Fortaleza divisória de ambiente em várias linguagens: drywall (gesso acartonado), divisória ripada de madeira para hall e sala, perfilado naval com miolo colmeia para escritórios, divisória para área externa com placa cimentícia e divisória de ambiente industrial em chapa metálica ou painel sanduíche. Cada solução vai por uso, exigência acústica, orçamento e prazo. Quando o cliente pede simplesmente \"placa de gesso na parede\" para separar a sala, mostramos o sistema correto — placa drywall em estrutura metálica é seguro, durável e reversível.",
    whenToHire: [
      { title: "Dividir sala ou criar suíte", text: "Drywall ou divisória ripada permitem mudar layout em dias, sem entulho de alvenaria." },
      { title: "Escritório precisa de salas privativas", text: "Divisórias de ambientes para escritório em perfilado naval ou drywall com porta integrada." },
      { title: "Área externa coberta ou semi-coberta", text: "Divisória para área externa exige placa cimentícia ou painel resistente à umidade e à maresia." },
      { title: "Indústria precisa setorizar produção", text: "Divisória de ambiente industrial em chapa metálica, painel sanduíche ou drywall RF para áreas técnicas." },
    ],
    types: [
      { title: "Divisória de Drywall", text: "Parede em placa drywall (gesso acartonado) com estrutura metálica, isolamento opcional e acabamento pronto para pintura." },
      { title: "Divisória de Ambiente Ripada", text: "Ripado de madeira (cumaru, freijó ou MDF ripado) vertical para dividir sem fechar — separa visual e ventila." },
      { title: "Placa de Gesso na Parede para Dividir", text: "Quando pedem placa de gesso na parede, executamos com sistema drywall completo — fita, massa e acabamento, não placa solta colada." },
      { title: "Divisórias de Ambientes para Escritório", text: "Perfilado naval (eucatex/colmeia) ou drywall com porta, vidro e cabeamento estruturado embutido." },
      { title: "Divisória para Área Externa", text: "Placa cimentícia (CRFS) sobre estrutura metálica galvanizada, resistente à umidade e maresia de Fortaleza." },
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
    geo: "Executamos divisória de ambiente em Fortaleza inteira — Aldeota, Meireles, Cocó, Papicu, Edson Queiroz, Sapiranga, Praia do Futuro, Mucuripe, Beira Mar — e em obras de Eusébio, Aquiraz, Caucaia e Maracanaú. Para divisória para área externa próxima ao mar, indicamos placa cimentícia sobre perfil galvanizado tratado contra maresia; para divisória de ambiente industrial em galpões do Distrito Industrial, painel sanduíche ou chapa metálica com pintura epóxi.",
    faq: [
      { q: "Qual divisória de ambiente é mais barata?", a: "Drywall é, em geral, a mais econômica para uso interno seco. Ripada e perfilado naval ficam em faixa parecida; cimentícia e metálica industrial saem mais caras pelo material e fixação." },
      { q: "Divisoria de ambiente ripada bloqueia som?", a: "Não. Ripada separa visualmente e permite ventilação, mas não veda som. Para privacidade acústica, indicamos drywall com isolamento ou perfilado com miolo colmeia." },
      { q: "Posso usar placa de gesso na parede para dividir banheiro?", a: "Sim, mas com placa drywall RU (verde, resistente à umidade) sobre estrutura metálica galvanizada e impermeabilização nas áreas de contato direto com água." },
      { q: "Que sistema é melhor para divisória para área externa em Fortaleza?", a: "Placa cimentícia (CRFS) sobre estrutura galvanizada é o padrão para clima litorâneo — resiste à umidade, à maresia e ao sol forte." },
      { q: "Vocês instalam divisórias de ambientes para escritório com porta e vidro?", a: "Sim. Perfilado naval e drywall com porta de madeira, vidro temperado e bandeira para iluminação são parte do nosso pacote para escritórios." },
    ],
    related: ["instalacao-drywall", "parede-de-drywall", "gesso-acartonado"],
  },
];

export const getDrywallSubservice = (slug: string): DrywallSubservice | undefined =>
  drywallSubservices.find((s) => s.slug === slug);




