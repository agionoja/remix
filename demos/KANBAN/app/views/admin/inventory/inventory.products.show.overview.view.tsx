import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Overview of a specific product, including details and metrics.',
  },
])

export function InventoryProductsShowOverviewView() {
  return (
    <Layout title="Product Overview" meta={meta}>
      Inventory Products Show Overview
    </Layout>
  )
}
