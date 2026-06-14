import { createFileRoute, Link } from "@tanstack/react-router";
import { obraEstruturalSubservices, site, whatsappLink } from "@/lib/site";
import { CtaBanner } from "@/components/site/CtaBanner";
import { QuoteForm } from "@/components/site/QuoteForm";
import obraEstruturalHero from "@/assets/obra-estrutural-hero.webp";

const HUB_URL = "/servicos/obra-estrutural";
const hubMetaTitle = "Obra Estrutural em Teresina | Chico Resolve";
const hubMetaDescription = "Obras estruturais e construção de cisternas em Teresina, com concreto armado, tanques de retenção pluvial e execução técnica.";

export const Route = createFileRoute("/servicos/obra-estrutural/")({
  head: () => ({
    meta: [
      { title: hubMetaTitle },
      { name: "description", content: hubMetaDescription },
      { property: "og:title", content: hubMetaTitle },
      { property: "og:description", content: hubMetaDescription },
      { property: "og:url", content: HUB_URL },
      { property: "og:type", content: "article" },
      { property: "og:image", content: obraEstruturalHero },
    ],
    links: [{ rel: "canonical", href: HUB_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Obras Estruturais em Teresina", serviceType: "Obras estruturais, cisternas e retenção pluvial", description: hubMetaDescription, provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phoneE164 }, areaServed: { "@type": "City", name: "Teresina" }, hasOfferCatalog: { "@type": "OfferCatalog", name: "Especialidades em Obra Estrutural", itemListElement: obraEstruturalSubservices.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.h1, description: service.metaDescription, url: `${HUB_URL}/${service.slug}` } })) } }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }, { "@type": "ListItem", position: 2, name: "Serviços", item: "/servicos" }, { "@type": "ListItem", position: 3, name: "Obra Estrutural", item: HUB_URL }] }) },
    ],
  }),
  component: ObraEstruturalHub,
});

function ObraEstruturalHub() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-border"><ol className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-2 text-xs font-medium text-muted-foreground"><li><Link to="/" className="hover:text-primary">Home</Link></li><li aria-hidden>/</li><li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li><li aria-hidden>/</li><li className="text-foreground">Obra Estrutural</li></ol></nav>

      <section className="pt-12 sm:pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">OE · Obra Estrutural</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">Obras Estruturais em <span className="text-primary">Teresina</span></h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[60ch] leading-relaxed">Executamos estruturas de concreto armado e soluções de retenção pluvial com planejamento, controle de qualidade e segurança. O primeiro subserviço desta seção é a construção de cisternas e tanques de retenção para residências, condomínios, comércios e empreendimentos.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href={whatsappLink("Olá! Gostaria de orçamento para obra estrutural.")} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary text-primary-foreground px-7 py-4 text-xs font-bold hover:bg-primary-dark transition-colors">Orçamento no WhatsApp</a><a href={`tel:${site.phoneE164}`} className="rounded-full border border-border px-7 py-4 text-xs font-bold hover:border-primary hover:text-primary transition-colors">{site.phone}</a></div>
          </div>
          <div className="lg:col-span-5"><img src={obraEstruturalHero} alt="Execução de obra estrutural em concreto armado pela Chico Resolve" width={1280} height={960} loading="eager" className="w-full aspect-[4/3] object-cover rounded-2xl border border-border" /></div>
        </div>
      </section>

      <section className="py-16 bg-surface" aria-labelledby="especialidades-obra-estrutural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Especialidades</p>
          <h2 id="especialidades-obra-estrutural" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Soluções estruturais que executamos</h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-10">Conheça os serviços estruturais disponíveis e veja os detalhes técnicos de cada solução.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{obraEstruturalSubservices.map((service) => <Link key={service.slug} to="/servicos/obra-estrutural/$obraEstruturalSlug" params={{ obraEstruturalSlug: service.slug }} className="group rounded-2xl bg-card p-7 border border-border flex flex-col hover:border-primary transition-colors"><span className="text-xs font-bold text-primary mb-4">{service.code}</span><h3 className="text-xl font-extrabold mb-3 tracking-tight">{service.h1}</h3><p className="text-sm text-muted-foreground flex-grow leading-relaxed">{service.summary}</p><span className="text-xs font-bold text-primary mt-6 inline-block group-hover:underline">Ver detalhes →</span></Link>)}</div>
        </div>
      </section>

      <section className="py-16"><div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12"><div className="lg:col-span-2"><p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Destaque · Retenção Pluvial</p><h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">Cisternas e tanques de retenção pluvial</h2><p className="text-base text-muted-foreground leading-relaxed mb-4">Projetamos a execução para que estrutura, impermeabilização e hidráulica trabalhem como um único sistema. A cisterna pode armazenar água de chuva para uso não potável, enquanto o tanque de retenção ajuda a controlar o descarte durante chuvas intensas.</p><p className="text-base text-muted-foreground leading-relaxed">A obra inclui preparação do terreno, concreto armado, tratamento de juntas, impermeabilização, tubulações e teste de estanqueidade antes da entrega.</p></div><aside className="rounded-2xl bg-card p-7 border border-border h-fit"><h2 className="text-xl font-extrabold mb-2">Orçamento estrutural</h2><p className="text-xs text-muted-foreground mb-5">Resposta em até 24h úteis</p><QuoteForm defaultService="Obras Estruturais" /></aside></div></section>
      <CtaBanner />
    </>
  );
}