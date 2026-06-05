import { useEffect, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/hooks/use-auth";
import { AdminLayout } from "./AdminLayout";

interface AdminGateProps {
  children: ReactNode;
  requireRole?: "admin" | "author";
}

export function AdminGate({ children, requireRole }: AdminGateProps) {
  const { user, role, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: "/admin/login" });
    }
  }, [loading, user, navigate]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Carregando…</div>;
  }
  if (!user) return null;

  const allowed = requireRole === "admin"
    ? role === "admin"
    : role === "admin" || role === "author";

  if (!allowed) {
    return (
      <AdminLayout>
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold">Acesso negado</h1>
            <p className="text-muted-foreground mt-2">
              {requireRole === "admin"
                ? "Apenas administradores podem acessar esta área."
                : "Sua conta não tem permissão para acessar o painel."}
            </p>
          </div>
        </div>
      </AdminLayout>
    );
  }
  return <AdminLayout>{children}</AdminLayout>;
}
