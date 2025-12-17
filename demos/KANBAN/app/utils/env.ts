import { type } from 'arktype'
import * as process from 'node:process'

const _env = type({
  NODE_ENV: '"production" | "development" | "test"',
  SESSION_SCRT: 'string',
  DATABASE_URL: 'string',
  PORT: type('string.integer.parse'),
})

export const env = _env.assert(process.env)
