import { css } from './css'
import { describe, it } from 'node:test'
import assert from 'node:assert'

describe('css utility', () => {
  describe('basic declarations', () => {
    it('parses single declaration', () => {
      const result = css`
        color: red;
      `
      assert.deepEqual(result, { color: 'red' })
    })

    it('parses multiple declarations', () => {
      const result = css`
        color: red;
        font-size: 16px;
      `
      assert.deepEqual(result, { color: 'red', fontSize: '16px' })
    })

    it('handles declarations without trailing semicolon', () => {
      const result = css`
        color: blue;
      `
      assert.deepEqual(result, { color: 'blue' })
    })

    it('converts kebab-case to camelCase', () => {
      const result = css`
        background-color: yellow;
        border-radius: 4px;
      `
      assert.deepEqual(result, { backgroundColor: 'yellow', borderRadius: '4px' })
    })

    it('preserves complex values', () => {
      const result = css`
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      `
      assert.deepEqual(result, { boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' })
    })
  })

  describe('nested selectors', () => {
    it('parses &:hover selector', () => {
      const result = css`
        color: blue;
        &:hover {
          color: red;
        }
      `
      assert.deepEqual(result, {
        color: 'blue',
        '&:hover': {
          color: 'red',
        },
      })
    })

    it('parses multiple nested selectors', () => {
      const result = css`
        color: blue;
        &:hover {
          color: red;
        }
        &:focus {
          outline: 2px solid blue;
        }
      `
      assert.deepEqual(result, {
        color: 'blue',
        '&:hover': {
          color: 'red',
        },
        '&:focus': {
          outline: '2px solid blue',
        },
      })
    })
  })

  describe('attribute selectors', () => {
    it('parses data attributes', () => {
      const result = css`
        color: blue;
        &[data-active] {
          color: red;
        }
      `
      assert.deepEqual(result, {
        color: 'blue',
        '&[data-active]': {
          color: 'red',
        },
      })
    })

    it('parses arbitrary attributes', () => {
      const result = css`
        &[aria-expanded='true'] {
          background: blue;
        }
      `
      assert.deepEqual(result, {
        "&[aria-expanded='true']": {
          background: 'blue',
        },
      })
    })
  })
})

describe('pseudo-classes and pseudo-elements', () => {
  it('parses pseudo-classes', () => {
    const result = css`
      &:focus {
        outline: 2px solid blue;
      }
      &::before {
        content: '';
      }
    `
    assert.deepEqual(result, {
      '&:focus': {
        outline: '2px solid blue',
      },
      '&::before': {
        content: "''",
      },
    })
  })
})

describe('class selectors', () => {
  it('parses class selectors', () => {
    const result = css`
      .button {
        color: red;
      }
    `
    assert.deepEqual(result, {
      '.button': {
        color: 'red',
      },
    })
  })
})

describe('complex nesting', () => {
  it('handles deep nesting', () => {
    const result = css`
      color: blue;
      .container {
        padding: 10px;
        &:hover {
          background: gray;
          .child {
            color: red;
            &:focus {
              outline: 1px solid black;
            }
          }
        }
      }
    `
    assert.deepEqual(result, {
      color: 'blue',
      '.container': {
        padding: '10px',
        '&:hover': {
          background: 'gray',
          '.child': {
            color: 'red',
            '&:focus': {
              outline: '1px solid black',
            },
          },
        },
      },
    })
  })
})

describe('media queries', () => {
  it('parses simple media query', () => {
    const result = css`
      color: blue;
      @media (min-width: 768px) {
        color: red;
      }
    `
    assert.deepEqual(result, {
      color: 'blue',
      '@media (min-width: 768px)': {
        color: 'red',
      },
    })
  })

  it('parses media queries with nested selectors', () => {
    const result = css`
      color: blue;
      @media (min-width: 768px) {
        color: red;
        &:hover {
          color: green;
        }
        .child {
          margin: 10px;
        }
      }
    `
    assert.deepEqual(result, {
      color: 'blue',
      '@media (min-width: 768px)': {
        color: 'red',
        '&:hover': {
          color: 'green',
        },
        '.child': {
          margin: '10px',
        },
      },
    })
  })
})

describe('edge cases', () => {
  it('handles empty input', () => {
    const result = css``
    assert.deepEqual(result, {})
  })

  it('handles whitespace', () => {
    const result = css`
      color: red;

      font-size: 16px;
    `
    assert.deepEqual(result, { color: 'red', fontSize: '16px' })
  })
})
