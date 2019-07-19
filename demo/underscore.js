const _ = require('underscore')

function f(a) {
    return a
}

const fn = _.throttle(f, Date.now() * 2)

console.log(fn(1))
