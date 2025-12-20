import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'View details and manage a specific supplier.',
  },
])

export function SuppliersShowView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Supplier Details" meta={meta}>
      Suppliers Show View
    </Layout>
  )
}
