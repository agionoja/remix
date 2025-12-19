import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'View details and manage a specific store location.',
  },
])

export function StoreShowView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Store Details" meta={meta}>
      Store Show View
    </Layout>
  )
}
