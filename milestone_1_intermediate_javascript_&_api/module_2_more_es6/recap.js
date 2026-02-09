const tax = 22;

let x = 3;
x = 1;

// functions default parameter
function add(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
}

// object
const student = {
  name: "Shahed",
  marks: 50,
};

const friends = ["shahed", "abul", "sabul"];

// template string... dynamic text and variable
const dynamicText = `My tax: ${tax} and marks: ${student.marks} has friends ${friends[1]}`;
console.log(dynamicText);

// arrow function with default parameter
const add2 = (x = 0, y = 0) => x * y;

// jodi single parameter hoi tahole bracket dewar drkr nai eita optional
const diff = (x) => x * x;
const tentyimes = (x) => x * 10;

// spread operator
const newFriends = [...friends, "kabal", "abal"];
console.log(newFriends);

// destructuring
const { marks: totalMarks, age = 0 } = student;
console.log(totalMarks, age);

// array destructuring
const [firstFrnd] = friends;
console.log(firstFrnd);
