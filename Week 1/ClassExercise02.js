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

function testWithThreeParameters(cb, cb2, array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let element1 = cb(element);
    let element2 = cb2(element1);
    result.push(element2);
  }
  return result;
}

console.log(testWithThreeParameters(multiply, add, numbers));
