const insertionSort = (array) => {
  for (let key = 1; key < array.length; key++ ) {
    array = insert(array, key - 1, array[key] );
  }
  return array
}

const insert = (array, rightIndex, value) => {
  for (var i = rightIndex; i >= 0 && array[i] > value; i--) {
    array[i + 1] = array[i];
  }
  array[i + 1] = value;
  return array;
};

export default insertionSort
