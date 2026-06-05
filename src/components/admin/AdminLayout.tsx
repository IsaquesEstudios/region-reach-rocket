import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, FileText, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import type { ReactNode } from "react";

export function AdminLayout({ children }: { children: ReactNode }) {
  const { signOut, user, role } = useAuth();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const navItems = [
    { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
    { to: "/admin/posts", label: "Posts", icon: FileText, exact: false },
  ];

  const isActive = (to: string, exact: boolean) =>
    exact ? pathname === to : pathname === to || pathname.startsWith(to + "/");

  return (
    <div className="min-h-screen flex bg-muted/30">
      <aside className="w-60 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Admin</p>
          <p className="font-bold mt-1">Chico Resolve</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(item.to, item.exact) ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              <item.icon className="size-4" /> {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-border">
          <div className="px-3 py-2 mb-2">
            <p className="text-xs font-bold truncate">{user?.email}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{role}</p>
          </div>
          <button
            onClick={() => signOut()}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted text-muted-foreground"
          >
            <LogOut className="size-4" /> Sair
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
