import assert from 'assert'
import call from '../js/call'
import { describe, it } from 'mocha';

Function.prototype.myCall = call;

describe('模拟call的实现', function() {

    it('默认是指向window', function() {
        function f() {
            return this
        }

        assert(f.myCall() === global);
        assert(f.myCall(null) === global);
    });

    it('不改变原函数', function() {
        function f(a, b) {
            return a + b;
        }

        const ret = f.myCall({}, 1, 2)
        assert(ret === 3)
    });

    it('改变this的执行', function() {
        function f() {
            return this.a;
        }

        const ret = f.myCall({ a: 1 })
        assert(ret === 1)
    });
})
