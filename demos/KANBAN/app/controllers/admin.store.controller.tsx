import { render } from '#/utils/render'
import { StoreEditView } from '#/views/admin/store/store.edit.view'
import { StoreIndexView } from '#/views/admin/store/store.index.view'
import { StoreNewView } from '#/views/admin/store/store.new.view'
import { StoreShowView } from '#/views/admin/store/store.show.view'
import type { routes } from '#/routes'
import type { Controller } from '@remix-run/fetch-router'

export default {
  index(ctx) {
    return render(<StoreIndexView pathname={ctx.url.pathname} />)
  },

  new(ctx) {
    return render(<StoreNewView pathname={ctx.url.pathname} />)
  },

  show(ctx) {
    return render(<StoreShowView pathname={ctx.url.pathname} />)
  },

  edit(ctx) {
    return render(<StoreEditView pathname={ctx.url.pathname} />)
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
} satisfies Controller<typeof routes.admin.stores>
