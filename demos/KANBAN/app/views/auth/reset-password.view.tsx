import { Button } from '#/components/button'
import { Input } from '#/components/input'
import { Document } from '#/components/layout'
import type { Flash } from '#/schema/flash'
import { createMeta } from '#/utils/meta'
import { css } from '#/utils/css'
import {
  AuthForm,
  AuthFormLayout,
  AuthHeader,
  AuthLabel,
  AuthLayout,
} from '#/views/auth/components'
import { routes } from '#/🔄'

const meta = createMeta([
  {
    name: 'description',
    content: 'Set a new password for your Inventory Management account securely.',
  },
])

export function ResetPasswordView({ action, ...rest }: { action: string } & Flash) {
  return (
    <Document title="Reset Password" meta={meta}>
      <AuthLayout>
        <AuthFormLayout {...rest}>
          <AuthHeader
            title={'Reset Password'}
            message={'Click the button below to reset your password.'}
          />
          <AuthForm method={'POST'} action={action}>
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

            <AuthLabel>
              <span class={'label'}>Confirm Password</span>
              <Input
                type={'password'}
                name={'confirmPassword'}
                placeholder={'Enter your password'}
                required
                minLength={8}
                autoComplete={'current-password'}
              />
            </AuthLabel>
            <Button type={'submit'}>Reset Password</Button>
          </AuthForm>

          <p
            css={css`
              text-align: center;
            `}
          >
            Go back to{' '}
            <a href={routes.auth.login.index.href()}>
              <strong class="link-primary">Log in</strong>
            </a>
          </p>
        </AuthFormLayout>
      </AuthLayout>
    </Document>
  )
}
