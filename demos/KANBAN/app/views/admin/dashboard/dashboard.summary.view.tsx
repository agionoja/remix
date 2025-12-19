import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Summary of dashboard data and performance metrics.',
  },
])

export function DashboardSummaryView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Dashboard Summary" meta={meta}>
      Dashboard Summary View
    </Layout>
  )
}
