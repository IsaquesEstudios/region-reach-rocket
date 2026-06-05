import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AdminGate } from "@/components/admin/AdminGate";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/users")({
  component: () => (
    <AdminGate requireRole="admin">
      <AdminLayout>
        <UsersPage />
      </AdminLayout>
    </AdminGate>
  ),
});

type Role = "admin" | "author" | "reader";

function UsersPage() {
  const qc = useQueryClient();

  const { data: users } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("id,full_name,avatar_url,bio,role,created_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const setRole = async (id: string, role: Role) => {
    const { error } = await supabase.from("profiles").update({ role }).eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Papel atualizado");
    qc.invalidateQueries({ queryKey: ["admin-users"] });
  };

  const updateField = async (id: string, patch: { full_name?: string; bio?: string }) => {
    const { error } = await supabase.from("profiles").update(patch).eq("id", id);
    if (error) return toast.error(error.message);
    qc.invalidateQueries({ queryKey: ["admin-users"] });
  };

  return (
    <div className="p-8 max-w-5xl">
      <h1 className="text-2xl font-extrabold mb-6">Usuários</h1>

      <div className="bg-card border border-border rounded-xl divide-y divide-border">
        {users?.map((u) => (
          <div key={u.id} className="p-4 flex flex-wrap items-start gap-4">
            {u.avatar_url ? (
              <img src={u.avatar_url} alt="" className="size-12 rounded-full object-cover" />
            ) : (
              <div className="size-12 rounded-full bg-muted flex items-center justify-center font-bold">{u.full_name?.[0] ?? "?"}</div>
            )}
            <div className="flex-1 min-w-[200px] space-y-2">
              <input defaultValue={u.full_name ?? ""} onBlur={(e) => e.target.value !== (u.full_name ?? "") && updateField(u.id, { full_name: e.target.value })} placeholder="Nome" className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm font-bold" />
              <textarea defaultValue={u.bio ?? ""} onBlur={(e) => e.target.value !== (u.bio ?? "") && updateField(u.id, { bio: e.target.value })} placeholder="Bio" rows={2} className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            </div>
            <select
              value={u.role}
              onChange={(e) => setRole(u.id, e.target.value as Role)}
              className="px-3 py-2 rounded-lg border border-border bg-background text-sm font-bold"
            >
              <option value="reader">Reader</option>
              <option value="author">Author</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        ))}
        {!users?.length && <p className="p-6 text-sm text-muted-foreground text-center">Nenhum usuário.</p>}
      </div>
    </div>
  );
}
