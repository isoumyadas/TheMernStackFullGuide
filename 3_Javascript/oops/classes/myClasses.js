//ES6

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.name.toUpperCase()}`;
  }
}

const chai = new User("soiumya", "soumya@abc.com", "123");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };

// User.prototype.changeUsername = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const tea = new User("tes", "tes@gamil.com", "123");

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());
