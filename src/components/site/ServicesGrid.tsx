import { Link } from "@tanstack/react-router";
import { services } from "@/lib/site";
import { ArrowRight } from "lucide-react";
const imageBySlug: Record<string, string> = {
  pintura: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
  eletrica: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
  hidraulica: "https://images.unsplash.com/photo-1585704032915-c3400ca1f963?q=80&w=800&auto=format&fit=crop",
  drywall: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop",
  "juntas-dilatacao": "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop",
  seguranca: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
  reformas: "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=800&auto=format&fit=crop",
  manutencao: "https://images.unsplash.com/photo-1581578731522-745d05db9ad0?q=80&w=800&auto=format&fit=crop",
};

function ServiceCard({ s }: { s: typeof services[number] }) {
  const inner = (
    <>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageBySlug[s.slug]}
          alt={`${s.title} — Chico Resolve`}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 tracking-tight">{s.title}</h3>
        <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">{s.summary}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
          Saiba mais <ArrowRight className="size-4" aria-hidden />
        </span>
      </div>
    </>
  );

  const className = "group rounded-2xl bg-card border border-border overflow-hidden flex flex-col hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all";

  if (s.slug === "pintura") return <Link to="/servicos/pintura" className={className}>{inner}</Link>;
  if (s.slug === "eletrica") return <Link to="/servicos/eletrica" className={className}>{inner}</Link>;
  if (s.slug === "hidraulica") return <Link to="/servicos/hidraulica" className={className}>{inner}</Link>;
  if (s.slug === "drywall") return <Link to="/servicos/drywall" className={className}>{inner}</Link>;
  return <Link to="/servicos/$slug" params={{ slug: s.slug }} className={className}>{inner}</Link>;
}

export function ServicesGrid() {
  return (
    <section className="py-20 sm:py-28 bg-surface" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest mb-4">
              Nossos serviços
            </span>
            <h2 id="services-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
              Tudo o que seu imóvel precisa, com uma equipe só.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Soluções completas para manutenção de ativos prediais — uma única empresa, vários ofícios, um padrão.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
        </div>
      </div>
    </section>
  );
}
