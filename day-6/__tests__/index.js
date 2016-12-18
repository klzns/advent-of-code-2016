const { solvePart1, solvePart2 } = require('../part-1-2')

describe('Day 6', () => {
  describe('Part 1', () => {
    it('solve the example', () => {
      const input = require('./exampleInput')

      const message = solvePart1(input)

      expect(message).toBe('easter')
    })

    it('solve the puzzle', () => {
      const input = require('./input')

      const message = solvePart1(input)

      expect(message).toBe('kqsdmzft')
    })
  })

  describe('Part 2', () => {
    it('solve the example', () => {
      const input = require('./exampleInput')

      const message = solvePart2(input)

      expect(message).toBe('advent')
    })

    it('solve the puzzle', () => {
      const input = require('./input')

      const message = solvePart2(input)

      expect(message).toBe('tpooccyo')
    })
  })
})
