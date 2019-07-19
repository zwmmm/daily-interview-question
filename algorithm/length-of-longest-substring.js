// lengthOfLongestSubstring
// 2019-7-17
// author: zhengwei

// 双指针的方法
// 1. 当遇到后一个值与前面的字符串比较时，如果找到相同的，则从这个相同的字符后一位作为起点
// 2. 如果没有遇到相同的，则计算这段子串的长度（end - start + 1）判断与之前的子串相比谁更长
export default function(str) {
    let i = 0
    let res = 0

    for (let j = 0; j < str.length; j++) {
        const index = str.slice(i, j).indexOf(str[j])
        if (index === -1) {
            res = Math.max(res, j + 1 - i)
        } else {
            i += index + 1
        }
    }

    return res
}
