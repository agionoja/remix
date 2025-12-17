import { render } from '#/utils/render'
import { DashboardIndexView } from '#/views/admin/dashboard/dashboard.index.view'
import { DashboardSummaryView } from '#/views/admin/dashboard/dashboard.summary.view'
import type { routes } from '#/🔄'
import type { Controller } from '@remix-run/fetch-router'

export default {
  index(ctx) {
    return render(<DashboardIndexView />)
  },
  summary(ctx) {
    return render(<DashboardSummaryView />)
  },

  salesAndPurchases(ctx) {
    return render(<DashboardSummaryView />)
  },

  stock: {
    lowQuantity(ctx) {
      return render(<DashboardSummaryView />)
    },

    topSelling(ctx) {
      return render(<DashboardSummaryView />)
    },
  },
} satisfies Controller<typeof routes.admin.dashboard>
