// Always put script tag at the end of the body in the HTML.
// {/* <script src="/pathName"></script>; */}

// To print something
console.log("Hello");

// To print error
console.error("This is an Error.");

//To print warning
console.warn("This is a warning.");

//=============================================

// Varaiables

// VAR = Var is globally scoped
var name = "John";

//let, const

// with the help of let you can reassign values not var name.
let nams = "John";
names = "John Doe";
console.log(names);

// with the help of const you can't reassign values or name. Even you cant assign just name you've to assign the value for every const. you can do that for let.
const named = "John";
console.log(named);

// ==============================================================================
// Datatypes.
// String, Numbers, Boolean, Null, undefined, Symbol

let z; // this is consider as undefined.

//========================================

// Concatenation
// You can use + operator to concatenate strings.
let name2 = "John";
let age = 25;
console.log(name2 + " is " + age + " years old");

// But their is better way to do
// template literals
let name1 = "John Buttler";
let age1 = 25;
console.log(`${name1} is ${age1} years old`);

// ==================================================================================

// Propeety doesn't include (), if () are included then it is called method.

// A method is consider as functions which is asociated with the object

console.log(name1.length); // This gives length of the given value.
console.log(name1.toUpperCase()); // This gives the upper case of the given value.
console.log(name1.toLowerCase());

console.log(name1.substring(0, 6).toUpperCase()); // It will start from zero and ends on 5. So the output is John B

// Split

// The split() method splits a string into an array of substrings.

// The split() method returns the new array.

// The split() method does not change the original string.

console.log(name1.split("")); // This will split by letters
console.log(name1.split(" ")); // This will split by space, after spliting it will give output as array.
console.log("Last => ", name1.split(", "));
