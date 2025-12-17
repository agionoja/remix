import type { Remix } from '@remix-run/dom'

type Variant = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps extends Remix.Props<'button'> {
  variant?: Variant
}

const buttonStyles = {
  primary: {
    padding: 'var(--space-3) var(--space-6)',
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    border: 'none',
    '&:hover': {
      backgroundColor: 'var(--color-primary-hover)',
    },
  },
  secondary: {
    padding: 'var(--space-3) var(--space-6)',
    backgroundColor: 'var(--surface-card)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-primary)',
    '&:hover': {
      backgroundColor: 'var(--bg-hover)',
      borderColor: 'var(--border-secondary)',
    },
  },
  tertiary: {
    padding: 'var(--space-3) var(--space-6)',
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--color-primary)',
    border: '1px solid var(--border-primary)',
    '&:hover': {
      backgroundColor: 'var(--bg-hover)',
      borderColor: 'var(--border-secondary)',
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
