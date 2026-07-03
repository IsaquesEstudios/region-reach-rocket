import { createFileRoute, notFound } from "@tanstack/react-router";
import { services, serviceContent, type ServiceSlug } from "@/lib/site";
import { ServicePage } from "@/components/site/ServicePage";
import { CtaBanner } from "@/components/site/CtaBanner";
import obraEstruturalHero from "@/assets/obra-estrutural-hero.webp";
import hidraulicaAsset from "@/assets/servico-hidraulica.jpg.asset.json";
import juntasAsset from "@/assets/servico-juntas-dilatacao.jpg.asset.json";
import reformasAsset from "@/assets/servico-reformas.jpg.asset.json";
import manutencaoAsset from "@/assets/servico-manutencao-predial.jpg.asset.json";
const images: Record<ServiceSlug, string> = {
  pintura: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1280&auto=format&fit=crop",
  eletrica: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1280&auto=format&fit=crop",
  hidraulica: hidraulicaAsset.url,
  drywall: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1280&auto=format&fit=crop",
  "juntas-dilatacao": juntasAsset.url,
  seguranca: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1280&auto=format&fit=crop",
  reformas: reformasAsset.url,
  "obra-estrutural": obraEstruturalHero,
  manutencao: manutencaoAsset.url,
};

function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const Route = createFileRoute("/servicos/$slug")({
  beforeLoad: ({ params }) => {
    if (!getService(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const meta = getService(params.slug);
    if (!meta) return {};
    const url = `/servicos/${meta.slug}`;
    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: meta.title,
      description: meta.metaDescription,
      provider: { "@type": "LocalBusiness", name: "Chico Resolve" },
      areaServed: { "@type": "City", name: "Teresina" },
    };
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Serviços", item: "/servicos" },
        { "@type": "ListItem", position: 3, name: meta.shortTitle, item: url },
      ],
    };
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: serviceContent[meta.slug].faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return {
      meta: [
        { title: meta.metaTitle },
        { name: "description", content: meta.metaDescription },
        { property: "og:title", content: meta.metaTitle },
        { property: "og:description", content: meta.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:image", content: `/og-default.jpg` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      ],
    };
  },
  component: ServiceRoute,
});

function ServiceRoute() {
  const { slug } = Route.useParams();
  const typedSlug = slug as ServiceSlug;
  return (
    <>
      <ServicePage slug={typedSlug} image={images[typedSlug]} />
      <CtaBanner />
    </>
  );
}
