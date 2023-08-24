function sortArry(arr, start, mid, end) {
  const l1 = mid - start + 1;
  const l2 = end - mid;

  const arr1 = new Array(l1);
  const arr2 = new Array(l2);
  for (let i = 0; i < l1; i++) {
    arr1[i] = arr[start + i];
  }
  for (let i = 0; i < l2; i++) {
    arr2[i] = arr[mid + i + 1];
  }

  let i = 0;
  let j = 0;
  while (i < l1 && j < l2) {
    if (arr1[i] > arr2[j]) {
      arr[start++] = arr1[i++];
    } else {
      arr[start++] = arr2[j++];
    }
  }

  while (j < l2) {
    arr[start++] = arr2[j++];
  }
  while (i < l1) {
    arr[start++] = arr1[i++];
  }
}

function mergeSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let mid = start + parseInt((end - start) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  sortArry(arr, start, mid, end);
}

const Myarr = [1, 0, 8, 99, 81, 3, 5, 92];
mergeSort(Myarr, 0, Myarr.length - 1);
console.log(Myarr);
