import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <h1>Counter Button: {count}</h1>
//       <button onClick={handleClick}>You pressed me {count} times</button>
//     </>
//   );
// }

// function App() {
//   const [text, setText] = useState("");

//   function handleText(e) {
//     setText(e.target.value);
//   }

//   return (
//     <>
//       <input type="text" onChange={handleText} />
//       <h3>Your Text: {text}</h3>
//     </>
//   );
// }

// function App() {
//   const [liked, setLiked] = useState(true);

//   function handleLiked(e) {
//     setLiked(e.target.checked);
//   }

//   return (
//     <>
//       <input type="checkbox" onChange={handleLiked} checked={liked} />
//       <h3>Youve {liked ? "liked" : "unliked"} this. </h3>
//     </>
//   );
// }

function App() {
  const [text, setText] = useState("");

  const [age, setAge] = useState(42);

  function handleName(e) {
    setText(e.target.value);
  }

  function handleAge() {
    setAge(age + 1);
  }

  return (
    <>
      <input type="text" onChange={handleName} />
      <button onClick={handleAge}>Click to increment</button>
      <p>
        Hey, {text}. You are {age}
      </p>
    </>
  );
}

export default App;
