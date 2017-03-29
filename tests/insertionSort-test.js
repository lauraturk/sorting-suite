import {assert} from 'chai';
import insertionSort from '../scripts/insertionSort.js'
require('locus')

describe('insertion sort', () => {



  var testArray = []

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1)
  }

    for (let i = 0; i < 100; i++) {
      testArray.push(generateRandomNumber())
    }


  it('should be a function', () => {
    assert.isFunction(insertionSort)
  })

  it('should sort an array of numbers', () => {
    var numberArray2 = [ 1, 0, 4, 3, 2 ];
    var sorted = insertionSort(numberArray2);

    assert.deepEqual(sorted, [0, 1, 2, 3, 4]);
  })

  it('should sort and array of letters', () => {
    var letterArray = ["d", "b", "a", "c"]
    var sorted = insertionSort(letterArray);

    assert.deepEqual(sorted, ["a", "b", "c", "d"])
  })

  it('should sort positive and negative numbers', () => {
    var positiveNegative = [ 5, 3, -7, -2, 9, 10, 8];
    var sorted = insertionSort(positiveNegative);

    assert.deepEqual(sorted, [-7, -2, 3, 5, 8, 9, 10])
  })

  it('should sort a large random array of numbers', () => {
    var sorted = insertionSort(testArray)

    assert.deepEqual(sorted, testArray.sort())
  })

})
