import { render } from '#/utils/render'
import { DashboardIndexView } from '#/views/admin/dashboard/dashboard.index.view'
import { DashboardSummaryView } from '#/views/admin/dashboard/dashboard.summary.view'
import type { routes } from '#/routes'
import type { Controller } from '@remix-run/fetch-router'

export default {
  index(ctx) {
    return render(<DashboardIndexView pathname={ctx.url.pathname} />)
  },
  summary(ctx) {
    return render(<DashboardSummaryView pathname={ctx.url.pathname} />)
  },

  salesAndPurchases(ctx) {
    return render(<DashboardSummaryView pathname={ctx.url.pathname} />)
  },

  stock: {
    lowQuantity(ctx) {
      return render(<DashboardSummaryView pathname={ctx.url.pathname} />)
    },

    topSelling(ctx) {
      return render(<DashboardSummaryView pathname={ctx.url.pathname} />)
    },
  },
} satisfies Controller<typeof routes.admin.dashboard>
