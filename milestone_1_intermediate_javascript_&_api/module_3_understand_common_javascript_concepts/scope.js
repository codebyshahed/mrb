// global scope
let name = "Tom Hanks";

if (true) {
  const data = 2;
  console.log("inside the if block", data, name);
}
// console.log(data);

// hoisting var
console.log(place);

// function scope || local scope
function doMath(a, b) {
  console.log(a, b);
  //   console.log(`calling double it: ${doubleIt(4)}`);

  function doubleIt(x) {
    return x * 2;
  }
}
doMath(2, 5);
// console.log(`calling double it: ${doubleIt(4)}`);

// hoisting
var place = "dhaka";
