import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/further')({
  component: () => <div>I am also child of layout but in a different manner</div>
})