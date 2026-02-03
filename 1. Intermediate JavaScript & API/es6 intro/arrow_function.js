// function declaration
function add(num1, num2) {
  return num1 + num2;
}

// functin expression
const addition = function (num1, num2) {
  return `total sum of numbers are: ${num1 + num2}`;
};
console.log(addition(3, 1));

// arrow function
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName("Tanvir", "Sarkar"));

// condition
const isBigFirst = (x, y) => x > y;
const isBig = isBigFirst(5, 12);
console.log(isBig);

// mutiline arrow function
const doMath = (x, y) => {
  const makeDouble = x * y;
  const makeAgainDouble = y * x;
  const result = makeDouble + makeAgainDouble;

  return result;
};
const output = doMath(2, 3);
console.log(output);
