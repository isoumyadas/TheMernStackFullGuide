import Todo from "./Todo";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-neutral-400">
      <h1 className="mb-20 text-2xl">TODO</h1>
      <Todo />
    </div>
  );
}

export default App;
