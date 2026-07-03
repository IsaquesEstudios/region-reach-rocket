import { createFileRoute, notFound } from "@tanstack/react-router";
import { getHidraulicaSubservice, type HidraulicaSlug, site } from "@/lib/site";
import { HidraulicaSubPage } from "@/components/site/HidraulicaSubPage";
import { CtaBanner } from "@/components/site/CtaBanner";
import hidraulicaAsset from "@/assets/servico-hidraulica.jpg.asset.json";
const images: Record<HidraulicaSlug, string> = {
  "servico-hidraulico": hidraulicaAsset.url,
  desentupidora: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1280&auto=format&fit=crop",
  "desentupimento-esgoto": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1280&auto=format&fit=crop",
  "encanador-residencial": "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1280&auto=format&fit=crop",
  "encanador-predial": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1280&auto=format&fit=crop",
};

export const Route = createFileRoute("/servicos/hidraulica/$hidraulicaSlug")({
  beforeLoad: ({ params }) => {
    if (!getHidraulicaSubservice(params.hidraulicaSlug)) throw notFound();
  },
  head: ({ params }) => {
    const data = getHidraulicaSubservice(params.hidraulicaSlug);
    if (!data) return {};
    const url = `/servicos/hidraulica/${data.slug}`;
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
        { "@type": "ListItem", position: 3, name: "Hidráulica", item: "/servicos/hidraulica" },
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
  component: HidraulicaSubRoute,
});

function HidraulicaSubRoute() {
  const { hidraulicaSlug } = Route.useParams();
  const data = getHidraulicaSubservice(hidraulicaSlug)!;
  return (
    <>
      <HidraulicaSubPage data={data} image={images[data.slug]} />
      <CtaBanner />
    </>
  );
}
