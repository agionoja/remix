import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'View details of a specific order item.',
  },
])

export function OrdersItemsShowView() {
  return (
    <Layout title="Order Item Details" meta={meta}>
      Orders Items Show
    </Layout>
  )
}
