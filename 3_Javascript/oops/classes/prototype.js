// New

// function is function , function is also an object.

// Everything refers towards the Object. like Array, String, Function.

function createUser(username, score) {
  this.username = username; //this sets current context.
  this.score = score;
}

// To create our own prototype

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

const chai = new createUser("chai", 45); // By not putting new, printMe never know if this is releated.

chai.printMe();

// JS gives constructor through new keyword.

//Note:

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// ==================================================================================================================================================================

// Prototype

// Property & Method -> Method() , Property

// To give power to string,array,object, functions you can use to create a custom prototype

let myHeros = ["spiderman", "IronMan"];

let heroPower = {
  spiderman: "sling",
  IronMan: "repulsor",

  sipdermanPower: function () {
    console.log("spiderman power is sling");
  },
};

Object.prototype.soumya = function () {
  console.log(`Bhai kya kar raha hai tu? kyu bhai!`);
};

heroPower.soumya();

Array.prototype.heySoumya = function () {
  console.log(`Hello Sammy`);
};

myHeros.heySoumya();
// heroPower.heySoumya(); // But if you try to give this method to object then it throws error. Beacuse you solely give power to Array. If you were given functionality to Object then it works. becuase in the end everything is object.

//===================================================================================================================================================================

//Inheritance

// portotype inheritance mean to access key properties through another.

const User = {
  name: "Taskin",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js assignment",
  fulltime: true,
  __proto__: TeachingSupport, // This is what inheritance mean but this is old method.
};

Teacher.__proto__ = User; // To access outside too.

//Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher); // TeachingSupport ke ander Teacher ke properties.

const hello = "soumyaaaa        ";

String.prototype.trueLength = function () {
  //   console.log(this); // Here this refers to soummya
  console.log(`The length is: ${this.trim().length}`);
};

hello.trueLength();
