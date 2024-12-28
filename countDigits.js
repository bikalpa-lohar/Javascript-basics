// Count Digits:
// Count the number of digits in a given number using a loop.

let n=1234545;
let count= 0;
while(n !== 0){ 
    n=Math.floor(n/10);
        count++;
}

console.log(count)