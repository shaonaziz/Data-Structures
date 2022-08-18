//ReverseString-exercise

/*
function reverseString(str){
  
 //check input
 if(!str || str.length < 2 || typeof str != 'string'){
  console.log('Input is invalid! 😢');
 }

 const backwards =[];
 const length = str.length-1;
 for(let i=length;i>=0;i--){
  backwards.push(str[i]);
 }
 console.log(backwards.join(''));


}

reverseString('radar')

*/

///////////////////////////////////////////////

//check Palindrome for string
/*
function checkPalindrome(str){

  // check input
 if(typeof str != 'string'){
    return 'PLEASE ENTER A VALID STRING! 😐'
  }

  let re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re,'');

  let len = str.length;
  console.log('len',len)
  for(let i=0;i<=len/2;i++){
    if(str[i] !== str[len - 1 -i]){
      return "This stirng isn't a palindrome 😞"
    }
  }

  return "Congratulations!! It's a Palindrome string!! 😂"
}


const value = checkPalindrome("A man, a plan, a canal. Panama");
console.log(value);

*/

//////////////////////////////////////

mergeSortedArrays([0,3,4,31], [3,4,6,30]);
output : [0,3,4,4,6,30,31]

function mergeSortedArrays(array1, array2) {
  const mergeArray = [];

  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  //check Input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (array1Item < array2Item || array2Item===undefined) {
      mergeArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergeArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  
  return mergeArray;
  
}

const output =mergeSortedArrays([0,3,4,31], [3,4,6,30]);

console.log(output);




