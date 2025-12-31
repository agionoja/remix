import { css } from '#/utils/css'
import type { Remix } from '@remix-run/dom'
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

export function OrderSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>

      <CardContent></CardContent>
    </Card>
  )
}

export function ProductSummary() {
  return (
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
  )
}

export function InventorySummary() {
  return (
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
  )
}
export function SalesOverview() {
  return (
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
  )
}

export function PurchaseOverView() {
  return (
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
  )
}
