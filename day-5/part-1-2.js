const { createHash } = require('crypto')

function hash(doorId, index) {
  return createHash('md5').update(doorId + index).digest('hex')
}

function * genHash(doorId) {
  let index = 0

  while (true) {
    yield hash(doorId, index)
    index++
  }
}

function findInterestingHash(gen) {
  let value

  do {
    value = gen.next().value
  } while (value.indexOf('00000') !== 0)

  return value
}

function findPasswordPart1(doorId) {
  const gen = genHash(doorId)

  return '________'.split('').reduce(
    (password) => password + findInterestingHash(gen)[5]
  , '')
}

function validHash(password, hash) {
  return parseInt(hash[5]) < 8 && password[hash[5]] === '_'
}

function findValidHash(password, gen) {
  let hash

  do {
    hash = findInterestingHash(gen)
  } while (!validHash(password, hash))

  return hash
}

function findPasswordPart2(doorId) {
  const gen = genHash(doorId)
  let password = '________'.split('')

  do {
    const hash = findValidHash(password, gen)
    password[hash[5]] = hash[6]
  } while (password.indexOf('_') !== -1)

  return password.join('')
}

module.exports = {
  hash,
  genHash,
  findInterestingHash,
  findPasswordPart1,
  findPasswordPart2,
}
