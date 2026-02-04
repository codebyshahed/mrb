class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.location = "Bangladesh";
    // console.log("calling the constructor method", name);
  }

  goal() {
    console.log("score a goal");
  }
  getTeamname() {
    console.log("Visca Barca");
  }
}
const player1 = new Player("Tom Braddy", 17);
const secondPlayer = new Player("Oshanto", 42);

console.log(player1);
console.log(secondPlayer);
// player1.goal();
// console.log(player1);
