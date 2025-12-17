import { render } from '#/utils/render'
import { ReportBestsellingCategoryView } from '#/views/admin/report/report.bestselling.category.view'
import { ReportBestsellingProductView } from '#/views/admin/report/report.bestselling.product.view'
import { ReportIndexView } from '#/views/admin/report/report.index.view'
import { ReportProfitRevenue } from '#/views/admin/report/report.profit-revenue'
import type { routes } from '#/🔄'
import type { Controller } from '@remix-run/fetch-router'

export default {
  index() {
    return render(<ReportIndexView />)
  },

  profitAndRevenue() {
    return render(<ReportProfitRevenue />)
  },

  bestselling: {
    category() {
      return render(<ReportBestsellingCategoryView />)
    },

    product() {
      return render(<ReportBestsellingProductView />)
    },
  },
} satisfies Controller<typeof routes.admin.report>
