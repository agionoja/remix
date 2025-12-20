import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Add a new item to an order.',
  },
])

export function OrdersItemsNewView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="New Order Item" meta={meta}>
      Orders Items New
    </Layout>
  )
}
