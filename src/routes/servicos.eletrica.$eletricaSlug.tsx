import { createFileRoute, notFound } from "@tanstack/react-router";
import { getEletricaSubservice, type EletricaSlug, site } from "@/lib/site";
import { EletricaSubPage } from "@/components/site/EletricaSubPage";
import { CtaBanner } from "@/components/site/CtaBanner";
import industrialImg from "@/assets/eletrica-industrial.jpg";
import residencialImg from "@/assets/eletrica-residencial.jpg";
import predialImg from "@/assets/eletrica-predial.jpg";

const images: Record<EletricaSlug, string> = {
  industrial: industrialImg,
  residencial: residencialImg,
  predial: predialImg,
};

export const Route = createFileRoute("/servicos/eletrica/$eletricaSlug")({
  beforeLoad: ({ params }) => {
    if (!getEletricaSubservice(params.eletricaSlug)) throw notFound();
  },
  head: ({ params }) => {
    const data = getEletricaSubservice(params.eletricaSlug);
    if (!data) return {};
    const url = `/servicos/eletrica/${data.slug}`;
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
        { "@type": "ListItem", position: 3, name: "Elétrica", item: "/servicos/eletrica" },
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
  component: EletricaSubRoute,
});

function EletricaSubRoute() {
  const { eletricaSlug } = Route.useParams();
  const data = getEletricaSubservice(eletricaSlug)!;
  return (
    <>
      <EletricaSubPage data={data} image={images[data.slug]} />
      <CtaBanner />
    </>
  );
}
