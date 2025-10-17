const selectedDiv = document.querySelector("#colorChange");

selectedDiv.addEventListener("mouseover", (e) => {
  selectedDiv.style.backgroundColor = "yellow";
});

selectedDiv.addEventListener("mouseout", (e) => {
  selectedDiv.style.backgroundColor = "lightblue";
});

// ====================================================================

const selectInput = document.querySelector("#inputField");

const displayKey = document.createElement("p");

selectInput.addEventListener("keydown", (e) => {
  const key = e.key;
  const ctrlKey = e.ctrlKey;
  console.log(key);
  displayKey.append(key, ctrlKey);
  document.body.append(displayKey);
});
