import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Add a new product to the inventory.',
  },
])

export function InventoryProductsNewView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="New Product" meta={meta}>
      Inventory Products New
    </Layout>
  )
}
