import { Alert } from '#/assets/alert'
import { Card } from '#/components/card'
import { LogoIcon } from '#/components/icons'
import { Label } from '#/components/input'
import type { Flash } from '#/schema/flash'
import { css } from '#/utils/css'
import type { Remix } from '@remix-run/dom'
import type { RequestMethod } from '@remix-run/fetch-router'

export function AuthLayout({ children }: { children: Remix.RemixNode }) {
  return (
    <main
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: var(--text-sm);
        min-height: 100svh;
        gap: var(--spacing-8);
        padding: var(--spacing-4);
        background-color: var(--muted);
        @media (min-width: 640px) {
          flex-direction: row;
          justify-content: space-between;
          padding-inline: var(--spacing-24);
          padding-block: var(--spacing-4);
        }
      `}
    >
      <LogoIcon
        height={300}
        width={300}
        css={css`
          display: none;
          @media (min-width: 768px) {
            display: block;
          }
        `}
      />
      {children}
    </main>
  )
}

export function AuthHeader({ title, message }: { title: string; message: string }) {
  return (
    <header
      css={css`
        display: flex;
        flex-direction: column;
        gap: var(--spacing-4);
        align-items: center;
        text-align: center;
      `}
    >
      <LogoIcon />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
          align-items: center;
        `}
      >
        <h1>{title}</h1>
        <p
          css={css`
            font-size: var(--text-xs);
            color: var(--muted-foreground);
            @media (min-width: 640px) {
              font-size: var(--text-sm);
            }
          `}
        >
          {message}
        </p>
      </div>
    </header>
  )
}

export function AuthFormLayout({
  css: additionalCss,
  children,
  message,
  type,
  ...rest
}: Flash & Remix.Props<'div'>) {
  return (
    <Card
      {...rest}
      css={{
        ...css`
          display: flex;
          flex-direction: column;
          gap: var(--spacing-6);
          width: 100%;
          max-width: 48rem;
          padding: var(--spacing-4);
          border-radius: var(--radius);
          @media (min-width: 640px) {
            padding: var(--spacing-8);
          }
        `,
        ...additionalCss,
      }}
    >
      {message && <Alert variant={type}>{message}</Alert>}

      {children}
    </Card>
  )
}

export function AuthLabel({ css: additionalCss, ...rest }: Remix.Props<'label'>) {
  return (
    <Label
      {...rest}
      css={{
        ...css`
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
          margin-bottom: var(--spacing-2);
        `,
        ...additionalCss,
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
      css={css`
        display: flex;
        flex-direction: column;
        gap: var(--spacing-4);
      `}
    >
      {children}
    </form>
  )
}
