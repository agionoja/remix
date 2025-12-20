import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Summary of inventory data, including totals and key metrics.',
  },
])

export function InventorySummaryView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Inventory Summary" meta={meta}>
      Inventory Summary
    </Layout>
  )
}
