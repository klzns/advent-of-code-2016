const { isTriangle } = require('./modules')

describe('Day 3 - Modules', () => {
  it('is not a triangle', () => {
    const triangle = [5, 10, 25]

    const itIs = isTriangle(triangle)

    expect(itIs).toBe(false)
  })

  it('is a triangle', () => {
    const triangle = [1, 1, 1]

    const itIs = isTriangle(triangle)

    expect(itIs).toBe(true)
  })
})
