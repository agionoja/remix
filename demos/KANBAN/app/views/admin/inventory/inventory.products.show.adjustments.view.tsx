import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Manage stock adjustments for a specific product.',
  },
])

export function InventoryProductsShowAdjustmentsView() {
  return (
    <Layout title="Product Adjustments" meta={meta}>
      Inventory Products Show Adjustments
    </Layout>
  )
}
