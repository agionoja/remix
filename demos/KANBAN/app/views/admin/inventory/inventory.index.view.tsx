import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Manage and view inventory items and stock levels.',
  },
])

export function InventoryIndexView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Inventory" meta={meta}>
      Inventory Index
    </Layout>
  )
}
