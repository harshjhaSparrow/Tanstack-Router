import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/ChildOfLayout2')({
  component: () => <div>I am 2 child of Layout</div>
})