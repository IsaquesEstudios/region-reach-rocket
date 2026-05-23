import { Link } from "@tanstack/react-router";
import { services } from "@/lib/site";

export function ServicesGrid() {
  return (
    <section className="py-20 sm:py-24 bg-surface" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-xs text-primary uppercase mb-3">03/ Serviços</p>
            <h2 id="services-title" className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter">
              Serviços <span className="text-primary">especializados</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Soluções completas para manutenção de ativos prediais — uma única empresa, vários ofícios, um padrão.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/servicos/$slug"
              params={{ slug: s.slug }}
              className="group bg-card p-7 border border-border flex flex-col h-full hover:border-primary transition-all"
            >
              <div className="w-11 h-11 bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <span className="font-mono text-sm font-bold">{s.code}</span>
              </div>
              <h3 className="text-lg font-black uppercase mb-3 tracking-tight">{s.shortTitle}</h3>
              <p className="text-sm text-muted-foreground mb-8 flex-grow leading-relaxed">{s.summary}</p>
              <span className="text-[11px] font-mono font-bold text-primary group-hover:underline uppercase tracking-wider">
                Saiba mais →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
