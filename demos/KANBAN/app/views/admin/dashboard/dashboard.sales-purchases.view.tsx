import { createMeta } from '#/utils/meta'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/card'
import { css } from '#/utils/css'
import { Button } from '#/components/button'
import { CalenderIcon } from '#/components/icons'
import { routes } from '#/routes'

const meta = createMeta([
  {
    name: 'description',
    content: 'Analysis of sales and purchases data for inventory insights.',
  },
])

export function DashboardSalesPurchasesView() {
  return (
    // <Document>
    <Card>
      <CardHeader
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        `}
      >
        <CardTitle>Sales and Purchases</CardTitle>
        <form method={'GET'} action={routes.admin.dashboard.salesAndPurchases.href()}>
          <Button variant={'ghost'}>
            <CalenderIcon />
            <span>Weekly</span>
          </Button>
        </form>
      </CardHeader>

      <CardContent></CardContent>
    </Card>
    // </Document>
  )
}
