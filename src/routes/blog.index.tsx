import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PostCard, type PostCardData } from "@/components/blog/PostCard";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Chico Resolve" },
      { name: "description", content: "Artigos, dicas e novidades sobre manutenção predial, reformas e tendências em Fortaleza." },
      { property: "og:title", content: "Blog — Chico Resolve" },
      { property: "og:description", content: "Conteúdo especializado em manutenção predial e reformas." },
    ],
  }),
  component: BlogIndex,
});

const SELECT = "slug,title,excerpt,cover_image_url,reading_time,published_at,featured,category:categories(name,slug,color),author:profiles(full_name,avatar_url)";

function BlogIndex() {
  const [search, setSearch] = useState("");
  const [categorySlug, setCategorySlug] = useState<string | null>(null);

  const { data: categories } = useQuery({
    queryKey: ["blog-categories"],
    queryFn: async () => {
      const { data, error } = await supabase.from("categories").select("name,slug,color").order("name");
      if (error) throw error;
      return data;
    },
  });

  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts", categorySlug, search],
    queryFn: async () => {
      let q = supabase
        .from("posts")
        .select(SELECT)
        .eq("status", "published")
        .order("published_at", { ascending: false });
      if (categorySlug) q = q.eq("category.slug", categorySlug);
      if (search) q = q.or(`title.ilike.%${search}%,excerpt.ilike.%${search}%`);
      const { data, error } = await q;
      if (error) throw error;
      return (data ?? []) as unknown as (PostCardData & { featured: boolean })[];
    },
  });

  const featured = useMemo(() => posts?.find((p) => p.featured) ?? posts?.[0], [posts]);
  const rest = useMemo(() => posts?.filter((p) => p.slug !== featured?.slug) ?? [], [posts, featured]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Blog</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Conteúdo Chico Resolve</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Dicas, novidades e cases sobre manutenção predial, reformas e tendências do setor.
        </p>
      </header>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar artigos…"
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setCategorySlug(null)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full whitespace-nowrap ${!categorySlug ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-muted"}`}
          >
            Todas
          </button>
          {categories?.map((c) => (
            <button
              key={c.slug}
              onClick={() => setCategorySlug(c.slug)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full whitespace-nowrap ${categorySlug === c.slug ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-muted"}`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {isLoading && <p className="text-muted-foreground">Carregando…</p>}

      {!isLoading && posts?.length === 0 && (
        <div className="text-center py-20 border border-dashed border-border rounded-2xl">
          <p className="text-muted-foreground">Nenhum artigo publicado ainda.</p>
        </div>
      )}

      {featured && (
        <div className="mb-10">
          <PostCard post={featured} featured />
        </div>
      )}

      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </div>
  );
}
