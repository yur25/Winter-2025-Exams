// Refactor following solution
// Find a difference between two dictionaries

const diff = (object_1, object_2) => {
  for (attribute_name in object_2) {
    object_1[attribute_name] = object_2[attribute_name]
    delete object_1[attribute_name]
  }
  return object_1
}

module.exports = diff
