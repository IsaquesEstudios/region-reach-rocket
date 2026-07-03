import { createFileRoute, notFound } from "@tanstack/react-router";
import { getReformaSubservice, type ReformaSlug, site } from "@/lib/site";
import { ReformasSubPage } from "@/components/site/ReformasSubPage";
import { CtaBanner } from "@/components/site/CtaBanner";
import quadrasImg from "@/assets/reforma-quadras.webp";

const images: Record<ReformaSlug, string> = {
  apartamento: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1280&auto=format&fit=crop",
  "empresa-de-reforma": "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=1280&auto=format&fit=crop",
  comercial: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1280&auto=format&fit=crop",
  casa: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1280&auto=format&fit=crop",
  banheiro: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1280&auto=format&fit=crop",
  telhado: "https://images.unsplash.com/photo-1632759145355-8b8f0c0d0e3a?q=80&w=1280&auto=format&fit=crop",
  fachada: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1280&auto=format&fit=crop",
  piscina: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1280&auto=format&fit=crop",
  pisos: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1280&auto=format&fit=crop",
  cozinha: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1280&auto=format&fit=crop",
  "quadras-esportivas": quadrasImg,
  quarto: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1280&auto=format&fit=crop",
};

export const Route = createFileRoute("/servicos/reformas/$reformaSlug")({
  beforeLoad: ({ params }) => {
    if (!getReformaSubservice(params.reformaSlug)) throw notFound();
  },
  head: ({ params }) => {
    const data = getReformaSubservice(params.reformaSlug);
    if (!data) return {};
    const url = `/servicos/reformas/${data.slug}`;
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
        { "@type": "ListItem", position: 3, name: "Reformas", item: "/servicos/reformas" },
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
  component: ReformaSubRoute,
});

function ReformaSubRoute() {
  const { reformaSlug } = Route.useParams();
  const data = getReformaSubservice(reformaSlug)!;
  return (
    <>
      <ReformasSubPage data={data} image={images[data.slug]} />
      <CtaBanner />
    </>
  );
}
