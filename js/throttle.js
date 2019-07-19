// 节流函数
// 2019-7-18
// author: zhengwei


// 整体的思路是使用时间戳来判断是否需要执行函数
// 使用初始时间为0来决定是否第一次立即执行
// 使用setTimeOut来暂存最后一次执行
const defaultOptions = { leading: true, remaining: true }
export default function(fn, delay, options = defaultOptions) {
    const { leading, trailing } = options
    let context, args, ret
    let timer = null
    let preTime = 0

    return function() {
        context = this
        args = arguments
        const now = Date.now()
        // 用来确认是否需要立即执行，因为当时间上一次与这次的时间一样的情况下，函数是不会执行的
        if (preTime > 0 && leading === false) preTime = now
        // 计算剩余的时间，<=0 则说明已经过了节流的时间，可以执行函数了
        const remaining = delay - (now - preTime)

        // 符合条件则执行函数，不符合条件则看下是否需要延迟最后一次的执行
        if (remaining <= 0) {
            // 存在这样的情况
            // 当在节流时间内点击了一次并且延迟了这一次的执行，如果等到时间过了再点击一次，进入这个分支
            // 则会自立即触发函数执行，但是这个时候上次滞后的执行也快要执行了，所以需要清除掉
            if (timer) {
                clearTimeout(timer)
                timer = null;
            }
            // 更新时间，并执行函数
            preTime = now
            ret = fn.apply(context, args)
        } else if (trailing  && !timer) {
            timer = setTimeout(() => {
                timer = null
                // 一样的，也是需要更新时间，因为后面还是可以继续调用函数的
                // 但是由于这个时间是滞后的，所以等这个执行结束之后，如果设置了第一次立即执行
                // 则需要将时间设置为当前时间
                preTime = leading ? Date.now() : 0
                ret = fn.apply(context, args)
            }, delay)
        }

        return ret
    }
}
