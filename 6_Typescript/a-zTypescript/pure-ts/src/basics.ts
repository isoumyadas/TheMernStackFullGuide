// Specifying Types:

let userName: string = "Sam";
let myNumber: number = 10;
let myBoolean: boolean = false;
let myRegex: RegExp = /foo/;

// Arrays:
const names: string[] = userName.split(" "); // We got type by hovering on names (becuase it been inferd).
const myValues: Array<number> = [1, 2, 3]; // This is array of numbers.

//Objects:
const myPerson: {
  first: string;
  last: string;
  cool?: true;
} = {
  first: "Jack",
  last: "Das",
};

// Interface

interface Person {
  first: string;
  last: string;
}

const newPerson: Person = {
  first: "Soumya",
  last: "Das",
};

newPerson.first = "Not Gonna Lie";
console.log(newPerson);

// Records
const ids: Record<number, string | boolean> = {
  10: "a",
  20: "b",
  30: true,
};

ids[40] = "c"; // this is how we can add into object with the help of Record
console.log(ids);

// Conditionals
if (ids[30] === false) {
  console.log("True");
}

//Loops
// They already gets inffered so most of the time you  dont need to specific it
