import { env } from '#/utils/env'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createCookie } from '@remix-run/cookie'
import { createFsSessionStorage } from '@remix-run/session/fs-storage'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const sessionCookie = createCookie('_session', {
  path: '/',
  httpOnly: true,
  sameSite: 'Lax',
  maxAge: 2592000, // 30 days
  secure: env.NODE_ENV === 'production',
  secrets: [env.SESSION_SCRT],
})

export const sessionStorage = createFsSessionStorage(
  path.resolve(__dirname, '..', '..', 'tmp', 'sessions'),
)
