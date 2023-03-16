//Exercise 1
//Create a folder called callbacks and create an ew file called calledbacks.js
//Create a function called calculate that takes 3 parameters: x,y and a callback called operation
//Create another function called add that takes 2 paramers: x and y and returns the sum of x and y
//Add more functionality: substraction, multiplication, division
//Call the calculate function with the appropiate parameters to test your code

const calculate = (x, y, operation) => {
  return operation(x, y);
};

const add = (x, y) => {
  return x + y;
};

const substraction = (x, y) => {
  return x - y;
};

const multiplication = (x, y) => {
  return x * y;
};

const division = (x, y) => {
  return x / y;
};

console.log(calculate(2, 3, add));
console.log(calculate(5, 3, substraction));
console.log(calculate(2, 3, multiplication));
console.log(calculate(4, 8, division));
