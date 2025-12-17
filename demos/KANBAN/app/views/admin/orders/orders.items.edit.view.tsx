import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Edit details of an existing order item.',
  },
])

export function OrdersItemsEditView() {
  return (
    <Layout title="Edit Order Item" meta={meta}>
      Orders Items Edit
    </Layout>
  )
}
