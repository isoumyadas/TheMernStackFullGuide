require("dotenv").config();
const express = require("express");

const app = express();
const port = 7000;

app.get("/", (req, res) => {
  res.send("Ok this is your first try");
});

app.get("/x", (req, res) => {
  res.send("<h1>Twitter is changed to X</h1>");
});

app.get("/soumya", (req, res) => {
  res.send(
    "<div> <h1>Soumya Ranjan Das</h1> <p>Futuristic Coder</p> <p>Not a average coder</p> </div>"
  );
});

app.listen(process.env.PORT, () => {
  console.log("Localhost is connected to 8000");
});
