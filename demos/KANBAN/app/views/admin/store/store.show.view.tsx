import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'View details and manage a specific store location.',
  },
])

export function StoreShowView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Store Details" meta={meta}>
      Store Show View
    </Layout>
  )
}
