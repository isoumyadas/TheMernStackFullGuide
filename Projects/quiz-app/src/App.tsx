import QuestionPage from "./QuestionPage";

function App() {
  return (
    <div className="bg-gray-700 w-screen min-h-screen text-white">
      <h1 className="text-center text-2xl font-extrabold">Quiz App</h1>

      <div className="container mx-auto border-2 border-black p-5 ">
        <QuestionPage />
      </div>
    </div>
  );
}

export default App;
