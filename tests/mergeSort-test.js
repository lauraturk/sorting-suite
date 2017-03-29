import {assert} from 'chai';
import mergeSort from '../scripts/mergeSort'
require('locus')

describe('merge sort', () => {



  var testArray = []

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1)
  }

    for (let i = 0; i < 100; i++) {
      testArray.push(generateRandomNumber())
    }


  it('should be a function', () => {
    assert.isFunction(mergeSort)
  })

  it('should sort an array of numbers', () => {
    var numberArray2 = [ 1, 0, 4, 3, 2 ];

    mergeSort(numberArray2);
    assert.deepEqual(mergeSort(numberArray2), [0, 1, 2, 3, 4]);
  })

  it('should sort and array of letters', () => {
    var letterArray = ["d", "b", "a", "c"]

    assert.deepEqual(mergeSort(letterArray), ["a", "b", "c", "d"])
  })

  it('should sort positive and negative numbers', () => {
    var positiveNegative = [ 5, 3, -7, -2, 9, 10, 8]


    assert.deepEqual(mergeSort(positiveNegative), [-7, -2, 3, 5, 8, 9, 10])
  })

  it('should sort a large random array of numbers', () => {
    mergeSort(testArray)

    assert.deepEqual(mergeSort(testArray), testArray.sort())
  })

})
