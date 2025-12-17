import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'View best-selling products and sales data.',
  },
])

export function ReportBestsellingProductView() {
  return (
    <Layout title="Best Selling Products" meta={meta}>
      Report Bestselling Product View
    </Layout>
  )
}
