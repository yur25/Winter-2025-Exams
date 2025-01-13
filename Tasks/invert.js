// Refactor following solution
// Reverse an array, you can't use .reverse()

invert = (A, i, j, k) => {
  result = []
  for (const item of A){
    result.unshift(item)
  }
  return result
}

module.exports = invert
