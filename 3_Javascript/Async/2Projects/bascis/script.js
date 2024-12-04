// setTimeout & setInterval are bulit in functions used to manage time operations.

// setTimeout => Executes a function once after a specified delay.

// Syntax
// setTimeout(() => {}, 3000)

//ex:
setTimeout(() => {
  console.log("Hello, World!");
}, 3000);

const sayMyName = (name) => {
  console.log(`My name is ${name}`);
};

setTimeout(sayMyName, 6000, "soumya"); // Here you can pass an argument after the delay. And never execute the function in setTimeout just give the reference to call it.

// Using sayMyName() runs immediately.
// setTimeout expects a function reference as its first argument so it can invoke the function after the specified delay.

//When you pass sayMyName (without parentheses), you're passing the function itself as a reference.

//This means setTimeout will call the function for you after the specified delay.

// ex: 2

const changeMyHeading = function () {
  const header = document.querySelector("h1");
  header.textContent = "Async sikh raha hu bhai";
};

const clickToChange = setTimeout(changeMyHeading, 4000);

// To stop the setTimeout call you can use
// clearTimeout(referenceName);

const stopBtn = document.querySelector("#stop");

stopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearTimeout(clickToChange);
  console.log("clearTimeout is clicked succesfully");
});

//Note: Key Difference Between the Two

// Event Listener:

// It listens for an event and performs actions (like stopping a timer, logging something).
// Does not need to return a value, since its job is to handle side effects.

// Calculation Function:

// It computes something and returns a value to the caller.
// Without return, the result of the computation is lost.

// =================================================================

// setInterval =>  runs the function repeatedly at regular intervals.

//syntax
// setInterval(()=>{}, 4000, "argument");

const repeatMyName = (name) => {
  console.log(`My Name is ${name}`, Date.now());
};

// setInterval(repeatMyName, 2000, "soumyaRanjanDas");

// clearInterval(referenceName)

const startBtn = document.querySelector("#start");
let clearThis;

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const repeatDate = () => {
    console.log("Hey there today is", Date.now());
  };

  clearThis = setInterval(repeatDate, 1000);
});

stopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(clearThis);
});
