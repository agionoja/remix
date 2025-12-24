import { routes } from '#/routes'
import { DashboardSalesPurchasesView } from '#/views/admin/dashboard/dashboard.sales-purchases.view'
import { DashboardStockTopSellingView } from '#/views/admin/dashboard/dashboard.stock.top-selling.view'
import { DashboardStockLowQuantityView } from '#/views/admin/dashboard/dashboard.stock.low-quantity.view'

export function resolveFrame(src: string) {
  let url = new URL(src, 'http://localhost:44000')

  if (routes.admin.dashboard.salesAndPurchases.match(url)) {
    return <DashboardSalesPurchasesView />
  }

  if (routes.admin.dashboard.stock.topSelling.match(url)) {
    return <DashboardStockTopSellingView />
  }

  if (routes.admin.dashboard.stock.lowQuantity.match(url)) {
    return <DashboardStockLowQuantityView />
  }

  return <>Frame</>
  // throw new Error(`Failed to fetch ${src}`)
}
