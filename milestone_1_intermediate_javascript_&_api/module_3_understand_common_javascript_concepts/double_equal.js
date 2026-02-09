console.log(2 == 2);
console.log(2 == "2");
console.log(1 == 2);
console.log(true == 1);
console.log(false == 0);
console.log(null == undefined);
console.log(0 == "");

// twist.. NaN == Nan or Nan === NaN, js e ei duitakei alada alada hisebe dhore newar chesta kore, fole double == dilew false and tripple === dilew false
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log([] == ""); // true
console.log([5] == "5"); // true
console.log({} == {}); // false. cz eita hocche non-primitive. non primitive er khetre sudhu man dekhbe na, reference ta dekhbe same referance er kina

console.log([] == []);
console.log([5] == [5]);

// but
const p = [5, 4];
const q = p;
console.log(p == q); // true cz same reference
