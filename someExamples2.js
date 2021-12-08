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


const arr = [1,1,2,3,4,4,5,6,6,7,7,8,9]

function withoutRepeat(array){
    const uniqueValue = []
    const obj ={}
    for(let i=0;I<array.length; i++){
        const currentEl = array[i]
        if(!(currentEl in obj)){
            obj[currentEl] = 1
        }else{
            obj[currentEl] += 1
        }
    }

    const keys = Object.keys(obj)
    keys.forEach((key) =>{
            if(obj[key] === 1){
                uniqueValue.push(key)
            }
        }
    )

    return uniqueValue;
}

console.log(withoutRepeat(arr))