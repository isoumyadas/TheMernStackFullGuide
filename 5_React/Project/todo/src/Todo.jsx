import { useState } from "react";

let nextID;

export default function Todo() {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    setTodos([...todos, { id: nextID++, name: todoName }]);
  }
  return (
    <div className="flex gap-7 flex-col ">
      <div className="flex gap-7">
        <input
          type="text"
          placeholder="Today's Plan?"
          className="border-b-2 border-black outline-none bg-sky-100"
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
        />
        <button
          className="border-2 rounded-lg border-black px-2 shadow-lg hover:shadow-black bg-gray-300 "
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul className="flex gap-3 flex-col">
        {todos.map((todo) => (
          <li className="flex gap-6" key={todo.name}>
            <input type="checkbox" />
            {todo.name}
            {"  "}
            <button
              onClick={() => {
                setTodos(todos.filter((a) => a.name !== todo.name));
              }} // how it works? : so when the delete button is clicked the filter method is called and it will keep the values which doesnt match the deleted item.
              className="border-2 rounded-lg border-black px-1 shadow-lg hover:shadow-black"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
