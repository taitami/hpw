function seq(f) {
    return function (y) {
        if(typeof y === 'number') {
            return f(y)}
        return seq(function (x) {
            return f(y(x))
        })
    }
}

const m = seq(x => x + 7)
            (x => x * 2)(5)
console.log(m)

///////////////////////////////////////

const array = function() {
    const arr = []

    function get(x) {
        return arr[x]
    }
    get.pop = function() {
        return arr.pop()
    }
    get.push = function(value) {
        arr.push(value)
    }

    return get
}
