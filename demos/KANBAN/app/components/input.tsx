import type { Remix } from '@remix-run/dom'

export function Input({ css, ...rest }: Remix.Props<'input'>) {
  return (
    <input
      {...rest}
      css={{
        padding: 'var(--space-3)',
        borderRadius: 'var(--radius-input)',
        border: '1px solid var(--border)',
        fontSize: 'var(--font-size-base)',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        transition: 'border-color var(--transition-base), box-shadow var(--transition-base)',
        '&:focus': {
          outline: 'none',
          borderColor: 'var(--border-focus)',
          boxShadow: '0 0 0 3px color-mix(in srgb, var(--ring) 10%, transparent)',
        },
        '&::placeholder': {
          color: 'var(--foreground-subtle)',
        },
        '&:disabled': {
          backgroundColor: 'var(--background-muted)',
          color: 'var(--foreground-disabled)',
          cursor: 'not-allowed',
        },
        ...css,
      }}
    />
  )
}
