// Count Frequency of Digits:
// Count the frequency of each digit in a given number.
// Example: Input: [1,1,2,2,3,3,3,3,2,1], Output: {1:3,2:3,3:4}


const numArr= [1,1,2,2,3,3,3,3,2,1];
const output={};
for(let i=0; i< numArr.length; i++){
   const value= numArr[i];
   if( output[value]){
    output[value]= output[value] + 1;
   }
   else{
    output[value]= 1 ; 
   }
}
console.log(output)