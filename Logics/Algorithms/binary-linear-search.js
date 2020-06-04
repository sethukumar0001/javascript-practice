// find index of an element in a sorted array(indexOf)
// return -1 if element is not found
// use binary search - O (log n) algorithm

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log(binarySearch(arr1, 9)); // 5
console.log(binarySearch(arr1, 24)); // -1

function binarySearch(arr, value) {
    let startIndex = 0;
    let stopIndex = arr.length - 1;
    let middleIndex = Math.floor((startIndex + stopIndex) / 2);

    while (arr[middleIndex] !== value && startIndex < stopIndex) {

        if (value < arr[middleIndex]) {
            stopIndex = middleIndex - 1;
        } else if (value > arr[middleIndex]) {
            startIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((startIndex + stopIndex) / 2);
    }
    return arr[middleIndex] == value ? middleIndex : -1;
}

// value = 9

//[midleindex] == 8
//value>arr[middleindex] 9>8
//startIndex = middleIndex(8)+1 = 9 ****
//middleIndex = 9 + 16/2 === 24/2 = 12

//[middleIndex] == 12
//arr[middleindex] === 12
//value = 9
//value<arr[middleIndex] 9<12
//stopIndex = middleIndex-1 == 12 -1 = 11
//middleIndex == 11+9=20/2 =10

//[middleIndex] == 10
//arr[middleIndex] == 10
//value = 9
//value<arr[middleIndex] 9<10
//startIndex = middleIndex -1 == 10 -1 ==9
//middleIndex = 9+9/2 == 9

//finally index == 9 (sollution)




const arr = [0, 1, 2, 3, 4, 45, 6, 7, 468, 9, 10, 11, 12, 613, 14, 315, 16];


    function linearSearch(array, toFind){
        for(let i = 0; i < array.length; i++){
          if(array[i] === toFind) return i;
        }
        return -1;
      }


console.log(linearSearch(arr,613))

