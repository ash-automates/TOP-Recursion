// write function fib(), it takes a number and returns an array containing that many numbers from the fibonacci sequence

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
let arr = [];

function printOutput(n) {
  if (n === 0) {
    console.log(arr.reverse());
    return;
  }
  arr.push(fib(n - 1));
  printOutput(n - 1);
}

printOutput(8);
