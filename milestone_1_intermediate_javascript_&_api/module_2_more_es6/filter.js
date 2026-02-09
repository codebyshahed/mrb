const numbers = [22, 5, 43, 6, 8];
const greaterThanTen = numbers.filter((x) => x > 10);
console.log(greaterThanTen);

// just even number
const evenNumber = numbers.filter((num) => num % 2 === 0);
console.log(evenNumber);
