import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Edit an existing product in the inventory.',
  },
])

export function InventoryProductsEditView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Edit Product" meta={meta}>
      Inventory Products Edit
    </Layout>
  )
}
