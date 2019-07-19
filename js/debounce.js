// 防抖函数
// 2019-7-19
// author: zhengwei

export default function(fn, delay, immediate = false) {
    let timer = null
    let ret
    let debounced

    if (immediate) {
        debounced  = function() {
            // 只要存在定时器，就不执行
            if (timer) return ret;
            timer = setTimeout(_ => {
                timer = null
            }, delay)
            return ret = fn.apply(this, arguments)
        }
    } else {
        debounced = function(...args) {
            // 每次都覆盖之前的定时器
            clearTimeout(timer)
            timer = setTimeout(_ => {
                ret = fn.apply(this, args)
            }, delay)
            return ret
        }
    }

    debounced.cancel = function() {
        clearTimeout(timer)
        timer = null;
    }

    return debounced
}
