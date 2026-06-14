import { createFileRoute, notFound } from "@tanstack/react-router";
import { getPinturaSubservice, type PinturaSlug, site } from "@/lib/site";
import { PinturaSubPage } from "@/components/site/PinturaSubPage";
import { CtaBanner } from "@/components/site/CtaBanner";
import pisoConcretoImg from "@/assets/pintura-piso-concreto.png";
import quadraImg from "@/assets/pintura-quadra-poliesportiva.png";
import residencialAsset from "@/assets/pintura-residencial-acabamento-branco.webp.asset.json";
import apartamentoAsset from "@/assets/pintura-apartamento-acabamento-verde.webp.asset.json";
import industrialAsset from "@/assets/pintura-industrial-cinza.webp.asset.json";

const images: Record<PinturaSlug, string> = {
  "piso-concreto": pisoConcretoImg,
  residencial: residencialAsset.url,
  apartamento: apartamentoAsset.url,
  industrial: industrialAsset.url,
  "quadra-poliesportiva": quadraImg,
};

export const Route = createFileRoute("/servicos/pintura/$pinturaSlug")({
  beforeLoad: ({ params }) => {
    if (!getPinturaSubservice(params.pinturaSlug)) throw notFound();
  },
  head: ({ params }) => {
    const data = getPinturaSubservice(params.pinturaSlug);
    if (!data) return {};
    const url = `/servicos/pintura/${data.slug}`;
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
        { "@type": "ListItem", position: 3, name: "Pintura", item: "/servicos/pintura" },
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
  component: PinturaSubRoute,
});

function PinturaSubRoute() {
  const { pinturaSlug } = Route.useParams();
  const data = getPinturaSubservice(pinturaSlug)!;
  return (
    <>
      <PinturaSubPage data={data} image={images[data.slug]} />
      <CtaBanner />
    </>
  );
}
