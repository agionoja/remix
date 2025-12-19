import type { Flash } from '#/schema/flash'
import { css } from '#/utils/css'
import type { Remix } from '@remix-run/dom'

type Variant = 'default' | Flash['type']

interface AlertProps extends Remix.Props<'div'> {
  variant?: Variant
}

const alertStyles = {
  default: css`
    background-color: var(--muted);
    color: var(--foreground);
    border-color: var(--border);
  `,
  success: css`
    background-color: var(--success-background);
    color: var(--success);
    border-color: var(--success);
  `,
  destructive: css`
    background-color: var(--destructive-background);
    color: var(--destructive);
    border-color: var(--destructive);
  `,
  warning: css`
    background-color: var(--warning-background);
    color: var(--warning);
    border-color: var(--warning);
  `,
}

const baseStyles = css`
  padding: var(--spacing-4);
  border-radius: var(--rounded);
  border: 1px solid;
  font-size: var(--text-sm);
  display: flex;
  gap: var(--spacing-3);
  align-items: flex-start;
`

export function Alert({ variant = 'default', css, children, ...rest }: AlertProps) {
  return (
    <div
      role="alert"
      {...rest}
      css={{
        ...baseStyles,
        ...alertStyles[variant],
        ...css,
      }}
    >
      {children}
    </div>
  )
}

export function AlertTitle({ css: additionalCss, ...rest }: Remix.Props<'h5'>) {
  return (
    <h5
      {...rest}
      css={{
        ...css`
          font-weight: var(--font-semibold);
          font-size: var(--text-sm);
          margin-bottom: var(--spacing-1);
        `,
        ...additionalCss,
      }}
    />
  )
}

export function AlertDescription({ css: additionalCss, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          font-size: var(--text-sm);
          opacity: 0.9;
        `,
        ...additionalCss,
      }}
    />
  )
}
