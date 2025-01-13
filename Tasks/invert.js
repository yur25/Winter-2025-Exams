// Refactor following solution
// Reverse an array, you can't use .reverse()

'use strict'

const invert = (array) => {
  const result = []
  for (const item of array){
    result.unshift(item)
  }
  return result
}

module.exports = invert
