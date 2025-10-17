// Object literals are like key value pairs.

const person = {
  firstName: "Soumya",
  lastName: "Das",
  hobbies: ["music", "sports"],
  address: {
    street: "60 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person);

// to access value
console.log(person.firstName, person.lastName);
console.log(person["lastName"]);

// to access value from an array in Object
console.log(person.hobbies[0]);

// to access value form an object in Object
console.log(person.address.street);

//destructing
const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log("De::", city);

// To add properties
person.email = "John@gamil.com";
console.log(person.email);

console.log(person);

// ===========================================================================================================================================

// Arrays of Object and JSON.

const todos = [
  {
    id: 1,
    name: "Gym",
  },
  {
    id: 2,
    name: "Metting with boss",
  },
  {
    id: 3,
    name: "painting",
  },
  {
    id: 4,
    name: "Football",
  },
];

// to access the value
console.log(todos[2].name);

// To Convert the array of objects to JSON

const todoJson = JSON.stringify(todos);
console.log(todoJson); // This is how we send data to our server.

//==================================================================
const change = {
  name: "Liverpool",
};
change.greetingOne = function () {
  return "You are in Liverpool";
};

console.log(change.greetingOne());
console.log(change);

//IIFE
((name) => {
  console.log(`Hola ${name}`);
})("Sammy");
