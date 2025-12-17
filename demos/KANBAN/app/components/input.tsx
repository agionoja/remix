import type { Remix } from '@remix-run/dom'

export function Input({ css, ...rest }: Remix.Props<'input'>) {
  return (
    <input
      {...rest}
      css={{
        padding: 'var(--space-3)',
        borderRadius: 'var(--radius-input)',
        border: '1px solid var(--border-primary)',
        fontSize: 'var(--font-size-base)',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        ...css,
      }}
    />
  )
}
