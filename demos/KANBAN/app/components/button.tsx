import type { Remix } from '@remix-run/dom'
import { css } from '#/utils/css'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends Remix.Props<'button'> {
  variant?: Variant
}

const buttonStyles = {
  primary: css`
    background-color: var(--primary);
    color: var(--primary-foreground);
  `,
  secondary: css`
    background-color: var(--card);
    color: var(--foreground);
    border: 1px solid var(--border);
    &:hover:not(:disabled) {
      background-color: var(--accent);
    }
  `,
  ghost: css`
    background-color: transparent;
    color: var(--foreground);
    &:hover:not(:disabled) {
      background-color: var(--accent);
    }
  `,
}

const baseStyles = css`
  padding: var(--spacing-2) var(--spacing-4);
  @media (min-width: 640px) {
    padding: var(--spacing-3) var(--spacing-6);
  }
  border-radius: calc(var(--radius) - 2px);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-base);
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }
`

export function Button({ variant = 'primary', css: additionalCss, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      css={{
        ...baseStyles,
        ...buttonStyles[variant],
        ...additionalCss,
      }}
    />
  )
}
