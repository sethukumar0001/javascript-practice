/*
-----------------------------------------
Intermediate Algorithms - Missing Letters
-----------------------------------------
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.


fearNotLetter('abce') should return 'd'.

*/

// --------------------------------------
function fearNotLetter(str) {
    for (var i = 0, charCode; i < str.length; i++) {
      charCode = str.charCodeAt(i);
      if ( charCode !== str.charCodeAt(0) + i) {
        return String.fromCharCode(charCode-1);
      }
    }
    return undefined;
  }
  
  console.log(   fearNotLetter('cdef')   ); // undefined