let data;
// console.log(`value of data is ${data}`);
data = 0; // falsy
data = ""; // falsy
data = " "; // truthy.. ca has an empty white space
data = "0";
data = false;
data = true;
data = null;
data = {}; // truthy
data = []; // truthy
data = false;
data = true;
data = -1; // truthy value
data = [];

if (data) {
  console.log(`${data} is truthy`);
} else {
  console.log(`${data} is falsy`);
}

// kono karone jodi falsy value if er moddhe drkr pore
// use logical not (!!) operator
// capture any value to boolean (true false)
if (!!data) {
  console.log("inside if with a falsy value");
}

// double not operator
if (data === true) {
  console.log("only true inside the double not");
}
