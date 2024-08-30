import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(organizationsFolderPosts)/posts/$postId")({
  component: () => {
    const { postId } = Route.useParams();
    return <div>Hello {postId}!</div>;
  },
});
