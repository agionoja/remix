import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Summary of inventory data, including totals and key metrics.',
  },
])

export function InventorySummaryView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Inventory Summary" meta={meta}>
      Inventory Summary
    </Layout>
  )
}
