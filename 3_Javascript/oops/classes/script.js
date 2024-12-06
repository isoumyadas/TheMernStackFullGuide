// What does OOP mean?
// Object-Oriented Programming System (OOPs) is a programming paradigm that organizes code using objects and classes. In JavaScript, although it's primarily a prototype-based language, it also supports OOP concepts using classes (introduced in ES6).

// Object
// - Collection of properties and methods.
// - Properties are variables that belong to an object.
// - Methods are functions that belong to an object.

// Why use OOP
// parts of OOP
// - Object literal
// - Constructor function
// - Classes
// - Prototypes
// - Instances (new, this)

// 4 pillars
// - Encapsulation
// - Abstraction
// - Inheritance
// - Polymorphism

//==============================================================================================================================================================

// Object literal
const user = {
  username: "soumya",
  loginCount: 5,
  signedIn: true,

  getUserDetails: function () {
    console.log(`${this.signedIn}`); // here this mean current context of the following object. but if you try to console log this outside the object it will give you empty {} in node env and window {} in browser env.
  },
};
console.log(user.username);
console.log(user.getUserDetails());

//==============================================================================================================================================================
// Constructor function

// new -> constructor function. always gives new instance. new always create an empty {}. constructor always give reference.
// this -> current object.

function User(username, loginCount, isLoggedIn) {
  this.username = username; // Here this.username mean variable
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this; // return is default you don't need to do it.
}

const userOne = new User("soum", 6, true);
const userTwo = new User("messi", 2, false);

console.log(userTwo);
console.log(userOne);
