import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postId")({
  component: () => {
    const { postId } = Route.useParams();
    return <div>Hello {postId}!</div>;
  },
});
