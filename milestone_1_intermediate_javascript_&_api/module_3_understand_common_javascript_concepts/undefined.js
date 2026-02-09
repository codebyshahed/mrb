let money;
// console.log(money);

function total(a, b) {
  if (a === undefined || b === undefined) {
    return;
  }

  if (a && b) {
    return a + b;
  }
}
const result = total(2);
// console.log(result);

const phone = {
  brand: "samsung",
  price: 250000,
};
console.log(phone.price);

const myBanks = ["sonali", "rupali", "jamuna"];
console.log(myBanks[456]);

// new jinis array element delete
delete myBanks[0];
console.log(myBanks[0]);

console.log(`type of undefined is: ${undefined}`);

console.log(`type of num is: ${typeof null}`);
