import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/ChildOfLayout')({
  component: () => <div>I am child of Layout</div>
})