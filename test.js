import assert from 'node:assert'
import curry from './index.js'

const add = (a, b) => a + b
const multiply = (a, b) => a * b
const message = (prefix, message, person) => `${prefix} ${message} ${person}`
const compose = (...fns) => val => fns.reduce((curr, f) => f(curr), val)

describe('curri', () => {
  it('simple curry', () => {
    const add3 = curry(add)(3)
    assert.equal(8, add3(5))
  })

  it('simple curry (spread)', () => {
    const add3 = curry(add, 3)
    assert.equal(8, add3(5))
  })

  it('complex curry', () => {
    const addAndMultiply = compose(curry(add, 1), curry(multiply, 2))
    assert.equal(addAndMultiply(1), 4)
  })

  it('complex curry multiple arguments', () => {
    const welcome = curry(message)('hello', 'dear')
    assert.equal(welcome('developer'), 'hello dear developer')
  })

  it('complex curry multiple arguments (spread)', () => {
    const welcome = curry(message, 'hello', 'dear')
    assert.equal(welcome('developer'), 'hello dear developer')
  })
})
