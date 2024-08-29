import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout1/user")({
  component: () => <div>Hello inside route.tsx insoide layout 1</div>,
});
