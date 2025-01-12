// Refactor following solution
// Filter array by type name

'use strict'

const filter = (array, type) => {
  const remove = []
  for (const element of array) {
    x = array.indexOf(element)
    if (typeof array[x] !== type) {
      remove.unshift(x)
    }
  }
  for (x of remove) array.splice(x, 1)
  return array
}

module.exports = filter
