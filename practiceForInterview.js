/*function HasCommon(array1,array2){
   
  for(let i =0;i<array1.length;i++){
    for(let j=0;j<array2.length;j++){
        if(array1[i]=== array2[j]){
            return true;
        }
    }
  }

  return false;
    
}


const result = HasCommon(['a','b,','d'],[1,'a',3,])

console.log(result);
//time complexity O(a*b)
//space complexity O(1) no variable created thats why
*/

//two array's if theirs elements matches then return true otherwise false

array1 = ['a','b','c','d','q'];
array2 = ['p','x','y','z'];


function containCommons(arr1,arr2){
  //1.first make array1 into an object
  let map ={};
  for(let i=0;i<arr1.length;i++){
    if(!map[arr1[i]]){
      const item = arr1[i];
      map[item] = true;
    }
    
  }
  // lets looping over array2 to check if the object properties matches or not
  for(let j=0;j<arr2.length;j++){
    if(map[arr2[j]]){
      return true
    }
  }
  return false 
}

const result = containCommons(array1,array2)
console.log('result is ', result);

//time complexity O(a+b)
//space complexity O(a) new object created thats why

//Another way with build in function

const containCommons1 =(arr1,arr2)=>{
  return arr1.some(item => arr2.includes(item))
}

containCommons1(array1,array2)