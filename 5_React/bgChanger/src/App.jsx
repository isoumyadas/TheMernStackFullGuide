import { useState } from "react";
import Buttons from "../components/Buttons";

import "./App.css";

function App() {
  const [color, setcolor] = useState("green");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <Buttons setcolor={setcolor} color="red" colorname="Red" />

          <Buttons
            setcolor={setcolor}
            color="lightblue"
            colorname="Light Blue"
          />

          <Buttons
            setcolor={setcolor}
            color="lightgray"
            colorname="Light Gray"
          />

          <Buttons
            setcolor={setcolor}
            color="lightpink"
            colorname="Light Pink"
          />

          <Buttons
            setcolor={setcolor}
            color="lightgreen"
            colorname="light Green"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
