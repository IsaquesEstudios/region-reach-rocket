import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/site";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Serviços de Manutenção Predial em Teresina | Chico Resolve" },
      { name: "description", content: "Conheça todos os serviços da Chico Resolve em Teresina: pintura, elétrica, hidráulica, drywall, juntas de dilatação, segurança, reformas e manutenção." },
      { property: "og:title", content: "Serviços — Chico Resolve" },
      { property: "og:description", content: "Pintura, elétrica, hidráulica, drywall, juntas, segurança, reformas e manutenção em Teresina." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicosHub,
});

function ServicosHub() {
  return (
    <>
      <section className="pt-16 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">Catálogo técnico</p>
          <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold tracking-tight">
            Todos os <span className="text-primary">serviços</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            Um único parceiro para a manutenção do seu patrimônio. Equipes próprias e multidisciplinares atendendo Teresina e Grande Teresina.
          </p>
        </div>
      </section>

      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/servicos/$slug"
              params={{ slug: s.slug }}
              className="group rounded-2xl bg-card p-7 border border-border flex flex-col h-full hover:border-primary transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <span className="font-mono text-sm font-bold">{s.code}</span>
              </div>
              <h2 className="text-lg font-extrabold mb-3 tracking-tight">{s.title}</h2>
              <p className="text-sm text-muted-foreground mb-8 flex-grow leading-relaxed">{s.summary}</p>
              <span className="text-xs font-bold text-primary group-hover:underline">Saiba mais →</span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
