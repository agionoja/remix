import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Add a new supplier to the system.',
  },
])

export function SuppliersNewView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="New Supplier" meta={meta}>
      Suppliers New View
    </Layout>
  )
}
