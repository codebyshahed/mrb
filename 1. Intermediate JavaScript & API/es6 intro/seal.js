const employee = {
  name: "Shahed",
  desgination: "Web Develoer",
  salary: 20000,
  experience: 2,
};
// object e seal kore dichi
Object.seal(employee);

// modify object
employee.salary += 5000;

delete employee.experience;
employee.location = "Dhaka";

console.log(employee);
