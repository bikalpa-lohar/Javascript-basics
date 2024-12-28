// Perfect Number:
// Check if a number is a perfect number.
// A number is perfect if the sum of its divisors (excluding itself) equals the number. 
// Example: 6 is perfect because 1+2+3=6


let a= n=36;
let sum=1;
for(let i=2; i<= Math.sqrt(n);i++){
    if (n % i === 0) {
        sum += i;

        if (i !== n / i) {
            sum += n / i;
            console.log(i, "inner")
        }
        console.log(i)
    }
}

if (a === sum) {
    console.log(`${n} is a perfect number.`);
} else {
    console.log(`${n} is not a perfect number.`);
}