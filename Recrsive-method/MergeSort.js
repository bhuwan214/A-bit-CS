let array = [1, 5, 7, 8, 9, 20, 48, 32, 3, 11, 89, 27, 65, 19];

function Merge_sort(array, left, right) {
  if (left < right) {
    mid = Math.floor((left + right) / 2);
    Merge_sort(array, left, mid);
    Merge_sort(array, mid + 1, right);
    Merge(array, left, mid, right);
  }
}


function Merge(array, left, mid, right) {
  n1 = mid - left + 1;
  console.log(n1)
  n2 = right - mid;

  // Creating Temporary array
  let L = new Array(n1);
  let R = new Array(n2);

  // Copy data to temp array
  for (let i = 0; i < n1; i++) L[i] = array[left + i];

  for (let j = 0; j < n2; j++) R[j] = array[mid + 1 + j];

  //Merge the temporary arrays back into arr [left...right]

  let i = 0,
    j = 0;
  let k = left;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      array[k] = L[i];
      i++;
    } else {
      array[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of L[], if any
  while (i < n1) {
    array[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of R[], if any
  while (j < n2) {
    array[k] = R[j];
    j++;
    k++;
  }
}

console.log("Original array:", array);

Merge_sort(array,0,array.length-1);
// console.log("Sorted Array :", array);
