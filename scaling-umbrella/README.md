# Scaling Umbralla

## Problem description and solution

### Problem

Given a 2D array, write a function that returns the array elements arranged from outermost elements to the middle element, travelling clockwise.

E.g.

```ts
array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

arrange(array); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
```

For this question, traversing the first and last array is the easiest. For the first array, simply traversing from left to right, while right to left for the second array. The hard part is the middle array, especially if there are more than 1.

If there is simply one middle array, I can hard code it to:

- just traverse the first array from left to right
- then go to the last index of the middle array
- then go to the last array and traverse from right to left
- then return to middle array then traverse from left to right

And for each step, just push the value to an array, e.g. `result` array.

However, I do think my solution should also be able to handle if there is more than 1 middle array.

### Solution

For the solution, the idea is still similar in what I initially thought:

1. First, iterate the outer array from left to right (though in code, we don't have to use loop to iterate and push each element into `result` array, since the elements is already in correct order)

```js
const firstArray = array[0];
const lastArray = array[array.length - 1];

let result = [...firstArray];
```

2. Next, traverse to the last element of each middle array. For this, the way I solve this so that it can handle if there is more than 1 middle array is by using `.slice()` to get the middle array(s) - i.e. array(s) between 0 and last index (the code is `array.slice(1, array.length - 1);`). Then we simply need to traverse the last element in each middle array. The code for this portion is:

```js
const middleArrays = array.slice(1, array.length - 1);

for (const array of middleArrays) {
  result.push(array[array.length - 1]);
}
```

3. After that, we iterate the final array from right to left. There is 2 way to achieve this: a) Reverse the final array and push the elements to `result` b) Use good old for loop. I opted for the latter for its simplicity

```js
for (let i = lastArray.length - 1; i >= 0; i--) {
  result.push(lastArray[i]);
}
```

4. The next step is the reverse of **Step 2**, which is traversing the first element in each middle array. The crucial part in this step is just to ensure we traverse from bottom to top. I achieved this by reversing the middle arrays before iterating it. `toReversed()` is used so that the original array is not mutated. The code is:

```js
for (const array of middleArrays.toReversed()) {
  result.push(array[0]);
}
```

5. The last step is the trickiest part for my opinion, since for this one, we have to iterate the non-first and non-last elements in the middle array, but also have to alternate between traversing **from left to right** and **from right to left** between each array. To achieve this, I declare a boolean `isLeftToRight` variable with value of `true`. And then for each middle array loop iteration, its value is then flipped (e.g. `true` to `false`). The ``isLeftToRight` is used to determine if the array should be reversed before being pushed to result array `.slice()` is used again to get the non-first and non-last elements of each array in middle arrray. Code:

```js
let isLeftToRight = true;

for (const array of middleArrays) {
  let elems = array.slice(1, array.length - 1);

  result = isLeftToRight
    ? [...result, ...elems]
    : [...result, ...elems.toReversed()];

  isLeftToRight = !isLeftToRight;
}
```

## What I might do differently if I were to spend additional time on the problem

For this one, if I could spend adiitional time, what I would do is see which part of the code can be broken into smaller functions, to make it cleaner. Also,
