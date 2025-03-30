import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

// import { useTodos } from "./useTodos"; // Now you can use that

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ backgroundColor: "lightcoral", color: "black" }}>
      {children}
    </div>
  );
};

type ListProps = {
  items: string[];
  onClick?: (item: string) => void;
};

type PayloadType = {
  text: string;
};

type Todo = {
  id: number;
  done: boolean;
  text: string;
};

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

type IncrementerProps = {
  // values: number;
  // setValues: React.Dispatch<React.SetStateAction<number>>;
  values: UserNumberValue;
  setValues: UserNumberSetValue;
};

const Incrementer = ({ values, setValues }: IncrementerProps) => {
  return <button onClick={() => setValues(values + 1)}>Add - {values}</button>;
};

const List = ({ items, onClick }: ListProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => onClick?.(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

const useNumber = (initialValue: number) => useState<number>(initialValue);

type UserNumberValue = ReturnType<typeof useNumber>[0]; // the benefit of using this is that it will track whencver you change the type in useNumber
type UserNumberSetValue = ReturnType<typeof useNumber>[1];

function App() {
  const onListClick = useCallback((item: string) => {
    console.log(item);
  }, []);

  const [checkState, setCheckState] = useState<PayloadType | null>(null);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCheckState(data));
  }, []);

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
  }, []);

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value,
      });
      newTodoRef.current.value = "";
    }
  }, []);

  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    title?: string;
  }

  const Button = ({ title, children, style, ...rest }: ButtonProps) => {
    return (
      <button {...rest} style={{ ...style }}>
        {title ?? children}
      </button>
    );
  };

  const [value, setValue] = useNumber(0);

  interface ULProps extends React.HTMLAttributes<HTMLUListElement> {
    children: React.ReactNode;
  }

  function UL<T>({
    items,
    render,
  }: {
    items: T[];
    render: (item: T) => React.ReactNode;
    children?: ULProps;
  }) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{render(item)}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <h1>Learning TS+React</h1>
      <Heading title="Intro to TS and React" />
      <Box>Hello there! YK what does that mean</Box>
      <List items={["one", "two", "three"]} onClick={onListClick} />
      <Box>{JSON.stringify(checkState)}</Box>
      <Incrementer values={value} setValues={setValue} />
      <Heading title="TODOS" />
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE",
                id: todo.id,
              })
            }
          >
            Remove
          </button>
        </div>
      ))}
      <div>
        <input type="text" ref={newTodoRef} />
        <Button
          style={{ backgroundColor: "lightgreen", color: "black" }}
          onClick={onAddTodo}
          title="Add TODO"
        />
        {/* Add Todo
        </Button> */}
      </div>
      <UL items={todos} render={(todo) => <> {todo.text} </>} />
    </>
  );
}

// const AppWrapper = () => {
//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "50% 50%",
//         gap: "2rem",
//       }}
//     >
//       <App></App>
//       <App></App>
//     </div>
//   );
// };

export default App;
