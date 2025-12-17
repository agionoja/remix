import type { Remix } from '@remix-run/dom'

type Meta = Remix.Props<'meta'>

export const globalMeta: Meta[] = [
  {
    name: 'author',
    content: 'Inventory Management Team',
  },
  {
    name: 'description',
    content:
      'Comprehensive inventory management system for tracking orders, products, suppliers, and reports.',
  },
  {
    name: 'keywords',
    content: 'inventory, management, orders, products, suppliers, reports',
  },
]

export function createMeta(pageMeta: Meta[] = []) {
  return [...globalMeta, ...pageMeta]
}
