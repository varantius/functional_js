// https://medium.com/@venomnert/pipe-function-in-javascript-8a22097a538e

// https://itnext.io/write-better-javascript-function-composition-with-pipe-and-compose-93cc39ab16ee

// const pipe = (op1, op2) => {
//     return (arg) => {
//         const result1 = op1(arg);
//         return op2(result1);
//     }
// }
const arr = ['One', 'Two', 'Three', 'Four', 'Five']

const pipe = (...fns) => {
    return function(res){
        return fns.reduce((acc, fn) => fn(acc), res)
    }
}

const convertToString = (pattern) => {
    return function(str){
        return  str.join(pattern)
    }
}
const trace = msg => {
    return function (result) {
        return  (console.log(msg, result), result);
    }
}
const toLower = () => {
    return function(str){
        return str.toLowerCase()
    }
}
const convertToArray = (pattern) => {
    return function(str){
        return str.split(pattern)
    }
}
const pushLastElement = (elem) => {
    return function(arr){
        return  [...arr, elem]
    }
}


const map = (fn) => {
    return function(arr){
        return arr.map(fn)
    }
}


const example = pipe(
    trace("Convert array To string"),
    convertToString(","),
    trace("To Lower case"),
    toLower(),
    trace("Convert String To Array"),
    convertToArray(','),
    trace("Push one element"),
    pushLastElement('six')
)
const result = example(arr)
console.log(arr)
console.log(result)

