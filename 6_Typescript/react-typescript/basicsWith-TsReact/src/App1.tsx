import { useState } from "react";
import { incrementByValue, StateType } from "./redux";
import { useDispatch, useSelector } from "react-redux";

function App1() {
  const [val, setVal] = useState<number>(0);
  const dispatch = useDispatch();
  const count = useSelector((state: StateType) => state.count);

  const incrementByValueHandler = () => {
    dispatch(incrementByValue(val));
  };
  return (
    <div>
      <h1> Redux Toolkkit</h1>
      <h2>Count: {count}</h2>
      <br />
      <input type="text" />
      <br />
      <button>+</button>
      <button>-</button>
      <br />
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />
      <button disabled={val < 0} onClick={incrementByValueHandler}>
        Add
      </button>
    </div>
  );
}

export default App1;
