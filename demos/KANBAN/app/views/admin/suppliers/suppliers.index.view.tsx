import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'List and manage all suppliers in the system.',
  },
])

export function SuppliersIndexView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Suppliers" meta={meta}>
      Suppliers Index View
    </Layout>
  )
}
