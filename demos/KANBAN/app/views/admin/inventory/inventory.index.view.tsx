import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Manage and view inventory items and stock levels.',
  },
])

export function InventoryIndexView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Inventory" meta={meta}>
      Inventory Index
    </Layout>
  )
}
