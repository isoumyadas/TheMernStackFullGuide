import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo: todo, completed: false });
    setTodo(""); // cleanUp
  };

  return (
    <form onSubmit={add} className="flex gap-2">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo} //wiring
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-lg px-3 py-1 bg-[#00413f] hover:bg-[#002120] text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
