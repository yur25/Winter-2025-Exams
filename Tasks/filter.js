// Refactor following solution
// Filter array by type name

'use strict'

const filter = (array, type) => {
  const remove = []
  for (const element of array) {
    if (typeof element === type) {
      remove.push(element)
    }
  }
  return remove
}

module.exports = filter
