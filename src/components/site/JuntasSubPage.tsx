import { Link } from "@tanstack/react-router";
import { type JuntaSubservice, juntaSubservices, whatsappLink } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";

interface Props {
  data: JuntaSubservice;
  image: string;
}

export function JuntasSubPage({ data, image }: Props) {
  const related = juntaSubservices.filter((s) => data.related.includes(s.slug));

  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-border">
        <ol className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/servicos/juntas-dilatacao" className="hover:text-primary">Juntas de Dilatação</Link></li>
          <li aria-hidden>/</li>
          <li className="text-foreground">{data.shortTitle}</li>
        </ol>
      </nav>

      <section className="pt-12 sm:pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">{data.code} · Juntas · {data.shortTitle}</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">
              {data.h1.replace(" em Teresina", "")} em <span className="text-primary">Teresina</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[60ch] leading-relaxed">{data.intro}</p>
          </div>
          <div className="lg:col-span-5">
            <img
              src={image}
              alt={`${data.h1} — Chico Resolve, empresa especializada em juntas de dilatação em Teresina`}
              width={1280}
              height={960}
              loading="eager"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-border"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface" aria-labelledby={`quando-${data.slug}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Quando contratar</p>
          <h2 id={`quando-${data.slug}`} className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">
            Situações em que somos chamados
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {data.whenToHire.map((w, i) => (
              <div key={w.title} className="bg-surface p-7">
                <span className="text-xs font-bold text-primary mb-3 block">0{i + 1}/</span>
                <h3 className="text-base font-extrabold mb-2 tracking-tight">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby={`tipos-${data.slug}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Especialidades</p>
          <h2 id={`tipos-${data.slug}`} className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">
            O que executamos
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.types.map((t, i) => (
              <div key={t.title} className="rounded-2xl bg-card border border-border p-7">
                <span className="text-xs font-bold text-primary mb-3 block">{String(i + 1).padStart(2, "0")}/</span>
                <h3 className="text-lg font-extrabold mb-3">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Processo Chico Resolve</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">
              Como executamos
            </h2>
            <ol className="space-y-6">
              {data.process.map((p, i) => (
                <li key={p.title} className="flex gap-6 border-b border-border pb-6 last:border-b-0">
                  <span className="font-extrabold text-primary text-2xl shrink-0 leading-none">{String(i + 1).padStart(2, "0")}.</span>
                  <div>
                    <h3 className="font-bold uppercase mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-16">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Normas técnicas</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
                Normas e segurança que aplicamos
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {data.standards.map((s) => (
                  <li key={s} className="rounded-xl bg-card border border-border px-4 py-3 text-sm text-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Por que confiar</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
                Diferenciais Chico Resolve
              </h2>
              <ul className="space-y-3">
                {data.trust.map((t) => (
                  <li key={t} className="flex gap-3 items-start">
                    <span className="font-mono text-primary mt-1" aria-hidden>✓</span>
                    <span className="text-sm text-foreground leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Onde atendemos</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                Áreas atendidas em Teresina e região
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">{data.geo}</p>
            </div>

            <div className="mt-16">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Perguntas frequentes</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
                Dúvidas comuns sobre {data.shortTitle.toLowerCase()}
              </h2>
              <div className="space-y-2">
                {data.faq.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-border bg-card overflow-hidden">
                    <summary className="cursor-pointer list-none px-5 py-4 font-bold text-sm flex items-center justify-between uppercase tracking-tight">
                      {f.q}
                      <span className="text-primary group-open:rotate-180 transition-transform" aria-hidden>↓</span>
                    </summary>
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="rounded-2xl bg-card p-7 border border-border">
              <h2 className="text-xl font-extrabold mb-2">Orçamento de juntas</h2>
              <p className="text-xs text-muted-foreground mb-5">Resposta em até 24h úteis</p>
              <QuoteForm defaultService={data.h1} />
            </div>
            <a
              href={whatsappLink(`Olá! Preciso de ${data.h1.toLowerCase()}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-primary text-primary-foreground text-center px-6 py-4 text-xs font-bold uppercase tracking-wider hover:bg-foreground transition-colors"
            >
              Falar no WhatsApp
            </a>
            <Link
              to="/contato"
              className="block mt-2 rounded-full border border-border text-center px-6 py-4 text-xs font-bold hover:border-primary hover:text-primary transition-colors"
            >
              Página de Contato
            </Link>
          </aside>
        </div>
      </section>

      <section className="py-16 border-t border-border" aria-label="Outras especialidades em juntas de dilatação">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Veja também</p>
          <h2 className="text-3xl font-extrabold tracking-tight mb-10">Outras especialidades em juntas de dilatação</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/juntas-dilatacao/$juntaSlug"
                params={{ juntaSlug: s.slug }}
                className="group rounded-2xl bg-card p-6 border border-border hover:border-primary transition-colors"
              >
                <span className="text-xs font-bold text-primary">{s.code}</span>
                <h3 className="text-lg font-extrabold mt-2 mb-2">{s.shortTitle}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{s.summary}</p>
                <span className="text-xs font-bold text-primary mt-4 inline-block group-hover:underline">Saiba mais →</span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/servicos/juntas-dilatacao" className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest hover:underline">
              ← Voltar ao hub de juntas de dilatação
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
