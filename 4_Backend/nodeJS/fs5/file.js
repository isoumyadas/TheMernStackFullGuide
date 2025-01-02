// File handling means doing operations (create, read)

const fs = require("fs");

// Sync => fs.writeFileSync("fileName", "data");
fs.writeFileSync("./test.txt", "Hello World Sync");

// Async => fs.writeFile("fileName", "data", (callback) => {}) // Callback is used to check if incase there is any error.
fs.writeFile("./test2.txt", "Hello World Async", (err) => {
  console.log(err);
});

// sync // It returns
const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// async // It doesn't returns it uses callback

fs.readFile("./contact.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(data);
  }
});

// We can append on file too.

// sync
fs.appendFileSync("./contact.txt", `Hello World\n`);

// async
fs.appendFile("./contact.txt", `Hello soumya\n`, (err) => {});

// You can copy too
fs.cpSync("./contact.txt", "copy.txt");

// For unlink (delete)

fs.unlinkSync("./copy.txt");

// for Stats
console.log(fs.statSync("./test.txt"));

// ^ Node.js Architechture => https://www.notion.so/Backend-16e8a069a2a4803ebbd2d65a08f5fde7?pvs=4#16e8a069a2a4809880c9d8a4700ad661
