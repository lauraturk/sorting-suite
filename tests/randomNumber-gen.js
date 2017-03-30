export const generateRandomNumber = (min, max, num) => {
  let testArray = []

  let random =  Math.floor(Math.random() * (max - min) + min)

  for (let i = 0; i < num; i++) {
    testArray.push(random)
  }
  return testArray
}
