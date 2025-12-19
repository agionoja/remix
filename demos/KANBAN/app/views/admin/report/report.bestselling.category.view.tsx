import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'View best-selling product categories and trends.',
  },
])

export function ReportBestsellingCategoryView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Best Selling Categories" meta={meta}>
      Report Bestselling Category View
    </Layout>
  )
}
