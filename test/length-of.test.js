import lengthof from '../algorithm/length-of-longest-substring'
import assert from 'assert'

describe('无重复字符的最长子串', function() {
    it('正确返回', function() {
        assert(lengthof('aaaaa') === 1)
        assert(lengthof('abcdabcd') === 4)
        assert(lengthof('aabbxxsdsfd') === 3)
        assert(lengthof('dvdf') === 3)
    });
})
