import { createRouter, redirect } from 'remix'
import { asyncContext } from 'remix/async-context-middleware'
import { compression } from 'remix/compression-middleware'
import { formData } from 'remix/form-data-middleware'
import { logger } from 'remix/logger-middleware'
import { methodOverride } from 'remix/method-override-middleware'
import { session } from 'remix/session-middleware'
import { staticFiles } from 'remix/static-middleware'

import { uploadAction } from '#/controllers/upload.controller'
import { playgroundAction } from '#/controllers/playground.controller'
import adminController from '#/controllers/admin.controller'
import authController from '#/controllers/auth.controller'
import { env } from '#/utils/env'
import { sessionCookie, sessionStorage } from '#/utils/session'
import { routes } from '#/routes'

let middleware = [
  logger({ colors: true }),
  staticFiles('./public', {
    cacheControl:
      env.NODE_ENV === 'production' ? 'public, max-age=31536000, immutable' : 'no-cache',
  }),
  formData(),
  methodOverride(),
  session(sessionCookie, sessionStorage),
  asyncContext(),
]

if (env.NODE_ENV === 'production') {
  compression()
}

export const router = createRouter({ middleware })

router.map('/', () => redirect(routes.admin.dashboard.index.href()))

router.map(routes.playground, playgroundAction)
router.map(routes.uploads, uploadAction)
router.map(routes.admin, adminController)
router.map(routes.auth, authController)
