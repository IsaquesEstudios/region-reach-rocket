import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Plus, Trash2, Pencil, Eye } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { AdminGate } from "@/components/admin/AdminGate";
import { formatDate } from "@/lib/blog/utils";

export const Route = createFileRoute("/admin/posts/")({
  component: () => <AdminGate><PostsList /></AdminGate>,
});

type Status = "all" | "published" | "draft" | "archived";

function PostsList() {
  const [filter, setFilter] = useState<Status>("all");
  const [search, setSearch] = useState("");
  const qc = useQueryClient();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["admin-posts", filter, search],
    queryFn: async () => {
      let q = supabase
        .from("posts")
        .select("id,title,slug,status,views,published_at,created_at,cover_image_url,category:categories(name,color),author:profiles(full_name)")
        .order("created_at", { ascending: false });
      if (filter !== "all") q = q.eq("status", filter);
      if (search) q = q.ilike("title", `%${search}%`);
      const { data, error } = await q;
      if (error) throw error;
      return data ?? [];
    },
  });

  const handleDelete = async (id: string) => {
    if (!confirm("Excluir este post?")) return;
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Post excluído");
    qc.invalidateQueries({ queryKey: ["admin-posts"] });
  };

  const tabs: { v: Status; label: string }[] = [
    { v: "all", label: "Todos" },
    { v: "published", label: "Publicados" },
    { v: "draft", label: "Rascunhos" },
    { v: "archived", label: "Arquivados" },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold">Posts</h1>
        <Link to="/admin/posts/new" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-2.5 rounded-lg">
          <Plus className="size-4" /> Novo Post
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        {tabs.map((t) => (
          <button
            key={t.v}
            onClick={() => setFilter(t.v)}
            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full ${filter === t.v ? "bg-primary text-primary-foreground" : "bg-card border border-border"}`}
          >
            {t.label}
          </button>
        ))}
        <input
          placeholder="Buscar por título…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-auto px-4 py-2 rounded-full border border-border bg-card text-sm w-64"
        />
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left px-4 py-2 font-semibold">Título</th>
              <th className="text-left px-4 py-2 font-semibold">Autor</th>
              <th className="text-left px-4 py-2 font-semibold">Categoria</th>
              <th className="text-left px-4 py-2 font-semibold">Status</th>
              <th className="text-left px-4 py-2 font-semibold">Views</th>
              <th className="text-left px-4 py-2 font-semibold">Data</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <tr><td colSpan={7} className="px-4 py-6 text-center text-muted-foreground">Carregando…</td></tr>}
            {!isLoading && posts?.length === 0 && (
              <tr><td colSpan={7} className="px-4 py-10 text-center text-muted-foreground">Nenhum post encontrado.</td></tr>
            )}
            {posts?.map((p) => (
              <tr key={p.id} className="border-t border-border hover:bg-muted/30">
                <td className="px-4 py-3">
                  <Link to="/admin/posts/edit/$id" params={{ id: p.id }} className="font-medium hover:text-primary">{p.title}</Link>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{p.author?.full_name ?? "—"}</td>
                <td className="px-4 py-3">
                  {p.category ? (
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-full text-white" style={{ backgroundColor: p.category.color ?? "#3B82F6" }}>{p.category.name}</span>
                  ) : <span className="text-muted-foreground">—</span>}
                </td>
                <td className="px-4 py-3"><StatusBadge status={p.status} /></td>
                <td className="px-4 py-3 text-muted-foreground">{p.views}</td>
                <td className="px-4 py-3 text-muted-foreground">{formatDate(p.published_at ?? p.created_at)}</td>
                <td className="px-4 py-3 text-right">
                  <div className="inline-flex items-center gap-1">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted rounded"
                      title="Visualizar post"
                    >
                      <Eye className="size-4" />
                    </Link>
                    <Link to="/admin/posts/edit/$id" params={{ id: p.id }} className="p-2 hover:bg-muted rounded" title="Editar"><Pencil className="size-4" /></Link>
                    <button onClick={() => handleDelete(p.id)} className="p-2 hover:bg-muted rounded text-destructive" title="Excluir"><Trash2 className="size-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    published: "bg-emerald-100 text-emerald-700",
    draft: "bg-amber-100 text-amber-700",
    archived: "bg-slate-100 text-slate-700",
  };
  return <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${map[status] ?? ""}`}>{status}</span>;
}
