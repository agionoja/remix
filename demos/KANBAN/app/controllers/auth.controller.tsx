import { flash } from '#/schema/flash'
import { render } from '#/utils/render'
import { ForgotPasswordView } from '#/views/auth/forgot-password.view'
import { LoginView } from '#/views/auth/login.view'
import { RegisterView } from '#/views/auth/register.view'
import { ResetPasswordView } from '#/views/auth/reset-password.view'
import { routes } from '#/🔄'
import type { Controller } from '@remix-run/fetch-router'
import { createRedirectResponse } from '@remix-run/response/redirect'

export default {
  logout(ctx) {
    ctx.session.destroy()
    return createRedirectResponse(routes.auth.login.index.href())
  },

  login: {
    index(ctx) {
      let authFlash = flash.assert(ctx.session.get('flash') || {})
      let action = routes.auth.login.action.href(undefined, {
        returnTo: ctx.url.searchParams.get('returnTo'),
      })

      return render(<LoginView {...authFlash} action={action} />)
    },

    action(ctx) {
      const redirectTo = ctx.url.searchParams.get('redirectTo')
      return createRedirectResponse(routes.admin.dashboard.index.href())
    },
  },

  register: {
    index(ctx) {
      return render(<RegisterView />)
    },

    action(ctx) {
      return new Response('')
    },
  },

  forgotPassword: {
    index(ctx) {
      return render(<ForgotPasswordView />)
    },

    action(ctx) {
      return createRedirectResponse(
        routes.auth.resetPassword.index.href({ token: 'mixaicohl9eix2Uqu0xohDeaThaexoih' }),
      )
    },
  },

  resetPassword: {
    index(ctx) {
      return render(
        <ResetPasswordView
          action={routes.auth.resetPassword.action.href({ token: ctx.params.token })}
        />,
      )
    },

    action(ctx) {
      ctx.session.flash('flash', {
        message: 'Password reset Successfully. Log in to continue.',
        type: 'warning',
      } as typeof flash.infer)
      return createRedirectResponse(routes.auth.login.index.href())
    },
  },

  providers: {
    google: {
      login(ctx) {
        return new Response('')
      },

      callback(ctx) {
        return new Response('')
      },
    },
  },
} satisfies Controller<typeof routes.auth>
