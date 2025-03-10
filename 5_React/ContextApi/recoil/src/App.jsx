import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/Counter";

// This works well with react 18 see package.json

function App() {
  return (
    <>
      <RecoilRoot>
        {console.log("Is this re-rendering")}
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  console.log("Count component rendered");
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  // as it says it will just give the value
  const count = useRecoilValue(countAtom); // this can give some performance benefits
  return <div>{count}</div>;
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div className="flex gap-3">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
