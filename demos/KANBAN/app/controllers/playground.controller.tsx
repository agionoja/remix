import { Card, CardContent, CardHeader, CardTitle } from '#/components/card'
import { SearchIcon } from '#/components/icons'
import { Input, Label } from '#/components/input'
import { Layout } from '#/components/layout'
import { css } from '#/utils/css'
import { render } from '#/utils/render'
import { routes } from '#/routes'
import { Frame } from '@remix-run/dom'
import type { BuildAction } from '@remix-run/fetch-router'
import {
  StatCard,
  StatCardContent,
  StatCardGroup,
  StatCardIcon,
  StatCardLabel,
  StatCardValue,
} from '#/components/stat-card'

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
      <Card>
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <StatCardGroup>
            <StatCard>
              <StatCardIcon>
                <img src="/icons/Sales.svg" alt="" width={24} height={24} />
              </StatCardIcon>
              <StatCardContent>
                <StatCardValue>₹ 832</StatCardValue>
                <StatCardLabel>Sales</StatCardLabel>
              </StatCardContent>
            </StatCard>

            <StatCard>
              <StatCardIcon>
                <img src="/icons/Revenue.svg" alt="" width={24} height={24} />
              </StatCardIcon>
              <StatCardContent>
                <StatCardValue>₹ 18,300</StatCardValue>
                <StatCardLabel>Revenue</StatCardLabel>
              </StatCardContent>
            </StatCard>

            <StatCard>
              <StatCardIcon>
                <img src="/icons/Profit.svg" alt="" width={24} height={24} />
              </StatCardIcon>
              <StatCardContent>
                <StatCardValue>₹ 868</StatCardValue>
                <StatCardLabel>Profit</StatCardLabel>
              </StatCardContent>
            </StatCard>

            <StatCard>
              <StatCardIcon>
                <img src="/icons/Cost.svg" alt="" width={24} height={24} />
              </StatCardIcon>
              <StatCardContent>
                <StatCardValue>₹ 17,432</StatCardValue>
                <StatCardLabel>Cost</StatCardLabel>
              </StatCardContent>
            </StatCard>
          </StatCardGroup>
        </CardContent>
      </Card>
    </Layout>,
  )
}
