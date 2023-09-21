// Define the receivesAFunction function
function receivesAFunction(callback) {
  // Call the callback function
  callback();
}

// Define the returnsANamedFunction function
function returnsANamedFunction() {
  // Define a named function
  function namedFunction() {
    console.log("I am a named function");
  }
  // Return the named function
  return namedFunction;
}

// Define the returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
  // Return an anonymous function
  return function() {
    console.log("I am an anonymous function");
  };
}






// Example usage of receivesAFunction
receivesAFunction(function() {
  console.log("This is a callback function");
});

// Example usage of returnsANamedFunction
const namedFunc = returnsANamedFunction();
namedFunc();

// Example usage of returnsAnAnonymousFunction
const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc();

  