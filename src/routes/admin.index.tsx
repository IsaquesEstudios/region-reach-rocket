import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { FileText, FolderOpen, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { AdminGate } from "@/components/admin/AdminGate";
import { formatDate } from "@/lib/blog/utils";
import { listAdminPosts } from "@/lib/posts.functions";

export const Route = createFileRoute("/admin/")({
  component: () => (
    <AdminGate>
      <Dashboard />
    </AdminGate>
  ),
});

function Dashboard() {
  const { data: posts } = useQuery({
    queryKey: ["admin-posts-dash"],
    queryFn: () => listAdminPosts(),
  });

  const { data: categoriesCount } = useQuery({
    queryKey: ["admin-categories-count"],
    queryFn: async () => {
      const { data } = await supabase.from("categories").select("id");
      return data?.length ?? 0;
    },
  });

  const total = posts?.length ?? 0;
  const recent = (posts ?? []).slice(0, 5);

  const cards = [
    { label: "Total de posts", value: total, icon: FileText },
    { label: "Categorias", value: categoriesCount ?? 0, icon: FolderOpen },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold">Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">Visão geral do blog</p>
        </div>
        <Link
          to="/admin/posts/new"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-2.5 rounded-lg"
        >
          <Plus className="size-4" /> Novo Post
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {cards.map((c) => (
          <div key={c.label} className="bg-card border border-border rounded-xl p-5">
            <c.icon className="size-5 text-primary mb-2" />
            <p className="text-3xl font-extrabold">{c.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{c.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-5 py-3 border-b border-border flex items-center justify-between">
          <h2 className="font-bold">Posts recentes</h2>
          <Link to="/admin/posts" className="text-sm text-primary">Ver todos</Link>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left px-5 py-2 font-semibold">Título</th>
              <th className="text-left px-5 py-2 font-semibold">Autor</th>
              <th className="text-left px-5 py-2 font-semibold">Data</th>
            </tr>
          </thead>
          <tbody>
            {recent.length === 0 && (
              <tr><td colSpan={3} className="px-5 py-6 text-center text-muted-foreground">Nenhum post ainda.</td></tr>
            )}
            {recent.map((p) => (
              <tr key={p.id} className="border-t border-border hover:bg-muted/30">
                <td className="px-5 py-3">
                  <Link to="/admin/posts/edit/$id" params={{ id: p.id }} className="font-medium hover:text-primary">{p.title}</Link>
                </td>
                <td className="px-5 py-3 text-muted-foreground">{p.author_name ?? "—"}</td>
                <td className="px-5 py-3 text-muted-foreground">{formatDate(p.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
