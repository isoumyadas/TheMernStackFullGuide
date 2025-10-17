const des = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(des);

const abc = {
  name: "John",
  age: 30,
  isAvailable: true,

  entries: () => {
    console.log(`Are jaa na bhai`);
  },
};

console.log(Object.getOwnPropertyDescriptor(abc, "name"));

Object.defineProperty(abc, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(abc, "name"));

abc.name = "soumya";
console.log(abc);

//Looping on Object by for of

for (const [key, value] of Object.entries(abc)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
