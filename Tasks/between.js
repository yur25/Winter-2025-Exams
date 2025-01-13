// Refactor following solution
// Extract substring between prefix and suffix

'use strict'

const getValueBetween = (str, p, s) => {
  const pIndex = str.indexOf(p)
  const left = pIndex + p.length
  const right = str.indexOf(s)
  if (pIndex !== -1 && right !== -1){
    return str.substring(left, right)
  }
  else return ''
}

module.exports = getValueBetween
