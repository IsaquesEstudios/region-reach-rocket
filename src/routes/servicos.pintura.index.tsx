import { createFileRoute, Link } from "@tanstack/react-router";
import { pinturaSubservices, site, whatsappLink } from "@/lib/site";
import { CtaBanner } from "@/components/site/CtaBanner";
import { QuoteForm } from "@/components/site/QuoteForm";
import pinturaHero from "@/assets/servico-pintura.jpg";

const HUB_URL = "/servicos/pintura";

const hubMetaTitle = "Empresa de Pintura em Fortaleza | Chico Resolve";
const hubMetaDescription =
  "Empresa de pintura predial em Fortaleza: pintura de fachada predial, pintura de piso epóxi, residencial, apartamento, industrial e quadras. Orçamento rápido.";

export const Route = createFileRoute("/servicos/pintura/")({
  head: () => {
    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Empresa de Pintura em Fortaleza",
      serviceType: "Pintura predial, residencial, industrial e de piso",
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
        name: "Especialidades em Pintura",
        itemListElement: pinturaSubservices.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.h1,
            description: s.metaDescription,
            url: `/servicos/pintura/${s.slug}`,
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
        { "@type": "ListItem", position: 3, name: "Pintura", item: HUB_URL },
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
  component: PinturaHub,
});

function PinturaHub() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-border">
        <ol className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li>
          <li aria-hidden>/</li>
          <li className="text-foreground">Pintura</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="pt-12 sm:pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">PN · Pintura</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">
              Empresa de Pintura em <span className="text-primary">Fortaleza</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[60ch] leading-relaxed">
              A Chico Resolve é uma empresa de pintura predial completa em Fortaleza. Executamos pintura de fachada predial, pintura de fachada residencial, pintura de piso epóxi, pintura industrial, de apartamento, de casa e de quadras poliesportivas com equipe própria, ART quando aplicável e garantia formal. Atendemos condomínios, indústrias, construtoras e residências em toda a região metropolitana.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink("Olá! Gostaria de orçamento de pintura.")}
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
              src={pinturaHero}
              alt="Empresa de pintura predial em Fortaleza — Chico Resolve executando fachada"
              width={1280}
              height={960}
              loading="eager"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-border"
            />
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-16 bg-surface" aria-labelledby="especialidades-pintura">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Especialidades</p>
          <h2 id="especialidades-pintura" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Tipos de pintura que executamos
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-10">
            Cada tipologia exige sistema de tinta, preparação e equipe diferentes. Veja a especialidade certa para o seu projeto.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pinturaSubservices.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/pintura/$pinturaSlug"
                params={{ pinturaSlug: s.slug }}
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

      {/* Pintura de fachada predial — destaque */}
      <section className="py-16" aria-labelledby="fachada-predial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Destaque · Empresa de Pintura de Fachada</p>
            <h2 id="fachada-predial" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              Pintura de fachada predial em Fortaleza
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              A pintura de fachada é o cartão de visita do edifício e a primeira barreira contra a maresia, o sol e a chuva do litoral cearense. Como empresa de pintura de fachada com equipe certificada em NR-35 (trabalho em altura), executamos repintura completa de prédios residenciais e comerciais usando andaime fachadeiro, balancim ou rapel — sempre com tintas acrílicas premium específicas para fachadas litorâneas.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Antes de qualquer demão, fazemos hidrojateamento, tratamento de fissuras, recuperação de juntas de dilatação e selagem. Cada projeto inclui ART de execução, cronograma físico-financeiro e relatório fotográfico para a administração do condomínio.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Também atendemos pintura de piso epóxi nas garagens e áreas técnicas do mesmo edifício — um único fornecedor para a manutenção predial completa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/servicos/pintura/$pinturaSlug"
                params={{ pinturaSlug: "apartamento" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Ver pintura de apartamento
              </Link>
              <Link
                to="/servicos/pintura/$pinturaSlug"
                params={{ pinturaSlug: "piso-concreto" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Pintura de piso epóxi
              </Link>
            </div>
          </div>
          <aside className="rounded-2xl bg-card p-7 border border-border h-fit">
            <h2 className="text-xl font-extrabold mb-2">Orçamento de pintura</h2>
            <p className="text-xs text-muted-foreground mb-5">Resposta em até 24h úteis</p>
            <QuoteForm defaultService="Pintura" />
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
