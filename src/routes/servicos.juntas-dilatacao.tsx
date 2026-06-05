import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos/juntas-dilatacao")({
  component: () => <Outlet />,
});
