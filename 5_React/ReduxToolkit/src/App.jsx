import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncrementByAmount() {
    dispatch(incrementByAmount(amount));
  }
  return (
    <div>
      <button onClick={handleIncrementClick}> + </button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}> - </button>
      <br />
      <br />
      <button onClick={handleResetClick}> reset </button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleIncrementByAmount}> Increment Amount </button>
    </div>
  );
}

export default App;

// When you want to use any action you need to dispatch it.
