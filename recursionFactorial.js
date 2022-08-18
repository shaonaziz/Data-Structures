// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  } else if (number < 2) {
    return 1;
  } else {
    return number * findFactorialRecursive(number - 1);
  }
}

// console.log(findFactorialRecursive(90));


function findFactorialIterative(number) {
  let answer = 1;
  if(number ===2){
    answer = 2;
  }
  for(let i = 2;i<= number;i++){
    answer = answer*i;
  }
  return answer;
}


console.log(findFactorialIterative(5))