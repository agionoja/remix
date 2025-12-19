import { Layout } from '#/components/layout'
import { render } from '#/utils/render'
import { routes } from '#/🔄'
import { Frame } from '@remix-run/dom'
import type { BuildAction } from '@remix-run/fetch-router'

export const playgroundController: BuildAction<'GET', typeof routes.playground> = (ctx) => {
  let InventoryIndex = (
    <div>
      <Frame src={routes.admin.inventory.summary.href()} />
      <Frame src={routes.admin.inventory.products.index.href()} />
    </div>
  )
  return render(
    <Layout title={'Playground'} url={ctx.url}>
      {/*<Sidebar url={ctx.url} css={{ width: '20%' }} />*/}
      <></>
    </Layout>,
  )
}
