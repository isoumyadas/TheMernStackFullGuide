// What are types? => Very similar to interfaces, types lets you aggregate data together

type Users = {
  firstname: string;
  lastname: string;
};

// types is not used to implement classes.

//1. Unions

type GreetArgs = number | string;

function greeting(id: GreetArgs): string | number {
  return `${id} is your Roll number`;
}

console.log(greeting(1));
console.log(greeting("201"));

// 2. intersection

type Employees = {
  name: string;
  age: number;
  joining: Date;
};

type Managers = {
  name: string;
  department: string;
  isActive: boolean;
};

type TechLead = Employees & Managers;

const t: TechLead = {
  name: "sammy",
  age: 23,
  department: "Software Engineer",
  isActive: true,
  joining: new Date(),
};

console.log(t);

// What is the difference between types and interfaces:
/*

    Types are not used to extends Classes 
    Interfaces are used to extends Classes

    Types are used for Unions and Intersection (& |)
    Interfaces dont

*/
