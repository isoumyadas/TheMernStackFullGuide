import express from "express";
const app = express();

const port = process.env.PORT || 5000;

// To serve static file
// app.use(express.static('dist))

app.get("/", (req, res) => {
  res.send("Ok home route is working");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A Joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another Joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "A third Joke",
      content: "This is third joke",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server is listening on ${port ? port : "5000"}`);
});

// CORS: Can be resolved thorugh prcxies and in server using CORS
