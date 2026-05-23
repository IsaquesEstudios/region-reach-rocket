import { Link } from "@tanstack/react-router";
import { type PinturaSubservice, pinturaSubservices, whatsappLink } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";

interface Props {
  data: PinturaSubservice;
  image: string;
}

export function PinturaSubPage({ data, image }: Props) {
  const related = pinturaSubservices.filter((s) => data.related.includes(s.slug));

  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-border">
        <ol className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/servicos/pintura" className="hover:text-primary">Pintura</Link></li>
          <li aria-hidden>/</li>
          <li className="text-foreground">{data.shortTitle}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="pt-12 sm:pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">{data.code} · Pintura · {data.shortTitle}</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.95] text-balance">
              {data.h1} <span className="text-primary">/CE</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[60ch] leading-relaxed">{data.intro}</p>
          </div>
          <div className="lg:col-span-5">
            <img
              src={image}
              alt={`${data.h1} executada pela Chico Resolve em Fortaleza`}
              width={1280}
              height={960}
              loading="eager"
              className="w-full aspect-[4/3] object-cover border border-border"
            />
          </div>
        </div>
      </section>

      {/* Quando contratar */}
      <section className="py-16 bg-surface" aria-labelledby={`quando-${data.slug}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs text-primary uppercase mb-3">Quando contratar</p>
          <h2 id={`quando-${data.slug}`} className="text-3xl sm:text-4xl font-black uppercase italic tracking-tighter mb-10">
            Situações em que somos chamados
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {data.whenToHire.map((w, i) => (
              <div key={w.title} className="bg-surface p-7">
                <span className="font-mono text-xs text-primary mb-3 block">0{i + 1}/</span>
                <h3 className="text-base font-black uppercase mb-2 tracking-tight">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos / Especialidades */}
      <section className="py-16" aria-labelledby={`tipos-${data.slug}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs text-primary uppercase mb-3">Especialidades</p>
          <h2 id={`tipos-${data.slug}`} className="text-3xl sm:text-4xl font-black uppercase italic tracking-tighter mb-10">
            O que executamos
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.types.map((t, i) => (
              <div key={t.title} className="bg-card border border-border p-7">
                <span className="font-mono text-xs text-primary mb-3 block">{String(i + 1).padStart(2, "0")}/</span>
                <h3 className="text-lg font-black uppercase mb-3">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo + Formulário */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="font-mono text-xs text-primary uppercase mb-3">Processo Chico Resolve</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tighter mb-10">
              Como executamos
            </h2>
            <ol className="space-y-6">
              {data.process.map((p, i) => (
                <li key={p.title} className="flex gap-6 border-b border-border pb-6 last:border-b-0">
                  <span className="font-mono font-bold text-primary text-lg shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                  <div>
                    <h3 className="font-bold uppercase mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Normas */}
            <div className="mt-16">
              <p className="font-mono text-xs text-primary uppercase mb-3">Normas técnicas</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter mb-6">
                Normas e segurança que aplicamos
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {data.standards.map((s) => (
                  <li key={s} className="bg-card border border-border px-4 py-3 text-sm font-mono text-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust */}
            <div className="mt-16">
              <p className="font-mono text-xs text-primary uppercase mb-3">Por que confiar</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter mb-6">
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

            {/* GEO */}
            <div className="mt-16">
              <p className="font-mono text-xs text-primary uppercase mb-3">Onde atendemos</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter mb-4">
                Áreas atendidas em Fortaleza e região
              </h2>
              {/* TODO: confirmar bairros atendidos */}
              <p className="text-base text-muted-foreground leading-relaxed">{data.geo}</p>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <p className="font-mono text-xs text-primary uppercase mb-3">Perguntas frequentes</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter mb-6">
                Dúvidas comuns sobre {data.shortTitle.toLowerCase()}
              </h2>
              <div className="space-y-2">
                {data.faq.map((f) => (
                  <details key={f.q} className="group border border-border bg-card">
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
            <div className="bg-card p-7 border border-border">
              <h2 className="text-xl font-black uppercase mb-2">Orçamento rápido</h2>
              <p className="text-xs text-muted-foreground mb-5">Resposta em até 24h úteis</p>
              <QuoteForm defaultService={data.h1} />
            </div>
            <a
              href={whatsappLink(`Olá! Gostaria de orçamento para ${data.h1.toLowerCase()}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-primary text-primary-foreground text-center px-6 py-4 text-xs font-bold uppercase tracking-wider hover:bg-foreground transition-colors"
            >
              Falar agora no WhatsApp
            </a>
            <Link
              to="/contato"
              className="block mt-2 border border-border text-center px-6 py-4 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              Página de Contato
            </Link>
          </aside>
        </div>
      </section>

      {/* Outras especialidades de pintura */}
      <section className="py-16 border-t border-border" aria-label="Outras especialidades em pintura">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs text-primary uppercase mb-3">Veja também</p>
          <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-10">Outras especialidades em pintura</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/pintura/$pinturaSlug"
                params={{ pinturaSlug: s.slug }}
                className="group bg-card p-6 border border-border hover:border-primary transition-colors"
              >
                <span className="font-mono text-xs text-primary">{s.code}</span>
                <h3 className="text-lg font-black uppercase mt-2 mb-2">{s.shortTitle}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{s.summary}</p>
                <span className="text-[11px] font-mono text-primary uppercase mt-4 inline-block group-hover:underline">Saiba mais →</span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/servicos/pintura" className="font-mono text-xs text-primary uppercase tracking-widest hover:underline">
              ← Voltar ao hub de pintura
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
