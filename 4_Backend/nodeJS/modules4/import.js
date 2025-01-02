// when there is one method to import
// const math = require("./server.js"); // ^ require is built in func in Node.js
// console.log(math.sub(3, 5)); // Either you can use this

// when there is multiple methods to import {Best way}
// const { execute, sub } = require("./server.js");
// console.log(sub(3, 5));

import { adding } from "./server.js"; // remember to use .js when using import.

console.log(adding(5, 6));
