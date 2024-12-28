// Sum of Digits:
// Find the sum of the digits of a given number.
// Example: Input: 123, Output: 1+2+3=6



let n= 123;
let  sum=0;
while(n !== 0){
    let r = n % 10;
    sum = sum + r;
    n= Math.floor(n/10);
}
console.log("Output:", sum)