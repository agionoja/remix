import { render } from '#/utils/render'
import { StoreEditView } from '#/views/admin/store/store.edit.view'
import { StoreIndexView } from '#/views/admin/store/store.index.view'
import { StoreNewView } from '#/views/admin/store/store.new.view'
import { StoreShowView } from '#/views/admin/store/store.show.view'
import type { routes } from '#/🔄'
import type { Controller } from '@remix-run/fetch-router'

export default {
  index(ctx) {
    return render(<StoreIndexView />)
  },

  new(ctx) {
    return render(<StoreNewView />)
  },

  show(ctx) {
    return render(<StoreShowView />)
  },

  edit(ctx) {
    return render(<StoreEditView />)
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
