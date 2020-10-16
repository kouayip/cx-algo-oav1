


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



module.exports = {count, average}
