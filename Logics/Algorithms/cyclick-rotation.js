// Given and array and a number k
// - array has only numbers 0-100
// - k is a number 0-100
// Move the array k places forward
// cyclicRotation([1,2,3], 1) // [3,1,2]
// cyclicRotation([1,2,3], 2) // [2,3,1]



const arr1 = [1, 2, 3];

console.log(cyclicRotation(arr1, 2))


function cyclicRotation(arr,value){
    let  rotateArray = [];
    let length = arr.length;
    arr.forEach((item,i) => {
        console.log((i+value)%length)
        rotateArray[(i+value)%length] = item;
        // console.log(rotateArray)
    });
    return rotateArray;
}
