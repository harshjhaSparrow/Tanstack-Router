import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: () => (
    <>
      <div>I am hehe layout</div>
      <div>
        <Outlet />
      </div>
    </>
  ),
});
