import {
  HomeIcon,
  InventoryIcon,
  LogoIcon,
  LogoutIcon,
  OderIcon,
  ReportIcon,
  SettingsIcon,
  StoreIcon,
  UserIcon,
} from '#/components/icons'
import { css } from '#/utils/css'
import { routes } from '#/🔄'
import type { Remix } from '@remix-run/dom'

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
  &[aria-current='page'] {
    background-color: var(--sidebar-primary);
    color: var(--sidebar-primary-foreground);
    font-weight: var(--font-semibold);
  }
`

export function Sidebar({ css: _css = {}, url, ...rest }: Remix.Props<'aside'> & { url: URL }) {
  const isActive = (href: string) => url.pathname === href

  return (
    <aside
      {...rest}
      css={{
        ...css`
          display: flex;
          flex-direction: column;
          height: 100svh;
          width: var(--sidebar-width);
          background-color: var(--sidebar);
          border-right: 1px solid var(--sidebar-border);
          padding: var(--spacing-4);
        `,
        ..._css,
      }}
    >
      <header
        css={css`
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          padding: var(--spacing-3);
          margin-bottom: var(--spacing-6);
        `}
      >
        <LogoIcon />
        <h2
          css={css`
            color: var(--sidebar-primary);
            font-size: var(--text-xl);
            font-weight: var(--font-bold);
          `}
        >
          KABAN
        </h2>
      </header>

      <nav
        css={css`
          flex: 1;
          overflow-y: auto;
        `}
      >
        <ul
          css={css`
            display: flex;
            gap: var(--spacing-1);
            flex-direction: column;
          `}
        >
          <li>
            <a
              css={linkStyles}
              href={routes.admin.dashboard.index.href()}
              aria-current={isActive(routes.admin.dashboard.index.href()) ? 'page' : undefined}
            >
              <HomeIcon />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              css={linkStyles}
              href={routes.admin.inventory.index.href()}
              aria-current={isActive(routes.admin.inventory.index.href()) ? 'page' : undefined}
            >
              <InventoryIcon />
              <span>Inventory</span>
            </a>
          </li>
          <li>
            <a
              css={linkStyles}
              href={routes.admin.report.index.href()}
              aria-current={isActive(routes.admin.report.index.href()) ? 'page' : undefined}
            >
              <ReportIcon />
              <span>Reports</span>
            </a>
          </li>
          <li>
            <a
              css={linkStyles}
              href={routes.admin.suppliers.index.href()}
              aria-current={isActive(routes.admin.suppliers.index.href()) ? 'page' : undefined}
            >
              <UserIcon />
              <span>Suppliers</span>
            </a>
          </li>
          <li>
            <a
              css={linkStyles}
              href={routes.admin.orders.index.href()}
              aria-current={isActive(routes.admin.orders.index.href()) ? 'page' : undefined}
            >
              <OderIcon />
              <span>Orders</span>
            </a>
          </li>
          <li>
            <a
              css={linkStyles}
              href={routes.admin.stores.index.href()}
              aria-current={isActive(routes.admin.stores.index.href()) ? 'page' : undefined}
            >
              <StoreIcon />
              <span>Manage Stores</span>
            </a>
          </li>
        </ul>
      </nav>

      <footer
        css={css`
          padding-top: var(--spacing-4);
          border-top: 1px solid var(--sidebar-border);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        `}
      >
        <a
          css={linkStyles}
          href={routes.account.settings.href()}
          aria-current={isActive(routes.account.settings.href()) ? 'page' : undefined}
        >
          <SettingsIcon />
          <span>Settings</span>
        </a>
        <form method="POST" action={routes.auth.logout.href()}>
          <button type="submit" css={linkStyles}>
            <LogoutIcon />
            <span>Log Out</span>
          </button>
        </form>
      </footer>
    </aside>
  )
}
