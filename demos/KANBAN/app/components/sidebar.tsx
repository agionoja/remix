// sidebar.tsx
import { css } from '#/utils/css'
import { type Remix } from '@remix-run/dom'

const SIDEBAR_WIDTH = 'var(--sidebar-width)'

export function Sidebar({ css: _css, ...rest }: Remix.Props<'aside'>) {
  return (
    <aside
      {...rest}
      css={{
        ...css`
          display: flex;
          flex-direction: column;
          height: 100svh;
          width: ${SIDEBAR_WIDTH};
          background-color: var(--sidebar);
          border-right: 1px solid var(--sidebar-border);
          padding: var(--spacing-4);
        `,
        ..._css,
      }}
    />
  )
}

export function SidebarHeader({ css: _css, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          padding: var(--spacing-3);
          margin-bottom: var(--spacing-6);
        `,
        ..._css,
      }}
    />
  )
}

export function SidebarContent({ css: _css, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        `,
        ..._css,
      }}
    />
  )
}

export function SidebarGroup({ css: _css, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        `,
        ..._css,
      }}
    />
  )
}

export function SidebarGroupLabel({ css: _css, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          padding: 0 var(--spacing-3);
          font-size: var(--text-xs);
          font-weight: var(--font-semibold);
          color: var(--sidebar-foreground);
          opacity: 0.6;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        `,
        ..._css,
      }}
    />
  )
}

export function SidebarGroupContent({ css: _css, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          display: flex;
          flex-direction: column;
        `,
        ..._css,
      }}
    />
  )
}

export function SidebarMenu({ css: _css, ...rest }: Remix.Props<'ul'>) {
  return (
    <ul
      {...rest}
      css={{
        ...css`
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
          list-style: none;
          padding: 0;
          margin: 0;
        `,
        ..._css,
      }}
    />
  )
}

export function SidebarMenuItem({ css: _css, ...rest }: Remix.Props<'li'>) {
  return (
    <li
      {...rest}
      css={{
        ...css`
          padding: 0 var(--spacing-2);
        `,
        ..._css,
      }}
    />
  )
}

export function SidebarMenuButton({
  css: _css,
  isActive = false,
  asChild = false,
  children,
  href,
  ...rest
}: Remix.Props<'a'> & { isActive?: boolean; asChild?: boolean }) {
  const styles = {
    ...css`
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
      width: 100%;
      padding: var(--spacing-3);
      border-radius: var(--radius);
      font-size: var(--text-sm);
      font-weight: var(--font-medium);
      color: var(--sidebar-foreground);
      text-decoration: none;
      transition:
        background-color var(--transition-fast),
        color var(--transition-fast);
      cursor: pointer;
      border: none;
      background: transparent;
      text-align: left;

      &:hover {
        background-color: var(--sidebar-accent);
        color: var(--sidebar-accent-foreground);
      }

      &[aria-current='page'] {
        background-color: var(--sidebar-primary);
        color: var(--sidebar-primary-foreground);
        font-weight: var(--font-semibold);
      }
    `,
    ..._css,
  }

  if (asChild) {
    const child = children as any
    return <child.type {...child.props} css={styles} />
  }

  return (
    <a {...rest} href={href} css={styles} aria-current={isActive ? 'page' : undefined}>
      {children}
    </a>
  )
}
export function SidebarFooter({ css: _css, ...rest }: Remix.Props<'div'>) {
  return (
    <div
      {...rest}
      css={{
        ...css`
          padding-top: var(--spacing-4);
          border-top: 1px solid var(--sidebar-border);
          margin-top: auto;
        `,
        ..._css,
      }}
    />
  )
}
