// -----------------------------------------
// Basic Algorithms - Where do I belong
// -----------------------------------------

// Return the lowest index at which a value (second argument)
// should be inserted into an array (first argument) once 
// it has been sorted. Some arrays my not be in numerical order.



// getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.

function getIndexToIns(arr, num) {
    return (arr.concat(num)).sort((a, b) => a - b).indexOf(num);
  }
  
  console.log(  getIndexToIns([2, 5, 10], 8)  );  // 2
  
  