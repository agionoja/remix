import type { CSS } from '#/+types'

export type DOMStyleProperties = {
  [K in keyof Omit<
    CSSStyleDeclaration,
    'item' | 'setProperty' | 'removeProperty' | 'getPropertyValue' | 'getPropertyPriority'
  >]?: string | number | null
}



const kebabToCamel = (str: string): string =>
  str.replace(/-([a-z0-9])/g, (_, letter) => letter.toUpperCase()).trim()

export function css(strings: TemplateStringsArray, ...values: any[]): CSS {
  const fullString = strings.reduce((acc, str, i) => acc + str + (values[i] ?? ''), '')
  return parseCSS(fullString)
}

function parseCSS(cssString: string): CSS {
  const result: any = {}
  const stack: any[] = [result]
  let currentBuffer = ''

  for (let i = 0; i < cssString.length; i++) {
    const char = cssString[i]

    if (char === '{') {
      // 1. Entering a new block (Nested Selector or At-Rule)
      const selector = currentBuffer.trim()
      const newObj = {}
      stack[stack.length - 1][selector] = newObj
      stack.push(newObj)
      currentBuffer = ''
    } else if (char === '}') {
      // 2. Closing a block (process any remaining declaration inside)
      if (currentBuffer.trim()) {
        processDeclaration(currentBuffer, stack[stack.length - 1])
      }
      stack.pop()
      currentBuffer = ''
    } else if (char === ';') {
      // 3. End of a single declaration
      processDeclaration(currentBuffer, stack[stack.length - 1])
      currentBuffer = ''
    } else {
      currentBuffer += char
    }
  }

  // Handle remaining buffer (if no trailing semicolon)
  if (currentBuffer.trim()) {
    processDeclaration(currentBuffer, stack[0])
  }

  return result
}

function processDeclaration(raw: string, targetObj: any) {
  const trimmed = raw.trim()
  if (!trimmed || !trimmed.includes(':')) return

  // Split only on the first colon to preserve colons in values (e.g., URLs or data-URIs)
  const colonIndex = trimmed.indexOf(':')
  const property = trimmed.slice(0, colonIndex).trim()
  const value = trimmed.slice(colonIndex + 1).trim()

  if (property && value) {
    targetObj[kebabToCamel(property)] = value
  }
}
