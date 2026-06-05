import { createFileRoute, notFound } from "@tanstack/react-router";
import { getJuntaSubservice, type JuntaSlug, site } from "@/lib/site";
import { JuntasSubPage } from "@/components/site/JuntasSubPage";
import { CtaBanner } from "@/components/site/CtaBanner";
import tratamentoImg from "@/assets/juntas-tratamento.jpg";
import vedacaoFachadaImg from "@/assets/juntas-vedacao-fachada.jpg";
import manutencaoImg from "@/assets/juntas-manutencao.jpg";
import recuperacaoImg from "@/assets/juntas-recuperacao.jpg";
import infiltracaoImg from "@/assets/juntas-infiltracao.jpg";
import impermeabilizacaoImg from "@/assets/juntas-impermeabilizacao.jpg";
import rachaduraImg from "@/assets/juntas-rachadura.jpg";
import vazamentoFachadaImg from "@/assets/juntas-vazamento-fachada.jpg";

const images: Record<JuntaSlug, string> = {
  "tratamento-dilatacao": tratamentoImg,
  "vedacao-fachada": vedacaoFachadaImg,
  "manutencao-movimentacao": manutencaoImg,
  "recuperacao-estrutural": recuperacaoImg,
  infiltracao: infiltracaoImg,
  impermeabilizacao: impermeabilizacaoImg,
  "rachadura-entre-predios": rachaduraImg,
  "vazamento-fachada": vazamentoFachadaImg,
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
      areaServed: { "@type": "City", name: "Fortaleza" },
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
