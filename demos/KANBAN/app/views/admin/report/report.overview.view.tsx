import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Overview of all reports and key insights.',
  },
])

export function ReportOverviewView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Report Overview" meta={meta}>
      Report Overview View
    </Layout>
  )
}
