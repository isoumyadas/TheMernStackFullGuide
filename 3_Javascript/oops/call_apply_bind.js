// What is call?

let obj = { name: "Dasing khemu" };

function sayHello(age) {
  return `Hello ${this.name} and your is ${age}`;
}

console.log(sayHello.call(obj, 45));

// What is apply?

let obj1 = { name: "Dasing khemu" };

function sayHello(age, grade) {
  return `Hello ${this.name} and your is ${age} and your grade is ${grade}`;
}

console.log(sayHello.apply(obj1, [45, "A+"]));

// What is bind

let obj2 = { name: "Dasing khemu" };

function sayHello(age, profession) {
  return `Hello ${this.name} and your age is ${age} and you're ${profession}`;
}

const bindFunc = sayHello.bind(obj2); // It returns a func so you can resue it.
console.log(bindFunc);
console.log(bindFunc(23, "Aspiring Fullstack developer"));

//^ Watch this video: https://www.youtube.com/watch?v=VkmUOktYDAU | For interview questions too.

// call example

const animals = [
  { species: "lion", name: "Bhagaa" },
  { species: "Monkey", name: "Jaggu" },
];

function printAnimals(i) {
  this.print = function () {
    console.log(`#${i} ${this.species} : ${this.name}`);
  };
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}
