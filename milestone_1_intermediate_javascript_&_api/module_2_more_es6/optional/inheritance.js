// common properties
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
}

// cat
class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
}

// bird
class Bird {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  bark() {
    console.log(`${this.name} is barking`);
  }

  fly() {
    console.log(`${this.name} is flying`);
  }
}

const firstDog = new Dog("Bunty", 1, "Dehi");
console.log(firstDog);
firstDog.eat();

// cat er jonno
const firstCat = new Cat("Tom", 4, "black");
console.log(firstCat);
firstCat.eat();

// for bird
const firstBird = new Bird("Dowel", "Deshi", 6);
console.log(firstBird);
firstBird.eat();
firstBird.bark();
firstBird.fly();
