import { createFileRoute, notFound } from "@tanstack/react-router";
import { getSegurancaSubservice, type SegurancaSlug, site } from "@/lib/site";
import { SegurancaSubPage } from "@/components/site/SegurancaSubPage";
import { CtaBanner } from "@/components/site/CtaBanner";
import camerasImg from "@/assets/seguranca-cameras.jpg";
import alarmesImg from "@/assets/seguranca-alarmes.jpg";

const images: Record<SegurancaSlug, string> = {
  "instalacao-cameras": camerasImg,
  "instalacao-alarmes": alarmesImg,
};

export const Route = createFileRoute("/servicos/seguranca/$segurancaSlug")({
  beforeLoad: ({ params }) => {
    if (!getSegurancaSubservice(params.segurancaSlug)) throw notFound();
  },
  head: ({ params }) => {
    const data = getSegurancaSubservice(params.segurancaSlug);
    if (!data) return {};
    const url = `/servicos/seguranca/${data.slug}`;
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
        { "@type": "ListItem", position: 3, name: "Segurança", item: "/servicos/seguranca" },
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
  component: SegurancaSubRoute,
});

function SegurancaSubRoute() {
  const { segurancaSlug } = Route.useParams();
  const data = getSegurancaSubservice(segurancaSlug)!;
  return (
    <>
      <SegurancaSubPage data={data} image={images[data.slug]} />
      <CtaBanner />
    </>
  );
}
