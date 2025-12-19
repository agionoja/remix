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
    return render(<OrdersSummaryView url={ctx.url} />)
  },

  index(ctx) {
    return render(<OrdersIndexView url={ctx.url} />)
  },

  items: {
    export(ctx) {
      return new Response('')
    },

    index(ctx) {
      return render(<OrdersItemsIndexView url={ctx.url} />)
    },

    new(ctx) {
      return render(<OrdersItemsNewView url={ctx.url} />)
    },

    show(ctx) {
      return render(<OrdersItemsShowView url={ctx.url} />)
    },

    edit(ctx) {
      return render(<OrdersItemsEditView url={ctx.url} />)
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
