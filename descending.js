// Sort an Array in Descending Order:
// Input: [5, 2, 8, 1, 3]
// Output: [8, 5, 3, 2, 1]


let desArr= [5, 2, 8, 1, 3];
let i=1;
for(i; i< desArr.length; i++){
    let j=0;
    for(j; j< i; j++){
        if(desArr[i] > desArr[j]){
            let a= desArr[j];
            desArr[j] = desArr[i];
            desArr[i] = a;
        }
    }
}
console.log(desArr)