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
    return (initialValue) =>{
        // console.log('Initial value:' + initialValue)
        // console.log('functions: ' + functions)
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