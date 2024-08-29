import { createFileRoute } from "@tanstack/react-router";
import PostsPage from "../../components/PostPage";

export const Route = createFileRoute("/_posts/posts")({
  component: PostsPage,
});
