import MyPromise from '../js/promise';
import assert from 'assert';

describe('promise的模拟实现', () => {

    it('resolve', () => {
        const p = new MyPromise(resolve => { resolve(1) })
        return p.then(res => {
            assert(res === 1);
        });
    })

    it('reject', () => {
        const p = new MyPromise((resolve, reject) => { reject(new Error('error')) })
        return p.catch(error => {
            assert(error.message === 'error');
        });
    })

    it('链式调用then', () => {
        const p = new MyPromise(resolve => { resolve(1) })
        return p.then(res => {
            assert(res === 1);
            return res + 1;
        }).then(res => {
            assert(res === 2);
        })
    })

    it('then返回promise', () => {
        const p = new MyPromise(resolve => { resolve(1) })
        return p.then(res => {
            assert(res === 1);
            return new MyPromise(resolve => resolve(2));
        }).then(res => {
            assert(res === 2);
        })
    })

    it('then报错', () => {
        const p = new MyPromise(resolve => { resolve(1) })
        return p.then(() => {
            throw new Error('end');
        }).then(res => {
            assert(res === 2);
        }).catch(err => {
            assert(err.message === 'end');
        })
    })
})


// mocha 踩坑记录
// 1. mocha测试异步代码，需要使用 done
// 2. mocha可以直接测试 promise 但是必须吧 promise return ,这是因为 promise 会吧error给吞了。
