// Function declaration
function getGreeting(name) {
  return "Hello " + name + "!";
}

// Function Expression
let greet = function(name) {return 'Hello ' + name + '!'};
console.log(greet("Everyone"));

// Arrow function syntax
let greet2 = (name) => 'Hello ' + name + '!';
console.log(greet2("Dog"));