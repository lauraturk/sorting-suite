const mergeSort = array => {
  var halfArray = Math.floor((array[0] + array[array.length - 1]) / 2);

  if(array.length === 1) {
    console.log(mergedArray)
    return mergedArray
  }
  // console.log(array)
  return mergeSort(merge(array.slice(0, halfArray), array.slice(halfArray, array.length)));


  var merge = (sorted1, sorted2) => {
    var mergedArray = []

    while (sorted2.length && sorted1.length) {
      if (sorted1[0] < sorted2[0]) {
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
  };
  return mergedArray

}
const mergeSort = array => {

  for (let i = 0; i < array.length; i++) {
    var halfArray = Math.floor((array[0] + array[array.length - 1]) / 2)

    array.slice(0, halfArray)
    array.slice(halfArray, array.length)


  }

  const merge = (sorted1, sorted2) => {
    const mergedArray = []

    while (sorted2.length && sorted1.length) {
      if (sorted1[0] < sorted2[0]) {
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
  }
}


//
//
// for(i = 0; i < array.length; i++) {
//   array.secondHalf(halfArray)
//   array.firstHalf(halfArray)

export default mergeSort
