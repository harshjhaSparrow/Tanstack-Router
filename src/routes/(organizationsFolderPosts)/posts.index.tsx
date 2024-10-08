import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { fetchPosts } from "../../utils/common";

export const Route = createFileRoute("/(organizationsFolderPosts)/posts/")({
  loader: fetchPosts,
  component: PostsComponent,
});

function PostsComponent() {
  const posts = Route.useLoaderData();
  console.log('postpostss',posts)

  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">
      List of Posts here in Posts.tsx
        {[...posts, { id: "i-do-not-exist", title: "Non-existent Post" }].map(
          (post) => {
            return (
              <li key={post.id} className="whitespace-nowrap">
                <Link
                  to="/posts/$postId"
                  search={{
                    query: 'tanstack',
                  }}
                  inactiveProps={{
                  className:''
                  }}
                  params={{ postId: post.id }}
                  className="block py-1 text-blue-600 hover:opacity-75"
                  activeProps={{ className: "font-bold underline" }}
                >
                  <div className="flex justify-center">{post.title.substring(0, 20)}</div>
                </Link>
              </li>
            );
          },
        )}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
