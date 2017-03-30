import {assert} from 'chai';
import {bubbleSort} from '../scripts/bubbleSort'
import {generateRandomNumber} from './randomNumber-gen.js'
import {generateRandomLetter} from './randomLetter-gen.js'

describe('Bubble Sort', () => {

  const compareNumbers = (a, b) =>
  a - b

  const letterArray = ["d", "b", "a", "c"]
  const numberArray = [ 1, 0, 4, 3, 2 ]
  const positiveNegative = [ 5, 3, -7, -2, 9, 10, 8]

  it('should be a function', () => {
    assert.isFunction(bubbleSort)
  });

  it('should sort a small array of letters', () => {
    assert.deepEqual(bubbleSort(letterArray), ["a", "b", "c", "d"])
  });

  it('should sort a small array of numbers', () => {
    assert.deepEqual(bubbleSort(numberArray), numberArray.sort())
  });

  it('should sort a small array of positive and negative integers', () => {
    assert.deepEqual(bubbleSort(positiveNegative), [-7, -2, 3, 5, 8, 9, 10])
  });

  it('should sort a large random array of numbers', () => {
    var testArray = generateRandomNumber(1, 100, 2000);
    var browserSorted = testArray.sort(compareNumbers);

    assert.deepEqual(bubbleSort(testArray), browserSorted)
  })

  it('should sort a large random of positive and Negative integers', () => {
    var testArray2 = generateRandomNumber(-90, 100, 2000);
    var browserSorted2 = testArray2.sort(compareNumbers);

    assert.deepEqual(bubbleSort(testArray2), browserSorted2);
  })

  it('should sort a large random array of letters', () => {
    var testLetters = generateRandomLetter(2000);
    var letterBrowserSorted = testLetters.sort();

    assert.deepEqual(bubbleSort(testLetters), letterBrowserSorted);
  })
})
