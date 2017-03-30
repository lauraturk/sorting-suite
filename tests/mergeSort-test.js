import {assert} from 'chai';
import {mergeSort} from '../scripts/mergeSort'
import {generateRandomNumber} from './randomNumber-gen.js'
import {generateRandomLetter} from './randomLetter-gen.js'


describe('merge sort', () => {

  const compareNumbers = (a, b) =>
    a - b

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
    var testArray = generateRandomNumber(1, 100, 35000);
    var browserSorted = testArray.sort(compareNumbers);

    assert.deepEqual(mergeSort(testArray), browserSorted);
  })

  it('should sort a large random of positive and Negative integers', () => {
    var testArray2 = generateRandomNumber(-90, 100, 35000);
    var browserSorted2 = testArray2.sort(compareNumbers);

    assert.deepEqual(mergeSort(testArray2), browserSorted2);
  })

  it('should sort a large random array of letters', () => {
    var testLetters = generateRandomLetter(2000);
    var letterBrowserSorted = testLetters.sort();

    assert.deepEqual(mergeSort(testLetters), letterBrowserSorted);
  })

})
