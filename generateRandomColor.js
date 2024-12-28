const str="abcdef0123456789";

const colorArrLen= 10;
const colorArr= [];

for(let i=0; i< colorArrLen; i++){

         let color= "#";

         for(let j=0; j< 6; j++){
           
             const ranNum= Math.floor(Math.random()* str.length);
             color= color+ str[ranNum];
         }
         colorArr[i]=color;
}
console.log(colorArr)