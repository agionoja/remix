import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'
import {
  InventorySummary,
  OrderSummary,
  ProductSummary,
  PurchaseOverView,
  SalesOverview,
} from '#/views/admin/dashboard/components'
import { Frame } from '@remix-run/dom'
import { routes } from '#/routes'
import { css } from '#/utils/css'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/card'
import {
  StatCard,
  StatCardContent,
  StatCardGroup,
  StatCardIcon,
  StatCardLabel,
  StatCardValue,
} from '#/components/stat-card'
import {
  BagIcon,
  CancelIcon,
  CategoriesIcon,
  CostIcon,
  LocationIcon,
  ProfitIcon,
  QuantityIcon,
  RevenueIcon,
  SalesIcon,
  UserIcon,
} from '#/components/icons'

const meta = createMeta([
  {
    name: 'description',
    content: 'Overview of key metrics and insights for inventory management.',
  },
])

console.log(
  [
    1185, 457, 3024, 1266, 1015, 325, 744, 298, 1175, 1113, 1103, 952, 3991, 1241, 1024, 758, 1784,
    839, 892, 449, 1534, 1257, 1597, 1343, 381, 1925, 844, 1690, 1045, 2220, 786, 956, 1149, 1207,
    765, 671, 1105, 1216, 998, 975, 2016, 893, 752, 1094, 1078, 977, 1590, 1350, 2292, 408, 744,
    1011, 1039, 1068, 1259, 1117, 980, 681, 506, 1179, 1426, 1031, 1073, 1198, 782, 953, 713, 1244,
    1220, 1573, 1372,
  ].reduce((sum, acc) => sum + acc, 0),
)

const counts = [
  1185, 457, 3024, 1266, 1015, 325, 744, 298, 1175, 1113, 1103, 952, 3991, 1241, 1024, 758, 1784,
  839, 892, 449, 1534, 1257, 1597, 1343, 381, 1925, 844, 1690, 1045, 2220, 786, 956, 1149, 1207,
  765, 671, 1105, 1216, 998, 975, 2016, 893, 752, 1094, 1078, 977, 1590, 1350, 2292, 408, 744, 1011,
  1039, 1068, 1259, 1117, 980, 681, 506, 1179, 1426, 1031, 1073, 1198, 782, 953, 713, 1244, 1220,
  1573, 1372,
]
const workingCPS = 15.47
const offset = 0 // seconds late

let time = offset
counts.forEach((chars, i) => {
  const duration = chars / workingCPS
  const start = time
  const end = time + duration
  console.log(`Scene ${i + 1}: ${formatTime(start)} → ${formatTime(end)}`)
  time = end
})

function formatTime(secs: number) {
  const h = Math.floor(secs / 3600)
  const m = Math.floor((secs % 3600) / 60)
  const s = Math.floor(secs % 60)
  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export function DashboardIndexView({ pathname }: { pathname: string }) {
  return (
    <Layout pathname={pathname} title="Dashboard" meta={meta}>
      <h1 class={'sr-only'}>Dashboard</h1>

      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-6);
          @media (min-width: 640px) {
            grid-template-columns: 2fr 1fr;
          }
        `}
      >
        <Card>
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>

          <CardContent>
            <StatCardGroup>
              <StatCard>
                <StatCardIcon>
                  <SalesIcon />
                </StatCardIcon>
                <StatCardContent>
                  <StatCardValue>₹ 832</StatCardValue>
                  <StatCardLabel>Sales</StatCardLabel>
                </StatCardContent>
              </StatCard>

              <StatCard>
                <StatCardIcon>
                  <RevenueIcon />
                </StatCardIcon>
                <StatCardContent>
                  <StatCardValue>₹ 18,300</StatCardValue>
                  <StatCardLabel>Revenue</StatCardLabel>
                </StatCardContent>
              </StatCard>

              <StatCard>
                <StatCardIcon>
                  <ProfitIcon />
                </StatCardIcon>
                <StatCardContent>
                  <StatCardValue>₹ 868</StatCardValue>
                  <StatCardLabel>Profit</StatCardLabel>
                </StatCardContent>
              </StatCard>

              <StatCard>
                <StatCardIcon>
                  <CostIcon />
                </StatCardIcon>
                <StatCardContent>
                  <StatCardValue>₹ 17,432</StatCardValue>
                  <StatCardLabel>Cost</StatCardLabel>
                </StatCardContent>
              </StatCard>
            </StatCardGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inventory Summary</CardTitle>
          </CardHeader>

          <CardContent>
            <StatCardGroup>
              <StatCard>
                <StatCardIcon>
                  <QuantityIcon />
                </StatCardIcon>
                <StatCardContent>
                  <StatCardValue>868</StatCardValue>
                  <StatCardLabel>Quantity in Hand</StatCardLabel>
                </StatCardContent>
              </StatCard>

              <StatCard>
                <StatCardIcon>
                  <LocationIcon />
                </StatCardIcon>
                <StatCardContent>
                  <StatCardValue>200</StatCardValue>
                  <StatCardLabel>To be Received</StatCardLabel>
                </StatCardContent>
              </StatCard>
            </StatCardGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Purchase Overview</CardTitle>
          </CardHeader>

          <CardContent>
            <StatCardGroup>
              <StatCard>
                <StatCardIcon>
                  <BagIcon />
                </StatCardIcon>
                <StatCardContent>
                  <StatCardValue>82</StatCardValue>
                  <StatCardLabel>Purchases</StatCardLabel>
                </StatCardContent>
              </StatCard>

              <StatCard>
                <StatCardIcon>
                  <CostIcon />
                </StatCardIcon>
                <StatCardContent>
                  <StatCardValue>₹ 13,573</StatCardValue>
                  <StatCardLabel>Cost</StatCardLabel>
                </StatCardContent>
              </StatCard>

              <StatCard>
                <StatCardIcon>
                  <CancelIcon />
                </StatCardIcon>
                <StatCardContent>
                  <StatCardValue>5</StatCardValue>
                  <StatCardLabel>Cancel</StatCardLabel>
                </StatCardContent>
              </StatCard>

              <StatCard>
                <StatCardIcon>
                  <ProfitIcon />
                </StatCardIcon>
                <StatCardContent>
                  <StatCardValue>₹ 17, 432</StatCardValue>
                  <StatCardLabel>Return</StatCardLabel>
                </StatCardContent>
              </StatCard>
            </StatCardGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Product Summary</CardTitle>
          </CardHeader>

          <CardContent>
            <StatCardGroup>
              <StatCard>
                <StatCardIcon>
                  <UserIcon
                    css={css`
                      color: var(--chart-1);
                    `}
                  />
                </StatCardIcon>
                <StatCardContent>
                  <StatCardValue>31</StatCardValue>
                  <StatCardLabel>Number of Suppliers</StatCardLabel>
                </StatCardContent>
              </StatCard>

              <StatCard>
                <StatCardIcon>
                  <CategoriesIcon />
                </StatCardIcon>
                <StatCardContent>
                  <StatCardValue>21</StatCardValue>
                  <StatCardLabel>Number of Categories</StatCardLabel>
                </StatCardContent>
              </StatCard>
            </StatCardGroup>
          </CardContent>
        </Card>

        {/*TODO: perhaps we don't need a frame here.*/}
        <Frame
          // fallback={<span>Loading...</span>}
          src={routes.admin.dashboard.salesAndPurchases.href()}
        />

        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>

          <CardContent></CardContent>
        </Card>

        <Frame
          fallback={<span>Loading...</span>}
          src={routes.admin.dashboard.stock.topSelling.href()}
        />

        <Frame
          fallback={<span>Loading...</span>}
          src={routes.admin.dashboard.stock.lowQuantity.href()}
        />
      </div>
    </Layout>
  )
}
