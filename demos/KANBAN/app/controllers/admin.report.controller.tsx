import { render } from '#/utils/render'
import { ReportBestsellingCategoryView } from '#/views/admin/report/report.bestselling.category.view'
import { ReportBestsellingProductView } from '#/views/admin/report/report.bestselling.product.view'
import { ReportIndexView } from '#/views/admin/report/report.index.view'
import { ReportProfitRevenue } from '#/views/admin/report/report.profit-revenue'
import type { routes } from '#/routes'
import type { Controller } from '@remix-run/fetch-router'

export default {
  index(ctx) {
    return render(<ReportIndexView pathname={ctx.url.pathname} />)
  },

  profitAndRevenue(ctx) {
    return render(<ReportProfitRevenue pathname={ctx.url.pathname} />)
  },

  bestselling: {
    category(ctx) {
      return render(<ReportBestsellingCategoryView pathname={ctx.url.pathname} />)
    },

    product(ctx) {
      return render(<ReportBestsellingProductView pathname={ctx.url.pathname} />)
    },
  },
} satisfies Controller<typeof routes.admin.report>
