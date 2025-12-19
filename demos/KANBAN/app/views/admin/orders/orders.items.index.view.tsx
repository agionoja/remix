import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'List and manage items within orders.',
  },
])

export function OrdersItemsIndexView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Order Items" meta={meta}>
      Orders Items Index
    </Layout>
  )
}
