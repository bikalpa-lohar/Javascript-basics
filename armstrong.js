// Armstrong Number:
// Check if a number is an Armstrong number.
// Example: 153=1^3 + 5^3 + 3^3


// function isArmstrong(number) {
//     let temp = number;
//     let o = order(temp)
//     let sum = 0;
 
//     // Loop until temp is greater than 0
//     while (temp) {
//         remainder = temp % 10;
 
//         // Floor value of the quotient
//         temp = Math.floor(temp / 10);
//         sum = sum + Math.pow(remainder, o);
//     }
//     if (sum === number) {
//         console.log(number + " is an Armstrong Number");
//     }
//     else {
//         console.log(number + " is Not an Armstrong Number");
//     }
// }
 
// // Function to calculate number of digits
// function order(number) {
//     let n = 0;
//     while (number > 0) {
//         n++;
//         number = Math.floor(number / 10);
//     }
//     return n;
// }

let a= n= 153;
let sumOfCube=0;
while(n !== 0){
    let r = n % 10;
    sumOfCube = sumOfCube +  Math.pow(r, 3);
    n= Math.floor(n/10);
}
if(a === sumOfCube){
    console.log(`It is an Armstrong`);
 } else{
    console.log(`It is not an Armstrong`);  
}