class User {
  constructor(username) {
    this.username = username;
  }

  static userAge = 22;

  logMe() {
    console.log(`Userbname ${this.username}`);
  }

  static createId() {
    return `123`;
  }

  static usersAge() {
    return `${this.userAge}`;
  }
}

const som = new User("soumya");
// console.log(som.createId());
console.log(User.createId());
console.log(User.usersAge());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone);
// console.log(iphone.createId());
iphone.logMe();
