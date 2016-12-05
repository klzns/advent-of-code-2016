const input = require('../input')
const { parseInputCol, parseInputRow, isTriangle } = require('../modules')

describe('Day 3', () => {
  describe('Modules', () => {
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

  describe('Part 1', () => {
    it('is the right solution', () => {
      const result = parseInputRow(input).filter(isTriangle).length

      expect(result).toBe(1050)
    })
  })

  describe('Part 2', () => {
    it('is the right solution', () => {
      const result = parseInputCol(input).filter(isTriangle).length

      expect(result).toBe(1921)
    })
  })
})

