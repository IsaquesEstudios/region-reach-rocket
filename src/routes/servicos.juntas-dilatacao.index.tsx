import { createFileRoute, Link } from "@tanstack/react-router";
import { juntaSubservices, site, whatsappLink } from "@/lib/site";
import { CtaBanner } from "@/components/site/CtaBanner";
import { QuoteForm } from "@/components/site/QuoteForm";
import juntasHeroAsset from "@/assets/servico-juntas-dilatacao.jpg.asset.json";
const juntasHero = juntasHeroAsset.url;

const HUB_URL = "/servicos/juntas-dilatacao";

const hubMetaTitle = "Empresa Especializada em Juntas de Dilatação em Teresina | Chico Resolve";
const hubMetaDescription =
  "Empresa especializada em juntas de dilatação em Teresina: tratamento, vedação de fachada, manutenção, recuperação estrutural, infiltração e impermeabilização com ART.";

export const Route = createFileRoute("/servicos/juntas-dilatacao/")({
  head: () => {
    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Empresa Especializada em Juntas de Dilatação em Teresina",
      serviceType: "Tratamento e recuperação de juntas de dilatação",
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
        name: "Especialidades em Juntas de Dilatação",
        itemListElement: juntaSubservices.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.h1,
            description: s.metaDescription,
            url: `/servicos/juntas-dilatacao/${s.slug}`,
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
        { "@type": "ListItem", position: 3, name: "Juntas de Dilatação", item: HUB_URL },
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
  component: JuntasHub,
});

function JuntasHub() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-border">
        <ol className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li>
          <li aria-hidden>/</li>
          <li className="text-foreground">Juntas de Dilatação</li>
        </ol>
      </nav>

      <section className="pt-12 sm:pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">JD · Juntas de Dilatação</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">
              Empresa Especializada em Juntas de Dilatação em <span className="text-primary">Teresina</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[60ch] leading-relaxed">
              A Chico Resolve é uma empresa especializada em juntas de dilatação em Teresina com equipe própria CLT certificada em NR-35, engenheiro responsável, ART de execução e selantes Sika, Mapei e Vedacit homologados. Tratamos juntas em fachadas, lajes, garagens, pisos industriais e piscinas — com diagnóstico técnico, ensaio de estanqueidade e garantia formal de 5 a 10 anos por escrito.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink("Olá! Gostaria de orçamento para juntas de dilatação.")}
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
              src={juntasHero}
              alt="Empresa especializada em juntas de dilatação em Teresina — Chico Resolve, tratamento técnico de juntas com ART"
              width={1280}
              height={960}
              loading="eager"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-border"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface" aria-labelledby="especialidades-juntas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Especialidades</p>
          <h2 id="especialidades-juntas" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Serviços em juntas de dilatação
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-10">
            Cada tipo de junta exige material, técnica e norma específicos. Escolha a especialidade certa para o seu problema.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {juntaSubservices.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/juntas-dilatacao/$juntaSlug"
                params={{ juntaSlug: s.slug }}
                className="group rounded-2xl bg-card p-7 border border-border flex flex-col hover:border-primary transition-colors"
              >
                <span className="text-xs font-bold text-primary mb-4">{s.code}</span>
                <h3 className="text-xl font-extrabold mb-3 tracking-tight">{s.h1.replace(" em Teresina", "")}</h3>
                <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{s.summary}</p>
                <span className="text-xs font-bold text-primary mt-6 inline-block group-hover:underline">Ver detalhes →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="empresa-juntas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Destaque · Engenharia em Juntas</p>
            <h2 id="empresa-juntas" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              Diagnóstico técnico, ART e garantia formal por escrito
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Tratar junta de dilatação não é trocar selante — é engenharia de manutenção predial. A Chico Resolve atua com protocolo técnico em cada serviço: vistoria com engenheiro estrutural, classificação da patologia conforme NBR 6118 e NBR 9575, escolha do selante e do sistema (poliuretano de alto módulo, silicone estrutural, manta asfáltica, perfil metálico de cobertura) e execução com ART de engenheiro. Cada serviço termina com ensaio de estanqueidade obrigatório e relatório fotográfico para o síndico ou gestor de facilities.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Atendemos condomínios residenciais, prédios comerciais, indústrias e residências de alto padrão em Teresina e Grande Teresina. Para edifícios urbanos (Centro, Mocambinho, Satélite, Dirceu), especificamos selantes com resistência reforçada à calor e poeira e UV intenso, que envelhecem qualquer material genérico em poucos anos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/servicos/juntas-dilatacao/$juntaSlug"
                params={{ juntaSlug: "vedacao-fachada" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Vedação de juntas de fachada
              </Link>
              <Link
                to="/servicos/juntas-dilatacao/$juntaSlug"
                params={{ juntaSlug: "recuperacao-estrutural" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Recuperação estrutural
              </Link>
              <Link
                to="/servicos/juntas-dilatacao/$juntaSlug"
                params={{ juntaSlug: "infiltracao" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Infiltração em junta
              </Link>
            </div>
          </div>
          <aside className="rounded-2xl bg-card p-7 border border-border h-fit">
            <h2 className="text-xl font-extrabold mb-2">Orçamento de juntas</h2>
            <p className="text-xs text-muted-foreground mb-5">Resposta em até 24h úteis</p>
            <QuoteForm defaultService="Juntas de Dilatação" />
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
