import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Edit details of an existing order item.',
  },
])

export function OrdersItemsEditView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Edit Order Item" meta={meta}>
      Orders Items Edit
    </Layout>
  )
}
