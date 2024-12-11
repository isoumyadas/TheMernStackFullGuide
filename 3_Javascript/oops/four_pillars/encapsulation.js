// TODO: Object-Oriented Programming System (OOPs) is a programming paradigm that organizes code using objects and classes. In JavaScript, although it's primarily a prototype-based language, it also supports OOP concepts using classes (introduced in ES6).

// TODO: Encapsulation refers to the bundling of data (fields) and methods (functions) that operate on the data into a single unit (class). It also involves controlling access to this data, often by making some fields private and exposing only necessary methods.

// TODO: Purpose: Protect sensitive data. Control how data is modified Simplify the interface of the class for external users.
// TODO: Implementation in JavaScript: JavaScript achieves encapsulation using: Private fields (denoted by #). Public methods (to provide controlled access).

// Code::

class User {
  #password; // Private field

  constructor(username, password) {
    this.username = username; // Public field
    this.#password = password; // Private field
  }

  // Public method to get username
  getUsername() {
    return this.username;
  }

  // Public method to check password
  checkPassword(inputPassword) {
    return this.#password === inputPassword;
  }

  // Public method to update password
  setPassword(newPassword) {
    if (newPassword.length >= 6) {
      this.#password = newPassword;
      console.log("Password updated successfully.");
    } else {
      console.log("Password must be at least 6 characters long.");
    }
  }
}

const user1 = new User("Soumya", "secret123");
console.log(user1.getUsername()); // Output: Soumya
console.log(user1.checkPassword("wrongPass")); // Output: false
user1.setPassword("newPass"); // Output: Password updated successfully.

//TODO: Private fields (#) hide sensitive data. Public methods (getUsername, setPassword) control how external code interacts with internal data.
