import singleton from '../js/singleton';
import assert from 'assert';

describe('单例模式', () => {
    it('返回新的构造函数', function() {
        function Fn(a, b) {
            this.a = a;
            this.b = b;
        }

        const newFn = singleton(Fn);
        const obj = new newFn(1, 2);
        assert(typeof newFn === 'function');
        assert(obj.a === 1);
        assert(obj.b === 2);
    });

    it('多次new返回同一个实例', function() {
        function Fn(a, b) {
            this.a = a;
            this.b = b;
        }

        const newFn = singleton(Fn);
        const obj1 = new newFn(1, 2);
        const obj2 = new newFn(1, 2);
        assert(obj1 === obj2);
    });
})
