Array.prototype.myMap = function(x){
    debugger
    // x == arguments
    return this.map.apply(this, arguments)
}

console.log([1,2,3,4].myMap(x => x ** 2))


let ex = (value, sum) => console.log(sum + value)
const fx = ex.bind(null, 20)

ex(12, 7)
fx(7, 12)