import { createFileRoute, notFound } from "@tanstack/react-router";
import { getObraEstruturalSubservice, site, type ObraEstruturalSlug } from "@/lib/site";
import { ObraEstruturalSubPage } from "@/components/site/ObraEstruturalSubPage";
import { CtaBanner } from "@/components/site/CtaBanner";
import cisternaAsset from "@/assets/construcao-cisternas.webp.asset.json";

const images: Record<ObraEstruturalSlug, string> = {
  "construcao-cisternas": cisternaAsset.url,
};

export const Route = createFileRoute("/servicos/obra-estrutural/$obraEstruturalSlug")({
  beforeLoad: ({ params }) => {
    if (!getObraEstruturalSubservice(params.obraEstruturalSlug)) throw notFound();
  },
  head: ({ params }) => {
    const data = getObraEstruturalSubservice(params.obraEstruturalSlug);
    if (!data) return {};
    const url = `/servicos/obra-estrutural/${data.slug}`;
    return {
      meta: [
        { title: data.metaTitle },
        { name: "description", content: data.metaDescription },
        { name: "keywords", content: data.keywords.join(", ") },
        { property: "og:title", content: data.metaTitle },
        { property: "og:description", content: data.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:image", content: images[data.slug] },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: data.h1, serviceType: data.h1, description: data.metaDescription, provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phoneE164, address: { "@type": "PostalAddress", addressLocality: site.address.city, addressRegion: site.address.region, addressCountry: site.address.country } }, areaServed: { "@type": "City", name: "Teresina" } }) },
        { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }, { "@type": "ListItem", position: 2, name: "Serviços", item: "/servicos" }, { "@type": "ListItem", position: 3, name: "Obra Estrutural", item: "/servicos/obra-estrutural" }, { "@type": "ListItem", position: 4, name: data.shortTitle, item: url }] }) },
        { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: data.faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }) },
      ],
    };
  },
  component: ObraEstruturalSubRoute,
});

function ObraEstruturalSubRoute() {
  const { obraEstruturalSlug } = Route.useParams();
  const data = getObraEstruturalSubservice(obraEstruturalSlug);
  if (!data) return null;
  return <><ObraEstruturalSubPage data={data} image={images[data.slug]} /><CtaBanner /></>;
}