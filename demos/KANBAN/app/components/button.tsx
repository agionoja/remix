import type { Remix } from '@remix-run/dom'

type Variant = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps extends Remix.Props<'button'> {
  variant?: Variant
}

const buttonStyles = {
  primary: {
    padding: 'var(--space-3) var(--space-6)',
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
    border: 'none',
    '&:hover': {
      backgroundColor: 'color-mix(in srgb, var(--primary) 90%, black)',
    },
  },
  secondary: {
    padding: 'var(--space-3) var(--space-6)',
    backgroundColor: 'var(--surface-card)',
    color: 'var(--foreground)',
    border: '1px solid var(--border)',
    '&:hover': {
      backgroundColor: 'var(--background-hover)',
      borderColor: 'var(--border-strong)',
    },
  },
  tertiary: {
    padding: 'var(--space-3) var(--space-6)',
    backgroundColor: 'var(--background-muted)',
    color: 'var(--primary)',
    border: '1px solid var(--border)',
    '&:hover': {
      backgroundColor: 'var(--background-hover)',
      borderColor: 'var(--border-strong)',
    },
  },
}

const baseStyles = {
  borderRadius: 'var(--radius-button)',
  fontSize: 'var(--font-size-base)',
  fontWeight: 'var(--font-weight-medium)',
  cursor: 'pointer',
  transition: 'all var(--transition-base)',
}

export function Button({ variant = 'primary', css, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      css={{
        ...baseStyles,
        ...buttonStyles[variant],
        ...css,
      }}
    />
  )
}
