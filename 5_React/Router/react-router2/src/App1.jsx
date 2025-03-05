import React, { useContext, useState } from "react";
import { CountContext } from "./Context";
// Prop drilling example: You can visit your notion docs for more info
function App1() {
  // 1. Wrap anyone that wnats to use the teleported value inside a provider
  // 2. Teleporting part should be in different file.
  const [count, setCount] = useState(0); // state inside provider
  return (
    <>
      <div className="flex flex-col gap-5 m-6">
        <CountContext.Provider value={{ count, setCount }}>
          <Count />
        </CountContext.Provider>
      </div>
    </>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}

function Button() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div className="flex gap-3">
      <button
        className="border border-black border-solid p-4"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        className="border border-black border-solid p-4"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App1;
