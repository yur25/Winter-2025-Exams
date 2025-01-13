// Refactor following solution
// Filter array by type name

'use strict'

const filter = (array, type) => {
  const tempArray = []
  for (const element of array) {
    if (typeof element === type) {
      tempArray.push(element)
    }
  }
  array = tempArray
  return array
}

module.exports = filter
