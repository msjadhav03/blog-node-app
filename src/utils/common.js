function generateRandomNumberString(length){
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result)
    return result;
}

function asyncGenerateRandomId(length){
  
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log(result+Date.now())
        return (result+Date.now())
  
}

module.exports = 
{
    generateRandomNumberString,
    asyncGenerateRandomId
}