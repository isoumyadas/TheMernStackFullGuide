// Here you've created a simple and beautiful functionality with custom hooks.
// where it says if user is online then show user isOnline and if offlinne then show offline.

import useOnline from "./hooks/useOnline";
import useMousePointer from "./hooks/useMousePointer";
import useInterval from "./hooks/useInterval";
import { useState } from "react";
import useDebounce from "./hooks/useDebounce";

function BrowserFunctionality() {
  const isOnline = useOnline();
  const mousePointer = useMousePointer();
  const timer = useInterval(1);
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500);

  return (
    <div>
      {isOnline ? "You're Online" : "You're Offline connect to the internet"}
      <br />
      Your mouse is {mousePointer.x} {mousePointer.y}
      <br />
      Your timer is at {timer}
      <br />
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        className="border-2"
      />
      Debounced Value is {debouncedValue}
      <br />
      Normal value is {value}
    </div>
  );
}

export default BrowserFunctionality;
