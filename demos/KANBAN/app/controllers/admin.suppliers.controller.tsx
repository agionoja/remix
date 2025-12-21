import { render } from '#/utils/render'
import { SuppliersEditView } from '#/views/admin/suppliers/suppliers.edit.view'
import { SuppliersIndexView } from '#/views/admin/suppliers/suppliers.index.view'
import { SuppliersNewView } from '#/views/admin/suppliers/suppliers.new.view'
import { SuppliersShowView } from '#/views/admin/suppliers/suppliers.show.view'
import type { routes } from '#/routes'
import type { Controller } from '@remix-run/fetch-router'

export default {
  export(ctx) {
    return new Response('')
  },

  index(ctx) {
    return render(<SuppliersIndexView pathname={ctx.url.pathname} />)
  },

  new(ctx) {
    return render(<SuppliersNewView pathname={ctx.url.pathname} />)
  },

  show(ctx) {
    return render(<SuppliersShowView pathname={ctx.url.pathname} />)
  },

  edit(ctx) {
    return render(<SuppliersEditView pathname={ctx.url.pathname} />)
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
