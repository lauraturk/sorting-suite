const alphabet = "abcdefghijklmnopqrstuvwxyz"
const testLetterArray = []

export const generateRandomLetter = numLetter => {

  for (let i = 0; i < numLetter; i++) {
    let randomLetter =
      alphabet.charAt(Math.floor(Math.random() * alphabet.length))

    testLetterArray.push(randomLetter)
  }
  return testLetterArray
}
