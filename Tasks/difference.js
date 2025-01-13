// Refactor following solution
// Find a difference between two dictionaries

const diff = (obj1, obj2) => {
  const keys = Object.keys(obj1)
  for (const key of keys) {
    if (obj2[key]) delete obj1[key]
  }
  return obj1
}

module.exports = diff
