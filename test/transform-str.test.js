import assert from 'assert'
import transformStr from '../algorithm/transform-str'

describe('精简字符串', function() {
    it('should ', function() {
        const str = '1,2,3,5,7,8,10'
        assert(transformStr(str) === '1~3,5,7~8,10')
    });
})
