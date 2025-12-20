import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Monitor stock items with low quantities to avoid shortages.',
  },
])

export function DashboardStockLowQuantityView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Low Quantity Stock" meta={meta}>
      Dashboard Stock Low Quantity View
    </Layout>
  )
}
