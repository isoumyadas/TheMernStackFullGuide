// This in Global space
console.log(this); // Output: Window object in browser and empty object in node env.

// this inside a function
// This works diffrently on strict mode and non-strict mode.
function test() {
  console.log(this); // while use non-strict mode it returns window object, But while using "use strict" it returns undefined.
}

// this in non-strict mode - (this substitution)
// If the value of this keyword undefined or null, this will be replaced with global object only in non-strict mode.

// this value depends on how function is called (window)
test(); // Output: Window object in browser and global object in node env. while using strict mode it will return undefined
window.test(); // It will return window object in strict mode.

// this inside a object's method

const obj = {
  a: 10,
  z: function () {
    console.log(`chal nikal`, this); // this will be always target the obj.
  },
};
obj.z();

const obj2 = {
  a: 30,
};

// call apply bind methods (sharing method)
obj.z.call(obj2);

// this inside arrow function
// Arrow function does not have its own this context. It inherits this from its parent scope or lexical context.

const obje = {
  a: 10,
  z: () => {
    console.log(this); // It behaves like it is not in obje.
  },
};
obje.z(); // Output: Window object in browser and global object in node env.

// this inside nested arrow function

const obje2 = {
  a: 90,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y(); // becuase it's lexical context is x function and x function will be pointing to obje2.
  },
};
obje2.x(); // This will point to obje2

// this inside DOM
// It will be HTML element, refernce to HTML element.
