import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos/eletrica")({
  component: () => <Outlet />,
});
