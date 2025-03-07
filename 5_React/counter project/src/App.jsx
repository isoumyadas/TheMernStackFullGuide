import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // here the useState uses destructure method. where we have two variables counter, setCounter (these can be named anything) | remember in useSate() the () => can consists anything it can be "", [], {}.
  // let counter = 5;

  const addValue = () => {
    // counter++;
    if (counter < 20) {
      setCounter(counter + 1);
    }
    console.log(counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    console.log(counter);
  };

  return (
    <>
      <h1>Sammy Bro learning React... </h1>

      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>

      <footer>{counter}</footer>
    </>
  );
}

export default App;
