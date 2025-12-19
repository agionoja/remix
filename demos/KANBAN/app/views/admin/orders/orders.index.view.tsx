import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'List and manage all orders in the system.',
  },
])

export function OrdersIndexView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Orders" meta={meta}>
      Orders Index View
    </Layout>
  )
}
