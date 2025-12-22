import { Card, CardContent, CardHeader, CardTitle } from '#/components/card'
import { SearchIcon } from '#/components/icons'
import { Input, Label } from '#/components/input'
import { Layout } from '#/components/layout'
import { css } from '#/utils/css'
import { render } from '#/utils/render'
import { routes } from '#/routes'
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
    <Layout title={'Playground'} pathname={ctx.url.pathname}>
      <h1 class={'sr-only'}>Dashboard</h1>
      <Card
        css={css`
          width: 60%;
        `}
      >
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
        </CardHeader>
        <CardContent
          css={css`
            display: flex;
            flex-direction: column;
            gap: var(--spacing-4);
            align-items: center;
            justify-content: center;
            width: fit-content;
          `}
        >
          <div>
            <img height={25} width={23} src="/icons/Sales.svg" alt="Sales Icon" />
          </div>

          <div
            css={css`
              display: flex;
              gap: var(--spacing-4);
            `}
          >
            <span>$7464</span>
            <span>Sales</span>
          </div>
        </CardContent>
      </Card>
    </Layout>,
  )
}
