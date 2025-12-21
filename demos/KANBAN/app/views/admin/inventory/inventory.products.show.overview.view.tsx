import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Overview of a specific product, including details and metrics.',
  },
])

export function InventoryProductsShowOverviewView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Product Overview" meta={meta}>
      Inventory Products Show Overview
    </Layout>
  )
}
