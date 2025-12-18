import { Button } from '#/components/button'
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
    content: 'Forgot your password? Reset it securely for your Inventory Management account.',
  },
])

export function ForgotPasswordView(props: Flash) {
  return (
    <Document title="Forgot Password" meta={meta}>
      <AuthLayout>
        <AuthFormLayout {...props}>
          <AuthHeader
            title={'Forgot Password'}
            message={'Enter your email to receive a password reset link.'}
          />
          <AuthForm method={'POST'} action={routes.auth.forgotPassword.action.href()}>
            <AuthLabel>
              <span class={'label'}>Email</span>
              <Input type={'email'} name={'email'} placeholder={'Enter your email'} required />
            </AuthLabel>

            <Button type={'submit'}>Get Reset Link</Button>
          </AuthForm>
          <p css={{ textAlign: 'center' }}>
            Go back to{' '}
            <a href={routes.auth.login.index.href()}>
              <strong css={{ color: 'var(--color-primary)' }}>Log in</strong>
            </a>
          </p>
        </AuthFormLayout>
      </AuthLayout>
    </Document>
  )
}
