console.log(window); // parent object of browser

// single element

// const myForm = document.getElementById("my-form");
// console.log(myForm);

console.log(document.querySelector(".msg"));

// multiple element

console.log(document.querySelectorAll(".items"));
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".items");
items.forEach((item) => console.log(item));

// Manipulating

const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();

// ul.firstElementChild.textContent = "Hello";
// ul.children[1].textContent = "Brad";
// ul.lastElementChild.innerHTML = "<h4>Zorkooo</h4>";

const btn = document.querySelector(".btn");
btn.style.background = "red";

//Events

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   //   console.log(e);
//   //   console.log(e.target.className);
//   document.querySelector("#my-form").style.background = "purple";
//   //   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1> Kya dekh raha hai </h1>";
// });

// Mouse events
/**
 * mouseover
 * mouseout
 */

//

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.textContent = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const listItem = document.createElement("li");
    listItem.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(listItem);

    //Clear Fileds

    nameInput.value = "";
    emailInput.value = "";
  }
}
