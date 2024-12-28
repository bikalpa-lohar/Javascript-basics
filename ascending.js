
// Sort an Array in Ascending Order:
// Input: [5, 2, 8, 1, 3]
// Output: [1, 2, 3, 5, 8]


let arr = [5, 2, 8, 1, 3];

for (let i=1; i< arr.length; i++){
    for (let j=0; j< i; j++){
        if (arr[i] < arr[j]) {
            let x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        } 
    }      
}
console.log(arr);