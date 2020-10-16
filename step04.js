


function count(array, element){
    let occurrences = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] === element){
            occurrences++
        }
    }
    return occurrences;
}

function average(array){
    const sum = array.reduce(function (a, b) {
        return a + b
    })
    return sum / array.length
}

function min(array){  
    let min = array[0]
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if(min > element){
            min = element
        }
    }
    return min
}

module.exports = {count, average, min}
