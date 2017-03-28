import {assert} from 'chai';
import bubbleSort from '../scripts/bubbleSort'

describe('Bubble Sort', () => {

const letterArray = ["d", "b", "a", "c"]
const numberArray = [ 1, 0, 4, 3, 2 ]
const positiveNegative = [ 5, 3, -7, -2, 9, 10, 8]
const testArray = []

const generateRandomNumber = () => {
	return Math.floor(Math.random() * 100 + 1)
}

  for (let i = 0; i < 100; i++) {
    testArray.push(generateRandomNumber())
  }

  it('should be a function', () => {
		assert.isFunction(bubbleSort)
	});

  it('should sort an array of letters', () => {
		bubbleSort(letterArray)
		assert.deepEqual(bubbleSort(letterArray), ["a", "b", "c", "d"])
	});

  it('should sort an array of numbers', () => {
		bubbleSort(numberArray)
    assert.deepEqual(bubbleSort(numberArray), numberArray.sort())
	});

  it('should sort positive and negative integers', () => {
    bubbleSort(positiveNegative)
    assert.deepEqual(bubbleSort(positiveNegative), [-7, -2, 3, 5, 8, 9, 10])
  });

  it('should sort a large random array of numbers', () => {
    bubbleSort(testArray)

    assert.deepEqual(bubbleSort(testArray), testArray.sort())
  })


})
