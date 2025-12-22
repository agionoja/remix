import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Search across inventory, orders, suppliers, and other data.',
  },
])

type Props = {
  pathname: string
  search?: string
}

export function AdminSearchView({ pathname, search }: Props) {
  return (
    <Layout pathname={pathname} title="Search" meta={meta}>
      {search ? search : 'Not found'}
    </Layout>
  )
}
