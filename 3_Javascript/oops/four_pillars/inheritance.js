/**
=> Definition: Inheritance allows one class (child/subclass) to inherit properties and methods from another class (parent/superclass).

Purpose:

   -> Code Reusability: Avoid rewriting code for similar functionalities.

   -> Hierarchy Representation: Establish "is-a" relationships between classes.

    Implementation in JavaScript:
   -> JavaScript uses the extends keyword to create a subclass.

 */

// Code:

// Parent Class
class Vehicle {
  constructor(type, brand) {
    this.type = type;
    this.brand = brand;
  }

  start() {
    console.log(`${this.type} made by ${this.brand} is starting...`);
  }
}

// Child Class
class Car extends Vehicle {
  constructor(brand, model) {
    super("Car", brand); // Call the parent class constructor
    this.model = model;
  }

  displayDetails() {
    console.log(`This is a ${this.brand} ${this.model}.`);
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.start(); // Output: Car made by Toyota is starting...
myCar.displayDetails(); // Output: This is a Toyota Corolla.

// ^ The super keyword calls the parent class constructor or methods. Subclasses can have their own methods while reusing or overriding parent class methods.
