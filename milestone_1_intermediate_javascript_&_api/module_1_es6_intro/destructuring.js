const { name, price, quantity } = { name: "Shirt", price: 120, quantity: 5 };
console.log(name);

const student = {
  studentName: "Shahed",
  id: "331558",
  clgName: "Govt. Graphic Arts Institute",
};

const { studentName, id, clgName } = student;
console.log(studentName, id);
console.log(clgName);

// aray destruturing
const numbers = [5, 1, 2, 3, 4];
const [first, second] = numbers;
console.log(first, second);
