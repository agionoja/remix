import { Button } from '#/components/button'
import { GoogleIcon } from '#/components/icons'
import { Input } from '#/components/input'
import { Document } from '#/components/layout'
import type { Flash } from '#/schema/flash'
import { createMeta } from '#/utils/meta'
import {
  AuthForm,
  AuthFormLayout,
  AuthHeader,
  AuthLayout,
  AuthLabel,
} from '#/views/auth/components'
import { routes } from '#/🔄'

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

            <div css={{ display: 'flex', justifyContent: 'space-between' }}>
              <label>
                <input type="checkbox" name={'remember'} css={{ marginRight: 'var(--space-2)' }} />
                <span class={'label'}>Remember for 30 days</span>
              </label>

              <a
                css={{ color: 'var(--color-primary)' }}
                href={routes.auth.forgotPassword.index.href()}
              >
                Forgot Password
              </a>
            </div>

            <Button type={'submit'}>Sign in</Button>
          </AuthForm>

          <form method={'GET'} action={routes.auth.providers.google.login.href()}>
            <Button
              type={'submit'}
              variant={'secondary'}
              css={{
                display: 'flex',
                gap: 'var(--space-4)',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
             <GoogleIcon/>
              <span>Sign in with Google</span>
            </Button>
          </form>

          <p css={{ textAlign: 'center' }}>
            Don't have an account?{' '}
            <a href={routes.auth.register.index.href()}>
              <strong css={{ color: 'var(--primary)' }}>Sign up</strong>
            </a>
          </p>
        </AuthFormLayout>
      </AuthLayout>
    </Document>
  )
}
