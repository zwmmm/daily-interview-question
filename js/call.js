// call
// 2019-7-16
// author: zhengwei

export default function(context, ...args) {
    context || (context = global) // 处理默认值和为 null 的情况
    const caller = Symbol('caller') // 避免和 context 中的值冲突
    context[caller] = this;
    const ret = context[caller](...args);
    Reflect.deleteProperty(context, caller); // 删除 caller
    return ret;
}
