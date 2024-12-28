// result: ["Banana", "Orange", "kiwi", "guava", "Mango", "pineapple", "watermelon"];
// remove index 2 element and add 2 elements

const arr=["Banana", "Orange", "Apple", "Mango", "pineapple", "watermelon"];
const items=["kiwi", "guava"];
const resultantArrLen= 7;
const itemsToRemove= 1;
for(let i=resultantArrLen-1; i>=2 ; i--){
      
      if(i>2){
        arr[i]= arr[i-1];

      }else {
        for(let j=0; j<items.length; j++){

            arr[i]= items[j]
            i++;
        }
        break;
      }

}
console.log(arr, "out")


// [
//     'Banana',
//     'Orange',
//     'guava',
//     'Apple',
//     'Mango',
//     'pineapple',
//     'watermelon'
//   ] out