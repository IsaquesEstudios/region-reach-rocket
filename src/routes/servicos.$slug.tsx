import { createFileRoute, notFound } from "@tanstack/react-router";
import { services, serviceContent, type ServiceSlug } from "@/lib/site";
import { ServicePage } from "@/components/site/ServicePage";
import { CtaBanner } from "@/components/site/CtaBanner";
import pinturaImg from "@/assets/servico-pintura.jpg";
import eletricaImg from "@/assets/servico-eletrica.jpg";
import hidraulicaImg from "@/assets/servico-hidraulica.jpg";
import drywallImg from "@/assets/servico-drywall.jpg";
import juntasImg from "@/assets/servico-juntas.jpg";
import segurancaImg from "@/assets/servico-seguranca.jpg";
import reformasImg from "@/assets/servico-reformas.jpg";
import manutencaoImg from "@/assets/servico-manutencao.jpg";

const images: Record<ServiceSlug, string> = {
  pintura: pinturaImg,
  eletrica: eletricaImg,
  hidraulica: hidraulicaImg,
  drywall: drywallImg,
  "juntas-dilatacao": juntasImg,
  seguranca: segurancaImg,
  reformas: reformasImg,
  manutencao: manutencaoImg,
};

function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const Route = createFileRoute("/servicos/$slug")({
  beforeLoad: ({ params }) => {
    if (!getService(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const meta = getService(params.slug);
    if (!meta) return {};
    const url = `/servicos/${meta.slug}`;
    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: meta.title,
      description: meta.metaDescription,
      provider: { "@type": "LocalBusiness", name: "Chico Resolve" },
      areaServed: { "@type": "City", name: "Teresina" },
    };
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Serviços", item: "/servicos" },
        { "@type": "ListItem", position: 3, name: meta.shortTitle, item: url },
      ],
    };
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: serviceContent[meta.slug].faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return {
      meta: [
        { title: meta.metaTitle },
        { name: "description", content: meta.metaDescription },
        { property: "og:title", content: meta.metaTitle },
        { property: "og:description", content: meta.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:image", content: `/og-default.jpg` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      ],
    };
  },
  component: ServiceRoute,
});

function ServiceRoute() {
  const { slug } = Route.useParams();
  const typedSlug = slug as ServiceSlug;
  return (
    <>
      <ServicePage slug={typedSlug} image={images[typedSlug]} />
      <CtaBanner />
    </>
  );
}
