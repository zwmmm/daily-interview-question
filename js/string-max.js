// 字符串查找
// 2019-7-14
// author: zhengwei

// 使用循环查找
export function forMax(str) {
    const ret = []
    str.split('').forEach(item => {
        if ((ret[ret.length - 1] || '').includes(item)) {
            ret[ret.length - 1] += item
            return
        }
        ret.push(item);
    })

    const max = ret.sort((a, b) => b.length - a.length).shift();
    return { text: max[0], length: max.length };
}

// 使用正则查找,使用\1查找重复的字符
export function rexMax(str) {
    const max = str.match(/(\w)\1+/g).sort((a, b) => b.length - a.length).shift();
    return { text: max[0], length: max.length };
}
