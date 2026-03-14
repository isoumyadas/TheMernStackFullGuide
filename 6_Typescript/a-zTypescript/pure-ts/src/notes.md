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

5. Typing in async await
```ts

type ApiError = {
    message: string;
    code: number;
};

async function fetchUser(id: number): Promise<User> {
    try {
        const response = await fetch(`https://api.example.com/users/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: User = await response.json();
        return data;

    } catch (error) {
        // error is 'unknown' by default in TypeScript
        if (error instanceof Error) {
            throw new Error(`Failed to fetch user: ${error.message}`);
        }
        throw error;
    }
}


// Promise<void> -> when nothing returned

async function logMessage(message: string): Promise<void> {
    await saveToDatabase(message); // do something
    // no return value — Promise<void>
}


// Multiple Async calls

async function loadDashboard(userId: number): Promise<void> {
   const [user, orders]: [User, Order[]] = await Promise.all([
    fetchUser(userId),
    fetchOrders(userId),
]);
    console.log(user, orders);
}

// Common Return Types
async function a(): Promise<string>   { return "hello" }  // returns a string
async function b(): Promise<number>   { return 42 }       // returns a number
async function c(): Promise<User>     { return user }     // returns an object
async function d(): Promise<User[]>   { return [user] }   // returns an array
async function e(): Promise<void>     { doSomething() }   // returns nothing
async function f(): Promise<boolean>  { return true }     // returns a boolean
```

6. Enums
```ts

enum Role {
    Admin = "ADMIN",
    User  = "USER",
    Guest = "GUEST",
}

function getPermissions(role: Role): string {
    if (role === Role.Admin) return "Full access";
    if (role === Role.User)  return "Limited access";
    return "Read only";
}

getPermissions(Role.Admin); // ✅ "Full access"
getPermissions("ADMIN");    // ❌ Error — must use Role.Admin


// Example 2:
enum OrderStatus {
    Placed     = "PLACED",
    Shipped    = "SHIPPED",
    Delivered  = "DELIVERED",
    Cancelled  = "CANCELLED",
}

type Order = {
    id: number;
    item: string;
    status: OrderStatus; // ✅ only allows enum values
};

const order: Order = {
    id: 1,
    item: "Laptop",
    status: OrderStatus.Placed, // ✅
};
```

7. Using type assertions (as), non-null assertion (!), readonly, optional chaining (?.), nullish coalescing(??) & import and export module
```ts

// types.ts
export type Address = {
    readonly city: string;    // readonly — cannot be changed after set
    readonly country: string;
};

export type User = {
    readonly id: number;      // readonly — id should never change
    name: string;
    email?: string;           // optional — may or may not exist
    address?: Address;        // optional — may or may not exist
};


// userservice.ts
import { User } from "./types";   // importing the type we exported above

async function fetchUser(id: number): Promise<User> {
    const response = await fetch(`https://api.example.com/users/${id}`);
    const data = await response.json();
    return data;
}

export { fetchUser }; // exporting the function for other files to use


// main.ts

import { fetchUser } from "./userService"; // import from another module
import { User }      from "./types";
// you can use this too
// import type {User} from "./types"; // this will only available for type checking not for runtime.

async function displayUserProfile(id: number) {

    const rawData = await fetchUser(id);

    // ---- Type Assertion (as) ----
    // We tell TypeScript: "trust me, I know this is a User"
    // useful when TypeScript can't infer the type itself
    const user = rawData as User;


    // ---- Non-null Assertion (!) ----
    // We tell TypeScript: "trust me, this is NOT null or undefined"
    // use only when you are 100% sure the value exists
    const email = user.email!; // ✅ we're asserting email definitely exists
    console.log(email.toUpperCase()); 


    // ---- Optional Chaining (?.) ----
    // Safely access nested properties that might not exist
    // If address is undefined — returns undefined instead of crashing
    const city = user.address?.city;
    console.log(city); // "Mumbai" or undefined — never throws an error


    // ---- Nullish Coalescing (??) ----
    // If the left side is null or undefined — use the right side as default
    const displayEmail = user.email   ?? "No email provided";
    const displayCity  = user.address?.city ?? "City not available";

    console.log(displayEmail); // "alice@example.com" or "No email provided"
    console.log(displayCity);  // "Mumbai" or "City not available"


    // ---- readonly ----
    user.id = 99;          // ❌ Error — id is readonly, cannot reassign
    user.name = "Bob";     // ✅ name is not readonly, can reassign
}

displayUserProfile(1);

```
