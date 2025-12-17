import type { Flash } from '#/+types'
import { Alert } from '#/assets/alert'
import type { Remix } from '@remix-run/dom'
import type { RequestMethod } from '@remix-run/fetch-router'

export function AuthLayout({ children }: { children: Remix.RemixNode }) {
  return (
    <main
      css={{
        display: 'flex',
        height: '100vh',
        gap: 'var(--space-16)',
        justifyContent: 'center',
        '@media (min-width: 1024px)': {
          padding: 'var(--space-52)',
        },
        '@media (min-width: 768px)': {
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'var(--space-52)',
        },
      }}
    >
      <img
        css={{
          display: 'none',
          '@media (min-width: 768px)': {
            display: 'block',
          },
        }}
        height={300}
        width={300}
        src="/icons/Logo.svg"
        alt="Kanban Logo"
      />
      {children}
    </main>
  )
}

export function AuthHeader({ title, message }: { title: string; message: string }) {
  return (
    <header
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        alignItems: 'center',
      }}
    >
      <img height={48} width={48} src="/icons/Logo.svg" alt="Kanban Logo" />

      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-1)',
          alignItems: 'center',
          '@media (min-width: 640px)': {
            gap: 'var(--space-2)',
          },
        }}
      >
        <h1>{title}</h1>
        <p
          class={'text-body'}
          css={{
            fontSize: 'var(--font-size-sm)',
            '@media (min-width: 640px)': {
              fontSize: 'var(--font-size-base)',
            },
          }}
        >
          {message}
        </p>
      </div>
    </header>
  )
}

export function AuthFormLayout({
  css,
  children,
  flashText,
  flashType,
  ...rest
}: Flash & Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      class={'card'}
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-5)',
        width: '48rem',
        maxWidth: '100%',
        ...css,
      }}
    >
      {flashText && (
        <Alert variant={flashType} css={{ marginBottom: 'var(--space-4)' }}>
          {flashText}
        </Alert>
      )}

      {children}
    </div>
  )
}

export function AuthLabel({ css, ...rest }: Remix.Props<'label'>) {
  return (
    <label
      {...rest}
      css={{
        ...css,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)',
      }}
    />
  )
}

export function AuthForm({
  children,
  ...rest
}: {
  method: RequestMethod
  action: string
  children: Remix.RemixNode
}) {
  return (
    <form
      {...rest}
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-5)',
      }}
    >
      {children}
    </form>
  )
}
