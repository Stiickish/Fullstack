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
