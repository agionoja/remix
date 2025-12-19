import { render } from '#/utils/render'
import { DashboardIndexView } from '#/views/admin/dashboard/dashboard.index.view'
import { DashboardSummaryView } from '#/views/admin/dashboard/dashboard.summary.view'
import type { routes } from '#/🔄'
import type { Controller } from '@remix-run/fetch-router'

export default {
  index(ctx) {
    return render(<DashboardIndexView url={ctx.url} />)
  },
  summary(ctx) {
    return render(<DashboardSummaryView url={ctx.url} />)
  },

  salesAndPurchases(ctx) {
    return render(<DashboardSummaryView url={ctx.url} />)
  },

  stock: {
    lowQuantity(ctx) {
      return render(<DashboardSummaryView url={ctx.url} />)
    },

    topSelling(ctx) {
      return render(<DashboardSummaryView url={ctx.url} />)
    },
  },
} satisfies Controller<typeof routes.admin.dashboard>
