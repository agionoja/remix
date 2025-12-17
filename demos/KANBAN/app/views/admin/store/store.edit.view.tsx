import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'

const meta = createMeta([
  {
    name: 'description',
    content: 'Edit details of an existing store location.',
  },
])

export function StoreEditView() {
  return (
    <Layout title="Edit Store" meta={meta}>
      Store Edit View
    </Layout>
  )
}
