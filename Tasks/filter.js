// Refactor following solution
// Filter array by type name

'use strict'

filter = (array, type) => {
  remove = []
  for (C of array) {
    x = array.indexOf(C)
    if (typeof array[x] !== type) {
      remove.unshift(x)
    }
  }
  for (x of remove) array.splice(x, 1)
  return array
}

module.exports = Filter
