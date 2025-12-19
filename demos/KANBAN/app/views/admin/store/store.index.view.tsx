import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Manage and view all store locations.',
  },
])

export function StoreIndexView({ url }: { url: URL }) {
  return (
    <Layout url={url} title="Stores" meta={meta}>
      Store Index View
    </Layout>
  )
}
