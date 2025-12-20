import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Add a new product to the inventory.',
  },
])

export function InventoryProductsNewView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="New Product" meta={meta}>
      Inventory Products New
    </Layout>
  )
}
