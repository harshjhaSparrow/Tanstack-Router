import { createFileRoute } from '@tanstack/react-router';
import { fetchUser } from '../functions/functions';

export const Route = createFileRoute('/user/$userid/edit')({
  component: () => {
    const { userid } = Route.useParams(); 
    return(<div>Hello /user/ { userid }/edit!</div>)
  },
  loader: async ({ params }) => {
    return fetchUser(params.userid)
  },
})