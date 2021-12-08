Array.prototype.myMap = function (x) {
    // debugger
    // x == arguments
    return this.map.apply(this, arguments)
}

console.log([1, 2, 3, 4].myMap(x => x ** 2))

//--------------------------------------------
let ex = (value, sum) => console.log(sum + value)
const fx = ex.bind(null, 20)

ex(12, 7)
fx(7, 12)

//--------------------------------------------


function hello() {
    console.log('Hello', this)
}

let person = {
    name: 'Slava',
    age: 29,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 27
}

person.logInfo.bind(lena, 'Frontend', '555554')()
person.logInfo.bind(person)()

person.logInfo.call(lena, 'Frontend', '555554')
person.logInfo.apply(lena, ['Frontend', '555554'])


const array = [1, 2, 3, 4, 5]

Array.prototype.myltBy = function (n) {
    console.log(this)
    return this.map(function (i) {
        return i * n
    })
}

console.log(array.myltBy(2))