import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'List and manage all orders in the system.',
  },
])

export function OrdersIndexView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Orders" meta={meta}>
      Orders Index View
    </Layout>
  )
}
