
const pipe = (...fns) => {
    return function (val) {
        return fns.reduce((acc, fn) => fn(acc), val)
    }
}

const splitVal = (pattern) => {
    return function(arr) {
        return arr.split(pattern)
    }
}

const mapArray = (fn) => {
    return function(val) {
        return val.map(fn)
    }
}

const hasFirstUpperChar = () => {
    return function (str) {
        if (str.charAt(0) === str.charAt(0).toUpperCase()) {
            return str.charAt(0).toUpperCase() + result.slice(1)
        }
        return str
    }
}

const toLower = (str) => {
    return str.toLowerCase()
}

const toReverse = () => {
    return function (str) {
        return str.reverse()
    }
}
const arrayJoin = (pattern) => {
    return function (arr) {
        return arr.join(pattern)
    }
}
const newArray = mapArray(
    pipe(
        toLower,
        splitVal(''),
        toReverse(),
        arrayJoin(''),
        hasFirstUpperChar(),

    ),
)

console.log(newArray(splitVal(' ')("Я Железный человек")))

