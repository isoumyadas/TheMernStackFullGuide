function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
}

const chai = new User("dfds@dfdsa.com", "fsdhfkjds");

console.log(chai.email);

// Object based

const Userr = {
  _email: "dfadfs@ytrytr.com",
  _password: "dfdsfsdf",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

// const tea = Object.create(Userr);

console.log(Userr.email);
