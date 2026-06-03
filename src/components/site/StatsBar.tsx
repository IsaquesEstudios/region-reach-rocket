import { site } from "@/lib/site";
import { Trophy, Building2, Smile, ShieldCheck } from "lucide-react";

const icons = [Trophy, Building2, Smile, ShieldCheck];

export function StatsBar() {
  return (
    <section className="-mt-24 sm:-mt-28 relative z-10 px-4 sm:px-6" aria-label="Estatísticas">
      <div className="max-w-7xl mx-auto bg-card rounded-2xl shadow-xl shadow-black/5 border border-border grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
        {site.stats.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={s.label} className="flex items-center gap-4 px-6 py-8">
              <span className="inline-flex size-12 shrink-0 rounded-full bg-primary/10 text-primary items-center justify-center">
                <Icon className="size-6" aria-hidden />
              </span>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-none">{s.value}</div>
                <p className="text-xs text-muted-foreground mt-1.5">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
