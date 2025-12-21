import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Edit details of an existing supplier.',
  },
])

export function SuppliersEditView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Edit Supplier" meta={meta}>
      Suppliers Edit View
    </Layout>
  )
}
