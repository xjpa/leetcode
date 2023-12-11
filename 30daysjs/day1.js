// straightforward solution

/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return 'Hello World';
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// OTHER NOTES
// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------

// basic function syntax declaration
function f(a, b) {
  const sum = a + b;
  return sum;
}
console.log(f(3, 4)); // 7

//anonymous function
var f = function (a, b) {
  const sum = a + b;
  return sum;
};
console.log(f(3, 4)); // 7

//Immediately Invoked Function Expression (IIFE)
const result = (function (a, b) {
  const sum = a + b;
  return sum;
})(3, 4);
console.log(result); // 7

//function hoisting -- functions
// anonymous functions dont support hoisting
function createFunction() {
  return f; // we basically return the function before it even got initialised
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
}
const f = createFunction();
console.log(f(3, 4)); // 7

// closures
function counter() {
  let count = 0; // Variable in the outer scope

  function increment() {
    // The inner function (increment) has access to the count variable
    count++;
    console.log(count);
  }

  return increment; // Returning the inner function, creating a closure
}

const counter1 = counter(); // Creating an instance of the counter function (and its closure)
const counter2 = counter(); // Creating another instance with its own closure

counter1(); // Output: 1
counter1(); // Output: 2

counter2(); // Output: 1

// Arrow Syntax

var createHelloWorld = function () {
  return () => 'Hello World';
};

// rest operator

var createHelloWorld = function () {
  return (...args) => 'Hello World';
};
