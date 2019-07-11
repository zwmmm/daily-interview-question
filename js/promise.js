// 实现一个promise
// 2019-7-10
// author: zhengwei

const PENDING = 'PENDING';
const REJECT = 'REJECT';
const RESOLVE = 'RESOLVE';

function MyPromise(fn) {

    this.resolveValue = undefined;
    this.rejectValue = undefined;
    this.status = PENDING; // promise 的状态

    // 为什么需要数组？
    // 因为同一个promise是可以多次调用then的，注意这里的多次并不是链式调用。
    // 例如：promise.then() promise.then() 这样去调用两次
    this.rejectCallback = []; // 失败的回调函数集合
    this.resolveCallback = []; // 成功的回调函数集合

    // reject 和 resolve 必须在then执行之后再执行，所以需要使用setTimeout，将执行延迟到下一轮的事件循环
    const reject = value => {
        setTimeout(() => {
            if (this.status === PENDING) {
                this.status = REJECT;
                this.rejectValue = value;
                this.rejectCallback.forEach(fn => fn(this.rejectValue));
            }
        }, 0)
    }

    const resolve = value => {
        setTimeout(() => {
            if (this.status === PENDING) {
                this.status = RESOLVE;
                this.resolveValue = value;
                this.resolveCallback.forEach(fn => fn(this.resolveValue));
            }
        }, 0)
    }

    try {
        fn(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

function resolutionProcedure(promise, value, resolve, reject) {
    if (promise === value) { return reject(new TypeError('then不能返回this')) };
    if (value instanceof MyPromise) { return value.then(resolve, reject) };
    resolve(value); // 继续触发下一个then
};

MyPromise.prototype.then = function(onResolve = () => {}, onReject = () => {}) {
    let nextPromise; // then可以链式调用，所以必须返回一个promise

    // 如果promise还处于pending状态，则收集相关的回调
    if (this.status === PENDING) {
        return nextPromise = new MyPromise((resolve, reject) => {
            this.rejectCallback.push(value => {
                resolutionProcedure(nextPromise, onReject(value), resolve, reject);
            });
            this.resolveCallback.push(value => {
                resolutionProcedure(nextPromise, onResolve(value), resolve, reject);
            });
        })
    }

    // 不为 pending 状态则直接触发回调 当在setTimeOut等宏任务中调用then方法，就会有可能 status不为 pending
    if (this.status === RESOLVE) {
        return nextPromise = new MyPromise((resolve, reject) => {
            resolutionProcedure(nextPromise, onResolve(value), resolve, reject);
        })
    }

    if (this.status === REJECT) {
        return nextPromise = new MyPromise((resolve, reject) => {
            resolutionProcedure(nextPromise, onReject(value), resolve, reject);
        })
    }
}

export default MyPromise;
