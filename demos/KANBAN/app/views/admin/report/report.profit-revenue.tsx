import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Analyze profit and revenue data from sales and inventory.',
  },
])

export function ReportProfitRevenue() {
  return (
    <Layout title="Profit & Revenue" meta={meta}>
      Report Profit Revenue View
    </Layout>
  )
}
