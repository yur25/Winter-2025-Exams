// Refactor following solution
// Extract substring between prefix and suffix

'use strict'

const getValueBetween = (string, prefix, suffix) => {
  const pIndex = string.indexOf(prefix)
  const left = pIndex + prefix.length
  const right = string.indexOf(suffix)

  if (pIndex !== -1 && right !== -1){
    return string.substring(left, right)
  }
  else return ''
}

module.exports = getValueBetween
