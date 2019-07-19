import debounce from '../js/debounce'
import assert from 'assert'

describe('函数防抖', function() {
    it('前置防抖', function() {
        function f(a) {
            return a
        }
        const fn = debounce(f, 10, true)
        assert(fn(1) === 1)
        assert(fn(2) === 1)
    });

    it('后置防抖', function() {
        function f(a) {
            return a
        }
        const fn = debounce(f, 10)
        assert(fn(1) === undefined)
        fn(2)
        setTimeout(_ => assert(fn() === 2), 10)
    });
})
