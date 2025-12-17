import adminController from '#/controllers/admin.controller'
import authController from '#/controllers/auth.controller'
import { playgroundController } from '#/controllers/playground.controller'
import { uploadController } from '#/controllers/upload.controller'
import { env } from '#/utils/env'
import { sessionCookie, sessionStorage } from '#/utils/session'
import { routes } from '#/🔄'
import { asyncContext } from '@remix-run/async-context-middleware'
import { compression } from '@remix-run/compression-middleware'
import { createRouter } from '@remix-run/fetch-router'
import { formData } from '@remix-run/form-data-middleware'
import { logger } from '@remix-run/logger-middleware'
import { methodOverride } from '@remix-run/method-override-middleware'
import { session } from '@remix-run/session-middleware'
import { staticFiles } from '@remix-run/static-middleware'

export const router = createRouter({
  middleware: [
    logger({ colors: true }),
    compression(),
    staticFiles('./public', {
      cacheControl:
        env.NODE_ENV === 'production' ? 'public, max-age=31536000, immutable' : 'no-cache',
    }),
    formData(),
    methodOverride(),
    session(sessionCookie, sessionStorage),
    asyncContext(),
  ],
})

router.map(routes.playground, playgroundController)
router.map(routes.uploads, uploadController)
router.map(routes.admin, adminController)
router.map(routes.auth, authController)
