// single parameter
const getSquare = (x) => x * x;
console.log(getSquare(2));

// ge half
const getHalf = (x) => x / 2;
console.log(getHalf(6));

// get the first element of an array
const firstElm = (num) => num[0];
console.log(firstElm([45, 6, 2, 3, 4, 8]));

// get the last element of an array dynamicaly
const getTheLastElem = (index) => index[index.length - 1];
console.log(getTheLastElem([5, 6, 2, 13, 18]));

// ei jinista hudai. amra eita use korbona. ekta function er kono parameter nai but hudai ekta console log korlam arki
const logIt = () => console.log("shahed");
logIt("shahed");

// annonymous function
// document.getElementById("d").addEventListener("click", () => {
//   // functoin body
// });
