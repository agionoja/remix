import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'View best-selling product categories and trends.',
  },
])

export function ReportBestsellingCategoryView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Best Selling Categories" meta={meta}>
      Report Bestselling Category View
    </Layout>
  )
}
