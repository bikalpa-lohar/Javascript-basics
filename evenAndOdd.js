// Even and Odd Numbers:
// Print all even numbers between 1 and N.
// Print all odd numbers between 1 and N.



// let i=1;
// const evenArr = [];
// const oddArr = [];
// while(i <=20){
//     if(i%2 === 0){
//         evenArr.push(i)
//     }else{
//         oddArr.push(i)
//     }
//     i++;
// }
// console.log(evenArr, oddArr)

// let i=1;
// let n=10;
// const evenArr = [];
// for(i; i<= n; i++){
//     if(i%2 === 0){
//         evenArr.push(i);
//     }
// }
// console.log(evenArr)


let i=1;
let n=10;
const oddArr = [];
for(i; i<= n; i++){
    if(i%2 !== 0){
        oddArr.push(i);
    }
}
console.log(oddArr)