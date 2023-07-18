function bruteForce(arr, k) {
  if (arr.length < k) {
    return undefined;
  }
  const result = [];
  const dequeue = [];
  dequeue.push(0);

  for (let i = 1; i < k; i++) {
    if (arr[dequeue[0]] < arr[i]) {
      dequeue.shift();
      dequeue.unshift(i);
    } else {
      dequeue.push(i);
    }
  }
  result.push(arr[dequeue[0]]);
  for (let i = k; i < arr.length; i++) {
    while (dequeue[0] < i - k - 1) {
      dequeue.shift();
    }
    if (arr[dequeue[0]] < arr[i]) {
      dequeue.shift();
      dequeue.unshift(i);
    } else {
      dequeue.push(i);
    }
    result.push(arr[dequeue[0]]);
  }
  return result;
}

const arr = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(bruteForce(arr, 3));
