import type { Remix } from '@remix-run/dom'
import { css } from '#/utils/css'

interface InputProps extends Remix.Props<'input'> {
  error?: boolean
}

export function Input({ error, css: additionalCss, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      css={{
        ...css`
          display: flex;
          width: 100%;
          padding: var(--spacing-3);
          border-radius: var(--rounded);
          border: 1px solid var(--input);
          font-size: var(--text-sm);
          background-color: var(--background);
          color: var(--foreground);
          transition:
            border-color var(--transition-base),
            box-shadow var(--transition-base);
          &:focus {
            outline: none;
            border-color: var(--ring);
            box-shadow:
              0 0 0 2px var(--background),
              0 0 0 4px var(--ring);
          }
          &::placeholder {
            color: var(--muted-foreground);
          }
          &:disabled {
            background-color: var(--muted);
            opacity: 0.5;
            cursor: not-allowed;
          }
        `,
        ...(error &&
          css`
            border-color: var(--destructive);
            &:focus {
              border-color: var(--destructive);
              box-shadow:
                0 0 0 2px var(--background),
                0 0 0 4px var(--destructive);
            }
          `),
        ...additionalCss,
      }}
    />
  )
}

export function Textarea({
  error,
  css: additionalCss,
  ...rest
}: Remix.Props<'textarea'> & { error?: boolean }) {
  return (
    <textarea
      {...rest}
      css={{
        ...css`
          display: flex;
          width: 100%;
          min-height: 8rem;
          padding: var(--spacing-3);
          border-radius: var(--rounded);
          border: 1px solid var(--input);
          font-size: var(--text-sm);
          background-color: var(--background);
          color: var(--foreground);
          transition:
            border-color var(--transition-base),
            box-shadow var(--transition-base);
          resize: vertical;
          &:focus {
            outline: none;
            border-color: var(--ring);
            box-shadow:
              0 0 0 2px var(--background),
              0 0 0 4px var(--ring);
          }
          &::placeholder {
            color: var(--muted-foreground);
          }
          &:disabled {
            background-color: var(--muted);
            opacity: 0.5;
            cursor: not-allowed;
          }
        `,
        ...(error &&
          css`
            border-color: var(--destructive);
            &:focus {
              border-color: var(--destructive);
              box-shadow:
                0 0 0 2px var(--background),
                0 0 0 4px var(--destructive);
            }
          `),
        ...additionalCss,
      }}
    />
  )
}

export function Label({ css: additionalCss, ...rest }: Remix.Props<'label'>) {
  return (
    <label
      {...rest}
      css={{
        ...css`
          font-size: var(--text-sm);
          font-weight: var(--font-medium);
          color: var(--foreground);
          margin-bottom: var(--spacing-2);
          display: block;
        `,
        ...additionalCss,
      }}
    />
  )
}
