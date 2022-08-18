/*const names = ['shaon'];
const large = new Array(100).fill('shaon')
function findShaon(array){
   let t0 =performance.now()
   for(let i =0;i<=array.length;i++){
      if(array[i]==='shaon'){
        console.log('Shaon Found!')
      }
   }
   let t1= performance.now()
   console.log('finding the result took ' + (t1-t0) + 'miliseconds')
}

findShaon(large);

*/


// log all the pair of array

const boxes = ['a','b','c','d','e'];

function LogAllThePairs(array){
   for(let i=0;i<array.length;i++){
      for(let j=0;j<array.length;j++){
         console.log(array[i],array[j])
      }
   }
}

LogAllThePairs(boxes)


//for nested loop it would be O(n*n)=O(n^2)