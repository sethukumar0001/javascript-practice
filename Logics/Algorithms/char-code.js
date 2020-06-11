// write a function that can be executed as follows

// console.log(getCharCode('A')); // 65
// console.log(getCharCode('B')); // 66
// console.log(getCharCode('B')); // 66

// Function calls with the same argument should not invoke
// the underlying javascript method


function charCode(){
    let objType = {};
    return function(n){
        console.log(n)
        if(typeof objType[n] === 'number'){
            return n
        }
        return n.charCodeAt(0)
    }
}

const getCharCode = charCode()
console.log(getCharCode('2')); // 50
console.log(getCharCode('b')); // 98

