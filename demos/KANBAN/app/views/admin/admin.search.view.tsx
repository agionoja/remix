import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Search across inventory, orders, suppliers, and other data.',
  },
])

export function AdminSearchView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Search" meta={meta}>
      Admin Search
    </Layout>
  )
}
