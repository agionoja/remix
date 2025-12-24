import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'
import {
  DashboardGrid,
  InventorySummary,
  OrderSummary,
  PurchaseOverView,
  SalesOverview,
} from '#/views/admin/dashboard/components'
import { Frame } from '@remix-run/dom'
import { routes } from '#/routes'
import { css } from '#/utils/css'

const meta = createMeta([
  {
    name: 'description',
    content: 'Overview of key metrics and insights for inventory management.',
  },
])

export function DashboardIndexView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Dashboard" meta={meta}>
      <h1 class={'sr-only'}>Dashboard</h1>

      <DashboardGrid>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: var(--spacing-6);
          `}
        >
          <SalesOverview />
          <PurchaseOverView />
          <Frame
            fallback={<span>Loading...</span>}
            src={routes.admin.dashboard.salesAndPurchases.href()}
          />
          <Frame
            fallback={<span>Loading...</span>}
            src={routes.admin.dashboard.stock.lowQuantity.href()}
          />
        </div>

        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: var(--spacing-6);
          `}
        >
          <InventorySummary />
          <OrderSummary />
          <Frame src={routes.admin.dashboard.salesAndPurchases.href()} />
          <Frame src={routes.admin.dashboard.stock.lowQuantity.href()} />
        </div>
      </DashboardGrid>
    </Layout>
  )
}
