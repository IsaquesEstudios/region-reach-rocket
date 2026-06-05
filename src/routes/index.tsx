import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Pillars } from "@/components/site/Pillars";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { Segments } from "@/components/site/Segments";
import { StatsBar } from "@/components/site/StatsBar";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manutenção Predial Inteligente em Teresina | Chico Resolve" },
      { name: "description", content: "Manutenção predial, pintura, elétrica, hidráulica e reformas em Teresina/PI. Rigor técnico, prazos garantidos e conformidade NR10/NR35. Agende sua visita." },
      { property: "og:title", content: `${site.name} — Inteligência em Manutenção Predial` },
      { property: "og:description", content: site.description },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-default.jpg" },
      { name: "twitter:image", content: "/og-default.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <ServicesGrid />
      <Segments />
      <StatsBar />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
