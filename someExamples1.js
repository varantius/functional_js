// const withCounter = fn => {
//     let counter = 0
//     return (...args) => {
//         debugger
//         console.log(`Counter is ${++counter}`)
//         return fn(...args)
//     }
// }
// const add = (x, y) => x + y
// const countedSum = withCounter(add)
//
// console.log(countedSum(2, 3))



let s = 'hello my dick';
let result = [...s].reduce((acc, char) => {
    debugger
    if(acc[char]) {
        acc[char]=  acc[char] + 1
    } else{
        acc[char] =  1
    }
    return acc
}, {});
debugger
console.log(result); // {h: 1, e: 1, l: 2, o: 1}