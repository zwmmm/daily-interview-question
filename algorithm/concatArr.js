/**
 * 合并两个有序数组，返回最终有序的数组
 * @param arr1
 * @param arr2
 */
function concatArr(arr1, arr2) {
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let k = arr2.length + arr1.length - 1;

  while (i >= 0 && j >= 0) {
    k--
    if (arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      i--;
    } else {
      arr1[k] = arr2[j];
      j--
    }
  }

  while (j >= 0) {
    arr1[k] = arr2[j];
    k--;
    j--;
  }

  return arr1;
}

console.log(
  concatArr([4, 5, 6], [1, 2, 3])
)