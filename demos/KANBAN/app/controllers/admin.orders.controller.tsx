import { render } from '#/utils/render'
import { OrdersIndexView } from '#/views/admin/orders/orders.index.view'
import { OrdersItemsEditView } from '#/views/admin/orders/orders.items.edit.view'
import { OrdersItemsIndexView } from '#/views/admin/orders/orders.items.index.view'
import { OrdersItemsNewView } from '#/views/admin/orders/orders.items.new.view'
import { OrdersItemsShowView } from '#/views/admin/orders/orders.items.show.view'
import { OrdersSummaryView } from '#/views/admin/orders/orders.summary.view'
import type { routes } from '#/🔄'
import type { Controller } from '@remix-run/fetch-router'

export default {
  summary(ctx) {
    return render(<OrdersSummaryView />)
  },

  index(ctx) {
    return render(<OrdersIndexView />)
  },

  items: {
    export(ctx) {
      return new Response('')
    },

    index(ctx) {
      return render(<OrdersItemsIndexView />)
    },

    new(ctx) {
      return render(<OrdersItemsNewView />)
    },

    show(ctx) {
      return render(<OrdersItemsShowView />)
    },

    edit(ctx) {
      return render(<OrdersItemsEditView />)
    },

    create(ctx) {
      return new Response('')
    },

    update(ctx) {
      return new Response('')
    },

    destroy(ctx) {
      return new Response('')
    },
  },
} satisfies Controller<typeof routes.admin.orders>
