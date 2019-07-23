import assert from 'assert'
import diff from '../algorithm/diff'

describe('diff 算法', function() {
    it('当JSON变短的时候直接替换', function() {
        const ret = diff({ b: 1}, { a: 1, c: 2 })
        assert(JSON.stringify(ret) === JSON.stringify({ b: 1 }))
    });

    it('修改某个值', function() {
        const ret = diff({ a: 1, c: 1}, { a: 1, c: 2 })
        assert(JSON.stringify(ret) === JSON.stringify({ c: 1 }))
    });

    it('增加一个值', function() {
        const ret = diff({ a: 1, c: 1, b: 1}, { a: 1, c: 2 })
        assert(JSON.stringify(ret) === JSON.stringify({ c: 1, b: 1 }))
    });

    it('增加一个值并删除一个值', function() {
        const ret = diff({ c: 1, b: 1}, { a: 1, c: 2 })
        console.log(ret)
        assert(JSON.stringify(ret) === JSON.stringify({ c: 1, b: 1, a: null }))
    });
})
