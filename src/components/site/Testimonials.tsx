import { Star } from "lucide-react";

// TODO: substituir com depoimentos reais (nome, empresa, foto)
const items = [
  {
    name: "Eng. Responsável",
    role: "Construtora Parceira · Fortaleza",
    text: "A Chico Resolve tornou-se nossa parceira estratégica pela precisão técnica e, principalmente, pelo cumprimento rigoroso dos cronogramas, algo raro no setor.",
  },
  {
    name: "Síndico",
    role: "Condomínio Edifício Aldeota",
    text: "Resolveram infiltrações antigas que outras empresas não conseguiram identificar. Relatório fotográfico mensal facilita a prestação de contas para os moradores.",
  },
  {
    name: "Gerente de Facilities",
    role: "Indústria · Região Metropolitana",
    text: "Manutenção que respeita nossa produção. Janelas programadas, conformidade NR10 e zero retrabalho desde que assumiram o contrato.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-card" aria-labelledby="depo-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs text-primary uppercase mb-3">05/ Depoimentos</p>
          <h2 id="depo-title" className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter">
            Quem contrata, <span className="text-primary">renova</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {items.map((t) => (
            <figure key={t.name} className="bg-card p-8 flex flex-col">
              <div className="flex gap-1 mb-5" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" aria-hidden />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground/90 mb-6 flex-1">
                "{t.text}"
              </blockquote>
              <figcaption>
                <div className="font-bold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
