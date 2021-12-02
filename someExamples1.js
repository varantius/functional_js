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



let s = 'aaabcc';
let result = [...s].reduce((acc, char) => {
    debugger
    if(acc[char]) {
        acc[char] =  acc[char] + 1
    } else{
        acc[char] =  1
    }
    return acc
}, {});
debugger
console.log(result); // {h: 1, e: 1, l: 2, o: 1}


var test = [
    {color: 'white', id: 3},
    {color: 'black', id: 4},
]

const arrToObject = (arr) =>
    arr.reduce((acc, item) => {
        debugger
        acc[item.color] = { ...acc[item.color], [item.id]: item };
        return acc;
    }, {});

const outputObject = (array, output = {}) => {
    array.forEach(el => {
        // debugger
        output[el.color] = {
            [el.id]: el
        }
    });
    return output;
};

console.log(arrToObject(test))
console.log(outputObject(test))