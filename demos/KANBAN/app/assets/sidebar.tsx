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
import { routes } from '#/🔄'
import { type Remix } from '@remix-run/dom'

const _css = {
  item__link: {
    display: 'flex',
    padding: 'var(--space-4)',
    gap: 'var(--space-4)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    borderRadius: 'var(--radius-base)',
    transition: 'background-color var(--transition-base)',
    color: 'var(--foreground-muted)',
    '&:hover': {
      backgroundColor: 'var(--background-hover)',
      color: 'var(--foreground)',
    },
    '&:active': {
      backgroundColor: 'var(--background-active)',
    },
    '&[aria-current="page"]': {
      backgroundColor: 'var(--background-active)',
      color: 'var(--primary)',
      fontWeight: 'var(--font-weight-semibold)',
    },
  },
}

export function Sidebar({ css = {}, ...rest }: Remix.Props<'aside'>) {
  return (
    <aside
      {...rest}
      css={{
        display: 'flex',
        padding: 'var(--space-4)',
        height: '100svh',
        width: '100%',
        backgroundColor: 'var(--surface-sidebar)',
        borderRight: '1px solid var(--border)',
        ...css,
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '100%',
          width: '100%',
          gap: 'var(--space-8)',
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-8)',
            overflow: 'auto',
          }}
        >
          <header
            css={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              backgroundColor: 'var(--surface-sidebar)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-4)',
              padding: 'var(--space-4)',
            }}
          >
            <LogoIcon />
            <h2
              css={{
                color: 'var(--primary)',
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-bold)',
              }}
            >
              KABAN
            </h2>
          </header>

          <nav>
            <ul css={{ display: 'flex', gap: 'var(--space-2)', flexDirection: 'column' }}>
              <li>
                <a css={_css.item__link} href={routes.admin.dashboard.index.href()}>
                  <HomeIcon />
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a css={_css.item__link} href={routes.admin.inventory.index.href()}>
                  <InventoryIcon />
                  <span>Inventory</span>
                </a>
              </li>
              <li>
                <a css={_css.item__link} href={routes.admin.report.index.href()}>
                  <ReportIcon />
                  <span>Reports</span>
                </a>
              </li>
              <li>
                <a css={_css.item__link} href={routes.admin.suppliers.index.href()}>
                  <UserIcon />
                  <span>Suppliers</span>
                </a>
              </li>
              <li>
                <a css={_css.item__link} href={routes.admin.orders.index.href()}>
                  <OderIcon />
                  <span>Orders</span>
                </a>
              </li>
              <li>
                <a css={_css.item__link} href={routes.admin.stores.index.href()}>
                  <StoreIcon />
                  <span>Manage Stores</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <footer
          css={{
            position: 'sticky',
            bottom: 0,
            backgroundColor: 'var(--surface-sidebar)',
            paddingTop: 'var(--space-4)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <a href={routes.admin.orders.index.href()} css={_css.item__link}>
            <SettingsIcon />
            <span>Settings</span>
          </a>
          <form method={'POST'} action={routes.auth.logout.href()}>
            <button type={'submit'} css={_css.item__link}>
              <LogoutIcon />
              <span>Log Out</span>
            </button>
          </form>
        </footer>
      </div>
    </aside>
  )
}
