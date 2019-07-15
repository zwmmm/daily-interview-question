import { forMax, rexMax } from '../js/string-max';
import assert from 'assert';

describe('查找字符串中连续出现最多的字符并打印次数', function() {
    it('forMax内容正确', function() {
        const str = 'aaabbbbbsssff';
        const { text, length } = forMax(str);
        assert(text === 'b');
        assert(length === 5);
    })

    it('rexMax内容正确', function() {
        const str = 'aaabbbbbsssff';
        const { text, length } = rexMax(str);
        assert(text === 'b');
        assert(length === 5);
    })
})
