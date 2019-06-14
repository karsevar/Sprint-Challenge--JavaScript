// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = (arg1, arg2, cb) => cb(arg1, arg2) 


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

// Add callback:
// console.log(consume(2, 1, (arg1, arg2) => arg1 + arg2)); // 3

const add = (num1, num2) => num1 + num2;

// multiply callback:
// console.log(consume(3, 5, (arg1, arg2) => arg1 * arg2)); // 15

const multiply = (num1, num2) => num1 * num2;

//String catenation callback:
// console.log(consume('Mason', 'Karsevar', (first_name, last_name) => {
//   return `Hello ${first_name} ${last_name}, nice to meet you!`;
// }))

const greeting = (first_name, last_name) => {
  return `Hello ${first_name} ${last_name}, nice to meet you!`;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */

console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!
// All the tests were successful.

// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Solution:
/*
  The nestedFunction() binding can assess the internal variable outside of it
because function binding in JavaScript works in a way that they can identify
variables that surround them. This characteristic is true for variables in the global scope,
since the global scope surrounds all the other scopes global variables can be 
accessed anywhere regardless of the number of nested layers. On the other hand, parent functions can't identify 
variables of nested functions. 

illustration:
function myFunction() {
  function nestedFunction() {
    let subInternal = 'I'm inside the nested function';
  }
  console.log(subInternal);
}

This will come back as undefined because myFunction() can not look into 
nestedFunction.
*/
 




