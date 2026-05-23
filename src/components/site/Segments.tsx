const segments = [
  { n: "01", title: "Construtoras", text: "Finalização e acabamento de obras com rigor técnico." },
  { n: "02", title: "Arquitetos & Engenheiros", text: "Execução técnica de projetos complexos com parceria." },
  { n: "03", title: "Indústrias & Empresas", text: "Manutenção sem interromper a produção." },
  { n: "04", title: "Condomínios", text: "Infraestrutura segura e relatórios claros para o síndico." },
];

export function Segments() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="seg-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs text-primary uppercase mb-3">04/ Segmentos atendidos</p>
          <h2 id="seg-title" className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter">
            Quem confia na <span className="text-primary">engenharia</span> Chico Resolve
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {segments.map((s) => (
            <article key={s.n} className="aspect-square bg-surface border border-border p-6 flex flex-col justify-between group hover:border-primary transition-colors">
              <span className="font-mono text-xs text-accent">{s.n}/</span>
              <div>
                <h3 className="text-xl font-black uppercase mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
