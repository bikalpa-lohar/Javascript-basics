// FizzBuzz:
// Print numbers from 1 to 100, but for multiples of 3, print "Fizz"; for multiples of 5,
//  print "Buzz"; and for multiples of both, print "FizzBuzz".


let n=100;
let i=1;
const fizz=[];
const buzz=[];
const fizzBuzz=[];
for(i; i<=n; i++){
    if(i%3 === 0 && i%5 === 0){
        fizzBuzz.push(i);
    }else if(i%3 === 0){
        fizz.push(i);
    }else if(i%5 === 0){
        buzz.push(i);
    }

}
console.log("Fizz : ", fizz);
console.log("Buzz : ", buzz);
console.log("FizzBuzz : ", fizzBuzz);
