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
