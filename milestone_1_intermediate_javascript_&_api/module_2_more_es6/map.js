const numbers = [50, 12, 30, 40];
// const doubleNums = [];

// for (const num of numbers) {
//   const double = num * 2;
//   doubleNums.push(double);
// }
// console.log(doubleNums);

// console.log("--------- break --------");

// const doubledIt = (x) => x * 2;
// const double = numbers.map(doubledIt);
// console.log(double);

// by using map
const doubled = numbers.map((x) => x * 2);
console.log(doubled);

// num er sathe 5 gun
const fiveTimes = numbers.map((num) => num * 5);

// square
const square = numbers.map((num) => num * num);

console.log(fiveTimes);
console.log(square);

// by using string
const friends = ["shahed", "abbir", "sabbir", "niloy", "siyam"];
const nameLength = friends.map((name) => name.length);

const nameFirstLetter = friends.map((name) => name[0].toUpperCase());
console.log(nameLength);
console.log(nameFirstLetter);

const result = numbers.map((num, index) => {
  return num * index;
});
console.log(result);
