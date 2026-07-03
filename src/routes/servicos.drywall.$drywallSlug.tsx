import { createFileRoute, notFound } from "@tanstack/react-router";
import { getDrywallSubservice, type DrywallSlug, site } from "@/lib/site";
import { DrywallSubPage } from "@/components/site/DrywallSubPage";
import { CtaBanner } from "@/components/site/CtaBanner";
import gesseiroAsset from "@/assets/servico-gesseiro.jpg.asset.json";
const images: Record<DrywallSlug, string> = {
  "instalacao-drywall": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1280&auto=format&fit=crop",
  "gesso-acartonado": "https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=1280&auto=format&fit=crop",
  gesseiro: gesseiroAsset.url,
  "forro-de-gesso": "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1280&auto=format&fit=crop",
  "parede-de-drywall": "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=1280&auto=format&fit=crop",
  "divisoria-de-ambiente": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1280&auto=format&fit=crop",
};

export const Route = createFileRoute("/servicos/drywall/$drywallSlug")({
  beforeLoad: ({ params }) => {
    if (!getDrywallSubservice(params.drywallSlug)) throw notFound();
  },
  head: ({ params }) => {
    const data = getDrywallSubservice(params.drywallSlug);
    if (!data) return {};
    const url = `/servicos/drywall/${data.slug}`;
    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: data.h1,
      serviceType: data.h1,
      description: data.metaDescription,
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
    };
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Serviços", item: "/servicos" },
        { "@type": "ListItem", position: 3, name: "Drywall", item: "/servicos/drywall" },
        { "@type": "ListItem", position: 4, name: data.shortTitle, item: url },
      ],
    };
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return {
      meta: [
        { title: data.metaTitle },
        { name: "description", content: data.metaDescription },
        { name: "keywords", content: data.keywords.join(", ") },
        { property: "og:title", content: data.metaTitle },
        { property: "og:description", content: data.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:image", content: "/og-default.jpg" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      ],
    };
  },
  component: DrywallSubRoute,
});

function DrywallSubRoute() {
  const { drywallSlug } = Route.useParams();
  const data = getDrywallSubservice(drywallSlug)!;
  return (
    <>
      <DrywallSubPage data={data} image={images[data.slug]} />
      <CtaBanner />
    </>
  );
}
