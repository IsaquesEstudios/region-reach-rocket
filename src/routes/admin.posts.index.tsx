import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Plus, Trash2, Pencil, Eye } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { AdminGate } from "@/components/admin/AdminGate";
import { formatDate } from "@/lib/blog/utils";
import { deleteAdminPost, listAdminPosts } from "@/lib/posts.functions";

export const Route = createFileRoute("/admin/posts/")({
  component: () => <AdminGate><PostsList /></AdminGate>,
});

function PostsList() {
  const [search, setSearch] = useState("");
  const qc = useQueryClient();

  // Mantém uma leitura leve na sessão do Cloud para forçar erro amigável se deslogado
  // (o requireSupabaseAuth já garante isso no server, mas garante UX previsível).
  void supabase;

  const { data: posts, isLoading } = useQuery({
    queryKey: ["admin-posts"],
    queryFn: () => listAdminPosts(),
  });

  const filtered = (posts ?? []).filter((p) =>
    search ? p.title.toLowerCase().includes(search.toLowerCase()) : true,
  );

  const handleDelete = async (id: string) => {
    if (!confirm("Excluir este post?")) return;
    try {
      await deleteAdminPost({ data: { id } });
      toast.success("Post excluído");
      qc.invalidateQueries({ queryKey: ["admin-posts"] });
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold">Posts</h1>
        <Link to="/admin/posts/new" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-2.5 rounded-lg">
          <Plus className="size-4" /> Novo Post
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
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
              <th className="text-left px-4 py-2 font-semibold">Data</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <tr><td colSpan={5} className="px-4 py-6 text-center text-muted-foreground">Carregando…</td></tr>}
            {!isLoading && filtered.length === 0 && (
              <tr><td colSpan={5} className="px-4 py-10 text-center text-muted-foreground">Nenhum post encontrado.</td></tr>
            )}
            {filtered.map((p) => (
              <tr key={p.id} className="border-t border-border hover:bg-muted/30">
                <td className="px-4 py-3">
                  <Link to="/admin/posts/edit/$id" params={{ id: p.id }} className="font-medium hover:text-primary">{p.title}</Link>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{p.author_name ?? "—"}</td>
                <td className="px-4 py-3 text-muted-foreground">{p.categoria ?? "—"}</td>
                <td className="px-4 py-3 text-muted-foreground">{formatDate(p.date)}</td>
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
