import React from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/Counter";

import { evenSelector } from "./store/selectors/countSelector";

// This works well with react 18 see package.json

function App() {
  return (
    <>
      <RecoilRoot>
        {console.log("Is this re-rendering")}
        <Count />
        <EventCountRenderer />
      </RecoilRoot>
    </>
  );
}

function EventCountRenderer() {
  const count = useRecoilValue(evenSelector);

  return <div>{count % 2 === 0 ? "It is even" : null}</div>;
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
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  // setCount(count + 1); // no more re-renders because buttons are not changing
  // setCount(c => c + 1)

  return (
    <div className="flex gap-3">
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
