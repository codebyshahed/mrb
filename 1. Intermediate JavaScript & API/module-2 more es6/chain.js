const student = {
  name: "shahed",
  marks: 90,

  "home-address": "kochu khet",
  family: {
    title: "bhuiya",
    /*
    mother: {
      name: "noor jahan",
      age: 45,
    },
    */
  },
};

console.log(student.family.title);

// ammur boyosh ber kora
console.log(student.family.mother?.age);

// full object familyclg
console.log(student.family);

// mother object optional chaining
console.log(student.family.mother);
