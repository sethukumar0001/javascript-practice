// prime number
const isPrime = n => {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <  (Math.sqrt(n)); i++) {
        console.log(i)
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  

// console.log(isPrime(8)); 


//factorial

const factorial = (n) =>{
    console.log("-->",n)
    if(n<2){
        return 1
    }
    return n*factorial(n-1)
}

// console.log(factorial(3)); // 6


//fibanoci

const fib = (n) =>{
    if(n<2){
        return n
    }
    return fib(n-1)+fib(n-2)
}
// console.log(fib(10)); // 55

//filter

const filter = (arr, predicate) => {
    const filteredArr = [];
    for (let el of arr) {
      if (predicate(el)) {
        filteredArr.push(el);
      }
    }
    return filteredArr;
  };
  
  // console.log(filter([1, 2, 3, 4], n => n < 3)); // [1, 2]


const reverse = str => {
    let reversedStr = '';
    for (let i = str.length - 1; i > -1; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  };
  
  console.log(reverse('abcdef')); // 'fedcba'
