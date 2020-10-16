

module.exports = function(str){
    const validator = {}
    let score = 0;
    for (let index = 0; index < str.length; index++) {
        const char = str[index].toLowerCase()
        const charCode = char.charCodeAt(0)
        if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
            validator[charCode] = char;

        }
    }

    return Object.keys(validator).length === 26
}