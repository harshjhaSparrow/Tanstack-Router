import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/user/$userId')({
  component: () => {
    const { userId } = Route.useParams(); // Use userId instead of postId

    return (
      <div>Hello, user with ID: {userId}!</div>
    );
  },
});
