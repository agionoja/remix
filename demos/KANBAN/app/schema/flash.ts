import { type } from 'arktype'

export const flash = type({ message: 'string?', type: "'success' | 'destructive' | 'warning'?" })

export type Flash = typeof flash.infer
