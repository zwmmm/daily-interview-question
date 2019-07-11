import shuffle from '../algorithm/shuffle';
import assert from 'assert';

describe('洗牌算法', () => {
    it('内容随机成功', () => {
        let arr = [1, 2, 3, 4, 5, 6];
        let newArr1 = shuffle(arr);
        let newArr2 = shuffle(arr);
        assert(JSON.stringify(newArr1) !== JSON.stringify(newArr2));
        assert(JSON.stringify(newArr1) !== JSON.stringify(arr));
    })

    it('数组元素不变', () => {
        let arr = [1, 2, 3, 4, 5, 6];
        let newArr = shuffle(arr).sort();
        assert(JSON.stringify(arr) === JSON.stringify(newArr));
    })
})
