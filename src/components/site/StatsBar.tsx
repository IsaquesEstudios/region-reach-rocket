import { site } from "@/lib/site";

export function StatsBar() {
  return (
    <section className="py-16 bg-primary text-primary-foreground" aria-label="Estatísticas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* TODO: substituir com estatísticas reais antes de publicar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {site.stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl sm:text-5xl font-black mb-2 tracking-tighter">{s.value}</div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-primary-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
