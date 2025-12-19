import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'List and manage all inventory products.',
  },
])

export function InventoryProductsIndexView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Products" meta={meta}>
      Inventory Products Index
    </Layout>
  )
}
