const employee = {
  name: "Shahed",
  desgination: "Web Develoer",
  salary: 20000,
  experience: 2,
};
// object e freeze kore dichi
Object.freeze(employee);

delete employee.experience;
employee.location = "Dhaka";

console.log(employee);
