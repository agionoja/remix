import { render } from '#/utils/render'
import { InventoryIndexView } from '#/views/admin/inventory/inventory.index.view'
import { InventorySummaryView } from '#/views/admin/inventory/inventory.summary.view'
import { InventoryProductsIndexView } from '#/views/admin/inventory/inventory.products.index.view'
import { InventoryProductsNewView } from '#/views/admin/inventory/inventory.products.new.view'
import { InventoryProductsEditView } from '#/views/admin/inventory/inventory.products.edit.view'
import { InventoryProductsShowOverviewView } from '#/views/admin/inventory/inventory.products.show.overview.view'
import { InventoryProductsShowAdjustmentsView } from '#/views/admin/inventory/inventory.products.show.adjustments.view'
import { InventoryProductsShowHistoryView } from '#/views/admin/inventory/inventory.products.show.history.view'
import type { routes } from '#/routes'
import type { Controller } from '@remix-run/fetch-router'

export default {
  index(ctx) {
    return render(<InventoryIndexView pathname={ctx.url.pathname} />)
  },

  summary(ctx) {
    return render(<InventorySummaryView pathname={ctx.url.pathname} />)
  },

  products: {
    index(ctx) {
      return render(<InventoryProductsIndexView pathname={ctx.url.pathname} />)
    },

    new(ctx) {
      return render(<InventoryProductsNewView pathname={ctx.url.pathname} />)
    },

    create(ctx) {
      return new Response('')
    },

    edit(ctx) {
      return render(<InventoryProductsEditView pathname={ctx.url.pathname} />)
    },

    update(ctx) {
      return new Response('')
    },

    destroy(ctx) {
      return new Response('')
    },

    export(ctx) {
      return new Response('')
    },

    show: {
      overview(ctx) {
        return render(<InventoryProductsShowOverviewView pathname={ctx.url.pathname} />)
      },

      adjustments(ctx) {
        return render(<InventoryProductsShowAdjustmentsView pathname={ctx.url.pathname} />)
      },

      history(ctx) {
        return render(<InventoryProductsShowHistoryView pathname={ctx.url.pathname} />)
      },

      download(ctx) {
        return new Response('')
      },
    },
  },
} satisfies Controller<typeof routes.admin.inventory>
