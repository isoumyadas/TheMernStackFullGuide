1. Array<T>
- It is a built-in TypeScript generic type that represents an array where every element must be of type T.
- Array<T> is just the explicit generic form of the [] shorthand.
  ```ts
  let nums: Array<number> = [1, 2, 3];
  let nums: number[]       = [1, 2, 3];
  
  const names: Array<string> = ["Alice", "Bob", "Charlie"];
  
  names.push("David");  // ✅ string allowed
  names.push(42);       // ❌ Error: number not assignable to string
  ```
### And all other utility types are in utility.ts & utility2.ts

2. Union Types A | B
- Means the value can be either A or B (or both if it's an object).

  ```ts
  type StringOrNumber = string | number;

  let value: StringOrNumber;
  
  value = "hello"; // ✅
  value = 42;      // ✅
  value = true;    // ❌ Error: boolean not in the union

  // Real Example:
  type SuccessResponse = { status: "success"; data: string };
  type ErrorResponse   = { status: "error";   message: string };
  
  type ApiResponse = SuccessResponse | ErrorResponse;
  
  function handle(res: ApiResponse) {
      if (res.status === "success") {
          console.log(res.data);    // ✅ TypeScript knows it's SuccessResponse
      } else {
          console.log(res.message); // ✅ TypeScript knows it's ErrorResponse
      }
  }
  ```

3. Intersection Types A & B
- Means the value must be both A and B — it must have all properties from both types combined.
```ts
  type HasName = { name: string };
  type HasAge  = { age: number };
  
  type Person = HasName & HasAge;
  
  const p: Person = { name: "Alice" };             // ❌ missing age
  const p: Person = { name: "Alice", age: 25 };    // ✅ has both

// real example:
  type Employee = { company: string; salary: number };
  type Developer = { language: string; level: string };
  
  type DevEmployee = Employee & Developer;
  
  const dev: DevEmployee = {
      company: "Google",   // from Employee
      salary: 100000,      // from Employee
      language: "TypeScript", // from Developer
      level: "Senior",     // from Developer
  }; // ✅ must satisfy ALL fields

```
