numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function operateOnNumbers(operator, x, y) {
  return operator(x, y);
}

console.log(operateOnNumbers(add, 3, 4)); // 7
console.log(operateOnNumbers(multiply, 3, 4)); // 12
console.log(operateOnNumbers((x, y) => x - y, 3, 4));

function testWithThreeParameters(cb1, cb2, array) {
  const returnedArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const liftedNumber = cb1[element];
    const liftedNumberDivided = cb2[liftedNumber];
    returnedArray.push(liftedNumberDivided);
  }
  return returnedArray;
}
