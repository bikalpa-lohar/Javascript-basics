
// Find the Kth Largest Element:
// Input: [7, 10, 4, 3, 20, 15], k=2
// Output: 15 (2nd largest element)



let arr = [7, 10, 4, 3, 20, 15];

for (let i=1; i< arr.length; i++){
    for (let j=0; j< i; j++){
        if (arr[i] > arr[j]) {
            let x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        } 
    }      
}
console.log(arr[1], "(2nd largest element)");