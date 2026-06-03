import { Star, Quote } from "lucide-react";

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
    <section className="py-20 sm:py-28 bg-surface" aria-labelledby="depo-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest mb-4">
            Depoimentos
          </span>
          <h2 id="depo-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
            Quem contrata, renova.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure key={t.name} className="relative rounded-2xl bg-card border border-border p-8 flex flex-col">
              <Quote className="absolute top-6 right-6 size-10 text-primary/10" aria-hidden />
              <div className="flex gap-1 mb-5" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" aria-hidden />
                ))}
              </div>
              <blockquote className="text-[15px] leading-relaxed text-foreground/90 mb-6 flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-5 border-t border-border">
                <span className="inline-flex size-10 rounded-full bg-primary/10 text-primary items-center justify-center font-bold text-sm">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
