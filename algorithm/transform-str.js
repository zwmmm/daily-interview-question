// 数组简写
// 2019-7-22
// author: zhengwei

export default function(str) {
    let arr = str.split(',')
    let i = 0
    let ret = []
    for (let j = 1; j <= arr.length; j++) {
        if (arr[j] - arr[j - 1] !== 1) {
            ret.push(j - i === 1 ? arr[i] : `${arr[i]}~${arr[j - 1]}`)
            i = j
        }
    }
    return ret.join(',')
}
