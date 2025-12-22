import { Layout } from '#/components/layout'
import { createMeta } from '#/utils/meta'
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
  CalenderIcon,
  CancelIcon,
  CostIcon,
  ProfitIcon,
  RevenueIcon,
  SalesIcon,
} from '#/components/icons'
import { Button } from '#/components/button'
import { css } from '#/utils/css'

const meta = createMeta([
  {
    name: 'description',
    content: 'Overview of key metrics and insights for inventory management.',
  },
])

export function DashboardIndexView({ pathname }: { pathname: string }) {
  return () => (
    <Layout pathname={pathname} title="Dashboard" meta={meta}>
      <h1 class={'sr-only'}>Dashboard</h1>
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
        <CardHeader
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <CardTitle>Sales and Purchases</CardTitle>
          <form method={'GET'}>
            <Button variant={'ghost'}>
              <CalenderIcon />
              <span>Weekly</span>
            </Button>
          </form>
        </CardHeader>

        <CardContent></CardContent>
      </Card>{' '}
      <Card>
        <CardHeader
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <CardTitle>Sales and Purchases</CardTitle>
          <form method={'GET'}>
            <Button variant={'ghost'}>
              <CalenderIcon />
              <span>Weekly</span>
            </Button>
          </form>
        </CardHeader>

        <CardContent></CardContent>
      </Card>{' '}
      <Card>
        <CardHeader
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <CardTitle>Sales and Purchases</CardTitle>
          <form method={'GET'}>
            <Button variant={'ghost'}>
              <CalenderIcon />
              <span>Weekly</span>
            </Button>
          </form>
        </CardHeader>

        <CardContent></CardContent>
      </Card>{' '}
      <Card>
        <CardHeader
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <CardTitle>Sales and Purchases</CardTitle>
          <form method={'GET'}>
            <Button variant={'ghost'}>
              <CalenderIcon />
              <span>Weekly</span>
            </Button>
          </form>
        </CardHeader>

        <CardContent></CardContent>
      </Card>
    </Layout>
  )
}
