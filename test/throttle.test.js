import assert from 'assert'
import throttle from '../js/throttle'

describe('函数节流', function() {
    it('能够正常节流', function(done) {
        function f(num) {
            return num
        }

        const fn = throttle(f, 20)
        assert(fn(1) === 1)
        assert(fn(2) === 1)
        setTimeout(() => {
            assert(fn(3) === 3)
            done()
        }, 40)
    });
})
