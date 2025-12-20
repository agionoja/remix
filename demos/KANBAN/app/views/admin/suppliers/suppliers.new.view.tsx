import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Add a new supplier to the system.',
  },
])

export function SuppliersNewView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="New Supplier" meta={meta}>
      Suppliers New View
    </Layout>
  )
}
