// Reverse a Number:
// Reverse the digits of a number using a loop.
// Example: Input: 12345, Output: 54321.


let a= 12345;
let reverseIn=0;
while(a !== 0){
    let r = a % 10;
    reverseIn = reverseIn*10 + r;
    a= Math.floor(a/10);
}
console.log("Output:", reverseIn)