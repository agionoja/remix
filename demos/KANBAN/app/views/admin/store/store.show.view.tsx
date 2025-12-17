import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'View details and manage a specific store location.',
  },
])

export function StoreShowView() {
  return (
    <Layout title="Store Details" meta={meta}>
      Store Show View
    </Layout>
  )
}
