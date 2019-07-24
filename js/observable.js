// 实现一个双向数据绑定
// 2019-7-24
// author: zhengwei

export default function(obj, render) {
    const handler = {
        set(target, key, value) {
            render(value)
            return Reflect.set(target, key, value)
        }
    }
    return new Proxy(obj, handler)
}
