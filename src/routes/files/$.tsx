import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/files/$')({
  component: () => {
    const params = Route.useParams();

    // Log the params to the console
    console.log('params',params?._splat);

    return (
      <div>
        Check the console for params!
      </div>
    );
  },
});
