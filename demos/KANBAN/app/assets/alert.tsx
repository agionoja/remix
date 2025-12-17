import type { CSSMap } from '#/+types'
import type { Flash } from '#/schema/flash'
import { routes } from '#/🔄'
import { hydrated, type Remix } from '@remix-run/dom'
import { dom } from '@remix-run/events'

type AlertProps = {
  variant?: Flash['type']
  children: Remix.RemixNode
  css: Remix.Props<'div'>['css']
  allowCancel?: boolean
}

const alertStyles: CSSMap = {
  error: {
    backgroundColor: 'var(--color-error-light)',
    color: 'var(--color-error-700)',
    border: '1px solid var(--color-error-200)',
    '[data-theme="dark"] &': {
      backgroundColor: 'var(--color-error-900)',
      color: 'var(--color-error-300)',
      border: '1px solid var(--color-error-700)',
    },
  },
  success: {
    backgroundColor: 'var(--color-success-light)',
    color: 'var(--color-success-700)',
    border: '1px solid var(--color-success-200)',
    '[data-theme="dark"] &': {
      backgroundColor: 'var(--color-success-900)',
      color: 'var(--color-success-300)',
      border: '1px solid var(--color-success-700)',
    },
  },
  warning: {
    backgroundColor: 'var(--color-warning-light)',
    color: 'var(--color-warning-700)',
    border: '1px solid var(--color-warning-200)',
    '[data-theme="dark"] &': {
      backgroundColor: 'var(--color-warning-900)',
      color: 'var(--color-warning-300)',
      border: '1px solid var(--color-warning-700)',
    },
  },
  info: {
    backgroundColor: 'var(--color-primary-light)',
    color: 'var(--color-primary-700)',
    border: '1px solid var(--color-primary-200)',
    '[data-theme="dark"] &': {
      backgroundColor: 'var(--color-primary-900)',
      color: 'var(--color-primary-300)',
      border: '1px solid var(--color-primary-700)',
    },
  },
}

export const Alert = hydrated(
  routes.assets.href({ path: 'alert.js#Alert' }),
  function ({ variant = 'info', children, css, allowCancel }: AlertProps) {
    let isCancel = false
    return () => {
      if (isCancel) {
        return null
      }

      return (
        <div
          role="alert"
          css={{
            padding: 'var(--space-4)',
            borderRadius: 'var(--radius-base)',
            fontSize: 'var(--font-size-sm)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'var(--space-3)',
            ...alertStyles[variant],
            ...css,
          }}
        >
          <div css={{ flex: 1 }}>{children}</div>

          {allowCancel && (
            <button
              type="button"
              aria-label="Dismiss alert"
              on={dom.click(() => {
                isCancel = true
                this.update()
              })}
              css={{
                padding: 'var(--space-1)',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: 'var(--font-size-lg)',
                lineHeight: 1,
                opacity: 0.7,
                color: 'inherit',
                transition: 'opacity var(--transition-fast)',
                '&:hover': {
                  opacity: 1,
                },
              }}
            >
              ×
            </button>
          )}
        </div>
      )
    }
  },
)
