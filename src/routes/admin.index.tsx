import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { FileText, Eye, FolderOpen, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { AdminGate } from "@/components/admin/AdminGate";
import { formatDate } from "@/lib/blog/utils";

export const Route = createFileRoute("/admin/")({
  component: () => (
    <AdminGate>
      <Dashboard />
    </AdminGate>
  ),
});

function Dashboard() {
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const [posts, cats] = await Promise.all([
        supabase.from("posts").select("id,status,views"),
        supabase.from("categories").select("id"),
      ]);
      const all = posts.data ?? [];
      return {
        total: all.length,
        published: all.filter((p) => p.status === "published").length,
        drafts: all.filter((p) => p.status === "draft").length,
        views: all.reduce((s, p) => s + (p.views ?? 0), 0),
        categories: cats.data?.length ?? 0,
      };
    },
  });

  const { data: recent } = useQuery({
    queryKey: ["admin-recent"],
    queryFn: async () => {
      const { data } = await supabase
        .from("posts")
        .select("id,title,status,published_at,created_at")
        .order("created_at", { ascending: false })
        .limit(5);
      return data ?? [];
    },
  });

  const cards = [
    { label: "Total de posts", value: stats?.total ?? 0, icon: FileText },
    { label: "Publicados", value: stats?.published ?? 0, icon: FileText },
    { label: "Rascunhos", value: stats?.drafts ?? 0, icon: FileText },
    { label: "Categorias", value: stats?.categories ?? 0, icon: FolderOpen },
    { label: "Visualizações", value: stats?.views ?? 0, icon: Eye },
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

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
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
              <th className="text-left px-5 py-2 font-semibold">Status</th>
              <th className="text-left px-5 py-2 font-semibold">Data</th>
            </tr>
          </thead>
          <tbody>
            {recent?.length === 0 && (
              <tr><td colSpan={3} className="px-5 py-6 text-center text-muted-foreground">Nenhum post ainda.</td></tr>
            )}
            {recent?.map((p) => (
              <tr key={p.id} className="border-t border-border hover:bg-muted/30">
                <td className="px-5 py-3">
                  <Link to="/admin/posts/edit/$id" params={{ id: p.id }} className="font-medium hover:text-primary">{p.title}</Link>
                </td>
                <td className="px-5 py-3"><StatusBadge status={p.status} /></td>
                <td className="px-5 py-3 text-muted-foreground">{formatDate(p.published_at ?? p.created_at)}</td>
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
