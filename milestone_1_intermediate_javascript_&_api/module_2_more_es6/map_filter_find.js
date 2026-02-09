const students = [
  {
    id: 1,
    name: "shahed",
    marks: 80,
  },

  {
    id: 2,
    name: "siam",
    marks: 45,
  },

  {
    id: 3,
    name: "sabbir",
    marks: 85,
  },
];

const names = students.map((student) => student.marks);
console.log(names);

// seisob student der paite chai jader marks 80 er opore
const goodStudents = students.filter((student) => student.marks >= 80);
const goodStudent = students.find((student) => student.marks >= 80);
console.log(goodStudents);
console.log(goodStudent);
