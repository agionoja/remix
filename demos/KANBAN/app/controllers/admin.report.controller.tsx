import { render } from '#/utils/render'
import { ReportBestsellingCategoryView } from '#/views/admin/report/report.bestselling.category.view'
import { ReportBestsellingProductView } from '#/views/admin/report/report.bestselling.product.view'
import { ReportIndexView } from '#/views/admin/report/report.index.view'
import { ReportProfitRevenue } from '#/views/admin/report/report.profit-revenue'
import type { routes } from '#/🔄'
import type { Controller } from '@remix-run/fetch-router'

export default {
  index(ctx) {
    return render(<ReportIndexView url={ctx.url} />)
  },

  profitAndRevenue(ctx) {
    return render(<ReportProfitRevenue url={ctx.url} />)
  },

  bestselling: {
    category(ctx) {
      return render(<ReportBestsellingCategoryView url={ctx.url} />)
    },

    product(ctx) {
      return render(<ReportBestsellingProductView url={ctx.url} />)
    },
  },
} satisfies Controller<typeof routes.admin.report>
