const { solvePart1, solvePart2, hasABBA, supportTLS } = require('../part-1-2')

describe('Day 7', () => {
  describe('Part 1', () => {
    it('should check if it\'s an invalid ABBA', () => {
      const input = 'abcd'

      const result = hasABBA(input)

      expect(result).toBe(false)
    })

    it('should check if it\'s a valid ABBA', () => {
      const input = 'abba'

      const result = hasABBA(input)

      expect(result).toBe(true)
    })

    it('should check if it\'s a valid ABBA with length bigger than 4', () => {
      const input = 'ioxxoj'

      const result = hasABBA(input)

      expect(result).toBe(true)
    })

    it('should check if it supports TLS', () => {
      const input = 'abba[mnop]qrst'

      const result = supportTLS(input)

      expect(result).toBe(true)
    })

    it('should check if it has ABBA in hypernet', () => {
      const input = 'abcd[bddb]xyyx'

      const result = supportTLS(input)

      expect(result).toBe(false)
    })

    it('should invalidate a no ABBA IP', () => {
      const input = 'aaaa[qwer]tyui'

      const result = supportTLS(input)

      expect(result).toBe(false)
    })

    it('should validate a large first part', () => {
      const input = 'ioxxoj[asdfgh]zxcvbn'

      const result = supportTLS(input)

      expect(result).toBe(true)
    })

    it('how many IPs support TLS?', () => {
      const input = require('./input')

      const result = solvePart1(input)

      expect(result).toBe(110)
    })
  })

  describe('Part 2', () => {
    it('how many IPs support SSL?', () => {
      const input = require('./input')

      const result = solvePart2(input)

      expect(result).toBe(242)
    })
  })
})
