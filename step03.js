

module.exports = function (str){
    let err = 0
    const chunks = str.match(/.{1,3}/g)
    chunks.map(function(msg){
        if(msg !== 'SOS')
            err++
    })
    return err;
}