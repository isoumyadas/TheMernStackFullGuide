1. Array<T>
- It is a built-in TypeScript generic type that represents an array where every element must be of type T.
- Array<T> is just the explicit generic form of the [] shorthand.

let nums: Array<number> = [1, 2, 3];
let nums: number[]       = [1, 2, 3];

const names: Array<string> = ["Alice", "Bob", "Charlie"];

names.push("David");  // ✅ string allowed
names.push(42);       // ❌ Error: number not assignable to string

### And all other utility types are in utility.ts & utility2.ts
