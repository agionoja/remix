import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'List and manage all inventory products.',
  },
])

export function InventoryProductsIndexView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Products" meta={meta}>
      Inventory Products Index
    </Layout>
  )
}
