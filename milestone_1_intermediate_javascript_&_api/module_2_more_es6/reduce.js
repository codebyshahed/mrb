const numbers = [5, 2, 4];

let sum = 0;

for (const num of numbers) {
  sum += num;
}
console.log(sum);

// by using reduce method
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`total sum of numbers are: ${total}`);
