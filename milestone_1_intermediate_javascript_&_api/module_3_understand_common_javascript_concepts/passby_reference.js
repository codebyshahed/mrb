function multiply(x, y) {
  return x * y;
}

const a = 5;
const b = 8;

const result = multiply(a, b);
console.log(result);

const ratan = { name: "ratan", balance: 20000 };
const malik = { name: "malik", balance: 15000 };
console.log("befor call", ratan, malik);

function totalMoney(p1, p2) {
  p1.balance = 0;
  p2.balance /= 2;
  const total = p1.balance + p2.balance;
  return total;
}

const result2 = totalMoney(ratan, malik);
console.log(result2);
console.log("after call", ratan, malik);
