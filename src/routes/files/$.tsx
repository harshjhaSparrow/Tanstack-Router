import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/files/$")({
  component: () => {
    const params = Route.useParams();
    return <div>Check the console for params!</div>;
  },
});
