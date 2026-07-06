import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { drywallSubservices, eletricaSubservices, hidraulicaSubservices, juntaSubservices, obraEstruturalSubservices, pinturaSubservices, reformaSubservices, segurancaSubservices, services, siteUrl } from "@/lib/site";

const BASE_URL = siteUrl;

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);
        const entries: SitemapEntry[] = [
          { path: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
          { path: "/quem-somos", lastmod: today, changefreq: "monthly", priority: "0.8" },
          { path: "/servicos", lastmod: today, changefreq: "monthly", priority: "0.8" },
          { path: "/contato", lastmod: today, changefreq: "monthly", priority: "0.8" },
          { path: "/blog", lastmod: today, changefreq: "weekly", priority: "0.8" },
          { path: "/autor/marcus-paz", lastmod: today, changefreq: "monthly", priority: "0.8" },
          ...services.map((s) => ({ path: `/servicos/${s.slug}`, lastmod: today, changefreq: "monthly" as const, priority: "0.8" })),
          ...pinturaSubservices.map((s) => ({ path: `/servicos/pintura/${s.slug}`, lastmod: today, changefreq: "monthly" as const, priority: "0.8" })),
          ...eletricaSubservices.map((s) => ({ path: `/servicos/eletrica/${s.slug}`, lastmod: today, changefreq: "monthly" as const, priority: "0.8" })),
          ...hidraulicaSubservices.map((s) => ({ path: `/servicos/hidraulica/${s.slug}`, lastmod: today, changefreq: "monthly" as const, priority: "0.8" })),
          ...drywallSubservices.map((s) => ({ path: `/servicos/drywall/${s.slug}`, lastmod: today, changefreq: "monthly" as const, priority: "0.8" })),
          ...reformaSubservices.map((s) => ({ path: `/servicos/reformas/${s.slug}`, lastmod: today, changefreq: "monthly" as const, priority: "0.8" })),
          ...juntaSubservices.map((s) => ({ path: `/servicos/juntas-dilatacao/${s.slug}`, lastmod: today, changefreq: "monthly" as const, priority: "0.8" })),
          ...segurancaSubservices.map((s) => ({ path: `/servicos/seguranca/${s.slug}`, lastmod: today, changefreq: "monthly" as const, priority: "0.8" })),
          ...obraEstruturalSubservices.map((s) => ({ path: `/servicos/obra-estrutural/${s.slug}`, lastmod: today, changefreq: "monthly" as const, priority: "0.8" })),
        ];

        // Blog posts (dinâmico) — vem do Supabase EXTERNO
        try {
          const url = process.env.EXTERNAL_SUPABASE_URL;
          const key = process.env.EXTERNAL_SUPABASE_PUBLISHABLE_KEY;
          if (url && key) {
            const sb = createClient(url, key, { auth: { persistSession: false } });
            const { data: posts } = await sb
              .from("posts")
              .select('"Slug","Date"');
            for (const p of (posts ?? []) as Array<{ Slug: string | null; Date: string | null }>) {
              if (!p.Slug) continue;
              entries.push({
                path: `/blog/${p.Slug}`,
                lastmod: (p.Date ?? "").slice(0, 10) || today,
                changefreq: "monthly",
                priority: "0.6",
              });
            }
          }
        } catch (e) {
          console.error("[sitemap] blog fetch failed", e);
        }

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
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
