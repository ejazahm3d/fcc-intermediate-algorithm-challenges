/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first. */

function sumAll(arr) {
  let sumAll = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumAll += i;
  }
  return sumAll;
}

sumAll([1, 4]);
