import { Layout } from '#/assets/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Manage and view all store locations.',
  },
])

export function StoreIndexView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Stores" meta={meta}>
      Store Index View
    </Layout>
  )
}
