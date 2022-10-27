// write function fibs(), it takes a number and returns an array containing that many numbers from the fibonacci sequence

function fibs(n) {
  const arr = [];
  let i = 0;
  while (i < n) {
    if (i === 0) {
      arr.push(0);
      i++;
    } else if (i === 1) {
      arr.push(1);
      i++;
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
      i++;
    }
  }
  return arr;
}

console.log(fibs(8));
