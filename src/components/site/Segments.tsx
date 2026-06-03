import { Building, DraftingCompass, Factory, Home } from "lucide-react";

const segments = [
  { icon: Building, title: "Construtoras", text: "Finalização e acabamento de obras com rigor técnico." },
  { icon: DraftingCompass, title: "Arquitetos & Engenheiros", text: "Execução técnica de projetos complexos com parceria." },
  { icon: Factory, title: "Indústrias & Empresas", text: "Manutenção sem interromper a produção." },
  { icon: Home, title: "Condomínios", text: "Infraestrutura segura e relatórios claros para o síndico." },
];

export function Segments() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="seg-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest mb-4">
            Quem atendemos
          </span>
          <h2 id="seg-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
            Quem confia na engenharia Chico Resolve.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {segments.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl bg-card border border-border p-7 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all"
            >
              <span className="inline-flex size-12 rounded-xl bg-accent/15 text-primary items-center justify-center mb-5">
                <s.icon className="size-6" aria-hidden />
              </span>
              <h3 className="text-lg font-bold mb-2 tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
