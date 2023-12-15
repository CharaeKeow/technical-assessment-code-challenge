const nextNumber = (number) => {
  // convert the number into array so we can access its digit individually
  // Array.from is used to create array from the number that is converted to string, then reassign the type to Number
  const numberArray = Array.from(number.toString(), Number);

  // new array to store the sorted number. Sort is in descending order. The purpose is for us to check if the sorted number
  // is identical to original number. If yes, means there is no next bigger number
  const sortedNumberArray = [...numberArray].sort((a, b) => b - a);

  // if there is only one digit
  // or if the array is already in descending order or all digits are the same
  // straight away return -1, since there is no next bigger number
  if (
    numberArray.length === 1 ||
    sortedNumberArray.toString() === numberArray.toString() // convert to string to check their equality
  ) {
    return -1;
  }

  // to store the index of the current smallest number from the right side.
  let currentSmallestDigitIndex = null;

  // traverse from the right to left, until find a digit that is smaller than the previous digit
  for (let i = numberArray.length - 1; i >= 0; i--) {
    if (numberArray[i] < numberArray[i + 1]) {
      currentSmallestDigitIndex = i;
      break;
    }
  }

  // store next smallest digt after currentSmallestDigit
  // e.g. 2017, `currentSmallestDigit` is 1, so `nextSmallestDigitAfterCurrentSmallestDigitIndex` is 7
  // e.g. 534976, `currentSmallestDigit` is 4, so `nextSmallestDigitAfterCurrentSmallestDigitIndex` is 6
  let nextSmallestDigitAfterCurrentSmallestDigitIndex =
    currentSmallestDigitIndex + 1;

  // Another loop to find the next smallest digit at the right side of the current smallest digit
  for (let j = currentSmallestDigitIndex + 1; j < numberArray.length; j++) {
    if (
      numberArray[j] > numberArray[currentSmallestDigitIndex] &&
      numberArray[j] <
        numberArray[nextSmallestDigitAfterCurrentSmallestDigitIndex]
    ) {
      nextSmallestDigitAfterCurrentSmallestDigitIndex = j;
    }
  }

  // swap the number
  [
    numberArray[currentSmallestDigitIndex],
    numberArray[nextSmallestDigitAfterCurrentSmallestDigitIndex],
  ] = [
    numberArray[nextSmallestDigitAfterCurrentSmallestDigitIndex],
    numberArray[currentSmallestDigitIndex],
  ];

  // join the array and return result as a number
  return Number(numberArray.join(""));
};

// example test cases
console.log(nextNumber(12));
console.log(nextNumber(513));
console.log(nextNumber(2017));
console.log(nextNumber(4132));

// test case if number can't be arranged. Expect `-1`
console.log(nextNumber(9));
console.log(nextNumber(111));
console.log(nextNumber(531));
