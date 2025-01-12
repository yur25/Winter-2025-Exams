// Refactor following solution
// Extract substring between prefix and suffix

'use strict'

const getvaluebetween = (str, p, s) => {
  const i = str.indexOf(p)
  const k = i + p.length
  const j = str.indexOf(s)
  if (i !== -1 && j !== -1){
    return str.substring(k, j)
  }
  else return ''
}

module.exports = getvaluebetween
