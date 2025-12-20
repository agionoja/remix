import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Analyze profit and revenue data from sales and inventory.',
  },
])

export function ReportProfitRevenue({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Profit & Revenue" meta={meta}>
      Report Profit Revenue View
    </Layout>
  )
}
