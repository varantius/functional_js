
// const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
// const lowerCase = str => str.toLowerCase();
// const join = separator => xs => xs.join(separator);
// const map = fn => xs => xs.map(fn);
// const split = pattern => str => str.split(pattern);



const compose = (...fns) => {
    console.log(fns)
    return function (x) {
        console.log(fns)
        return fns.reduce((acc, fn) => fn(acc), x)
    }
}
const lowerCase = str => {
    return str.toLowerCase();
}
const join = separator => {
    return function (xs) {
        return xs.join(separator);
    }
}
const map = fn => {
    return function (xs) {
        return xs.map(fn);
    }
}
const split = function(pattern) {
    return function (str) {
        return  str.split(pattern);
    }
}
const trace = msg => {
    return function (x) {
        return  (console.log(msg, x), x);
    }
}

const bookTitles = [
    "JavaScript The Good Parts",
    "You Don’t Know JS",
    "Eloquent JavaScript"
];

debugger

const slugify = compose(
    trace("before lowercase"), // before lowercase (3) ["JavaScript The Good Parts", "You Don’t Know JS", "Eloquent JavaScript"]
    map(lowerCase),
    trace("after lowercase"), // after lowercase (3) ["javascript the good parts", "you don’t know js", "eloquent javascript"]
    map(split(" ")),
    trace("after split"), // after split (3) [Array(4), Array(4), Array(2)]
    map(join("-")),
    trace("after join")

);
debugger
const slugs = slugify(bookTitles);

console.log(slugs);