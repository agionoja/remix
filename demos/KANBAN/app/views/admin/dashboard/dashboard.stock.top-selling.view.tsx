import { createMeta } from '#/utils/meta'
import { Card, CardHeader, CardTitle } from '#/components/card'

const meta = createMeta([
  {
    name: 'description',
    content: 'View top-selling stock items and sales performance.',
  },
])

export function DashboardStockTopSellingView() {
  return (
    // <Document title="Dashboard" meta={meta}>
    <Card>
      <CardHeader>
        <CardTitle>Top Selling Stock</CardTitle>
      </CardHeader>
    </Card>
    // </Document>
  )
}
