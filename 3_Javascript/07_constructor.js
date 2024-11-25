// constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  //   this.getBirthYear = function () {
  //     return this.dob.getFullYear();
  //   };
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Prototype
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

// Instantiate object
const person1 = new Person("Jhon", "Doe", "5-29-2002");
const person2 = new Person("Alex", "Dawson");
const person3 = new Person("Kristen", "Lavia");

console.log(person1);
console.log(person2);
console.log(person3);

console.log(person1.getBirthYear());
console.log(person1.fullName());

//ES6

// class

class Persons {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
}

const person6 = new Persons("Jhon", "Doe", "5-29-2002");
console.log(person6);
