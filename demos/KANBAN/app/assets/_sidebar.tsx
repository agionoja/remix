import { type Remix, hydrated } from '@remix-run/dom'
import { press } from '@remix-run/events/press'
import { css } from '#/utils/css'
import {
  HomeIcon,
  InventoryIcon,
  LogoIcon,
  LogoutIcon,
  OderIcon,
  ReportIcon,
  SettingsIcon,
  SidebarIcon,
  StoreIcon,
  UserIcon,
} from '#/components/icons'
import { routes } from '#/routes'

type SidebarContext = {
  isOpen: boolean
  isMobile: boolean
  toggle: () => void
}

const linkStyles = css`
  display: flex;
  padding: var(--spacing-3);
  gap: var(--spacing-3);
  align-items: center;
  width: 100%;
  border-radius: var(--radius);
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);
  color: var(--sidebar-foreground);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  &:hover {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }
  &[data-active='true'] {
    background-color: var(--sidebar-primary);
    color: var(--sidebar-primary-foreground);
    font-weight: var(--font-semibold);
  }
`

const LayoutKey = 'Layout'

export const Sidebar = hydrated(
  routes.assets.href({ path: '_sidebar.js#Sidebar' }),
  function (this: Remix.Handle, { pathname }: { pathname: string }) {
    return ({ children }: { children: Remix.RemixNode }) => {
      const ctx = this.context.get(LayoutKey) as SidebarContext | undefined
      if (!ctx) return null

      return (
        <>
          {ctx.isMobile && ctx.isOpen && (
            <div
              on={press(ctx.toggle)}
              css={css`
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.5);
                z-index: 40;
              `}
            />
          )}
          <aside
            css={css`
              display: flex;
              flex-direction: column;
              height: 100svh;
              width: var(--sidebar-width);
              background-color: var(--sidebar);
              border-right: 1px solid var(--sidebar-border);
              padding: var(--spacing-4);
              ${ctx.isMobile
                ? css`
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 50;
                    transform: ${ctx.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
                    transition: transform 0.3s ease;
                  `
                : ''}
            `}
          >
            {children}
          </aside>
        </>
      )
    }
  },
)

export const SidebarHeader = ({ children }: { children: Remix.RemixNode }) => (
  <header
    css={css`
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
      padding: var(--spacing-3);
      margin-bottom: var(--spacing-6);
    `}
  >
    {children}
  </header>
)

export const SidebarContent = ({ children }: { children: Remix.RemixNode }) => (
  <nav
    css={css`
      flex: 1;
      overflow-y: auto;
    `}
  >
    {children}
  </nav>
)

export const SidebarGroup = ({
  title,
  children,
}: {
  title?: string
  children: Remix.RemixNode
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: var(--spacing-1);
    `}
  >
    {title && (
      <h3
        css={css`
          font-size: var(--text-xs);
          font-weight: var(--font-semibold);
          color: var(--sidebar-foreground);
          padding: var(--spacing-2) var(--spacing-3);
        `}
      >
        {title}
      </h3>
    )}
    {children}
  </div>
)

export const SidebarItem = ({
  href,
  icon,
  children,
  pathname,
}: {
  href: string
  icon: Remix.RemixNode
  children: string
  pathname: string
}) => {
  const isActive = pathname === href
  return (
    <a
      href={href}
      css={css`
        ${linkStyles}
        ${isActive
          ? css`
              background-color: var(--sidebar-primary);
              color: var(--sidebar-primary-foreground);
              font-weight: var(--font-semibold);
            `
          : ''}
      `}
      data-active={isActive.toString()}
    >
      {icon}
      <span>{children}</span>
    </a>
  )
}

export const SidebarFooter = ({ children }: { children: Remix.RemixNode }) => (
  <footer
    css={css`
      padding-top: var(--spacing-4);
      border-top: 1px solid var(--sidebar-border);
      display: flex;
      flex-direction: column;
      gap: var(--spacing-1);
    `}
  >
    {children}
  </footer>
)

export const SidebarTrigger = hydrated(
  routes.assets.href({ path: '_sidebar.js#SidebarTrigger' }),
  function (this: Remix.Handle, _props: {}) {
    return () => {
      const ctx = this.context.get(LayoutKey) as SidebarContext | undefined
      if (!ctx) return null

      return (
        <button
          on={press(ctx.toggle)}
          css={css`
            display: ${ctx.isMobile ? 'block' : 'none'};
            background: transparent;
            border: none;
            cursor: pointer;
            padding: var(--spacing-2);
            border-radius: var(--radius);
            color: var(--foreground);
          `}
          aria-label="Toggle sidebar"
        >
          <SidebarIcon />
        </button>
      )
    }
  },
)
