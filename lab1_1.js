const inc1 = n => ++n
const a = 5
const b = inc1(a)
console.dir({a,b})

/////////////

function inc2(num) {
    ++num.n
}
const num = {
    n : 5}
inc2(num)
console.log(num)