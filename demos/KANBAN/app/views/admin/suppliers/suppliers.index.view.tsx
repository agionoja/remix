import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'List and manage all suppliers in the system.',
  },
])

export function SuppliersIndexView() {
  return (
    <Layout title="Suppliers" meta={meta}>
      Suppliers Index View
    </Layout>
  )
}
