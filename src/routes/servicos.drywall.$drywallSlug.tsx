import { createFileRoute, notFound } from "@tanstack/react-router";
import { getDrywallSubservice, type DrywallSlug, site } from "@/lib/site";
import { DrywallSubPage } from "@/components/site/DrywallSubPage";
import { CtaBanner } from "@/components/site/CtaBanner";
import instalacaoImg from "@/assets/drywall-instalacao.jpg";
import gessoAcartonadoImg from "@/assets/drywall-gesso-acartonado.jpg";
import gesseiroImg from "@/assets/drywall-gesseiro.jpg";
import forroImg from "@/assets/drywall-forro-de-gesso.jpg";
import paredeImg from "@/assets/drywall-parede-de-drywall.jpg";
import divisoriaImg from "@/assets/drywall-divisoria-ambiente.jpg";

const images: Record<DrywallSlug, string> = {
  "instalacao-drywall": instalacaoImg,
  "gesso-acartonado": gessoAcartonadoImg,
  gesseiro: gesseiroImg,
  "forro-de-gesso": forroImg,
  "parede-de-drywall": paredeImg,
  "divisoria-de-ambiente": divisoriaImg,
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
      areaServed: { "@type": "City", name: "Fortaleza" },
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
