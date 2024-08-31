import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout2")({
  component: () => (
    <div>
      Hello /_layout2!
      <Outlet />
    </div>
  ),
});
