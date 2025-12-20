import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Summary of dashboard data and performance metrics.',
  },
])

export function DashboardSummaryView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Dashboard Summary" meta={meta}>
      Dashboard Summary View
    </Layout>
  )
}
