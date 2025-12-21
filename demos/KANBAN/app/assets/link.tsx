// import { hydrated, type Remix } from '@remix-run/dom'
// import { dom } from '@remix-run/events'
// import { routes } from '#/routes'
//
// type LinkProps = Remix.Props<'a'> & {
//   prefetch?: 'intent' | 'render' | 'none'
// }
//
// export const Link = hydrated(
//   routes.assets.href({ path: 'link.js#Link' }),
//   function (this, { href, children, prefetch = 'intent', ...rest }: LinkProps) {
//     const prefetches = new Map<string, HTMLLinkElement>()
//
//     const prefetchResource = (url: string | undefined) => {
//       if (!url || prefetches.has(url)) return
//       console.log('Prefetching', url)
//       const link = document.createElement('link')
//       link.rel = 'prefetch'
//       link.href = url
//       link.as = 'document' // Assuming page navigation
//       document.head.appendChild(link)
//       prefetches.set(url, link)
//     }
//
//     const removePrefetch = (url: string | undefined) => {
//       if (!url) return
//       console.log('Removing prefetch for', url)
//       const link = prefetches.get(url)
//       if (link) {
//         document.head.removeChild(link)
//         prefetches.delete(url)
//       }
//     }
//
//     // Prefetch on render if specified
//     if (prefetch === 'render') {
//       this.queueTask(() => prefetchResource(href))
//     }
//
//     // Cleanup when component is unmounted
//     this.signal.addEventListener('abort', () => {
//       prefetches.forEach((link) => document.head.removeChild(link))
//       prefetches.clear()
//     })
//
//
//     // The component's render function.
//     return () => (
//       <a href={href} {...rest} on={prefetch === 'intent' ? [
//         dom.mouseenter(()=>prefetchResource(href)),
//         dom.mouseleave(()=>removePrefetch(href)),
//         dom.focus(()=>prefetchResource(href)), // <-- FIX: This was incorrectly removing the prefetch.
//         dom.blur(()=>removePrefetch(href)),
//       ] : undefined}>
//         {children}
//       </a>
//     )
//   },
// )
