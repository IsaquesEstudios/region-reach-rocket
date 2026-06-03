import { Award, Clock, ShieldCheck, LineChart } from "lucide-react";

const pillars = [
  { icon: Award, title: "Rigor Técnico", text: "Engenharia de precisão em cada etapa do processo de manutenção." },
  { icon: Clock, title: "100% Prazos", text: "Cronogramas rígidos e entrega garantida para operações ininterruptas." },
  { icon: ShieldCheck, title: "Segurança NR10/NR35", text: "Certificação total para trabalhos em altura e riscos elétricos." },
  { icon: LineChart, title: "Tecnologia em Gestão", text: "Relatórios digitais e acompanhamento em tempo real dos serviços." },
];

export function Pillars() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="pillars-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest mb-4">
            Por que a Chico Resolve
          </span>
          <h2 id="pillars-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
            Quatro pilares que sustentam cada projeto.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-card border border-border p-7 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all"
            >
              <span className="inline-flex size-12 rounded-xl bg-primary/10 text-primary items-center justify-center mb-5">
                <p.icon className="size-6" aria-hidden />
              </span>
              <h3 className="text-lg font-bold mb-2 tracking-tight">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
