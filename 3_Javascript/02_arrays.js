const x = new Array(1, 2, 3, 4, 5); // constructor part

const fruits = ["apple", true, 1, "chickoo"];
console.log(fruits); // ['apple', true, 1, 'chickoo']

console.log(fruits[1]);

//To add
fruits.push("banana");
console.log(fruits); // ['apple', true, 1, 'chickoo', 'banana']

// to add in beggining
fruits.unshift("grapes");
console.log(fruits);

// to remove from last
fruits.pop();
console.log(fruits);

// To check if it is array
console.log(Array.isArray(["soumuya", 1]));

// To get index of a value
console.log(fruits.indexOf("chickoo"));
