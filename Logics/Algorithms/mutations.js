// -----------------------------------------
// Basic Algorithms  - Mutations
// -----------------------------------------
// Return true if the string in the first element of the array contains 
// all of the letters of the string in the second element of the array.


// mutation(['hello', 'hey']) // false

function mutation(arr) {
    var haystack = arr[0].toLowerCase();
    var needle   = arr[1].toLowerCase();
    
    for (let i = 0, needleLen = needle.length; i < needleLen; i++) {
      if ( !(haystack.includes(needle[i])) ) { return false; }
    }
    return true;
  }
  
  console.log(  mutation(['Hello', 'hello'])  ); // true
  console.log(  mutation(['hello', 'hey'])  ); // false