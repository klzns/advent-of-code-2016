const decode = require('./part-1-modules')

let rooms = [
  { room: 'aaaaa-bbb-z-y-x-123[abxyz]', expect: true },
  { room: 'a-b-c-d-e-f-g-h-987[abcde]', expect: true },
  { room: 'not-a-real-room-404[oarel]', expect: true },
  { room: 'totally-real-room-200[decoy]', expect: false },
]

rooms.map((room) => {
  const realRoom = decode(room.room) !== null
  if (realRoom === room.expect) {
    console.log(`OK: ${room.room}`)
  } else {
    console.error(`Error: ${room.room} expected to be ${room.expect}`)
  }
})
