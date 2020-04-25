/**
 * 三个数加起来等于 0
 * @param arr
 */
function terrNumSum(arr) {
  const res = [];
  arr.sort((a, b) => a - b);
  arr.forEach((item, i) => {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const ret = arr[left] + arr[right] + item;
      if (ret > 0) {
        right--
      } else if (ret < 0) {
        left++
      } else {
        res.push([arr[left], item, arr[right]])
        left++;
        right--;
      }
    }
  })

  return res;
}

console.log(
  terrNumSum([-1, 0, 1, 2, -1, -4])
)