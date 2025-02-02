import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "sammy",
    age: 21,
  };

  let myArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-4xl mb-5">
        Tailwind test
      </h1>
      <Card name={myObj.username} userAge={myObj.age} listOne={myArr[2]} />
      <Card listOne={myArr[0]} listTwo={myArr[1]} name="Soumya Ranjan Das" />
    </>
  );
}

export default App;
