import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'View the history and changes for a specific product.',
  },
])

export function InventoryProductsShowHistoryView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Product History" meta={meta}>
      Inventory Products Show History
    </Layout>
  )
}
