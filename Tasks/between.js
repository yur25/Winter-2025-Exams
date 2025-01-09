// Refactor following solution
// Extract substring between prefix and suffix

'use strict'

const getvaluebetween = (str, p, s) => {
  const i = str.indexOf(p)
  if (i === -1) return ''
  const k = i + p.length
  const str = str.substring(k)
  if (s) {
    i = str.indexOf(s)
    if (i === -1) return ''
    str = str.substring(0, i)
  }
  return str
}

module.exports = getvaluebetween
