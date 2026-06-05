import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Trash2, Plus } from "lucide-react";
import { AdminGate } from "@/components/admin/AdminGate";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { slugify } from "@/lib/blog/utils";

export const Route = createFileRoute("/admin/tags")({
  component: () => (
    <AdminGate requireRole="admin">
      <AdminLayout>
        <TagsPage />
      </AdminLayout>
    </AdminGate>
  ),
});

function TagsPage() {
  const qc = useQueryClient();
  const [name, setName] = useState("");

  const { data: tags } = useQuery({
    queryKey: ["admin-tags"],
    queryFn: async () => {
      const { data, error } = await supabase.from("tags").select("id,name,slug").order("name");
      if (error) throw error;
      return data ?? [];
    },
  });

  const refresh = () => qc.invalidateQueries({ queryKey: ["admin-tags"] });

  const create = async () => {
    if (!name.trim()) return;
    const { error } = await supabase.from("tags").insert({ name: name.trim(), slug: slugify(name) });
    if (error) return toast.error(error.message);
    toast.success("Tag criada");
    setName("");
    refresh();
  };

  const remove = async (id: string) => {
    if (!confirm("Excluir tag?")) return;
    const { error } = await supabase.from("tags").delete().eq("id", id);
    if (error) return toast.error(error.message);
    refresh();
  };

  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-2xl font-extrabold mb-6">Tags</h1>

      <div className="bg-card border border-border rounded-xl p-4 mb-6 flex gap-3">
        <input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => e.key === "Enter" && create()} placeholder="Nova tag" className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-sm" />
        <button onClick={create} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
          <Plus className="size-4" /> Adicionar
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl divide-y divide-border">
        {tags?.map((t) => (
          <div key={t.id} className="flex items-center gap-3 p-3">
            <span className="flex-1 text-sm font-medium">{t.name}</span>
            <span className="text-xs text-muted-foreground">/{t.slug}</span>
            <button onClick={() => remove(t.id)} className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"><Trash2 className="size-4" /></button>
          </div>
        ))}
        {!tags?.length && <p className="p-6 text-sm text-muted-foreground text-center">Nenhuma tag.</p>}
      </div>
    </div>
  );
}
