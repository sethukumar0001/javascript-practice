/*
-----------------------------------------
Intermediate Algorithms - Diff Two Arrays
-----------------------------------------

Compare two arrays and return a new array with any items only found 
in one of the two given arrays, but not both. In other words, return 
the symmetric difference of the two arrays.
Example
diffArray([1, 2, 3], [1, 3, 5])    // -> [2, 5]
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])    // -> ["piglet", 4].


Here are some helpful methods:
Array.slice()
Array.filter()
Array.indexOf()
Array.concat()
*/

diffArray = (arr1,arr2) =>{
    return arr1.filter((item)=>!arr2.includes(item)).concat(arr2.filter((item1)=>!arr1.includes(item1)))
}

function diffArray2(arr1, arr2) {
    var newArr = [];
    
    arr1.forEach(function(el) { 
      if ( !(arr2.includes(el)) ) {
        newArr.push(el);
      } 
    });
    
    arr2.forEach(function(el) { 
      if ( !(arr1.includes(el)) ) {
        newArr.push(el);
      } 
    });
  
    return newArr;
  }

console.log(  diffArray([1, 2, 3], [1, 3, 5])  ); //  [2, 5]