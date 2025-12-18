import { type } from 'arktype'

export const flash = type({ message: 'string?', type: "'success' | 'info' | 'warning' | 'error'?" })

export type Flash = typeof flash.infer
