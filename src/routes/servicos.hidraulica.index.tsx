import { createFileRoute, Link } from "@tanstack/react-router";
import { hidraulicaSubservices, site, whatsappLink } from "@/lib/site";
import { CtaBanner } from "@/components/site/CtaBanner";
import { QuoteForm } from "@/components/site/QuoteForm";
import hidraulicaHero from "@/assets/servico-hidraulica.jpg";

const HUB_URL = "/servicos/hidraulica";

const hubMetaTitle = "Empresa de Hidráulica em Teresina | Chico Resolve";
const hubMetaDescription =
  "Empresa de hidráulica em Teresina: bombeiro hidráulico, encanador, desentupidora e sistema hidráulico industrial. Emergência 24h e orçamento rápido.";

export const Route = createFileRoute("/servicos/hidraulica/")({
  head: () => {
    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Empresa de Hidráulica em Teresina",
      serviceType: "Serviços hidráulicos residenciais, prediais e industriais",
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
        name: "Especialidades em Hidráulica",
        itemListElement: hidraulicaSubservices.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.h1,
            description: s.metaDescription,
            url: `/servicos/hidraulica/${s.slug}`,
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
        { "@type": "ListItem", position: 3, name: "Hidráulica", item: HUB_URL },
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
  component: HidraulicaHub,
});

function HidraulicaHub() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-border">
        <ol className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li>
          <li aria-hidden>/</li>
          <li className="text-foreground">Hidráulica</li>
        </ol>
      </nav>

      <section className="pt-12 sm:pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">HD · Hidráulica</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">
              Empresa de Hidráulica em <span className="text-primary">Teresina</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[60ch] leading-relaxed">
              A Chico Resolve é uma empresa de hidráulica completa em Teresina com bombeiro hidráulico próprio, encanador profissional e desentupidora com equipamento técnico — hidrojato, geofone, câmera de videoinspeção e máquina rotativa. Atendemos residências, apartamentos, condomínios, restaurantes e indústrias com nota fiscal, garantia escrita e plantão de emergência hidráulica 24h.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink("Olá! Gostaria de orçamento de hidráulica.")}
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
              <span aria-hidden>💧</span> Emergência hidráulica 24h
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={hidraulicaHero}
              alt="Empresa de hidráulica em Teresina — bombeiro hidráulico e encanador profissional da Chico Resolve"
              width={1280}
              height={960}
              loading="eager"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-border"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface" aria-labelledby="especialidades-hidraulica">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Especialidades</p>
          <h2 id="especialidades-hidraulica" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Tipos de serviço hidráulico que executamos
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-10">
            Cada contexto exige equipe, equipamento e abordagem diferentes. Veja a especialidade certa para o seu caso.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hidraulicaSubservices.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/hidraulica/$hidraulicaSlug"
                params={{ hidraulicaSlug: s.slug }}
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

      <section className="py-16" aria-labelledby="bombeiro-hidraulico">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Destaque · Bombeiro Hidráulico</p>
            <h2 id="bombeiro-hidraulico" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              Bombeiro hidráulico e encanador profissional em Teresina
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Nossa equipe é formada por bombeiro hidráulico e encanador profissional CLT, com treinamento contínuo em normas NBR 5626 (água fria), NBR 7198 (água quente) e NBR 8160 (esgoto sanitário). Como empresa de hidráulica formalizada, emitimos nota fiscal, contrato e ART quando o porte da obra exige — essencial para condomínios, restaurantes e indústrias que precisam comprovar conformidade.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Investimos em equipamento próprio: geofone eletrônico e câmera termográfica para encanador detectar vazamento sem quebra, hidrojato de até 4.000 PSI para desentupir tubulação de água e esgoto, câmera de videoinspeção para diagnosticar a rede sem abrir piso, e prensa de PPR para soldar tubulação de água quente com qualidade industrial.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Para emergência hidráulica, mantemos plantão 24h via WhatsApp dedicado — vazamento crítico em prumada, ralo transbordando em restaurante ou bomba de recalque parada não podem esperar.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/servicos/hidraulica/$hidraulicaSlug"
                params={{ hidraulicaSlug: "servico-hidraulico" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Serviço hidráulico
              </Link>
              <Link
                to="/servicos/hidraulica/$hidraulicaSlug"
                params={{ hidraulicaSlug: "desentupidora" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Desentupidora
              </Link>
              <Link
                to="/servicos/hidraulica/$hidraulicaSlug"
                params={{ hidraulicaSlug: "encanador-residencial" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Encanador residencial
              </Link>
            </div>
          </div>
          <aside className="rounded-2xl bg-card p-7 border border-border h-fit">
            <h2 className="text-xl font-extrabold mb-2">Orçamento hidráulico</h2>
            <p className="text-xs text-muted-foreground mb-5">Resposta em até 24h úteis</p>
            <QuoteForm defaultService="Hidráulica" />
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
