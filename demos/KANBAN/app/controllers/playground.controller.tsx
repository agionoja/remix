import { Card, CardHeader } from '#/components/card'
import { SearchIcon } from '#/components/icons'
import { Input, Label } from '#/components/input'
import { Layout } from '#/assets/layout'
import { css } from '#/utils/css'
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
    <Layout title={'Playground'} pathname={ctx.url.pathname}>
      <Card
        css={css`
          background-color: var(--secondary);
          border-radius: 0;
          width: 100%;
        `}
      >
        <CardHeader>
          <form action={routes.admin.search.href()}>
            <Label
              css={css`
                display: flex;
                gap: var(--spacing-3);
                align-items: center;
                position: relative;
                width: 30rem;
              `}
            >
              <SearchIcon
                css={css`
                  position: absolute;
                  left: var(--spacing-2_5);
                  top: 50%;
                  transform: translateY(-50%);
                `}
              />
              <Input
                css={css`
                  padding-left: var(--spacing-10);
                  @media (min-width: 640px) {
                    padding-left: var(--spacing-12);
                  }
                `}
                placeholder={'Search product, supplier, order'}
              />
            </Label>
          </form>
        </CardHeader>
      </Card>
    </Layout>,
  )
}
