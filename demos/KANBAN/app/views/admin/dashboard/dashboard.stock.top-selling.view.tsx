import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'View top-selling stock items and sales performance.',
  },
])

export function DashboardStockTopSellingView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Dashboard" meta={meta}>
      Dashboard Stock Top Selling View
    </Layout>
  )
}
