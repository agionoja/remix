import adminDashboardController from '#/controllers/admin.dashboard.controller'
import adminInventoryController from '#/controllers/admin.inventory.controller'
import adminOrdersController from '#/controllers/admin.orders.controller'
import adminReportController from '#/controllers/admin.report.controller'
import adminStoreController from '#/controllers/admin.store.controller'
import adminSuppliersController from '#/controllers/admin.suppliers.controller'
import { render } from '#/utils/render'
import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'
import type { routes } from '#/routes'
import type { Controller } from '@remix-run/fetch-router'
import { type } from 'arktype'

export default {
  middleware: [],
  actions: {
    search(ctx) {
      const q = type('string').assert(ctx.url.searchParams.get('q'))

      return render(
        <Layout
          pathname={ctx.url.pathname}
          title="Search"
          meta={createMeta([
            {
              name: 'description',
              content: 'Search across inventory, orders, suppliers, and other data.',
            },
          ])}
        >
          {q ? q : 'Not found'}
        </Layout>,
        { status: q ? 200 : 404 },
      )
    },
    dashboard: adminDashboardController,
    inventory: adminInventoryController,
    orders: adminOrdersController,
    report: adminReportController,
    stores: adminStoreController,
    suppliers: adminSuppliersController,
  },
} satisfies Controller<typeof routes.admin>
