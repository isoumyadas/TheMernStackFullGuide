import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // ref hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    // here callback while store the data in cache.
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    numberAllowed ? (str += "0123456789") : "";
    charAllowed ? (str += "!@#$%^&*~") : "";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // why 1 here? : because to not get 0th value. This gives a number which we can pass in str and get the data.
      console.log(char);
      pass += str.charAt(char); // this appends the value from str, when each random number generates! it it is 9 then 9 characters will get appeneded
    }
    setPassword(pass); // this method is used for memoization + to set password.
  }, [numberAllowed, charAllowed, length, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select(); // It will select the ref value which is password
    passwordRef.current?.setSelectionRange(0, 7); // this will select from 0 index to 7
    //how copy to clipboard
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]); // this helps to call the same function when their is any changes, so if length is changed the useEffect gets triggered, same for numberAllowed, charAllowed and for passGen when page refreshes then call passwordGenerator.

  return (
    <div className="bg-black h-screen">
      <h1 className="text-4xl text-center text-white ">Password generator</h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-yellow-500 bg-gray-500">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value); // this will take the value from range & set to setLength
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>

            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev); // so we get prev value so we can change it accordingly
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
