import { Link } from "@tanstack/react-router";
import { obraEstruturalSubservices, type ObraEstruturalSubservice, whatsappLink } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";

interface Props {
  data: ObraEstruturalSubservice;
  image: string;
  gallery: { src: string; alt: string }[];
}

export function ObraEstruturalSubPage({ data, image, gallery }: Props) {
  const related = obraEstruturalSubservices.filter((service) => data.related.includes(service.slug));

  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-border">
        <ol className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/servicos/obra-estrutural" className="hover:text-primary">Obra Estrutural</Link></li>
          <li aria-hidden>/</li>
          <li className="text-foreground">{data.shortTitle}</li>
        </ol>
      </nav>

      <section className="pt-12 sm:pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">{data.code} · Obra Estrutural</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">
              {data.h1.replace(" em Teresina", "")} em <span className="text-primary">Teresina</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[60ch] leading-relaxed">{data.intro}</p>
          </div>
          <div className="lg:col-span-5">
            <img src={image} alt={`${data.h1} executada pela Chico Resolve`} width={1280} height={960} loading="eager" className="w-full aspect-[4/3] object-cover rounded-2xl border border-border" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface" aria-labelledby={`quando-${data.slug}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Quando contratar</p>
          <h2 id={`quando-${data.slug}`} className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">Situações em que somos chamados</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {data.whenToHire.map((item, index) => (
              <div key={item.title} className="bg-surface p-7">
                <span className="text-xs font-bold text-primary mb-3 block">0{index + 1}/</span>
                <h3 className="text-base font-extrabold mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby={`tipos-${data.slug}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Especialidades</p>
          <h2 id={`tipos-${data.slug}`} className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">O que executamos</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.types.map((item, index) => (
              <div key={item.title} className="rounded-2xl bg-card border border-border p-7">
                <span className="text-xs font-bold text-primary mb-3 block">{String(index + 1).padStart(2, "0")}/</span>
                <h3 className="text-lg font-extrabold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="obra-real-cisternas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Obra real · Chico Resolve</p>
          <h2 id="obra-real-cisternas" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Etapas reais da construção</h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-10">Registros da execução em campo, da preparação da base e armação até o fechamento e acabamento interno da cisterna.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((photo, index) => (
              <figure key={photo.src} className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
                <img src={photo.src} alt={photo.alt} width={1920} height={1080} loading="lazy" className="w-full h-full min-h-72 aspect-[4/3] object-cover rounded-2xl border border-border" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Processo Chico Resolve</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">Como executamos</h2>
            <ol className="space-y-6">
              {data.process.map((item, index) => (
                <li key={item.title} className="flex gap-6 border-b border-border pb-6 last:border-b-0">
                  <span className="font-extrabold text-primary text-2xl shrink-0 leading-none">{String(index + 1).padStart(2, "0")}.</span>
                  <div><h3 className="font-bold uppercase mb-1">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p></div>
                </li>
              ))}
            </ol>

            <div className="mt-16">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Normas técnicas</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">Normas e segurança que aplicamos</h2>
              <ul className="grid sm:grid-cols-2 gap-2">{data.standards.map((standard) => <li key={standard} className="rounded-xl bg-card border border-border px-4 py-3 text-sm text-foreground">{standard}</li>)}</ul>
            </div>

            <div className="mt-16">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Por que confiar</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">Diferenciais Chico Resolve</h2>
              <ul className="space-y-3">{data.trust.map((item) => <li key={item} className="flex gap-3 items-start"><span className="font-mono text-primary mt-1" aria-hidden>✓</span><span className="text-sm text-foreground leading-relaxed">{item}</span></li>)}</ul>
            </div>

            <div className="mt-16">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Onde atendemos</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">Áreas atendidas em Teresina e região</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{data.geo}</p>
            </div>

            <div className="mt-16">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Perguntas frequentes</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">Dúvidas comuns sobre construção de cisternas</h2>
              <div className="space-y-2">{data.faq.map((item) => <details key={item.q} className="group rounded-xl border border-border bg-card overflow-hidden"><summary className="cursor-pointer list-none px-5 py-4 font-bold text-sm flex items-center justify-between uppercase tracking-tight">{item.q}<span className="text-primary group-open:rotate-180 transition-transform" aria-hidden>↓</span></summary><p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p></details>)}</div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="rounded-2xl bg-card p-7 border border-border">
              <h2 className="text-xl font-extrabold mb-2">Orçamento de cisterna</h2>
              <p className="text-xs text-muted-foreground mb-5">Resposta em até 24h úteis</p>
              <QuoteForm defaultService={data.h1} />
            </div>
            <a href={whatsappLink(`Olá! Gostaria de orçamento para ${data.h1.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" className="block mt-4 bg-primary text-primary-foreground text-center px-6 py-4 text-xs font-bold uppercase tracking-wider hover:bg-foreground transition-colors">Falar agora no WhatsApp</a>
            <Link to="/contato" className="block mt-2 rounded-full border border-border text-center px-6 py-4 text-xs font-bold hover:border-primary hover:text-primary transition-colors">Página de Contato</Link>
          </aside>
        </div>
      </section>

      <section className="py-16 border-t border-border" aria-label="Outras especialidades em obra estrutural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {related.length > 0 && <div className="grid sm:grid-cols-3 gap-4">{related.map((service) => <Link key={service.slug} to="/servicos/obra-estrutural/$obraEstruturalSlug" params={{ obraEstruturalSlug: service.slug }} className="group rounded-2xl bg-card p-6 border border-border hover:border-primary transition-colors"><span className="text-xs font-bold text-primary">{service.code}</span><h3 className="text-lg font-extrabold mt-2 mb-2">{service.shortTitle}</h3><p className="text-sm text-muted-foreground">{service.summary}</p></Link>)}</div>}
          <Link to="/servicos/obra-estrutural" className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest hover:underline">← Voltar para Obra Estrutural</Link>
        </div>
      </section>
    </>
  );
}