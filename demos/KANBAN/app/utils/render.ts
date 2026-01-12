import { resolveFrame } from '#/utils/frame'
import type { Remix } from 'remix/dom'
import { renderToStream } from '@remix-run/dom/server'
import { createHtmlResponse } from 'remix/response/html'

export function render(element: Remix.RemixElement, init?: ResponseInit) {
  return createHtmlResponse(renderToStream(element, { resolveFrame }), init)
}
