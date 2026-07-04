import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { PostCard } from "@/components/blog/PostCard";
import { listPublicPosts } from "@/lib/posts.functions";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Chico Resolve" },
      { name: "description", content: "Artigos, dicas e novidades sobre manutenção predial, reformas e tendências em Teresina." },
      { property: "og:title", content: "Blog — Chico Resolve" },
      { property: "og:description", content: "Conteúdo especializado em manutenção predial e reformas." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState<string | null>(null);

  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: () => listPublicPosts(),
  });

  const categorias = useMemo(() => {
    const set = new Set<string>();
    for (const p of posts ?? []) {
      if (p.categoria) {
        for (const c of p.categoria.split(",")) {
          const t = c.trim();
          if (t) set.add(t);
        }
      }
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  const filtered = useMemo(() => {
    let list = posts ?? [];
    if (categoria) list = list.filter((p) => (p.categoria ?? "").toLowerCase().includes(categoria.toLowerCase()));
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.excerpt ?? "").toLowerCase().includes(q),
      );
    }
    return list;
  }, [posts, categoria, search]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

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
        {categorias.length > 0 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setCategoria(null)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full whitespace-nowrap ${!categoria ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-muted"}`}
            >
              Todas
            </button>
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setCategoria(c)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full whitespace-nowrap ${categoria === c ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-muted"}`}
              >
                {c}
              </button>
            ))}
          </div>
        )}
      </div>

      {isLoading && <p className="text-muted-foreground">Carregando…</p>}

      {!isLoading && filtered.length === 0 && (
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
