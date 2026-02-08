const person = {
  name: "Shahed",
  fruit: "dalim",
  dish: "halim",
  friends: ["sabbir", "niloy", "siam"],
  isRich: false,
  money: 100,
};

// console.log(person);
const personJSON = JSON.stringify(person);
console.log(personJSON);

// json to object
const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);
