import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'View best-selling products and sales data.',
  },
])

export function ReportBestsellingProductView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Best Selling Products" meta={meta}>
      Report Bestselling Product View
    </Layout>
  )
}
