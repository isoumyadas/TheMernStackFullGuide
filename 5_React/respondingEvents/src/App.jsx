// function App() {
//   return (
//     <>
//       <PlayButton movieName="Interstellar" />
//       <AlertButton />
//     </>
//   );
// }

// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>;
// }

// function PlayButton({ movieName }) {
//   function handleClick() {
//     alert(` Playing .... ${movieName}`);
//   }

//   return <Button onClick={handleClick}>Play</Button>;
// }

// function AlertButton() {
//   return <Button onClick={() => alert("Uploading...")}>Upload Image</Button>;
// }

// solution 1
// function App() {
//   return (
//     <>
//       <Button />
//     </>
//   );
// }

// function Button() {
//   function onClickHanlder() {
//     console.log("Button Clicked");
//   }
//   return <button onClick={onClickHanlder}>Click me.</button>;
// }

// solution 2
// function App() {
//   return (
//     <>
//       <InputChange />
//     </>
//   );
// }

// function InputChange() {
//   function onKeyDownHandler(e) {
//     console.log(e.target.value);
//   }
//   return (
//     <input
//       id="inputField"
//       placeholder="type anything"
//       type="text"
//       style={{ color: "white", border: "1px solid white" }}
//       onChange={onKeyDownHandler}
//     />
//   );
// }

//solution 3
// function App() {
//   return (
//     <>
//       <HoverMouse />
//     </>
//   );
// }

// function HoverMouse() {
//   return (
//     <div
//       style={{ border: "1px solid white", width: "100px", height: "100px" }}
//       onMouseEnter={() => {
//         console.log("Mouse Entered");
//       }}
//       onMouseLeave={() => {
//         console.log("Mouse Leave");
//       }}
//     >
//       Hover on me
//     </div>
//   );
// }

function App() {
  return (
    <>
      <FormSubmission />
    </>
  );
}

function FormSubmission() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form is submitted");
        }}
      >
        <input type="text" placeholder="Sam Das" />
        <button>Submit</button>
      </form>

      <p
        onDoubleClick={() => {
          console.log("Paragraph Double Clicked!");
        }}
      >
        Hello user
      </p>
    </div>
  );
}

export default App;
