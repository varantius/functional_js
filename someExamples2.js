// var array = [1, 2, 3, 5]
// var func = x => x * 2
// function newMap(array, callback) {
//     const result = []
//     debugger
//     for (let i = 0; i < array.length; i++) {
//         result.push(callback(array[i]))
//     }
//     return result
// }
//
// console.log(newMap(array, func))


function checkBrackets(string) {
    let counter = 0;
    string.split('').forEach(item => {
        if (item.includes('(')) return counter++
        return counter--
    })
    return counter === 0
}

console.log(checkBrackets('(())))('))


const arr = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9]

function withoutRepeat(array) {
    const uniqueValue = []
    const obj = {}
    for (let i = 0; I < array.length; i++) {
        const currentEl = array[i]
        if (!(currentEl in obj)) {
            obj[currentEl] = 1
        } else {
            obj[currentEl] += 1
        }
    }

    const keys = Object.keys(obj)
    keys.forEach((key) => {
            if (obj[key] === 1) {
                uniqueValue.push(key)
            }
        }
    )

    return uniqueValue;
}

console.log(withoutRepeat(arr))


let obj = {
    a: 42,
    say: function () {
        setTimeout(function () {
            console.log(this.a)
        })

    }
}
obj.say()

let obj1 = {
    a: 42,
    say: function () {
        setTimeout(() => {
            console.log(this.a)
        })

    }
}

obj1.say()

let obj2 = {
    a: 42,
    say: function () {
        setTimeout(() => {
            console.log(this.a)
        })

    }
}
let u = obj2.say.bind(obj2);
u()


let ex = (value, sum) => console.log(sum + value)
const fx = ex.bind(null, 20)

ex(12, 7)
fx(7, 12)