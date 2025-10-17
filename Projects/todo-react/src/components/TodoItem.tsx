import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookMarkedIcon, PencilIcon, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Todo } from "@/App";

export interface TaskProps {
  todo: Todo;
  //   setTask:
}

const TodoItem = ({ todo, setTask }) => {
  const [taskEdit, setTaskEdit] = useState(todo.todo); // we gave initial todo of the added todo.
  const [isEdit, setIsEdit] = useState(false);

  function updateTask(id: string, todo: Todo) {
    setTask((prevTodo: Todo[]) =>
      prevTodo.map((prev) => (prev.id === id ? todo : prev))
    );
  }

  function onEdit() {
    if (todo.isCompleted) return;

    if (isEdit) {
      updateTask(todo.id, { ...todo, todo: taskEdit }); // this mean for particular todo id we only have to change the todo key.
      setIsEdit(false);
    } else setIsEdit(true);
  }

  function deleteTask(id: string) {
    setTask((prevTodo: Todo[]) => prevTodo.filter((prev) => prev.id !== id));
  }

  function toggleComplete(id: string) {
    setTask((prevTodo: Todo[]) =>
      prevTodo.map((prev) =>
        prev.id === id ? { ...prev, isCompleted: !prev.isCompleted } : prev
      )
    );
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <>
      <div className="flex gap-5">
        <Input
          type="checkbox"
          className="w-5"
          checked={todo.isCompleted}
          onChange={toggleCompleted}
        />

        <input
          className={`outline-none rounded-lg px-2 ${
            isEdit
              ? "border-4 border-black focus:outline-none"
              : "border-transparent"
          } ${todo.isCompleted ? "line-through" : ""}`}
          type="text"
          value={taskEdit}
          onChange={(e) => setTaskEdit(e.target.value)}
          readOnly={!isEdit}
        />
      </div>
      {/* edit functionality */}
      <div className="flex gap-4">
        <Button
          className="w-10 h-10 cursor-pointer bg-transparent"
          onClick={onEdit}
        >
          {isEdit ? <BookMarkedIcon /> : <PencilIcon />}
        </Button>

        <Button
          className="w-10 h-10 cursor-pointer bg-transparent"
          onClick={() => deleteTask(todo.id)}
        >
          <XIcon />
        </Button>
      </div>
    </>
  );
};

export default TodoItem;
