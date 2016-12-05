const input = require('../input')
const decode = require('../part-1-modules')
const { findRoom, parseRoom, rotate } = require('../part-2-modules')

describe('Day 4', () => {
  describe('Part 1', () => {
    let rooms = [
      { room: 'aaaaa-bbb-z-y-x-123[abxyz]', expect: true },
      { room: 'a-b-c-d-e-f-g-h-987[abcde]', expect: true },
      { room: 'not-a-real-room-404[oarel]', expect: true },
      { room: 'totally-real-room-200[decoy]', expect: false },
    ]

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

  describe('Part 2', () => {
    it('have the name of the room decrypted', () => {
      const room = 'qzmt-zixmtkozy-ivhz-343[abxyz]'
      const { letters, sectionId } = parseRoom(room)
      const rotatedLetters = rotate(letters, sectionId)
      const name = rotatedLetters.join('')
      const expected = 'very encrypted name'

      expect(name).toBe(expected)
    })

    it('is the right solution', () => {
      const rooms = input.split('\n')
      const foundRoom = findRoom(rooms, 'north')

      expect(foundRoom).toBeDefined()
      expect(foundRoom.sectionId).toBe(482)
    })
  })
})
