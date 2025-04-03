import { useEffect, useState } from "react";
import axios from "axios";

type JokesProps = {
  id: number;
  title: string;
  content: string;
};

function App() {
  const [jokes, setJokes] = useState<JokesProps[]>([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <>
      <h1>Jokes: {jokes.length}</h1>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
