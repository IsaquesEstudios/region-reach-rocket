import { Link } from "@tanstack/react-router";
import { services, serviceContent, whatsappLink, type ServiceSlug } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";

interface Props {
  slug: ServiceSlug;
  image: string;
}

export function ServicePage({ slug, image }: Props) {
  const meta = services.find((s) => s.slug === slug)!;
  const content = serviceContent[slug];
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-border">
        <ol className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li>
          <li aria-hidden>/</li>
          <li className="text-foreground">{meta.shortTitle}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="pt-12 sm:pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">{meta.code} · {meta.shortTitle}</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">
              {content.hero}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[55ch] leading-relaxed">{content.intro}</p>
          </div>
          <div className="lg:col-span-5">
            <img
              src={image}
              alt={`Serviço de ${meta.shortTitle.toLowerCase()} executado pela Chico Resolve em Fortaleza`}
              width={1200}
              height={800}
              loading="eager"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-border"
            />
          </div>
        </div>
      </section>

      {/* Bullets / Tipos */}
      <section className="py-16 bg-surface" aria-labelledby={`tipos-${slug}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 id={`tipos-${slug}`} className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">
            O que oferecemos
          </h2>
          <div className="grid sm:grid-cols-3 gap-px bg-border border border-border">
            {content.bullets.map((b, i) => (
              <div key={b.title} className="bg-surface p-8">
                <span className="text-xs font-bold text-primary mb-3 block">0{i + 1}/</span>
                <h3 className="text-lg font-extrabold mb-3">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo + Formulário */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">
              Processo <span className="text-primary">Chico Resolve</span>
            </h2>
            <ol className="space-y-6">
              {content.process.map((p, i) => (
                <li key={p.title} className="flex gap-6 border-b border-border pb-6 last:border-b-0">
                  <span className="font-extrabold text-primary text-2xl shrink-0 leading-none">{String(i + 1).padStart(2, "0")}.</span>
                  <div>
                    <h3 className="font-bold uppercase mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="text-3xl font-extrabold tracking-tight mt-16 mb-6">Perguntas frequentes</h2>
            <div className="space-y-2">
              {content.faq.map((f) => (
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

          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="rounded-2xl bg-surface p-7 border border-border">
              <h2 className="text-xl font-extrabold mb-2">Orçamento rápido</h2>
              <p className="text-xs text-muted-foreground mb-5">Resposta em até 24h úteis</p>
              <QuoteForm defaultService={meta.title} />
            </div>
            <a
              href={whatsappLink(`Olá! Tenho interesse em ${meta.title.toLowerCase()}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-primary text-primary-foreground text-center px-6 py-4 text-xs font-bold uppercase tracking-wider hover:bg-foreground transition-colors"
            >
              Falar agora no WhatsApp
            </a>
          </aside>
        </div>
      </section>

      {/* Outros serviços */}
      <section className="py-16 bg-surface border-t border-border" aria-label="Outros serviços">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Veja também</p>
          <h2 className="text-3xl font-extrabold tracking-tight mb-10">Outros serviços</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="group rounded-2xl bg-card p-6 border border-border hover:border-primary transition-colors"
              >
                <span className="text-xs font-bold text-primary">{s.code}</span>
                <h3 className="text-lg font-extrabold mt-2 mb-2">{s.shortTitle}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{s.summary}</p>
                <span className="text-xs font-bold text-primary mt-4 inline-block group-hover:underline">Saiba mais →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
