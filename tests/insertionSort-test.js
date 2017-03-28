import {assert} from 'chai';
// // import insertionSort from '../scripts/insertionSort'
import insert from '../scripts/insertionSort';
//
describe('insertion sort', () => {
//
//   const letterArray = ["d", "b", "a", "c"]
//   const numberArray = [ 1, 0, 4, 3, 2 ]
//   const positiveNegative = [ 5, 3, -7, -2, 9, 10, 8]
//   const testArray = []
  const array = [3, 5, 7, 11, 13, 2, 9, 6];
//
//   const generateRandomNumber = () => {
//     return Math.floor(Math.random() * 100 + 1)
//   }
//
//     for (let i = 0; i < 100; i++) {
//       testArray.push(generateRandomNumber())
//     }
//
//
//   it('should be a function', () => {
//     assert.isFunction(insertionSort)
//   })
//
//   it('should sort an array of numbers', () => {
//     insertionSort(numberArray)
//
//     assert.deepEqual(insertionSort(numberArray), [0, 1, 2, 3, 4])
//   })
//
//   it('should sort and array of letters', () => {
//     insertionSort(letterArray)
//
//     assert.deepEqual(insertionSort(letterArray), ["a", "b", "c", "d"])
//   })
//
//   it('should sort positive and negative numbers', () => {
//     insertionSort(positiveNegative)
//
//     assert.deepEqual(insertionSort(positiveNegative), [-7, -2, 3, 5, 8, 9, 10])
//   })
//
//   it('should sort a large random array of numbers', () => {
//     insertionSort(testArray)
//
//     assert.deepEqual(insertionSort(testArray), testArray.sort())
//   })


  it("Array after inserting 2", () => {

    // insert(array, 4, 2);
    assert.deepEqual(insert(array, 4, 2), [2, 3, 5, 7, 11, 13, 9, 6]);
  });

  // insert(array, 5, 9);
  // println("Array after inserting 9:  " + array);
  // Program.assertEqual(array, [2, 3, 5, 7, 9, 11, 13, 6]);
  //
  // insert(array, 6, 6);
  // println("Array after inserting 6:  " + array);
  // Program.assertEqual(array, [2, 3, 5, 6, 7, 9, 11, 13]);


})
