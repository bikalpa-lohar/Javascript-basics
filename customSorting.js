// Custom Sorting:
// Sort an array such that all even numbers come first, followed by odd numbers.
// Example: Input: [3, 8, 5, 6, 1], Output: [8, 6, 3, 5, 1]

let arr= [3, 8, 5, 6, 1] ;
let i=0;
const evenArr = [];
const oddArr = [];
for(i; i< arr.length; i++){
    if(arr[i]%2 === 0){
        evenArr.push(arr[i]);
    }else {
        oddArr.push(arr[i]);
    }
}
console.log(evenArr.concat(oddArr))