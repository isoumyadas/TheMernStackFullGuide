import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // setTodos(...todos, todo);
    setTodos((prevTodo) => [...prevTodo, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodo) =>
      prevTodo.map((prev) => (prev.id === id ? todo : prev))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((prev) => prev.id !== id));
    // What filter does here?
    // we passed an condition if prev.id !== id means create a new array and pass to setTodos which are not equal to given id.
  };

  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((prev) =>
        prev.id === id ? { ...prev, completed: !prev.completed } : prev
      )
    );
    // what is does:
    // so here first it checks if prev is equal to given id if true then inject a new object where you have just changed the completed and if false then be same as prev
  };

  // rendering and storing in localstorage
  useEffect(() => {
    // only in client you can access localstorage

    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // setting into localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#032F30] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-[#0A7075]">
          <h1 className="text-6xl font-bold text-center mb-8 mt-2 heading">
            MY TODOS
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
