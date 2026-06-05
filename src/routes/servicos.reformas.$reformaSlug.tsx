import { createFileRoute, notFound } from "@tanstack/react-router";
import { getReformaSubservice, type ReformaSlug, site } from "@/lib/site";
import { ReformasSubPage } from "@/components/site/ReformasSubPage";
import { CtaBanner } from "@/components/site/CtaBanner";
import apartamentoImg from "@/assets/reforma-apartamento.jpg";
import empresaImg from "@/assets/reforma-empresa.jpg";
import comercialImg from "@/assets/reforma-comercial.jpg";
import casaImg from "@/assets/reforma-casa.jpg";
import banheiroImg from "@/assets/reforma-banheiro.jpg";
import telhadoImg from "@/assets/reforma-telhado.jpg";
import fachadaImg from "@/assets/reforma-fachada.jpg";
import piscinaImg from "@/assets/reforma-piscina.jpg";
import pisosImg from "@/assets/reforma-pisos.jpg";
import cozinhaImg from "@/assets/reforma-cozinha.jpg";
import quadrasImg from "@/assets/reforma-quadras.jpg";
import quartoImg from "@/assets/reforma-quarto.jpg";

const images: Record<ReformaSlug, string> = {
  apartamento: apartamentoImg,
  "empresa-de-reforma": empresaImg,
  comercial: comercialImg,
  casa: casaImg,
  banheiro: banheiroImg,
  telhado: telhadoImg,
  fachada: fachadaImg,
  piscina: piscinaImg,
  pisos: pisosImg,
  cozinha: cozinhaImg,
  "quadras-esportivas": quadrasImg,
  quarto: quartoImg,
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
      areaServed: { "@type": "City", name: "Fortaleza" },
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
