// diff 算法
// 2019-7-23
// author: zhengwei

const ARRAYTYPE = '[object Array]'
const OBJECTTYPE = '[object Object]'
const FUNCTIONTYPE = '[object Function]'

export default function diff(current, pre) {
    const result = {}
    syncKeys(current, pre)
    console.log({ current, pre })
    _diff(current, pre, '', result)
    return result
}

function syncKeys(current, pre) {
    if (current === pre) return
    const rootCurrentType = type(current)
    const rootPreType = type(pre)
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (let key in pre) {
                // 判断节点是否有删除的，有则赋值为 null
                const currentValue = current[key]
                if (currentValue === undefined) {
                    current[key] = null // 赋值为 null 之后更新JSON则删除对应的key
                } else {
                    syncKeys(currentValue, pre[key])
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach((item, index) => {
                syncKeys(current[index], item)
            })
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) return
    const rootCurrentType = type(current)
    const rootPreType = type(pre)
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length && path !== '') {
            // 比之前的小则直接替换，就不需要去diff了
            setResult(result, path, current)
        } else {
            for (let key in current) {
                const currentValue = current[key]
                const preValue = pre[key]
                const currentType = type(currentValue)
                const preType = type(preValue)

                // 不是对象也不是数组，则直接替换
                if (
                    currentType != ARRAYTYPE
                    && currentType != OBJECTTYPE
                    && currentValue != preValue
                ) {
                    setResult(result, (path == '' ? '' : path + ".") + key, currentValue)
                } else if (currentType == ARRAYTYPE) {
                    // 如果类型不同则直接替换
                    if (preType != ARRAYTYPE || currentValue.length < preValue.length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue)
                    } else {
                        currentValue.forEach((item, index) => {
                            _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result)
                        })
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue)
                    } else {
                        for (let subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result)
                        }
                    }
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current)
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current)
            } else {
                current.forEach((item, index) => {
                    _diff(item, pre[index], path + '[' + index + ']', result)
                })
            }
        }
    } else {
        setResult(result, path, current)
    }
}

function setResult(result, k, v) {
    if (type(v) != FUNCTIONTYPE) {
        result[k] = v
    }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}
