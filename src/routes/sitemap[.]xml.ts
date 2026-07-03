import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { drywallSubservices, eletricaSubservices, hidraulicaSubservices, juntaSubservices, obraEstruturalSubservices, pinturaSubservices, reformaSubservices, segurancaSubservices, services, siteUrl } from "@/lib/site";

const BASE_URL = siteUrl;

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/quem-somos", changefreq: "monthly", priority: "0.7" },
          { path: "/servicos", changefreq: "monthly", priority: "0.9" },
          { path: "/contato", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          ...services.map((s) => ({
            path: `/servicos/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...pinturaSubservices.map((s) => ({
            path: `/servicos/pintura/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...eletricaSubservices.map((s) => ({
            path: `/servicos/eletrica/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...hidraulicaSubservices.map((s) => ({
            path: `/servicos/hidraulica/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...drywallSubservices.map((s) => ({
            path: `/servicos/drywall/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...reformaSubservices.map((s) => ({
            path: `/servicos/reformas/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...juntaSubservices.map((s) => ({
            path: `/servicos/juntas-dilatacao/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...segurancaSubservices.map((s) => ({
            path: `/servicos/seguranca/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...obraEstruturalSubservices.map((s) => ({
            path: `/servicos/obra-estrutural/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
