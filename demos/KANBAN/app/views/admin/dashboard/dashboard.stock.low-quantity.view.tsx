import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Monitor stock items with low quantities to avoid shortages.',
  },
])

export function DashboardStockLowQuantityView() {
  return (
    <Layout title="Low Quantity Stock" meta={meta}>
      Dashboard Stock Low Quantity View
    </Layout>
  )
}
