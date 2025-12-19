import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Edit details of an existing supplier.',
  },
])

export function SuppliersEditView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Edit Supplier" meta={meta}>
      Suppliers Edit View
    </Layout>
  )
}
