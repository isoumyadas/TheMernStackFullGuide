class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@techaer.com", "123");

chai.addCourse();
chai.logMe();

const maslaChai = new User("soumya");
maslaChai.logMe();

// To know the instance

console.log(chai instanceof User);
console.log(maslaChai instanceof Teacher);
