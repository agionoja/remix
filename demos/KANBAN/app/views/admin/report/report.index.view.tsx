import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Access various reports for inventory and sales analysis.',
  },
])

export function ReportIndexView() {
  return (
    <Layout title="Reports" meta={meta}>
      Report Index View
    </Layout>
  )
}
