const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function greeting(name) {
  console.log(`Hello, ${name}!`);
  readline.close();
}

function processUserInput(callback) {
  readline.question(`What's your name? `, callback);
}

//processUserInput(greeting);

processUserInput((name) => {
  console.log("Hello, ", name.toUpperCase());
  console.log("The length of your name is: ", name.length);
});

//1) code runs and displays in terminal "what's your name? ". It starts with the function processUserInput
//2) user types in name -> const readline is being processed
//3) processUserInput is being called, which take another function greeting, and displays "hello" + user input
