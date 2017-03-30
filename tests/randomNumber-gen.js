export const generateRandomNumber = (min, max, num) => {
  const testArray = []

  for (let i = 0; i < num; i++) {
    const random =  Math.floor(Math.random() * (max - min) + min)

    testArray.push(random)
  }
  return testArray
}
