// 单例模式
// 2019-7-12
// author: zhengwei

function singleton(fn) {
    let ret;
    return new Proxy(fn, {
        construct(target, args) {
            if (!ret) { ret = new target(...args) };
            return ret;
        }
    })
}

export default singleton;
