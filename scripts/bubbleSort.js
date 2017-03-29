
const bubbleSort = array => {

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {

      if (array[j] > array[j + 1]) {
        let larger = array[j]
        let smaller = array[j + 1]

        array[j] = smaller
        array[j + 1] = larger
      }
    }
  }
  return array

}

export default bubbleSort
