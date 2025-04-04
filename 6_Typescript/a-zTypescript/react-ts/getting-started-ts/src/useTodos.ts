import { useCallback, useReducer } from "react";

type Todo = {
  id: number;
  done: boolean;
  text: string;
};

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

// You can use this kind of tricks to get all the type for that component
// type UseTodosManagerResult = ReturnType<typeof useTodos>

export function useTodos(initialTodos: Todo[]): {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
} {
  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
            done: false,
          },
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);

      default:
        throw new Error("Something unusal");
    }
  }, initialTodos);
  const addTodo = useCallback((text: string) => {
    dispatch({
      type: "ADD",
      text,
    });
  }, []);

  const removeTodo = useCallback((id: number) => {
    dispatch({
      type: "REMOVE",
      id,
    });
  }, []);

  return { todos, addTodo, removeTodo };
}
