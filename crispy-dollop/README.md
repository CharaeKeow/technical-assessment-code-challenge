# Crispy Dollop

## Problem description and solution

Given a number, write a function that returns the next bigger number using the same digits. For instance:

```ts
305 => 350
2017 => 2071
```

For this question, I made a mistake which I misread the question - I misread **bigger** as **biggest** - and waste some minutes on trying to understand the example. (And it would be much easier if we need to find the biggest number instead in my opinion, but too bad)

My first initial thought is, first, we have to break the number down into individual digits. Maybe store it in an array. Then we need to write a logic to find the next bigger number.

One possible way that I can think of is by creating a list of all permutations of the digits. Then store them inside an array and sort in ascending order. Next, just grab the number after the current number in the array. But in term of efficiency, I don't think this is the best way.

Another solution that I can think of is we have to iterate the number from right to left to find the smallest number from the right. For example:

- Number is `4132`. So from the right, we start from `2`. Then next we move to `3`.`3` is bigger than `2`, so we move to the next digit `1` Since `1` is smaller than `3`, the smallest number from the right is `1`. We stop the loop.
- Next, we find the next smallest number at the right of `1`, i.e. between `3` and `2`. This time, we can start from the right. I chose to start from `3`. `3` is now next smallest number. Then we move to `2`, and since it's smaller than `3`, it is the next smallest number.
- Next, we simply just have to swap `1` and `2` in the original number. So the result after swap is `4231`

Another point to consider is since the input is number, we have to break it into array first so that we can easily manipulate and access them. Then for the final result, we simply need to join the array into string and convert it to `Number`.

I also choose to check if the number do have the next bigger number first at the beginning of the function, and if none, the function is exited. The number have no next bigger number if

1. Its digit is only 1
2. All digits are equal
3. If number is already sorted in descending order

I have tested this with the example test cases, and also some new test case that I added. All test cases are at the bottom of the `index.js`

## What I might do differently if I were to spend additional time on the problem

The most obvious thing is variable name. Although the name is descriptive (hopefully), I do think there is more suitable names. Also I still feel the test cases might not be comprehensive enough, and I can try add more cases.
