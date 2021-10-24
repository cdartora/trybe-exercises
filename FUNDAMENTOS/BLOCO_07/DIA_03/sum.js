const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

const myRemove = (arr, item) => {
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] == item) {
      arr.splice(index, 1);
    }
  }
  return arr;
}

module.exports = { sum, myRemove };