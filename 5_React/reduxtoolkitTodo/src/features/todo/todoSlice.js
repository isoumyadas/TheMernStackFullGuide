import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // key function
    addTodo: (state, action) => {
      // state has current state which is intialState for now | and action is what will happen like todo
      const todo = {
        id: nanoid(),
        text: action.payload, // payload is an object
      };
      state.todos.push(todo);
    }, // you'll always get action of state and action
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, text: action.payload } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

// reducres are named as slices in redux-toolkit
