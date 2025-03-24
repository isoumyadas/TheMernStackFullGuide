import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useEffect, useState } from "react";
import { getTodos, saveLocal } from "./utils/feature";

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>(getTodos());

  const [title, setTitle] = useState<TodoItemType["title"]>("");

  // If you dont known what type will be.
  const completeHandler = (id: TodoItemType["id"]): void => {
    const thatTodo: TodoItemType[] = todos.map((i) => {
      if (i.id === id) i.isCompleted = !i.isCompleted;
      return i;
    });

    setTodos(thatTodo);
  };
  const deleteHandler = (id: TodoItemType["id"]): void => {
    const thatTodo: TodoItemType[] = todos.filter((i) => i.id !== id);
    setTodos(thatTodo);
  };

  const editHandler = (
    id: TodoItemType["id"],
    title: TodoItemType["title"]
  ): void => {
    const thatTodo: TodoItemType[] = todos.map((i) => {
      if (i.id === id) i.title = title;
      return i;
    });
    setTodos(thatTodo);
  };

  const submitHandler = (): void => {
    const newTodo: TodoItemType = {
      title,
      isCompleted: false,
      id: String(Math.random() * 1000),
    };

    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  };

  useEffect(() => {
    saveLocal(todos);
  }, [todos]);

  return (
    <Container maxWidth="md" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>TODO APP</Typography>
        </Toolbar>
      </AppBar>

      <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i) => (
          <TodoItem
            deleteHandler={deleteHandler}
            completeHandler={completeHandler}
            editHandler={editHandler}
            key={i.id}
            todo={i}
          />
        ))}
      </Stack>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        label={"New Task"}
        onKeyDown={(e) => {
          if (e.key === "Enter" && title !== "") submitHandler();
        }}
      />
      <Button
        sx={{ margin: "1rem 0", padding: "0.75rem 0" }}
        fullWidth
        variant={"contained"}
        onClick={submitHandler}
        disabled={title === ""}
      >
        ADD
      </Button>
    </Container>
  );
}

export default App;
