import { render } from '#/utils/render'
import { SuppliersEditView } from '#/views/admin/suppliers/suppliers.edit.view'
import { SuppliersIndexView } from '#/views/admin/suppliers/suppliers.index.view'
import { SuppliersNewView } from '#/views/admin/suppliers/suppliers.new.view'
import { SuppliersShowView } from '#/views/admin/suppliers/suppliers.show.view'
import type { routes } from '#/🔄'
import type { Controller } from '@remix-run/fetch-router'

export default {
  export(ctx) {
    return new Response('')
  },

  index(ctx) {
    return render(<SuppliersIndexView url={ctx.url} />)
  },

  new(ctx) {
    return render(<SuppliersNewView url={ctx.url} />)
  },

  show(ctx) {
    return render(<SuppliersShowView url={ctx.url} />)
  },

  edit(ctx) {
    return render(<SuppliersEditView url={ctx.url} />)
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
} satisfies Controller<typeof routes.admin.suppliers>
