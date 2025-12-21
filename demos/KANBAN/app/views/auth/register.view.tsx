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
      'Create your Inventory Management account. Sign up to manage orders, products, suppliers, and reports.',
  },
])

export function RegisterView(props: Flash) {
  return (
    <Document title="Register" meta={meta}>
      <AuthLayout>
        <AuthFormLayout {...props}>
          <AuthHeader title={'Create an account'} message={'Start your 30 day free trial'} />
          <AuthForm method={'POST'} action={routes.auth.register.action.href()}>
            <AuthLabel>
              <span class={'label'}>Name*</span>
              <Input
                type={'text'}
                name={'name'}
                placeholder={'Enter your name'}
                required
                autoComplete={'name'}
              />
            </AuthLabel>

            <AuthLabel>
              <span class={'label'}>Email*</span>
              <Input
                type={'email'}
                name={'email'}
                placeholder={'Enter your email'}
                required
                autoComplete={'email'}
              />
            </AuthLabel>

            <AuthLabel>
              <span class={'label'}>Password*</span>
              <Input
                type={'password'}
                name={'password'}
                placeholder={'Enter your password'}
                required
                autoComplete={'current-password'}
                minLength={8}
              />
            </AuthLabel>

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

            <Button type={'submit'}>Sign up</Button>
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
              <span>Sign up with Google</span>
            </Button>
          </form>

          <p
            css={css`
              text-align: center;
            `}
          >
            Already have an account?{' '}
            <a href={routes.auth.login.index.href()}>
              <strong class="link-primary">Log in</strong>
            </a>
          </p>
        </AuthFormLayout>
      </AuthLayout>
    </Document>
  )
}
