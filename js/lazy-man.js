// LazyMan
// 2019-7-15
// author: zhengwei

function lazyMan(name) {
    console.log(`Hi I am ${name}`);
    const obj = {
        task: [],
        next() {
            // 完成一个任务之后继续完成下面的直到没有任务为止
            const task = this.task.shift();
            task && task();
        },
        sleep(second) {
            this.task.push(() => {
                console.log(`等待${second}秒...`)
                setTimeout(() => {
                    this.next();
                }, second * 1000);
            })
            return this;
        },
        eat(name) {
            this.task.push(() => {
                console.log(`I am eating ${name}`)
                this.next();
            })
            return this;
        },
        sleepFirst(second) {
            this.task.unshift(() => {
                console.log(`等待${second}秒...`);
                setTimeout(() => {
                    this.next();
                }, second * 1000);
            })
            return this;
        }
    };

    // 先等收集任务
    setTimeout(() => {
        // 收集好之后开始第一个任务
        obj.next();
    })
    return obj;
}

lazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');

