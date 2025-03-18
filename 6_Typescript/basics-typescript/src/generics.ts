// How does generics looks like?

function identify<T>(arg: T) {
  return arg;
}

let output1 = identify<string>("Samm");
let output2 = identify<number>(5);
let output3 = identify<boolean>(false);

function textUpperCase<T>(arg: T[]) {
  // here <T> defines anything, but if you give <string> down their it will become string. very beneficial
  return arg[0];
}

const sdfds = textUpperCase<string>(["sss", "ddd"]);
const numbers = textUpperCase<number>([2, 3, 4, 5]);

console.log(sdfds.toUpperCase());
console.log(numbers);

// you can use advance usage too like interfaces

interface Userw {
  name: string;
}

const trial = textUpperCase<Userw>([{ name: "You know sam" }]);
console.log(trial.name.toUpperCase());
