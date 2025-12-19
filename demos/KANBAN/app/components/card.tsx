import type { Remix } from '@remix-run/dom'
import { css } from '#/utils/css'

export function Card({ css: additionalCss, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          background-color: var(--card);
          color: var(--card-foreground);
          border-radius: var(--rounded-lg);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
        `,
        ...additionalCss,
      }}
    />
  )
}

export function CardHeader({ css: additionalCss, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
          padding: var(--spacing-6);
        `,
        ...additionalCss,
      }}
    />
  )
}

export function CardTitle({ css: additionalCss, ...rest }: Remix.Props<'h3'>) {
  return (
    <h3
      {...rest}
      css={{
        ...css`
          font-size: var(--text-lg);
          font-weight: var(--font-semibold);
          line-height: var(--leading-tight);
        `,
        ...additionalCss,
      }}
    />
  )
}

export function CardDescription({ css: additionalCss, ...rest }: Remix.Props<'p'>) {
  return (
    <p
      {...rest}
      css={{
        ...css`
          font-size: var(--text-sm);
          color: var(--muted-foreground);
        `,
        ...additionalCss,
      }}
    />
  )
}

export function CardContent({ css: additionalCss, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          padding: var(--spacing-6);
          padding-top: 0;
        `,
        ...additionalCss,
      }}
    />
  )
}

export function CardFooter({ css: additionalCss, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          display: flex;
          align-items: center;
          padding: var(--spacing-6);
          padding-top: 0;
        `,
        ...additionalCss,
      }}
    />
  )
}
