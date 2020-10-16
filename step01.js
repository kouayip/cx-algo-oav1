

function howManyCamelCase(string) {
    let count = 1
    for (let index = 1; index < string.length - 1; index++) {
        let currentChar = string[index]
        let nextChar = string[index + 1]
        if(currentChar === currentChar.toUpperCase() && nextChar === nextChar.toLowerCase()){
            console.log(currentChar);
            count++
        }
    }
    return count
}

console.log(howManyCamelCase('YvesKams'));