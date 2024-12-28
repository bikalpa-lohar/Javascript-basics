// Find the Kth Smallest Element:
// Input: [7, 10, 4, 3, 20, 15], k=3
// Output: 7 (3rd smallest element)

// var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

// for (var i = 1; i < Arr.length; i++){
//     for (var j = 0; j < i; j++)
//         if (Arr[i] < Arr[j]) {
//             var x = Arr[i];
//             Arr[i] = Arr[j];
//             Arr[j] = x;
//         }   
// }

// console.log(Arr);
// 1,7
// 1,2,7
// 1,2,7,8
// 1,2,3,8,7


let arr = [7, 10, 4, 3, 20, 15];

for (let i=1; i< arr.length; i++){
    for (let j=0; j< i; j++){
        if (arr[i] < arr[j]) {
            let x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        } 
    }      
}
console.log(arr[2], "(3rd smallest element)");