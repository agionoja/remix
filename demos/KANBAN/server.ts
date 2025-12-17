import 'dotenv/config'
import { env } from '#/utils/env'
import * as http from 'node:http'
import { createRequestListener } from '@remix-run/node-fetch-server'
import { router } from './router'

let server = http.createServer(
  createRequestListener(async (request) => {
    try {
      return await router.fetch(request)
    } catch (error) {
      console.error(error)
      return new Response('Internal Server Error', { status: 500 })
    }
  }),
)

server.listen(env.PORT, () => {
  console.log(`Inventory Management Demo is running on http://localhost:${env.PORT}`)
  console.log('')
  console.log('Demo accounts:')
  console.log('  Admin:    admin@inventory.com / admin123')
  console.log('  Manager: manager@inventory.com / manager123')
  console.log('')
})

let shuttingDown = false

function shutdown() {
  if (shuttingDown) return
  shuttingDown = true
  server.close(() => {
    process.exit(0)
  })
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
