export function resolveFrame(src: string) {
  let url = new URL(src, 'http://localhost:44000')

  return <>Frame</>
  // throw new Error(`Failed to fetch ${src}`)
}
