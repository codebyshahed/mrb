const employee = {
  name: "Shahed",
  desgination: "Web Develoer",
  salary: 20000,
  experience: 2,
};

// by using for in loop
for (const keys in employee) {
  console.log(`${keys}: ${employee[keys]}`);
}
console.log("--------------- break ----------------");

// by using diff method
const keys = Object.keys(employee);
for (const key of keys) {
  console.log(`${key}: ${employee[key]}`);
}
