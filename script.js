// Error 1:
// The error was mispelling, message wasn't spelt right.
let message = 'Welcome to the debugging exercise!';
console.log(message);

// Error 2: 
// I'm unsure what the error was, I know that I had it as class and ID and it should have been one or the other.
  let button = document.querySelector('#actionButton');
  button.addEventListener('click', eventHandler);


// Error 3: 
// No error, everything is defined.
function eventHandler() {
  console.log('Button clicked');
  displayOutput();
}

// Error 4: 
// No error, but if #output doesn't exist the output would not work.
function displayOutput() {
  let output = document.querySelector("#output");
  output.innerText = 'You clicked the button!';
}

// Error 6: Misusing variable scope
// The error is let localMessage should be outside the function and let should not be in the function.
let localMessage;
function updateMessage() {
  localMessage = 'Updated message';
}
updateMessage();
console.log(localMessage);

// Error 7:
//The error is, it was written incorrectly which made it run wrong.
document.getElementById('testButton').addEventListener('click', testFunction);

function testFunction() {
  console.log('Test function executed');
}

// Error 8:
// The error is, it should be using addition instead of subtraction.
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 + number2));

// Error 9: 
// The error is null doesn't have a length property.
let nullVar = null;
console.log(nullVar);

// Error 10:
// The error is it is written incorrectly and in Javascript it is case sensitive.
let caseSensitiveVar = 'Case matters';
console.log(caseSensitiveVar);

// Error 11:
// The error is 'importantData' is a string not the varaible. No quote marks is needed.
let importantData =
  "This string must be logged to the console. It's important!";
console.log(importantData);

// Error 12: 
// The error is, the function isn't defined. 
function trytoCallFunction() {
  console.log("Function called");
}
tryToCallFunction();

// Error 13:
// The error property name is spelled incorrectly.
let user = { name: 'Alice' };
console.log(user.name)

// Error 14: 
// The error is it needs to be a string method first.
let someNumber = 123;
console.log(someNumber.toString().toUpperCase());

// Error 15: 
// The error is it is missing quotes.
let greeting = 'Hello, world!';

// Error 16: 
// The error is there shouldn't be a semicolon after loop.
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Error 17:
// The error is there are too many equal signs.
if (five == 5) {
  console.log('Five is equal to 5'); // This one should be logged
} else {
  console.log('Five is not equal to 5');

  // Error 18:
  // The error is that there is too much code which makes it run differently.
  let numbers = [];
  numbers.push(1);
  console.log(numbers);

  // Error 19:
  // The error is x isn't declared.
  let x = 5;
  console.log(x);

  // Error 20:
  // The error is primitives like string can't have properties, I had to look this one up!
  let myString = new String('Hello');
  myString.property = 'World';
  console.log(myString.property);
}
