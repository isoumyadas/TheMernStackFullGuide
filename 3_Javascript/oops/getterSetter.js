class User {
  constructor(email, password) {
    this._email = email;
    this._password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    // never return in setter.
    this._email = value;
  }

  get password() {
    console.log(`${this._password}hitesh`);
    return this._password;
  } // User to get the value

  set password(value) {
    this._password = value.toUpperCase();
  } // To set the value
}

const hitesh = new User("s@soumya.com", "soumya");

console.log(hitesh.password);
console.log(hitesh.email);

//Note: https://www.notion.so/Javascript-13c8a069a2a480ef9e8adb420faa2faa?pvs=4
