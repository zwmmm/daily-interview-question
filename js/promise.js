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

MyPromise.prototype.then = function(resolve, reject) {
    // 如果promise还处于pending状态，则收集相关的回调
    if (this.status === PENDING) {
        this.rejectCallback.push(reject);
        this.resolveCallback.push(resolve);
    }

    if (this.status === RESOLVE) {

    }

    if (this.status === REJECT) {

    }
}

const test = new MyPromise((resolve) => {
    resolve(1);
})

test.then(res => console.log(res));
