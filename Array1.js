// How do you find the missing number in a given integer array of 1 to 100? 

var array = [13,3,20]
var count = 20
var Missing = []


    for(let i=0;i<=count;i++){
        if(array.indexOf(i) === -1){
            Missing.push(i)
        }
    }

console.log(Missing)