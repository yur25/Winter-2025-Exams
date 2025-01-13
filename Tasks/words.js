// Refactor following solution
// Count words in a string

'use strict'

const words = (string) => {
  if (string === '') return 0
  const wordNumber = string.split(' ').length
  return wordNumber
}

module.exports = words
