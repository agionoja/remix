import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Search across inventory, orders, suppliers, and other data.',
  },
])

export function AdminSearchView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Search" meta={meta}>
      Admin Search
    </Layout>
  )
}
