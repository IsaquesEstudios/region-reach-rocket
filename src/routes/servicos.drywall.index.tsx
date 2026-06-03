import { createFileRoute, Link } from "@tanstack/react-router";
import { drywallSubservices, site, whatsappLink } from "@/lib/site";
import { CtaBanner } from "@/components/site/CtaBanner";
import { QuoteForm } from "@/components/site/QuoteForm";
import drywallHero from "@/assets/servico-drywall.jpg";

const HUB_URL = "/servicos/drywall";

const hubMetaTitle = "Empresa de Drywall em Fortaleza | Chico Resolve";
const hubMetaDescription =
  "Empresa de drywall em Fortaleza: instalação de drywall, gesso acartonado, forro de gesso, divisória e parede de drywall com gesseiro profissional.";

export const Route = createFileRoute("/servicos/drywall/")({
  head: () => {
    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Empresa de Drywall em Fortaleza",
      serviceType: "Instalação de drywall, gesso acartonado e divisórias",
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
        name: "Especialidades em Drywall",
        itemListElement: drywallSubservices.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.h1,
            description: s.metaDescription,
            url: `/servicos/drywall/${s.slug}`,
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
        { "@type": "ListItem", position: 3, name: "Drywall", item: HUB_URL },
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
  component: DrywallHub,
});

function DrywallHub() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-border">
        <ol className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li>
          <li aria-hidden>/</li>
          <li className="text-foreground">Drywall</li>
        </ol>
      </nav>

      <section className="pt-12 sm:pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">DW · Drywall</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">
              Empresa de Drywall em <span className="text-primary">Fortaleza</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[60ch] leading-relaxed">
              A Chico Resolve é uma empresa de drywall em Fortaleza com gesseiro profissional próprio e colocadores de drywall CLT. Executamos instalação de drywall, forro de gesso, parede e divisória de ambiente com placa certificada (Knauf, Placo e Gypsum), perfis galvanizados e acabamento pronto para pintura — com orçamento drywall por escrito, nota fiscal e garantia formal de 12 meses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink("Olá! Gostaria de orçamento drywall.")}
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
              src={drywallHero}
              alt="Empresa de drywall em Fortaleza — gesseiro profissional e colocador de drywall da Chico Resolve"
              width={1280}
              height={960}
              loading="eager"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-border"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface" aria-labelledby="especialidades-drywall">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Especialidades</p>
          <h2 id="especialidades-drywall" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Tipos de serviço em drywall que executamos
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-10">
            Cada ambiente pede um sistema diferente — placa, perfil, isolamento e técnica de fixação. Veja a especialidade certa para a sua obra.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {drywallSubservices.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/drywall/$drywallSlug"
                params={{ drywallSlug: s.slug }}
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

      <section className="py-16" aria-labelledby="empresa-drywall">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Destaque · Empresa de Drywall</p>
            <h2 id="empresa-drywall" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              Gesseiro profissional e colocador de drywall em Fortaleza
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Nossa equipe é formada por gesseiro profissional e colocador de drywall CLT — não diarista anônimo de plataforma. Treinamento contínuo nos manuais Knauf e Placo, EPI completo e ferramentas próprias (nível a laser, parafusadeira de impacto, lixadeira com aspirador) garantem mão de obra drywall com qualidade de joalheria: massa em três demãos, juntas sem trinca e fixação correta para TV, prateleira e bancada.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Trabalhamos com placa drywall certificada — ST (standard), RU (resistente à umidade, indicada para banheiros e áreas próximas ao mar) e RF (corta-fogo, para shafts e casa de máquinas). Em Fortaleza, onde a maresia ataca rapidamente fixadores comuns, usamos parafusos galvanizados e indicamos RU em qualquer parede ligada à fachada externa.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Para construtoras, empreiteiras e arquitetos, oferecemos pacotes de mão de obra drywall por m² com cronograma físico-financeiro e responsável técnico em campo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/servicos/drywall/$drywallSlug"
                params={{ drywallSlug: "instalacao-drywall" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Instalação de drywall
              </Link>
              <Link
                to="/servicos/drywall/$drywallSlug"
                params={{ drywallSlug: "forro-de-gesso" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Forro de gesso
              </Link>
              <Link
                to="/servicos/drywall/$drywallSlug"
                params={{ drywallSlug: "divisoria-de-ambiente" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Divisória de ambiente
              </Link>
            </div>
          </div>
          <aside className="rounded-2xl bg-card p-7 border border-border h-fit">
            <h2 className="text-xl font-extrabold mb-2">Orçamento drywall</h2>
            <p className="text-xs text-muted-foreground mb-5">Resposta em até 24h úteis</p>
            <QuoteForm defaultService="Drywall" />
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
