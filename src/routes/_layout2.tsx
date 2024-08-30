import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout2")({
  component: () => (
    <div>
      I am Layout 2 <Outlet />
    </div>
  ),
});
