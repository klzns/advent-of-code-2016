const { findRoom } = require('./part-2-modules')
const input = require('./input')

const rooms = input.split('\n')
const foundRoom = findRoom(rooms, 'north')

if (foundRoom) {
  console.log(`Found room '${foundRoom.name}'. Section ID: ${foundRoom.sectionId}`)
} else {
  console.log('Room not found')
}