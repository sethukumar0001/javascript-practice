//method 1

let rev = (str) =>{
    let reverse1 = [];
    for(let i=str.length-1;i>=0;i--){
        reverse1.push(str[i])
        }

    return reverse1.join('')
}
console.log(rev("this is sethu"))


//method2

let string = "this is sethu"
console.log(string.split('').reverse().join(""))


//method3

let string1 = "this is sethu"
console.log([...string1].reverse().join(''))


//method4

const fun = (str) =>{
    reverseString = ""
    for(let k of str){
        reverseString = k+reverseString
    }
    return reverseString
}   
console.log(fun("this is sethu"))

//method 5

const revString = (str)=>{
    return str.split('').reduce((acc,char)=>char+acc,'')
}
console.log(revString("this is sethu"))

// first ----split that specific string + reverse +join
 