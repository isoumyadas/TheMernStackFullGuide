import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./components/TodoItem";

export interface Todo {
  todo: string;
  isCompleted: boolean;
  id?: string;
}

function App() {
  const [task, setTask] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  // functions

  function addTask(todo: Todo) {
    setTask((prevTodo) => [...prevTodo, { id: uuidv4(), ...todo }]);
    // setTask((prevTodo) => [...prevTodo, { id: uuidv4(), todo, isCompleted }]); // This will only work when you destructure from parameter {todo, isCompleted}: Todo
  }

  const onAdd = (e) => {
    e.preventDefault();
    addTask({ todo: inputValue, isCompleted: false });
    setInputValue("");
  };

  // The e.target.value is typically used with input elements (like <input>, <textarea>, or <select>), not buttons, because buttons don't have a value property that changes dynamically.

  return (
    <div className="bg-gray-800">
      <div className="container flex flex-col justify-center items-center h-screen mx-auto">
        <div className="flex gap-5">
          <Input
            type="text"
            placeholder="Your next todo"
            className="text-white font-bold selection:bg-gray-500"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />

          <Button
            className="cursor-pointer bg-gray-900 hover:bg-black"
            onClick={onAdd}
            disabled={inputValue.length > 0 ? false : true}
          >
            Add <ArrowUpRightIcon />
          </Button>
        </div>
        {/* TODO: add the component of todoLists | to fix this area  */}
        <div className="flex justify-start w-100 h-100 my-8 flex-col gap-4 text-white overflow-auto scroll-smooth">
          {task.map((i) => (
            <li
              key={i.id}
              className="list-none flex items-center w-full justify-between"
            >
              <TodoItem todo={i} setTask={setTask} />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
