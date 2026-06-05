import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Trash2, Plus } from "lucide-react";
import { AdminGate } from "@/components/admin/AdminGate";

import { supabase } from "@/integrations/supabase/client";
import { slugify } from "@/lib/blog/utils";

export const Route = createFileRoute("/admin/categories")({
  component: () => (
    <AdminGate requireRole="admin">
      <AdminLayout>
        <CategoriesPage />
      </AdminLayout>
    </AdminGate>
  ),
});

function CategoriesPage() {
  const qc = useQueryClient();
  const [name, setName] = useState("");
  const [color, setColor] = useState("#3B82F6");

  const { data: cats } = useQuery({
    queryKey: ["admin-categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("id,name,slug,color,description")
        .order("name");
      if (error) throw error;
      return data ?? [];
    },
  });

  const refresh = () => qc.invalidateQueries({ queryKey: ["admin-categories"] });

  const create = async () => {
    if (!name.trim()) return;
    const { error } = await supabase.from("categories").insert({
      name: name.trim(),
      slug: slugify(name),
      color,
    });
    if (error) return toast.error(error.message);
    toast.success("Categoria criada");
    setName("");
    refresh();
  };

  const remove = async (id: string) => {
    if (!confirm("Excluir categoria?")) return;
    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Excluída");
    refresh();
  };

  const update = async (id: string, patch: { name?: string; color?: string }) => {
    const payload: { name?: string; color?: string; slug?: string } = { ...patch };
    if (patch.name) payload.slug = slugify(patch.name);
    const { error } = await supabase.from("categories").update(payload).eq("id", id);
    if (error) return toast.error(error.message);
    refresh();
  };

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-2xl font-extrabold mb-6">Categorias</h1>

      <div className="bg-card border border-border rounded-xl p-4 mb-6 flex flex-wrap items-end gap-3">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-bold mb-1">Nome</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nova categoria" className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold mb-1">Cor</label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-10 w-16 rounded-lg border border-border bg-background" />
        </div>
        <button onClick={create} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
          <Plus className="size-4" /> Adicionar
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl divide-y divide-border">
        {cats?.map((c) => (
          <div key={c.id} className="flex items-center gap-3 p-3">
            <input type="color" defaultValue={c.color ?? "#3B82F6"} onBlur={(e) => update(c.id, { color: e.target.value })} className="h-9 w-12 rounded border border-border" />
            <input defaultValue={c.name} onBlur={(e) => e.target.value !== c.name && update(c.id, { name: e.target.value })} className="flex-1 px-3 py-2 rounded-lg bg-background border border-border text-sm" />
            <span className="text-xs text-muted-foreground hidden md:inline">/{c.slug}</span>
            <button onClick={() => remove(c.id)} className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"><Trash2 className="size-4" /></button>
          </div>
        ))}
        {!cats?.length && <p className="p-6 text-sm text-muted-foreground text-center">Nenhuma categoria.</p>}
      </div>
    </div>
  );
}
