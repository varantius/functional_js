
// Каррирование
function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, всё ещё можно вызывать нормально
// console.log(curriedSum(1)(2, 3)); // 6, каррирование первого аргумента
// console.log(curriedSum(1)(2)(3)); // 6, каррирование всех аргументов

function curry(func) {
    // Новую функцию можно вызывать со случайным кол-вом аргументов
    // Поэтому складываем их в массив
    debugger
    return function curried(...args) {
        debugger
        // Если все аргументы были переданны
        // Например для sum() нужно чтобы было передано 3 аргумента
        // У функции есть свойство length - ожидаемое кол-во аргументов
        if (args.length >= func.length) {
            debugger
            return func.apply(this, args); // возвращаем результат функции
        } else {
            debugger
            // Если не все еще аргументы были переданы
            // То создадим новую функцию
            return function (...args2) {
                debugger
                // Снова вызываем curried, конкатинируя аргументы двух функций
                // Тут главное понять как накапливаются аргументы в замыкании
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

// function log(date, importance, message) {
//     console.log(
//         `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
//     );
// }
//
// const curriedLog = curry(log); // Волшебная функция каррирования
//
// // Ух-ты мы создали новую функцию для логирования с текущим временем
// let logNow = curriedLog(new Date());
//
// logNow("INFO", "message"); // теперь не нужно передавать аргумент времени