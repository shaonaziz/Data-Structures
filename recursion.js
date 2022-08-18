let counter = 0;
function inception() {
    debugger;
  console.log(counter);
  
  if (counter > 3) {
    return "Done!";
  }
  counter++;
   return inception();
}

console.log(inception());

//3 Rules of Recursion

/* 
1.Identify the base case
2.Identify the recursive case
3.Get closer and closer and return when it needed,Usualy
 two return one of base case and another for recursive case 


*/