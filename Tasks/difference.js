// Refactor following solution
// Find a difference between two dictionaries

'use strict'

const difference = (obj1, obj2) => {
  const result = {}
  const keys = Object.keys(obj1)
  for (const key of keys) {
    if (!obj2[key]) result[key] = obj1[key]
  }
  return result
}

module.exports = difference
