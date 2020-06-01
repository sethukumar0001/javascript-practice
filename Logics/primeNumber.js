//prime number
//: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// for (begin; repeat-condition; update) {
//     // action
//   }
//method 1

function prime(n){
    for(let i=0;i< n;i++){
        if(n %i === 0){         
            return false
        }else{
            return true
        }      
    }

}

// console.log(prime(100))

//method 2

function prime1(n){
    for(let i =2;i<n/2;i++){
        if(n%i === 0){
            return false
        }
        else{
            return true
        }
    }
}

// console.log(prime1(105))

//method 3

function prime2(n){
    for(let i =2;i<Math.sqrt(n);i++){
        if(n%i === 0){
            return false
        }
        else{
            return true
        }
    }
}

console.log(prime2(201))