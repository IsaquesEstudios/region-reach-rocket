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


