// // * 
// // ** 
// // *** 
// // ****

// const star= "*" ;
// let i=0;
// for(i; i<5; i++){
//     let arr=[];
//     j=0;
//     for(j; j<5; j++){
//         if(j<=i){
//             arr.push(star);
//         }
//     }
//     console.log(arr.join(" "))
// }



// // 1 
// // 22 
// // 333 
// // 4444

// let i=1;
// for(i; i<5; i++){
//     let arr=[];
//     j=1;
//     for(j; j<5; j++){
//         if(j<=i){
//             arr.push(i);
//         }
//     }
//     console.log(arr.join(" "))
// }

// // 1 
// // 12
// // 123
// // 1234      (   if arr.push(j) than  print)



// 1 
// 121 
// 12321


let i=1;
for(i; i<4; i++){
    let arr=[];
    j=1;
    for(j; j<=i; j++){
            arr.push(j);
    }
   let k=i-1
    for(k; k>=1; k--){
        arr.push(k);
    }
console.log(arr.join(" "))
   
}

