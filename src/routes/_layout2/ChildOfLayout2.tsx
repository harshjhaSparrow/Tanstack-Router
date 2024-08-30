import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout2/ChildOfLayout2')({
  component: () => <div>I am child of Layout 2</div>
})