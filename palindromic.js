// Palindromic Numbers:
// Check if a given number is a palindrome (same forwards and backwards).
// 1234321 


let a=n= 1234321;
let reverseIn=0;
while(n !== 0){
    let r = n % 10;
    reverseIn = reverseIn *10 + r;
    n= Math.floor(n/10);
}
console.log("Output:", reverseIn)
if(a === reverseIn){
    console.log(`It is Palindromic`);
 } else{
    console.log(`It is not a Palindromic`);  
}