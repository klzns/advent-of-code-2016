const input = require('./input')
const { distance, parseInput } = require('./modules')
const walkPath = require('./part-1-modules')

describe('Day 1 - Part 1', () => {
  it('is the right soluton', () => {
    const pos = walkPath([0, 0], 'N', parseInput(input))
    const distanceWalked = distance(pos)

    expect(distanceWalked).toBe(288)
  })
})
