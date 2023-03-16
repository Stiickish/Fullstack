//Exercise 2
//Create a new folder called promises and create a new file called promises.js
//Change the calculate function to return a promise instead of a value and call the appropriate resolve or reject function depending on the result of the operation function call. Make suke to reject the promise if the operation function throws an error like divide by zero
//Now try to chain add, substract, divide and miltiply using the .then syntax to the new calculator functions that returns a promise.
//Change the calculator to use async/await syntax instead of promises.

//Using promises
/* const calculate = (x, y, operation) => {
  return new Promise((resolve, reject) => {
    try {
      const result = operation(x, y);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}; */

// using Async/Await
const calculate = async (x, y, operation) => {
  try {
    const result = operation(x, y);
    return result;
  } catch (error) {
    throw error;
  }
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

const divide = (x, y) => {
  if (y === 0) {
    throw new Error("Cannot divide by zero");
  }
  return x / y;
};

(async () => {
  try {
    const result = await calculate(10, 5, divide);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();

/* calculate(5, 4, add)
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
  .catch((error) => console.log(error)); */
