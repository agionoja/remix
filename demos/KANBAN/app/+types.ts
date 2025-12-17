import { type Remix } from '@remix-run/dom'

export type CSS = Remix.Props<'div'>['css']

export type CSSValue = CSS | (() => CSS)

export type CSSMap = { [K in string]: CSSValue }
