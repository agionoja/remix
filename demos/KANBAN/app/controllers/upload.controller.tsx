import type { routes } from '#/🔄'
import type { BuildAction } from '@remix-run/fetch-router'

export const uploadController: BuildAction<'GET', typeof routes.uploads> = async () => {
  return new Response('')
}
