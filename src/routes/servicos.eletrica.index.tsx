import { createFileRoute, Link } from "@tanstack/react-router";
import { eletricaSubservices, site, whatsappLink } from "@/lib/site";
import { CtaBanner } from "@/components/site/CtaBanner";
import { QuoteForm } from "@/components/site/QuoteForm";

const eletricaHero = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1280&auto=format&fit=crop";

const HUB_URL = "/servicos/eletrica";

const hubMetaTitle = "Empresa de Elétrica em Teresina | Chico Resolve";
const hubMetaDescription =
  "Empresa de elétrica em Teresina: eletricistas certificados NR-10 para serviço residencial, predial e industrial. Orçamento eletricista e emergência 24h.";

export const Route = createFileRoute("/servicos/eletrica/")({
  head: () => {
    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Empresa de Elétrica em Teresina",
      serviceType: "Instalação e manutenção elétrica residencial, predial e industrial",
      description: hubMetaDescription,
      provider: {
        "@type": "LocalBusiness",
        name: site.name,
        telephone: site.phoneE164,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
      },
      areaServed: { "@type": "City", name: "Teresina" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Especialidades em Elétrica",
        itemListElement: eletricaSubservices.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.h1,
            description: s.metaDescription,
            url: `/servicos/eletrica/${s.slug}`,
          },
        })),
      },
    };
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Serviços", item: "/servicos" },
        { "@type": "ListItem", position: 3, name: "Elétrica", item: HUB_URL },
      ],
    };
    return {
      meta: [
        { title: hubMetaTitle },
        { name: "description", content: hubMetaDescription },
        { property: "og:title", content: hubMetaTitle },
        { property: "og:description", content: hubMetaDescription },
        { property: "og:url", content: HUB_URL },
        { property: "og:type", content: "article" },
        { property: "og:image", content: "/og-default.jpg" },
      ],
      links: [{ rel: "canonical", href: HUB_URL }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) },
      ],
    };
  },
  component: EletricaHub,
});

function EletricaHub() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-border">
        <ol className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li>
          <li aria-hidden>/</li>
          <li className="text-foreground">Elétrica</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="pt-12 sm:pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">EL · Elétrica</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">
              Empresa de Elétrica em <span className="text-primary">Teresina</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[60ch] leading-relaxed">
              A Chico Resolve é uma empresa de elétrica completa em Teresina com eletricistas certificados em NR-10 e NR-10 SEP. Atendemos residências, condomínios, edifícios comerciais e indústrias com instalações novas, manutenção preventiva, ART e plantão de eletricista emergência 24h. Atuamos em toda a Grande Teresina com nota fiscal, contrato e relatório fotográfico em cada serviço.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink("Olá! Gostaria de orçamento eletricista.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary text-primary-foreground px-7 py-4 text-xs font-bold hover:bg-primary-dark transition-colors"
              >
                Orçamento no WhatsApp
              </a>
              <a
                href={`tel:${site.phoneE164}`}
                className="rounded-full border border-border px-7 py-4 text-xs font-bold hover:border-primary hover:text-primary transition-colors"
              >
                {site.phone}
              </a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-primary">
              <span aria-hidden>⚡</span> Eletricista emergência 24h
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={eletricaHero}
              alt="Empresa de elétrica em Teresina — eletricistas certificados NR-10 da Chico Resolve"
              width={1280}
              height={960}
              loading="eager"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-border"
            />
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-16 bg-surface" aria-labelledby="especialidades-eletrica">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Especialidades</p>
          <h2 id="especialidades-eletrica" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Tipos de serviço elétrico que executamos
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-10">
            Cada contexto exige equipe, equipamento e normas diferentes. Veja a especialidade certa para o seu projeto.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {eletricaSubservices.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/eletrica/$eletricaSlug"
                params={{ eletricaSlug: s.slug }}
                className="group rounded-2xl bg-card p-7 border border-border flex flex-col hover:border-primary transition-colors"
              >
                <span className="text-xs font-bold text-primary mb-4">{s.code}</span>
                <h3 className="text-xl font-extrabold mb-3 tracking-tight">{s.h1}</h3>
                <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{s.summary}</p>
                <span className="text-xs font-bold text-primary mt-6 inline-block group-hover:underline">Ver detalhes →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Eletricistas certificados — destaque */}
      <section className="py-16" aria-labelledby="eletricistas-certificados">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Destaque · Eletricistas Certificados</p>
            <h2 id="eletricistas-certificados" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              Eletricistas certificados NR-10 em Teresina
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Nossa equipe é formada por eletricistas certificados em NR-10 (Segurança em Instalações e Serviços em Eletricidade) com reciclagem em dia. Para serviços em média tensão, subestações e plantas industriais, contamos com profissionais com NR-10 SEP (Sistema Elétrico de Potência). Cada intervenção segue procedimento de Permissão de Trabalho, análise preliminar de risco e bloqueio e etiquetagem (LOTO).
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Como empresa de elétrica formalizada, emitimos ART CREA-CE para projetos e manutenções continuadas, entregamos laudo técnico, diagramas atualizados e mantemos PCMSO, PPRA e ASOs em dia para qualquer auditoria de cliente ou seguro patrimonial.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Para emergências, nossos clientes com contrato têm acesso a eletricista emergência 24h com SLA acordado — essencial para condomínios, hospitais, indústrias e comércios que não podem parar.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/servicos/eletrica/$eletricaSlug"
                params={{ eletricaSlug: "industrial" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Ver eletricista industrial
              </Link>
              <Link
                to="/servicos/eletrica/$eletricaSlug"
                params={{ eletricaSlug: "predial" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Eletricista predial
              </Link>
              <Link
                to="/servicos/eletrica/$eletricaSlug"
                params={{ eletricaSlug: "residencial" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Eletricista residencial
              </Link>
            </div>
          </div>
          <aside className="rounded-2xl bg-card p-7 border border-border h-fit">
            <h2 className="text-xl font-extrabold mb-2">Orçamento eletricista</h2>
            <p className="text-xs text-muted-foreground mb-5">Resposta em até 24h úteis</p>
            <QuoteForm defaultService="Elétrica" />
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
