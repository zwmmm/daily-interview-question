import assert from 'assert'
import observable from '../js/observable'

describe('双向数据绑定', function() {
    it('自动更新', function() {
        const div = { type: 'dom', innerText: null }
        function render(num) {
            div.innerText = num
        }

        const data = observable({ num: 1 }, render)
        render(data.num)
        assert(div.innerText === 1)
        data.num++
        assert(div.innerText === 2)
    });
})
