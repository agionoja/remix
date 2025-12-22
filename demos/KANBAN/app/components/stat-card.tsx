import type { Remix } from '@remix-run/dom'
import { css } from '#/utils/css'

/**
 * StatCard - Container for displaying a single statistic
 * Use this when you want to show a metric with an icon, value, and label
 */
export function StatCard({ css: _css, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
          align-items: center;
          padding: var(--spacing-4);
          border-right: 1px solid var(--border);

          &:last-child {
            border-right: none;
          }
        `,
        ..._css,
      }}
    />
  )
}

/**
 * StatCardIcon - Wrapper for the icon
 * Provides consistent sizing and spacing for stat icons
 */
export function StatCardIcon({ css: _css, children, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: var(--radius);
          background-color: var(--muted);
        `,
        ..._css,
      }}
    >
      {children}
    </div>
  )
}

/**
 * StatCardContent - Container for value and label
 * Groups the numeric value with its descriptive label
 */
export function StatCardContent({ css: _css, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
          align-items: center;
          text-align: center;
        `,
        ..._css,
      }}
    />
  )
}

/**
 * StatCardValue - The main numeric value
 * Displays the primary metric (e.g., "$7464", "832")
 */
export function StatCardValue({ css: _css, ...rest }: Remix.Props<'span'>) {
  return (
    <span
      {...rest}
      css={{
        ...css`
          font-size: var(--text-2xl);
          font-weight: var(--font-bold);
          color: var(--foreground);
        `,
        ..._css,
      }}
    />
  )
}

/**
 * StatCardLabel - The descriptive label
 * Displays what the value represents (e.g., "Sales", "Revenue")
 */
export function StatCardLabel({ css: _css, ...rest }: Remix.Props<'span'>) {
  return (
    <span
      {...rest}
      css={{
        ...css`
          font-size: var(--text-sm);
          font-weight: var(--font-medium);
          color: var(--muted-foreground);
        `,
        ..._css,
      }}
    />
  )
}

/**
 * StatCardGroup - Container for multiple StatCards
 * Use this to display multiple stats in a horizontal row
 */
export function StatCardGroup({ css: _css, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: var(--spacing-4);

          @media (min-width: 640px) {
            grid-template-columns: repeat(4, 1fr);
          }
        `,
        ..._css,
      }}
    />
  )
}
