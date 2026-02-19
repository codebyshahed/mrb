const products = [
  { name: "redmi", brand: "xiaomi", price: 3000, color: "black" },
  { name: "realme", brand: "xiaomi", price: 15000, color: "sky blue" },
  { name: "honor x6c", brand: "honor", price: 14203, color: "blue" },
  { name: "iPhone 16", brand: "apple", price: 100000, color: "black" },
  { name: "samsung s24", brand: "samsung", price: 150000, color: "gray" },
];

// using map
// const result = products.map((product) => product.name);
// console.log(result);

// using forEach
// products.forEach((product) => console.log(product.name));

// using filter
// const result = products.filter((product) => product.color === "black");
// console.log(result);

// using find
const result = products.find((product) => product.price >= 70000);
console.log(result);
