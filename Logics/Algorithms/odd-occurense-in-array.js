// Given and array
// - only numbers
// - odd length
// - all numbers will occur 2 times, apart from one number
// Find this odd number



const findOdd = arr => {
    const qtts = {};
    arr.forEach(num => {
      if (!qtts[num]) {
        qtts[num] = 1;
      } else {
        delete qtts[num];
      }
    });
    return parseInt(Object.keys(qtts)[0], 10);
  };

console.log(findOdd([1,2,3,1,2])) // 3