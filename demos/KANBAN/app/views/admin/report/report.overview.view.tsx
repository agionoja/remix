import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Overview of all reports and key insights.',
  },
])

export function ReportOverviewView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Report Overview" meta={meta}>
      Report Overview View
    </Layout>
  )
}
