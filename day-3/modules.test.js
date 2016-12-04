const { isTriangle } = require('./modules')

test('is not a triangle', () => {
  const triangle = [5, 10, 25]

  const itIs = isTriangle(triangle)

  expect(itIs).toBe(false)
})

test('it is a triangle', () => {
  const triangle = [1, 1, 1]

  const itIs = isTriangle(triangle)

  expect(itIs).toBe(true)
})
