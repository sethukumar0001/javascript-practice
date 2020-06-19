// -----------------------------------------
// Basic Algorithms - Truncate a string
// -----------------------------------------
// If the num is greater or equal to length of the string, then just return the string.
// IF the num is less than or equal to 3, then the addition of the three dots does not 
// add to the string length in determining the truncated string.


function truncateString(str, num) {
    if      (num >= str.length) {return str;}
    else if (num <= 3)          {return str.slice(0, num) + '...';}
    else                        {return str.slice(0, num-3) + '...';}
  }
  
  console.log(  truncateString('A-tisket a-tasket and a green and', 11)  )