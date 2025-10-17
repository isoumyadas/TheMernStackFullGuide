const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
let stopChanging;
// stopChanging is a variable used to store the setInterval ID so it can be cleared later.

// const setOfColors = ["lightgreen", "lightblue", "yellow", "red", "orange"];

const randomColors = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

startBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const changeColors = () => {
    // const randomColor = Math.floor(Math.random() * setOfColors.length);
    // console.log(randomColor);
    document.body.style.backgroundColor = randomColors();
  };

  if (!stopChanging) {
    // Checks if stopChanging is null or undefined
    stopChanging = setInterval(changeColors, 1000);
  }
});

stopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(stopChanging);
  stopChanging = null;
});

//Note: Why in this case if was used

// Why the if Condition Is Necessary

// Problem Without if:------
// Every time startBtn is clicked, a new setInterval is created.
// This leads to multiple intervals, making the background color change rapidly.
// Even after clicking stopBtn, only the last interval is cleared, so color changes continue.

// Solution With if:-------
// The if (!stopChanging) ensures that only one interval is created.
// Once the interval is running, clicking startBtn again won’t create a new one until stopBtn is clicked and stopChanging is reset.

//======================Or you can do in this way===================================

// const changeColors = () => {
//   const hex = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// const startChangingColor = () => {
//   function changeMe() {
//     document.body.style.backgroundColor = changeColors();
//   }

//   if (!stopChanging) {
//     stopChanging = setInterval(changeMe, 1000);
//   }
// };

// const stopChangingColor = () => {
//   clearInterval(stopChanging);
//   stopChanging = null;
// };

// document.querySelector("#start").addEventListener("click", startChangingColor);

// document.querySelector("#stop").addEventListener("click", stopChangingColor);
