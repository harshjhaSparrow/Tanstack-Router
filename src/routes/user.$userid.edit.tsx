import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$userid/edit')({
  component: () => {
    const { userid } = Route.useParams(); // Use userId instead of postId
    return(<div>Hello /user/ { userid }/edit!</div>)
  }
})