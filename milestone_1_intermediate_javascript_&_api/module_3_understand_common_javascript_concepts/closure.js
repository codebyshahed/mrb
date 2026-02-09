// function counter() {
//   let count = 0;

//   function innerFn() {
//     console.log("inside the inner function");
//   }

//   return innerFn;
// }

// const output = counter();
// console.log(output());

function counter() {
  let count = 0;

  return function innerFn(user) {
    count++;
    console.log("inside the inner function", user, count);
  };
}

const innerFn = counter();
innerFn("inside");
innerFn("inside");
innerFn("inside");
innerFn("inside");
console.log("--------------");

const rahim = counter();
rahim("shahed");
rahim("shahed");
rahim("shahed");
rahim("shahed");
rahim("shahed");

innerFn("mew");
