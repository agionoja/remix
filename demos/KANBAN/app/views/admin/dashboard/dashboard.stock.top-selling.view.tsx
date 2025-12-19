import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'View top-selling stock items and sales performance.',
  },
])

export function DashboardStockTopSellingView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Top Selling Stock" meta={meta}>
      Dashboard Stock Top Selling View
    </Layout>
  )
}
