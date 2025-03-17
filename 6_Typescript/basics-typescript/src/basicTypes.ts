// function helloUser(firstName: string, lastName: string, age: number) {
//   console.log(`Hello ${firstName}`);
// }

function helloUser(firstName: string) {
  console.log(`Hello ${firstName}`);
}

helloUser("soumya"); // for multiple arguments you have to pass that. or else you can't compile it to js

// Sum of
// type inference
function sum(a: number, b: number): number {
  //here  :number mean this function returns a number. Good practice.
  return a + b;
}

const value = sum(45, 7);
console.log(value);

// is true or false
function isLegal(age: number): boolean {
  // typscript can infer the boolean you dont need to implicit to define but its good practice to add
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}

console.log(isLegal(19));

//function that take as input and runs after 1 sec

function addedFunction(fn: () => void) {
  // This is how we pass function as argument. Also known as callbacks
  // here fn: () => void means it takes no arguments and return nothing
  // but if you return something, eg: return 1; -> fn: () => number. [As we know it returns an number.]
  setTimeout(fn, 2000);
}

addedFunction(function () {
  return "Hello i ran after 2sec";
  //   return 1;
});
