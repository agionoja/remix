import { render } from '#/utils/render'
import { routes } from '#/🔄'
import { Frame } from '@remix-run/dom'
import type { BuildAction } from '@remix-run/fetch-router'

export const playgroundController: BuildAction<'GET', typeof routes.playground> = () => {
  let InventoryIndex = (
    <div>
      <Frame src={routes.admin.inventory.summary.href()} />
      <Frame src={routes.admin.inventory.products.index.href()} />
    </div>
  )
  return render(
    <>
      <InventoryIndex />
    </>,
  )
}
