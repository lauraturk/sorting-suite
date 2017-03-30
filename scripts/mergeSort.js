export const mergeSort = array => {
  var halfArray = array.length / 2;

  if (array.length === 1) {
    return  array
  }
  var firstHalf = array.slice(0, halfArray)
  var secondHalf = array.slice(halfArray, array.length)

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));

}

const merge = (sorted1, sorted2) => {
  var mergedArray = []

  while (sorted2.length && sorted1.length) {
    if (sorted1[0] <= sorted2[0]) {
      mergedArray.push(sorted1.shift())
    } else {
      mergedArray.push(sorted2.shift())
    }

  }

  while (sorted1.length) {
    mergedArray.push(sorted1.shift())
  }

  while (sorted2.length) {
    mergedArray.push(sorted2.shift())
  }
  return mergedArray
};
