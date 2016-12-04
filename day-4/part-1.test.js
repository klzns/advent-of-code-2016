const decode = require('./part-1-modules')
const input = require('./input')

let rooms = [
  { room: 'aaaaa-bbb-z-y-x-123[abxyz]', expect: true },
  { room: 'a-b-c-d-e-f-g-h-987[abcde]', expect: true },
  { room: 'not-a-real-room-404[oarel]', expect: true },
  { room: 'totally-real-room-200[decoy]', expect: false },
]

describe('Day 4 - Part 1', () => {
  rooms.map((room) => {
    it(`room ${room.room} is ${room.expect ? 'real' : 'false'}`, () => {
      const realRoom = decode(room.room) !== null
      expect(realRoom).toBe(room.expect)
    })
  })

  it('is the right solution', () => {
    const result = input.split('\n').reduce((sum, room) => sum + (decode(room) || 0), 0)
    expect(result).toBe(361724)
  })
})
