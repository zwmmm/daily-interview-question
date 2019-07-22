function transformStr(str) {
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

const str = '1,2,3,5,7,8,10,10,11,12,13'
console.log(transformStr(str))
