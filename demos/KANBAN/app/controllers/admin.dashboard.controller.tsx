import { render } from '#/utils/render'
import { DashboardIndexView } from '#/views/admin/dashboard/dashboard.index.view'
import { routes } from '#/routes'
import type { Controller } from '@remix-run/fetch-router'
import { DashboardSalesPurchasesView } from '#/views/admin/dashboard/dashboard.sales-purchases.view'
import { DashboardStockLowQuantityView } from '#/views/admin/dashboard/dashboard.stock.low-quantity.view'
import { DashboardStockTopSellingView } from '#/views/admin/dashboard/dashboard.stock.top-selling.view'

export default {
  index(ctx) {
    return render(<DashboardIndexView pathname={ctx.url.pathname} />)
  },

  async salesAndPurchases(ctx) {
    return render(<DashboardSalesPurchasesView />)
  },

  stock: {
    lowQuantity(ctx) {
      return render(<DashboardStockLowQuantityView />)
    },

    topSelling(ctx) {
      return render(<DashboardStockTopSellingView />)
    },
  },
} satisfies Controller<typeof routes.admin.dashboard>
