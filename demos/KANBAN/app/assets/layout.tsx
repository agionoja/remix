import { routes } from '#/🔄'
import { Sidebar as Sidebar } from '#/assets/sidebar'
import { Search } from '#/components/search'
import { css } from '#/utils/css'
import { type Remix } from '@remix-run/dom'

type Props = {
  children?: Remix.RemixNode
  title?: string
  meta?: Remix.Props<'meta'>[]
  links?: Remix.Props<'link'>[]
}

function Meta({ meta }: { meta: Props['meta'] }) {
  if (meta) return meta.map((m) => <meta {...m} />)
}

function Links({ links }: { links: Props['links'] }) {
  if (links) return links.map((l) => <link {...l} />)
}

const script = String.raw

export function Document({ meta, links, children, title }: Props) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <Meta meta={meta} />
          <Links links={links} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Karla:ital,wght@0,200..800;1,200..800&display=swap"
            rel="stylesheet"
          />
          <link rel={'preload'} as={'style'} href="/styles/bundle.css" />
          <link rel="stylesheet" href="/styles/bundle.css" />
          <script>
            {script`
              (function() {
                const html = document.documentElement;
                const media = window.matchMedia('(prefers-color-scheme: dark)');

                // Initial Load
                const initialTheme = media.matches ? 'dark' : 'light';
                html.setAttribute('data-theme', initialTheme);
                // Listener
                media.addEventListener('change', (event) => {
                  const theme = event.matches ? 'dark' : 'light';
                  html.setAttribute('data-theme', theme);
                });
              })();
              
            `}
          </script>
          <script async src={routes.assets.href({ path: 'entry.js' })} type={'module'} />
          {title && <title>KANBAN - {title}</title>}
        </head>
        <body>{children}</body>
      </html>
    </>
  )
}

function Header({ children }: { children: Remix.RemixNode }) {
  return (
    <header
      css={css`
        background-color: var(--sidebar);
        padding: var(--spacing-4) var(--spacing-6);
        @media (min-width: 640px) {
          padding: var(--spacing-6) var(--spacing-8);
        }
      `}
    >
      {children}
    </header>
  )
}

function Main({ children }: { children: Remix.RemixNode }) {
  return (
    <main
      css={css`
        padding: var(--spacing-4) var(--spacing-6);
        @media (min-width: 640px) {
          padding: var(--spacing-6) var(--spacing-8);
        }
      `}
    >
      {children}
    </main>
  )
}
export function Layout({ children, pathname, ...rest }: Props & { pathname: string }) {
  return (
    <Document {...rest}>
      <div css={{ display: 'flex' }}>
        <Sidebar pathname={pathname} />
        <div
          css={css`
            background-color: var(--muted);
            border-radius: 0;
            width: 100%;
            border: 0;
          `}
        >
          <Header>
            <Search />
          </Header>
          <Main>{children}</Main>
        </div>
      </div>
    </Document>
  )
}
