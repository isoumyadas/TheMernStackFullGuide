import { createSlice, nanoid } from "@reduxjs/toolkit";

// it can be array or object
const initialState = {
  todos: [],
};

// what is reducer is just a functionality
export const todoSlice = createSlice({
  name: "todo", // every slice has a name
  initialState, // every slice has initialstate
  reducers: {
    // every slice has a reducres which consits property and function.
    // key function
    addTodo: (state, action) => {
      // state has current state which is intialState for now | and action is what will happen like todo | action is what to get values from and make changes.
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

//2nd step : Export the individuals functionality. This is used in components
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

//3rd step: Export the reducers. THis is used in store
export default todoSlice.reducer;

// reducres are named as slices in redux-toolkit
