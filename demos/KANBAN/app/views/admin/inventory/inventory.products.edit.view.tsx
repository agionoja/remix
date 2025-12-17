import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Edit an existing product in the inventory.',
  },
])

export function InventoryProductsEditView() {
  return (
    <Layout title="Edit Product" meta={meta}>
      Inventory Products Edit
    </Layout>
  )
}
