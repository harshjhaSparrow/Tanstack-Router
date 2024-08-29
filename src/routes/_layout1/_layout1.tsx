import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout1/_layout1")({
  component: () => (
    <div>
      <div>This is layout1 parens</div>
      <Outlet />
    </div>
  ),
});
