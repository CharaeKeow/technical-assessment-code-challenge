const arrange = (array) => {
  const firstArray = array[0];
  const lastArray = array[array.length - 1];

  // put elements of first array into result, since there's no need to do a redundant iterating
  let result = [...firstArray];

  // take the middle arrays using slice() to select array excluding first and last array
  const middleArrays = array.slice(1, array.length - 1);
  // console.log({ middleArrays });

  // grab the last element of each array in middleArray(s)
  for (const array of middleArrays) {
    result.push(array[array.length - 1]);
  }

  // traverse the final array from right to left and push its elements into result
  for (let i = lastArray.length - 1; i >= 0; i--) {
    result.push(lastArray[i]);
  }

  // grab the first element of each array in middleArray(s). Start from the bottom
  // `toReversed()` is used to achieved this without mutating the original array
  for (const array of middleArrays.toReversed()) {
    result.push(array[0]);
  }

  // TRICKY PART!
  // Iterate the non-first and non-last elements of the middle arrays, but alternating
  // between **from left to right** and **from right to left**

  let isLeftToRight = true;

  for (const array of middleArrays) {
    let elems = array.slice(1, array.length - 1);

    result = isLeftToRight
      ? [...result, ...elems]
      : [...result, ...elems.toReversed()];

    isLeftToRight = !isLeftToRight;
  }

  // console.log({ result, firstArray, lastArray });
  return result;
};

console.log(
  arrange([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  arrange([
    [1, 2, 3, 20],
    [8, 9, 4, 21],
    [7, 6, 5, 22],
  ])
);

console.log(
  arrange([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
