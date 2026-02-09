class Vehicle {
  #tin;
  constructor(type, brand, model, price) {
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.#tin;
  }

  getThis() {
    console.log(this);
  }
}

const firstcar = new Vehicle("Car", "Lamborghini", "Veneno", 20000000);
firstcar.getThis();
