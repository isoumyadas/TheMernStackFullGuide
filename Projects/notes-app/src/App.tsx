import AddNote from "@/components/AddNote";

function App() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-2xl mb-2">YOUR NOTES</h1>
      <AddNote />
    </div>
  );
}

export default App;
