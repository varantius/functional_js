// https://flagman.top/about-business/php-i-t-p-uzelki/funkcii-vysshego-poryadka-v-javascript
// https://frontend-stuff.com/blog/composition/
// https://habr.com/ru/company/yandex/blog/547786/
// https://htmlacademy.ru/blog/boost/frontend/lets-learn-javascript-closures



///////////
// Композиция
// const compose = (...functions) => {
//     return (initialValue) =>
//         console.log('Initial value:' + initialValue)
//         console.log('functions: ' + functions)
//         functions.reduceRight((result, func) => func(result), initialValue);
// };


// const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x); // example
const compose = (...functions) => {
    // debugger
    return (initialValue) =>{
        console.log('Initial value:' + initialValue)
        console.log('functions: ' + functions)
        functions.reduce((result, func) => {
            console.log('func: ', func)
            console.log('result', result)
            return func(result);
        }, initialValue)
    }

};

// Приводим функцию к верхнему регистру
const upperCase = (str) => str.toUpperCase();

// Добавляем восклицательный знак
const exclaim = (str) => `${str}!`;

// Повторяем строку трижды
const repeat = (str) => `${str} `.repeat(3);

const withСompose = compose(upperCase,exclaim, repeat);

console.log(withСompose("Сротал")); // СРОТАЛ! СРОТАЛ! СРОТАЛ!

//////////



// https://frontend-stuff.com/blog/composition/

// const map = cb => {
//     debugger
//     console.log('cb',cb)
//     return function (array) {
//         console.log('array: ',array)
//         console.log('cb inside: ',cb)
//         return array.map(cb);
//     }
// }
//
// const arr = [1, 2, 3, 4, 5];
// const double = n => n * 2;
//
// const withDouble = map(double);
//
// console.log(withDouble(arr)); // [2, 4, 6, 8, 10]
// console.log(withDouble([2, 4, 6, 8, 10])); // [4, 8, 12, 16, 20]
//
// console.log('TEST:', map(double)(arr))

//
console.log('============================================')

const map = cb => {
    console.log('callback: ', cb)
    return function (array) {
       console.log('array: ', array)
       return array.map(cb);
    }
}

const prop = key => {
    debugger
    console.log('key: ', key)
    return function (obj) {
        console.log('obj[key]: ', obj[key])
        return obj[key];
    }
}

const getName = prop("name");
console.log('getName: ', getName)

const people = [
    { name: "Alex" },
    { name: "Julia" },
    { name: "Leo" },
    { name: "Den" }
];

console.log(map(getName)(people)); // ["Alex", "Julia", "Leo", "Den"]
