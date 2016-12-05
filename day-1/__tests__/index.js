const input = require('../input')
const { distance, parseInput } = require('../modules')
const walkPath = require('../part-1-modules')
const findPlaceVisitedTwice = require('../part-2-modules')

describe('Day 1', () => {
  describe('Modules', () => {
    it('should parse the input', () => {
      const input = 'R4, R3, L331, L21, L1'

      const result = parseInput(input)

      expect(result).toEqual(['R4', 'R3', 'L331', 'L21', 'L1'])
    })
  })

  describe('Part 1', () => {
    it('is the right soluton', () => {
      const pos = walkPath([0, 0], 'N', parseInput(input))
      const distanceWalked = distance(pos)

      expect(distanceWalked).toBe(288)
    })
  })

  describe('Part 2', () => {
    it('is the right soluton', () => {
      const pos = findPlaceVisitedTwice([0, 0], 'N', parseInput(input))
      const distanceWalked = distance(pos)

      expect(distanceWalked).toBe(111)
    })
  })
})
