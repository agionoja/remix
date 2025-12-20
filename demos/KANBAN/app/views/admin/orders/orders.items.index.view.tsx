import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'List and manage items within orders.',
  },
])

export function OrdersItemsIndexView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Order Items" meta={meta}>
      Orders Items Index
    </Layout>
  )
}
