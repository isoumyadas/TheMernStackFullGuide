interface User {
  firstname: string;
  lastname: string;
  age: number;
  email?: string; // ? means optionally.
}

function isLegall(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

const hello = isLegall({
  firstname: "Soumya",
  lastname: "das",
  age: 23,
});

console.log(hello);

// =========== implementing interfaces ===================

interface Person {
  name: string;
  age: number;
  greet(pharse: string): void;
}

class Employee implements Person {
  name: string; // if anything is bound to "this" you've to write here
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(pharse: string) {
    console.log(`${pharse} ${this.name}`);
  }
}

const e = new Employee("sam", 23);
console.log(e.greet("Hey there!...."));

// By implementing interfaces you can use class or create a class.
// interface Employee extends User [You can use interface to extend]
// Intrefaces can use extends, types can't

interface Managerd {
  name: string;
}

interface x {
  age: string;
}

interface BigPerson extends Managerd, x {}
