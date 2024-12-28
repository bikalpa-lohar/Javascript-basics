// Prime Numbers:
// Check if a given number is prime.
// Print all prime numbers between 1 and N.


// let num=11;
// let j=2;
// while(j <= num/2){
//     if(num%j === 0){
//         console.log("This is not a prime number")
        // break;
//     }else if(j === Math.floor(num/2)){
//         console.log("This is a prime number.")
//     }
//     j++;
// }


// function isPrime(num) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }

// // function printPrimeNumbers(n) {
//     for (let i = 2; i <= 11; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// // }



let n=11
let prime=[];
for(let i=2; i<=n; i++){
        for(let j=2; j<=i; j++){
                if(i%j === 0){
                        break;
                }else if(j === Math.floor( i/2 )){
                        prime.push(i);
                }

        }
}
console.log(`This is a prime number. ${prime}`);

// let n=11
// let prime=[];
// for(let i=2; i<=n; i++){
//         for(let j=2; j<=Math.sqrt(i); j++){
//                 if(i%j === 0){
//                         break;
//                 }
//               prime.push(i)
//         }
// }
// console.log(`This is a prime number. ${prime}`);