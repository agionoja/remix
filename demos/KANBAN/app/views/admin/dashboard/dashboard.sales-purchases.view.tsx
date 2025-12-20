import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Analysis of sales and purchases data for inventory insights.',
  },
])

export function DashboardSalesPurchasesView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Sales & Purchases" meta={meta}>
      Dashboard Sales and Purchases View
    </Layout>
  )
}
