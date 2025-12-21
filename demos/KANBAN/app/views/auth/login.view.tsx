import { Button } from '#/components/button'
import { GoogleIcon } from '#/components/icons'
import { Input } from '#/components/input'
import { Document } from '#/components/layout'
import type { Flash } from '#/schema/flash'
import { createMeta } from '#/utils/meta'
import { css } from '#/utils/css'
import {
  AuthForm,
  AuthFormLayout,
  AuthHeader,
  AuthLayout,
  AuthLabel,
} from '#/views/auth/components'
import { routes } from '#/routes'

const meta = createMeta([
  {
    name: 'description',
    content:
      'Secure login to your Inventory Management dashboard. Access orders, products, suppliers, and reports.',
  },
])

export function LoginView({ action, ...rest }: { action: string } & Flash) {
  return (
    <Document title="Login" meta={meta}>
      <AuthLayout>
        <AuthFormLayout {...rest}>
          <AuthHeader
            title={'Login in to your account'}
            message={'Welcome back! Please enter your details'}
          />
          <AuthForm method={'POST'} action={action}>
            <AuthLabel>
              <span class={'label'}>Email</span>
              <Input
                type={'email'}
                name={'email'}
                placeholder={'Enter your email'}
                required
                autoComplete={'email'}
              />
            </AuthLabel>

            <AuthLabel>
              <span class={'label'}>Password</span>
              <Input
                type={'password'}
                name={'password'}
                placeholder={'Enter your password'}
                required
                minLength={8}
                autoComplete={'current-password'}
              />
            </AuthLabel>

            <div
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <label>
                <input
                  type="checkbox"
                  name={'remember'}
                  css={css`
                    margin-right: var(--spacing-2);
                  `}
                />
                <span class={'label'}>Remember for 30 days</span>
              </label>

              <a class="link-primary" href={routes.auth.forgotPassword.index.href()}>
                <strong>Forgot Password</strong>
              </a>
            </div>

            <Button type={'submit'}>Sign in</Button>
          </AuthForm>

          <form method={'GET'} action={routes.auth.providers.google.login.href()}>
            <Button
              type={'submit'}
              variant={'secondary'}
              css={css`
                display: flex;
                gap: var(--spacing-4);
                justify-content: center;
                align-items: center;
                width: 100%;
              `}
            >
              <GoogleIcon />
              <span>Sign in with Google</span>
            </Button>
          </form>

          <p
            css={css`
              text-align: center;
            `}
          >
            Don't have an account?{' '}
            <a href={routes.auth.register.index.href()}>
              <strong class="link-primary">Sign up</strong>
            </a>
          </p>
        </AuthFormLayout>
      </AuthLayout>
    </Document>
  )
}
