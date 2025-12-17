import adminDashboardController from '#/controllers/admin.dashboard.controller'
import adminInventoryController from '#/controllers/admin.inventory.controller'
import adminOrdersController from '#/controllers/admin.orders.controller'
import adminReportController from '#/controllers/admin.report.controller'
import adminStoreController from '#/controllers/admin.store.controller'
import adminSuppliersController from '#/controllers/admin.suppliers.controller'
import { render } from '#/utils/render'
import { AdminSearchView } from '#/views/admin/admin.search.view'
import type { routes } from '#/🔄'
import type { Controller } from '@remix-run/fetch-router'

export default {
  middleware: [],
  actions: {
    search(ctx) {
      return render(<AdminSearchView />)
    },
    dashboard: adminDashboardController,
    inventory: adminInventoryController,
    orders: adminOrdersController,
    report: adminReportController,
    store: adminStoreController,
    suppliers: adminSuppliersController,
  },
} satisfies Controller<typeof routes.admin>
