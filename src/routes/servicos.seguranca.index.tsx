import { createFileRoute, Link } from "@tanstack/react-router";
import { segurancaSubservices, site, whatsappLink } from "@/lib/site";
import { CtaBanner } from "@/components/site/CtaBanner";
import { QuoteForm } from "@/components/site/QuoteForm";
import segurancaHero from "@/assets/seguranca-hub.jpg";

const HUB_URL = "/servicos/seguranca";

const hubMetaTitle = "Empresa de Instalação de Câmeras e Alarmes em Teresina | Chico Resolve";
const hubMetaDescription =
  "Empresa de instalação de câmeras de segurança, alarmes residenciais, comerciais e prediais em Teresina. Projeto, NF, garantia e app no celular.";

export const Route = createFileRoute("/servicos/seguranca/")({
  head: () => {
    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Empresa de Instalação de Câmeras e Alarmes em Teresina",
      serviceType: "Segurança eletrônica — câmeras e alarmes",
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
        name: "Especialidades em Segurança Eletrônica",
        itemListElement: segurancaSubservices.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.h1,
            description: s.metaDescription,
            url: `/servicos/seguranca/${s.slug}`,
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
        { "@type": "ListItem", position: 3, name: "Segurança", item: HUB_URL },
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
  component: SegurancaHub,
});

function SegurancaHub() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-border">
        <ol className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li>
          <li aria-hidden>/</li>
          <li className="text-foreground">Segurança</li>
        </ol>
      </nav>

      <section className="pt-12 sm:pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">SG · Segurança Eletrônica</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">
              Instalação de Câmeras e Alarmes em <span className="text-primary">Teresina</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[60ch] leading-relaxed">
              A Chico Resolve é empresa de instalação de câmeras de segurança e alarmes em Teresina com projeto técnico, equipamentos de marcas homologadas Anatel (Intelbras, Hikvision, Dahua, JFL), cabeamento estruturado em conduíte, integração ao app do celular e garantia formal. Atendemos residências, prédios e comércios — com instalação de alarme residencial, comercial e predial e CFTV IP Full HD ou 4K integrados no mesmo sistema.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink("Olá! Gostaria de orçamento para câmeras e alarmes.")}
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
              src={segurancaHero}
              alt="Empresa de instalação de câmeras de segurança e alarmes em Teresina — Chico Resolve, técnico instalando CFTV com projeto"
              width={1280}
              height={960}
              loading="eager"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-border"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface" aria-labelledby="especialidades-seguranca">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Especialidades</p>
          <h2 id="especialidades-seguranca" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Serviços de segurança eletrônica
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mb-10">
            Câmeras e alarmes funcionam melhor quando projetados juntos. Escolha o serviço ou peça instalação integrada.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {segurancaSubservices.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/seguranca/$segurancaSlug"
                params={{ segurancaSlug: s.slug }}
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

      <section className="py-16" aria-labelledby="empresa-seguranca">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Destaque · Segurança Integrada</p>
            <h2 id="empresa-seguranca" className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              Projeto técnico, equipamentos homologados e garantia por escrito
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Instalar câmera ou alarme não é furar parede e ligar cabo — é projeto de segurança eletrônica. A Chico Resolve atua com protocolo técnico: visita técnica gratuita, levantamento de pontos cegos, dimensionamento de gravador (DVR/NVR), HD de vigilância dedicado, cabeamento estruturado em conduíte conforme NBR 14565, fonte estabilizada com DPS e integração ao app do cliente. Para alarmes, dimensionamos sensores PIR com imunidade a pets, sensores magnéticos em portas e janelas, sirene interna e externa de alta potência e bateria de backup para falta de energia — comum em Teresina.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Para imóveis litorâneos da Centro, Mocambinho e Dirceu, especificamos câmeras IP66/IP67 com tratamento anticalor e poeira e sirenes com acabamento anticorrosivo, evitando que a insolação intensa reduza a vida útil do sistema. Atendemos pacotes integrados de instalação de alarmes e câmeras — mesmo app, mesma notificação e custo otimizado em relação a instalações separadas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/servicos/seguranca/$segurancaSlug"
                params={{ segurancaSlug: "instalacao-cameras" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Instalação de câmeras de segurança
              </Link>
              <Link
                to="/servicos/seguranca/$segurancaSlug"
                params={{ segurancaSlug: "instalacao-alarmes" }}
                className="text-xs font-mono text-primary uppercase tracking-widest hover:underline"
              >
                → Instalação de alarmes
              </Link>
            </div>
          </div>
          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="rounded-2xl bg-card p-7 border border-border">
              <h2 className="text-xl font-extrabold mb-2">Orçamento de câmeras e alarmes</h2>
              <p className="text-xs text-muted-foreground mb-5">Visita técnica gratuita em Teresina</p>
              <QuoteForm defaultService="Câmeras e Alarmes" />
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
