/**
 * 
 * ^ Polymorphism means "many forms." It allows a single function, method, or operator to behave differently based on the context or the object it is acting upon.

Purpose:

 -> Simplifies code by allowing one interface to handle different types.
 -> Enables dynamic method overriding and flexibility in method usage.

    Types of Polymorphism:
    -> Method Overriding: When a subclass provides a specific implementation of a method already defined in its superclass.
 */

//code::

class Animal {
  sound() {
    console.log("Animals make sound.");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks.");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Cat meows.");
  }
}

// Polymorphism in action
const animals = [new Dog(), new Cat(), new Animal()];
animals.forEach((animal) => animal.sound());

// ^ sound method behaves differently based on the object.
// ^ Polymorphism helps handle a group of objects through a common interface.
