const calculate = (x, y, operation) => {
  return new Promise((resolve, reject) => {
    try {
      const result = operation(x, y);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
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
  if (y === 0) {
    throw new Error("Cannot divide with 0");
  }
  return x / y;
};

calculate(5, 4, add)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

calculate(5, 4, multiplication)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

calculate(5, 4, division)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

calculate(5, 4, substraction)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
