// Count Vowels and Consonants:
// Input: "hello world"
// Output: Vowels: 3, Consonants: 7

const str= "hello wOrld"
const vowelArr= ["a", "e", "o", "i", "u"];
let vowelCount=0;
let consonantsCount=0;
for(let i=0; i< str.length; i++){
    // let strChar= str[i];
    if(str[i] === " "){
        continue;
    }
    for(let j=0; j< vowelArr.length; j++){

        if(str[i].toLowerCase() === vowelArr[j]){
              vowelCount++ ;
              break;
        }else if( j === vowelArr.length-1){
            consonantsCount++ ;
        }
    }
}
console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantsCount);