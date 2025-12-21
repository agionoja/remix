import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Add a new store location to the system.',
  },
])

export function StoreNewView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="New Store" meta={meta}>
      Store New View
    </Layout>
  )
}
