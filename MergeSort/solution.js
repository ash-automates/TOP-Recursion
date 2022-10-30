function mergeSort(arr) {
  if (arr.length > 1) {
    let left = arr.slice(0, Math.floor(arr.length / 2));
    let right = arr.slice(Math.floor(arr.length / 2), arr.length);
    mergeSort(left);
    mergeSort(right);

    // Indexes
    i = 0;
    j = 0;
    k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] > right[j]) {
        arr[k] = right[j];
        j += 1;
      } else if (left[i] < right[j]) {
        arr[k] = left[i];
        i += 1;
      }
      k += 1;
    }
    while (i < left.length) {
      arr[k] = left[i];
      i += 1;
      k += 1;
    }
    while (j < right.length) {
      arr[k] = right[j];
      j += 1;
      k += 1;
    }
  }
  return arr;
}

let testArray = [10, 13, 3, 12, 6, 7, 5, 2, 17, 19];

console.log(mergeSort(testArray));
