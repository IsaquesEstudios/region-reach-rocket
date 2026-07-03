import { createFileRoute, notFound } from "@tanstack/react-router";
import { getJuntaSubservice, type JuntaSlug, site } from "@/lib/site";
import { JuntasSubPage } from "@/components/site/JuntasSubPage";
import { CtaBanner } from "@/components/site/CtaBanner";
import juntasAsset from "@/assets/servico-juntas-dilatacao.jpg.asset.json";
import reformasAsset from "@/assets/servico-reformas.jpg.asset.json";
import recuperacaoAsset from "@/assets/servico-recuperacao-estrutural.jpg.asset.json";
const images: Record<JuntaSlug, string> = {
  "tratamento-dilatacao": juntasAsset.url,
  "vedacao-fachada": "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1280&auto=format&fit=crop",
  "manutencao-movimentacao": reformasAsset.url,
  "recuperacao-estrutural": recuperacaoAsset.url,
  infiltracao: "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=1280&auto=format&fit=crop",
  impermeabilizacao: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=1280&auto=format&fit=crop",
  "rachadura-entre-predios": "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=1280&auto=format&fit=crop",
  "vazamento-fachada": "https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=1280&auto=format&fit=crop",
};

export const Route = createFileRoute("/servicos/juntas-dilatacao/$juntaSlug")({
  beforeLoad: ({ params }) => {
    if (!getJuntaSubservice(params.juntaSlug)) throw notFound();
  },
  head: ({ params }) => {
    const data = getJuntaSubservice(params.juntaSlug);
    if (!data) return {};
    const url = `/servicos/juntas-dilatacao/${data.slug}`;
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
        { "@type": "ListItem", position: 3, name: "Juntas de Dilatação", item: "/servicos/juntas-dilatacao" },
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
  component: JuntaSubRoute,
});

function JuntaSubRoute() {
  const { juntaSlug } = Route.useParams();
  const data = getJuntaSubservice(juntaSlug)!;
  return (
    <>
      <JuntasSubPage data={data} image={images[data.slug]} />
      <CtaBanner />
    </>
  );
}
