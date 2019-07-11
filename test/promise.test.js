import MyPromise from '../js/promise';
import assert from 'assert';

describe('promise的模拟实现', () => {

    it('promise resolve', () => {
        const p = new MyPromise(resolve => { resolve(1) })
        p.then(res => assert(res === 1));
    })

    it('promise reject', () => {
        const p = new MyPromise((resolve, reject) => { reject(new Error('error')) })
        p.catch(error => assert(error.message === 'error'));
    })

    it('promise 链式调用then', () => {
        const p = new MyPromise(resolve => { resolve(1) })
        p.then(res => {
            assert(res === 1);
            return res + 1;
        }).then(res => {
            assert(res === 2);
        })
    })

    it('promise then返回promise', () => {
        const p = new MyPromise(resolve => { resolve(1) })
        p.then(res => {
            assert(res === 1);
            return new MyPromise(resolve => resolve(2));
        }).then(res => {
            assert(res === 2);
        })
    })
})
