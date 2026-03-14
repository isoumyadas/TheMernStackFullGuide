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
4. Type narrowing
   - TypeScript often starts with a wide, uncertain type — and narrowing is the process of making it more specific based on runtime checks.

     ```ts

     function greet(value: string | number) {
      // Here TypeScript only knows: value is string | number
      // It's WIDE — could be anything
      
      if (typeof value === "string") {
          // Here TypeScript knows: value is DEFINITELY a string
          // It's NARROW — specific and certain
          console.log(value.toUpperCase()); // ✅ safe to use string methods
      }
      }

     // Think of it like a funnel — you start wide and narrow down to something specific so TypeScript can let you use the right methods safely.

     // a. typeof -> Used for primitive types like string, number, boolean

       function format(value: string | number) {
          if (typeof value === "string") {
              // ✅ TypeScript knows: value is string
              return value.toUpperCase();
          }
          // ✅ TypeScript knows: value is number here
          return value.toFixed(2);
      }
      
      format("hello"); // "HELLO"
      format(3.14159); // "3.14"

     // typeof null === "object" — this is a famous JS bug, so don't use typeof to check for objects or null.

     // b. in -> Used when you want to check if property exists on an object

     type AdminUser  = { name: string; role: "admin"; deleteUser: () => void };
     
      type NormalUser = { name: string; role: "user" };
      
      function handleUser(user: AdminUser | NormalUser) {
          if ("deleteUser" in user) {
              // ✅ TypeScript knows: user is AdminUser
              user.deleteUser();
          } else {
              // ✅ TypeScript knows: user is NormalUser
              console.log(`Hello, ${user.name}`);
          }
      }

      // c. instanceof -> It only works for classes, not plain types or interfaces.

         function handleError(error: unknown) {
            if (error instanceof TypeError) {
                console.log("Type error:", error.message);
            } else if (error instanceof RangeError) {
                console.log("Range error:", error.message);
            } else {
                console.log("Unknown error");
            }
        }
     ```
