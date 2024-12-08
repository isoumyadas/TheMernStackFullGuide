class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Userbname ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const som = new User("soumya");
// console.log(som.createId());

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
