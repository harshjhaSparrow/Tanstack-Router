import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(user)/user/$userid/edit')({
  component: () => <div>Hello /(user)/user/$userid/edit!</div>
})