import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'View details and manage a specific supplier.',
  },
])

export function SuppliersShowView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Supplier Details" meta={meta}>
      Suppliers Show View
    </Layout>
  )
}
