import { createSlice } from "@redux/toolkit";

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

interface TodosSliceState {
  todos: Todo[];
}

const initialState: TodosSliceState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: state.todos.length,
          text: action.payload,
          done: false,
        },
      ];
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
