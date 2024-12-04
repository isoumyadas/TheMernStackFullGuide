const promiseOne = new Promise(function (resolve, reject) {
  // What does promise helps to do?
  // Do async task
  // DB calls, cryptography, network

  setTimeout(() => {
    console.log("Async Task Is Complete");
    resolve();
  }, 2000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

//Note:
// 1. resolve and then has direct relation, but to connect that BTS you have to call the resolve().

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async 2");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "soumya", email: "soumya@example.com" }); //Note: resolve takes params
  }, 4000);
});

promiseThree.then((data) => {
  console.log(data);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ username: "soumya", email: "soumya@example.com" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 3000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Something just happend!");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ username: "Javascript", password: "ES6" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

const consumePromiseFive = async () => {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

consumePromiseFive();

// Example

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}

getAllUsers();
