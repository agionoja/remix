import { render } from '#/utils/render'
import { InventoryIndexView } from '#/views/admin/inventory/inventory.index.view'
import { InventorySummaryView } from '#/views/admin/inventory/inventory.summary.view'
import { InventoryProductsIndexView } from '#/views/admin/inventory/inventory.products.index.view'
import { InventoryProductsNewView } from '#/views/admin/inventory/inventory.products.new.view'
import { InventoryProductsEditView } from '#/views/admin/inventory/inventory.products.edit.view'
import { InventoryProductsShowOverviewView } from '#/views/admin/inventory/inventory.products.show.overview.view'
import { InventoryProductsShowAdjustmentsView } from '#/views/admin/inventory/inventory.products.show.adjustments.view'
import { InventoryProductsShowHistoryView } from '#/views/admin/inventory/inventory.products.show.history.view'
import type { routes } from '#/🔄'
import type { Controller } from '@remix-run/fetch-router'

export default {
  index(ctx) {
    return render(<InventoryIndexView url={ctx.url} />)
  },

  summary(ctx) {
    return render(<InventorySummaryView url={ctx.url} />)
  },

  products: {
    index(ctx) {
      return render(<InventoryProductsIndexView url={ctx.url} />)
    },

    new(ctx) {
      return render(<InventoryProductsNewView url={ctx.url} />)
    },

    create(ctx) {
      return new Response('')
    },

    edit(ctx) {
      return render(<InventoryProductsEditView url={ctx.url} />)
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
        return render(<InventoryProductsShowOverviewView url={ctx.url} />)
      },

      adjustments(ctx) {
        return render(<InventoryProductsShowAdjustmentsView url={ctx.url} />)
      },

      history(ctx) {
        return render(<InventoryProductsShowHistoryView url={ctx.url} />)
      },

      download(ctx) {
        return new Response('')
      },
    },
  },
} satisfies Controller<typeof routes.admin.inventory>
