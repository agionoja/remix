import { Document } from '#/components/layout'
import { createMeta } from '#/utils/meta'
import { Card, CardHeader, CardTitle } from '#/components/card'

const meta = createMeta([
  {
    name: 'description',
    content: 'Monitor stock items with low quantities to avoid shortages.',
  },
])

export function DashboardStockLowQuantityView() {
  return (
    <Document title="Low Quantity Stock" meta={meta}>
      <Card>
        <CardHeader>
          <CardTitle>Low Quantity Stock</CardTitle>
        </CardHeader>
      </Card>
    </Document>
  )
}
