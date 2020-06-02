// Repeat a String


function repeatString(str,num){
    var accumulatedString = "";
    while(num>0){
        accumulatedString += str;
        num--;
    }
    return accumulatedString;
}

console.log(repeatString("sethu kumar",2))