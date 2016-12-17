module.exports.solve = function solve(input) {
  const parsedInput = parseInput(input)

  const message = parsedInput.reduce((message, line) => message + mostFrequent(line), '')

  return message
}

const mostFrequent = (line) => {
  const count = line.reduce(incrementOrInsert, {})
  const countArray = objToArray(count).sort(sort)
  return countArray[0].char
}

const sort = (a, b) => a.value > b.value ? -1 : 1

const objToArray = (obj) => {
  let array = []

  for (let key in obj) {
    array.push({ char: key, value: obj[key] })
  }

  return array
}

const incrementOrInsert = (count, char) => {
  count[char] !== void 0 ? count[char] += 1 : count[char] = 0
  return count
}

const parseInputStringToArray = (input) => input.split('\n').map(line => line.split(''))

const transposeMatrix = (array) =>
  array[0].map((col, i) =>
    array.map(row => row[i])
  )

const compose = (...funcs) =>
  funcs.reduce((memo, b) => (...args) => memo(b(...args)))

const parseInput = compose(transposeMatrix, parseInputStringToArray)
