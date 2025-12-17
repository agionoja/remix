import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Overview of key metrics and insights for inventory management.',
  },
])

export function DashboardIndexView() {
  return (
    <Layout title="Dashboard" meta={meta}>
      Admin Dashboard View
    </Layout>
  )
}
