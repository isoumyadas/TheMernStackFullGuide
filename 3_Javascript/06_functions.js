function addNums(num1, num2) {
  console.log(num1 + num2);
}

addNums(9, 8);

// To set default parameter

function x(num1 = 3, num2) {
  console.log(num1 + num2);
}

x(undefined, 5);

// arrow functions
const totalSum = (x, y) => {
  return x + y;
};
console.log(totalSum(5, 6));
