const input = require('./input')
const { distance, parseInput } = require('./modules')
const findPlaceVisitedTwice = require('./part-2-modules')

describe('Day 1 - Part 2', () => {
  it('is the right soluton', () => {
    const pos = findPlaceVisitedTwice([0, 0], 'N', parseInput(input))
    const distanceWalked = distance(pos)

    expect(distanceWalked).toBe(111)
  })
})
