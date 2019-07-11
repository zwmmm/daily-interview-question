// 实现一个乱序的方法
// 2019-7-11
// author: zhengwei

function shuffle(arr) {
    let newArr = arr.slice();
    for (let i = newArr.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        ;[newArr[randomIndex], newArr[i]] = [newArr[i], newArr[randomIndex]];
    }
    return newArr;
}

export default shuffle;
