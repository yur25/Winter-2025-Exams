// Refactor following solution
// Count words in a string

'use strict'

const words = (string) => {
  const wordList = string.split(' ')
  const wordNumber = wordList.length
  return wordNumber
}

module.exports = words
