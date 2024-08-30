import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/user/$userId')({
  component: () => {
    const { userId } = Route.useParams(); 
    return (
      <div>Hello, user with ID: {userId}!</div>
    );
  },
});
