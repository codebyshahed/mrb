function sum(num1 = 0, num2 = 0) {
  const total = num1 + num2;
  console.log(total);
}
// sum(5, 2, 5, 89);
sum(2, 10);

// string
function name(firstName = "", lastName = "") {
  const fullName = `${firstName} ${lastName}`;
  console.log(fullName);
}
name("AL", "SHahed");
