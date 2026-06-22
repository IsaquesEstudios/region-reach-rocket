import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, ShieldCheck, Users, Wrench, PaintBucket } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Chico Resolve | Reforma e Pintura em Teresina/PI" },
      {
        name: "description",
        content:
          "Conheça a Chico Resolve: reforma, pintura, elétrica, hidráulica, drywall e câmeras de segurança em Teresina/PI. Prazo combinado, profissionais experientes e garantia em cada serviço.",
      },
      { property: "og:title", content: "Quem Somos — Chico Resolve" },
      {
        property: "og:description",
        content:
          "Empresa de reforma e pintura em Teresina/PI. Atendimento para residências, condomínios e empresas com planejamento, prazo e confiança.",
      },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomosPage,
});

const pilares = [
  { icon: Clock, title: "Prazo combinado", text: "Cronograma claro do início ao fim — você sabe quando começa e quando termina." },
  { icon: ShieldCheck, title: "Garantia em cada serviço", text: "Materiais de qualidade e garantia formal em cada etapa executada." },
  { icon: Users, title: "Profissionais experientes", text: "Equipe treinada para residências, condomínios e empresas." },
  { icon: CheckCircle2, title: "Resultado visível", text: "Acabamento limpo, ambiente entregue pronto para uso." },
];

const atendimentos = [
  "Residências",
  "Condomínios",
  "Empresas e comércios",
];

const especialidades = [
  { icon: PaintBucket, title: "Reforma e pintura", text: "Reformar ou pintar exige planejamento, prazo e confiança. Entregamos os três." },
  { icon: Wrench, title: "Instalações completas", text: "Elétrica, hidráulica, drywall e câmeras de segurança — seu imóvel resolvido de ponta a ponta." },
];

function QuemSomosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-surface to-background py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest mb-5">
            Quem somos
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance mb-6">
            Reforma, pintura e manutenção predial em Teresina, com prazo e confiança.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            A {site.name} é uma empresa de reforma e pintura em Teresina, Piauí, com atendimento para
            residências, condomínios e empresas. Reformar ou pintar um ambiente exige mais do que mão de
            obra: exige planejamento, prazo e confiança em quem está executando.
          </p>
        </div>
      </section>

      {/* História / Texto principal */}
      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 text-base sm:text-lg leading-relaxed text-foreground/90">
          <p>
            É isso que entregamos — <strong>profissionais experientes, materiais de qualidade e garantia em
            cada serviço realizado</strong>.
          </p>
          <p>
            Além de reforma e pintura, também atendemos com <strong>instalações elétricas e hidráulicas,
            drywall e câmeras de segurança</strong>, para resolver seu imóvel de ponta a ponta sem precisar
            contratar vários prestadores diferentes.
          </p>
          <p>
            Se você precisa renovar um ambiente, finalizar uma obra parada ou repintar seu espaço, a {" "}
            {site.name} está em Teresina, pronta para atender com <strong>prazo combinado e resultado
            visível</strong>.
          </p>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20 sm:py-24 bg-surface" aria-labelledby="pilares-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest mb-4">
              Como trabalhamos
            </span>
            <h2 id="pilares-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
              O que entregamos em toda obra.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pilares.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl bg-card border border-border p-7 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all"
              >
                <span className="inline-flex size-12 rounded-xl bg-accent/15 text-primary items-center justify-center mb-5">
                  <p.icon className="size-6" aria-hidden />
                </span>
                <h3 className="text-lg font-bold mb-2 tracking-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Especialidades + Atendimentos */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">Nossas especialidades</h2>
            <div className="space-y-5">
              {especialidades.map((e) => (
                <div key={e.title} className="flex gap-4 rounded-2xl bg-card border border-border p-6">
                  <span className="inline-flex size-12 shrink-0 rounded-xl bg-primary/10 text-primary items-center justify-center">
                    <e.icon className="size-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{e.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{e.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">Quem atendemos</h2>
            <ul className="space-y-3">
              {atendimentos.map((a) => (
                <li key={a} className="flex items-center gap-3 rounded-xl bg-card border border-border px-5 py-4">
                  <CheckCircle2 className="size-5 text-primary shrink-0" aria-hidden />
                  <span className="font-semibold">{a}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
              Atuamos em {site.serviceArea}, com equipe própria e atendimento direto para cada tipo de obra.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-balance">
            Vamos conversar sobre sua obra?
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/85 mb-8 max-w-2xl mx-auto">
            Renove um ambiente, finalize uma obra parada ou repinte seu espaço com prazo combinado e
            resultado visível.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white text-primary px-7 py-3.5 text-sm font-bold hover:bg-white/90 transition-colors"
            >
              Falar no WhatsApp
            </a>
            <Link
              to="/contato"
              className="inline-flex rounded-full bg-primary-dark/40 border border-white/30 px-7 py-3.5 text-sm font-bold hover:bg-primary-dark/60 transition-colors"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
