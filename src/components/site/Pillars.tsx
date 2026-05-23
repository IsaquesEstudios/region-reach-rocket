const pillars = [
  { n: "01", title: "Rigor Técnico", text: "Engenharia de precisão em cada etapa do processo de manutenção." },
  { n: "02", title: "100% Prazos", text: "Cronogramas rígidos e entrega garantida para operações ininterruptas." },
  { n: "03", title: "Segurança NR10/NR35", text: "Certificação total para trabalhos em altura e riscos elétricos." },
  { n: "04", title: "Tecnologia em Gestão", text: "Relatórios digitais e acompanhamento em tempo real dos serviços." },
];

export function Pillars() {
  return (
    <section className="py-20 sm:py-24 bg-card" aria-labelledby="pillars-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 id="pillars-title" className="sr-only">Por que escolher Chico Resolve</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
          {pillars.map((p) => (
            <div key={p.n} className="p-8 sm:p-10 border-b last:border-b-0 sm:border-b-0 sm:[&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:last:border-r-0 border-border hover:bg-surface transition-colors">
              <span className="font-mono text-xs text-primary mb-4 block">{p.n}/</span>
              <h3 className="text-base font-black uppercase mb-3 tracking-tight">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
