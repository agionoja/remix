import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Summary of order data and key performance indicators.',
  },
])

export function OrdersSummaryView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Orders Summary" meta={meta}>
      Orders Summary View
    </Layout>
  )
}
