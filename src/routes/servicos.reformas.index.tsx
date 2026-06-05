import { createFileRoute, Link } from "@tanstack/react-router";
import { reformaSubservices, site, whatsappLink } from "@/lib/site";
import { CtaBanner } from "@/components/site/CtaBanner";
import { QuoteForm } from "@/components/site/QuoteForm";
import reformaHero from "@/assets/reforma-hub.jpg";

const HUB_URL = "/servicos/reformas";

const hubMetaTitle = "Empresa de Reforma em Fortaleza | Chico Resolve";
const hubMetaDescription =
  "Empresa de reforma em Fortaleza: reforma de apartamento, casa, comercial, banheiro, cozinha, telhado, fachada, piscina, pisos, quadras e quartos com contrato.";

export const Route = createFileRoute("/servicos/reformas/")({
  head: () => {
    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Empresa de Reforma em Fortaleza",
      serviceType: "Reformas residenciais e comerciais",
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
      areaServed: { "@type": "City", name: "Fortaleza" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Especialidades em Reformas",
        itemListElement: reformaSubservices.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.h1,
            description: s.metaDescription,
            url: `/servicos/reformas/${s.slug}`,
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
        { "@type": "ListItem", position: 3, name: "Reformas", item: HUB_URL },
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
  component: ReformasHub,
});

function ReformasHub() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-border">
        <ol className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li>
          <li aria-hidden>/</li>
          <li className="text-foreground">Reformas</li>
        </ol>
      </nav>

      <section className="pt-12 sm:pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">RF · Reformas</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">
              Empresa de Reforma em <span className="text-primary">Fortaleza</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[60ch] leading-relaxed">
              A Chico Resolve é uma empresa de reforma residencial e comercial em Fortaleza com equipe própria CLT, engenheiro responsável, contrato formal e cronograma físico-financeiro. Reformamos apartamento, casa, banheiro, cozinha, telhado, fachada, piscina, pisos, quadras esportivas e quartos — em uma única empreiteira com nota fiscal e garantia formal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink("Olá! Gostaria de orçamento de reforma.")}
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
          </div>
          <div className="lg:col-span-5">
            <img
              src={reformaHero}
              alt="Empresa de reforma em Fortaleza — Chico Resolve, reformas residenciais e comerciais com contrato"
              width={1280}
              height={960}
              loading="eager"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-border"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface" aria-labelledby="especialidades-reformas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Especialidades</p>
          <h2 id="especialidades-reformas" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Tipos de reforma que executamos
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-10">
            Cada reforma exige normas, materiais e equipe diferentes. Escolha a especialidade certa para o seu projeto.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reformaSubservices.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/reformas/$reformaSlug"
                params={{ reformaSlug: s.slug }}
                className="group rounded-2xl bg-card p-7 border border-border flex flex-col hover:border-primary transition-colors"
              >
                <span className="text-xs font-bold text-primary mb-4">{s.code}</span>
                <h3 className="text-xl font-extrabold mb-3 tracking-tight">{s.h1.replace(" em Fortaleza", "")}</h3>
                <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{s.summary}</p>
                <span className="text-xs font-bold text-primary mt-6 inline-block group-hover:underline">Ver detalhes →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="empresa-reformas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Destaque · Empresa de Reforma</p>
            <h2 id="empresa-reformas" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              Empreiteira com contrato, engenheiro responsável e garantia formal
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Reformar com a Chico Resolve significa um único responsável técnico do briefing até a entrega — sem terceirizar pedreiro, eletricista, encanador, pintor e marceneiro para o cliente coordenar. Cada reforma sai com contrato formal (objeto, escopo, prazo, garantia, multa por atraso), ART de execução quando exigida, ASOs da equipe, plano de gerenciamento de resíduos conforme CONAMA 307 e relatório fotográfico semanal entregue por WhatsApp.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Atendemos reformas e construções de qualquer porte — de reforma de cozinha pequena de 6 m² até retrofit comercial de loja em shopping com inauguração marcada. Para condomínios, entregamos memorial descritivo e ART para apresentação em assembleia; para apartamentos, cuidamos da documentação ao síndico e respeitamos rigorosamente o horário e as regras internas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/servicos/reformas/$reformaSlug"
                params={{ reformaSlug: "apartamento" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Reforma de apartamento
              </Link>
              <Link
                to="/servicos/reformas/$reformaSlug"
                params={{ reformaSlug: "casa" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Reforma de casa
              </Link>
              <Link
                to="/servicos/reformas/$reformaSlug"
                params={{ reformaSlug: "comercial" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Reforma comercial
              </Link>
            </div>
          </div>
          <aside className="rounded-2xl bg-card p-7 border border-border h-fit">
            <h2 className="text-xl font-extrabold mb-2">Orçamento de reforma</h2>
            <p className="text-xs text-muted-foreground mb-5">Resposta em até 24h úteis</p>
            <QuoteForm defaultService="Reformas" />
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
