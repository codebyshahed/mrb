const nums = [12, 6, 5, 9, 8];
console.log(nums);

// spread
console.log(...nums);

// Math.max() meethod
const max = Math.max(...nums);
console.log(max);

// copy an array
const first = [1, 2, 3, 4, 5];
const second = [...first];
second.push(6);
console.log(first);
console.log(second);

const third = [12, ...first, 56, 45, 989, 10];
console.log(third);

// merge dual array
const ages = [17, 15, 18, 16];
const prices = [65, 80, 120, 180];
const all = [...ages, ...prices];
console.log(ages);
console.log(prices);
console.log(all);

// ei kaj ta object er khetrew kora jai
const person = { name: "Shahed", age: 17 };
const employee = { ...person, designation: "Web Developer" };
console.log(employee);

// array er upadan ke spread kore ekta function er call er moddhe bichaiaya/choraiya dite pari
const addition = (num1, num2, num3) => num1 + num2 + num3;
const myArr = [5, 1, 2];
const result = addition(...myArr);
console.log(result);
