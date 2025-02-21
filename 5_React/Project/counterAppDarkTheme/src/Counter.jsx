import { useState } from "react";

export default function Counter({ dark }) {
  const [timer, setTimer] = useState(0);
  return (
    <div className="flex flex-col gap-3">
      <h3 className=" text-center m-4">{timer}</h3>

      <div className="flex gap-4">
        <button
          className={
            dark
              ? "border-solid border-2 border-white px-2"
              : "border-solid border-2 border-black px-2"
          }
          onClick={() => {
            setTimer(timer + 1);
          }}
        >
          +1
        </button>

        <button
          className={
            dark
              ? "border-solid border-2 border-white px-2"
              : "border-solid border-2 border-black px-2"
          }
          onClick={() => {
            timer > 0 ? setTimer(timer - 1) : 0;
          }}
        >
          -1
        </button>
      </div>
    </div>
  );
}
