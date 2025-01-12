// Refactor following solution
// Filter array by type name

'use strict'

const filter = (array, type) => {
  const tempArr = []
  for (const element of array) {
    if (typeof element === type) {
      tempArr.push(element)
    }
  }
  array = tempArr
  return array
}

module.exports = filter
