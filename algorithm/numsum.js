/**
 * 给定一个目标值，找出数组中两数相加等于目标值的值下标
 * @param arr: 目标数组
 * @param target: 目标值
 * @returns {[]}
 */
function numsum(arr, target) {
  const map = {};
  const result = [];
  arr.forEach((item, i) => {
    const diffNum = target - item;
    if (map[diffNum] !== undefined) {
      return result.push([i, map[diffNum]])
    }
    map[item] = i
  })


  return result;
}

console.log(numsum([1, 2, 3, 4, 5], 5))