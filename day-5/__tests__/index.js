const { genHash, hash, findInterestingHash, findPasswordPart1, findPasswordPart2 } = require('../part-1-2')

describe('Day 5', () => {
  it('should hash', () => {
    const doorId = 'abc'
    const index = 3231929

    const digest = hash(doorId, index)

    expect(digest).toBe('00000155f8105dff7f56ee10fa9b9abd')
  })

  it('generate hash', () => {
    const doorId = 'abc'
    const gen = genHash(doorId)

    const firstResult = gen.next().value
    const secondResult = gen.next().value

    expect(firstResult).toBe('577571be4de9dcce85a041ba0410f29f')
    expect(secondResult).toBe('23734cd52ad4a4fb877d8a1e26e5df5f')
  })

  it('find interesting hash', () => {
    const doorId = 'abc'
    const index = 3231929
    const fakeGen = {
      next: () => ({
        value: hash(doorId, index),
        done: false,
      }),
    }

    const result = findInterestingHash(fakeGen)

    expect(result).toBe('00000155f8105dff7f56ee10fa9b9abd')
  })

  describe('Part 1', () => {
    // This test takes to long! Remove the `.skip` to run it
    it.skip('should find the solution to the example', () => {
      const doorId = 'abc'

      const password = findPasswordPart1(doorId)

      expect(password).toBe('18f47a30')
    })

    // This test takes to long! Remove the `.skip` to run it
    it.skip('should find the solution to the input', () => {
      const doorId = 'ffykfhsq'

      const password = findPasswordPart1(doorId)

      expect(password).toBe('c6697b55')
    })
  })

  describe('Part 2', () => {
    // This test takes to long! Remove the `.skip` to run it
    it.skip('should find the solution to the example', () => {
      const doorId = 'abc'

      const password = findPasswordPart2(doorId)

      expect(password).toBe('05ace8e3')
    })

    // This test takes to long! Remove the `.skip` to run it
    it.skip('should find the solution to the input', () => {
      const doorId = 'ffykfhsq'

      const password = findPasswordPart2(doorId)

      expect(password).toBe('8c35d1ab')
    })
  })
})
