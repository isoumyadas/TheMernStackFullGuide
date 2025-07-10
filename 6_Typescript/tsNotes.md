#Typescript

- To install Typescript locally
  `npm install -g typescript`
- To check the Typescript version
  `tsc -v`
- To create `tsconfig.json` file
  `npx tsc --init` || `tsc --init`
- To convert/compile the `ts` file to `js` file
  `tsc -b`
  You run the [.js] file, not the [.ts] file.

---

- Basic Types of Typescript
  - Ts provides some basic types
    - Number
    - String
    - Boolean
    - Null
    - Undefined
    - Any
- Ts Config info [IMP]

  - All your typescript files should be in `src` folder
  - All your compiled file from `ts` to `js` should be in **`dist`** folder / `build` [`dist` mean distribution].
  - Whenever you structure your project | In Ts config file, you should make these changes.

    - `rootDir: “./src”`
    - `outDir: “./dist”`

  - Never push the `dist` and `node_modules` folder
    - `vi .gitignore` → command to open vim editor.

- How to give types to react component

  ```jsx
  function App() {
    return (
      <>
        <Todo title={"Wirkit"} description={"wirkit it"} done={false} />
      </>
    );
  }

  interface TodoProp {
    title: string;
    description: string;
    done: boolean;
  }

  // function Todo(props: TodoProp) {
  function Todo({ title, description, done }: TodoProp) {
    return (
      <div>
        <h1>
          {prop.title} {title}
        </h1>
        <h2>
          {prop.description} {description}
        </h2>
        <p>
          {prop.done} {done}
        </p>
      </div>
    );
  }
  ```

- Interfaces

  ```jsx
  interface User {
    firstname: string;
    lastname: string;
    age: number;
    email?: string; // ? means optionally.
  }

  function isLegall(user: User) {
    if (user.age > 18) {
      return true;
    } else {
      return false;
    }
  }

  const hello = isLegall({
    firstname: "Soumya",
    lastname: "das",
    age: 23,
  });

  console.log(hello);

  // =========== implementing interfaces ===================

  interface Person {
    name: string;
    age: number;
    greet(pharse: string): void;
  }

  class Employee implements Person {
    name: string; // if anything is bound to "this" you've to write here
    age: number;

    constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
    }

    greet(pharse: string): void {
      console.log(`${pharse} ${this.name}`);
    }
  }

  const e = new Employee("sam", 23);
  console.log(e.greet("Hey there!...."));

  // By implementing interfaces you can use class or create a class.
  ```

- Types

  ```jsx
  // What are types? => Very similar to interfaces, types lets you aggregate data together

  type Users = {
    firstname: string,
    lastname: string,
  };

  // types is not used to implement classes.

  //1. Unions

  type GreetArgs = number | string;

  function greeting(id: GreetArgs): string | number {
    return `${id} is your Roll number`;
  }

  console.log(greeting(1));
  console.log(greeting("201"));

  // 2. intersection

  type Employees = {
    name: string,
    age: number,
    joining: Date,
  };

  type Managers = {
    name: string,
    department: string,
    isActive: boolean,
  };

  type TechLead = Employees & Managers;

  const t: TechLead = {
    name: "sammy",
    age: 23,
    department: "Software Engineer",
    isActive: true,
    joining: new Date(),
  };

  console.log(t);

  // What is the difference between types and interfaces:
  /*
  
      Types are not used to extends Classes 
      Interfaces are used to extends Classes
  
      Types are used for Unions and Intersection (& |)
      Interfaces dont
  
  */
  ```

- Arrays in TS

  ```jsx
  // All you need to do is put [] annotation next to the type.

  // Given an array of positive integers as input, return the maximum value in the array

  type NumberArr = number[]; // This is take number of arrays NO strings or any other type

  function maxValue(arr: NumberArr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  console.log(maxValue([1, 2, 3]));

  //2

  interface Userk {
    firstName: string;
    lastName: string;
    age: number;
  }

  function filteredUsers(users: Userk[]) {
    return users.filter((x) => x.age >= 18);
  }

  console.log(
    filteredUsers([
      {
        firstName: "harkirat",
        lastName: "Singh",
        age: 21,
      },
      {
        firstName: "Raman",
        lastName: "Singh",
        age: 16,
      },
    ])
  );
  ```

- Tuples in TS

  ```jsx
  // Tuple

  function p(): [number, number] {
    return [2, 3];
  }

  console.log(p());

  let pers: [string, number, boolean] = ["mario", 1, false];

  // examples

  let hsla: [number, string, string, number];
  hsla = [200, "100%", "100%", 1];

  let xy: [number, number];
  xy = [45.7, 30.1];

  function useCords(): [number, number] {
    const lat = 100;
    const long = 50;

    return [lat, long];
  }

  //named tuples

  let userh: [name: string, age: number];
  userh = ["peach", 45];
  console.log(userh[0]);
  ```

- Enums in TS

  ```jsx
  // Enums (short for enumerations) in TS are a feature that allows you to define a set of named constants.

  // 1st method
  // type KeyInput = "up" | "down" | "right";
  // function doSomething(keyPressed: KeyInput) {}

  // 2nd enum method

  // enum Direction {
  //   Up,
  //   Down,
  //   Left,
  //   Right,
  // }

  // function doSomething(keyPressed: Direction) {
  //   if (keyPressed == Direction.Up) return "UP";
  // }

  // doSomething(Direction.Up);
  // doSomething(Direction.Down);
  // console.log(Direction.Down);

  // What if you want to add your values to enums?

  enum Direction {
    Up = "upped",
    Down = "downed",
    Left = "lefted",
    Right = "rightwing",
  }

  function doSomething(keyPressed: Direction) {
    if (keyPressed == Direction.Up) return "UP";
  }

  doSomething(Direction.Up);
  doSomething(Direction.Down);
  console.log(Direction.Down);

  // Common use case in Express.js

  // enum ResponseStatus {
  //     Success = 200,
  //     NotFound = 404,
  //     Error = 500
  // }

  // app.get("/', (req, res) => {
  //     if (!req.query.userId) {
  // 			res.status(ResponseStatus.Error).json({})
  //     }
  //     // and so on...
  // 		res.status(ResponseStatus.Success).json({});
  // })

  ```

- Generics in TS

  ```jsx
  // How does generics looks like?

  function identify<T>(arg: T) {
    return arg;
  }

  let output1 = identify < string > "Samm";
  let output2 = identify < number > 5;
  let output3 = identify < boolean > false;

  function textUpperCase<T>(arg: T[]) {
    // here <T> defines anything, but if you give <string> down their it will become string. very beneficial
    return arg[0];
  }

  const sdfds = textUpperCase < string > ["sss", "ddd"];
  const numbers = textUpperCase < number > [2, 3, 4, 5];

  console.log(sdfds.toUpperCase());
  console.log(numbers);

  // you can use advance usage too like interfaces

  interface Userw {
    name: string;
  }

  const trial = textUpperCase < Userw > [{ name: "You know sam" }];
  console.log(trial.name.toUpperCase());
  ```

- Important

  ```jsx
  // when you want to install something and want to use TS then use like this

  // npm install express @types/express
  ```

---

- Typescript + React

  - Basics with React
    `let url: string = "https://www.google.com";`
    You can provide datatype after the `:` , but ts is smart enough which can infer the datatype which you have provided. but you can’t change it to a number or any other datatype because you have given the type as a string.

    - Function

      ```jsx
      function convertCurrency(amount: number, currency: string) : string (// This is bsacially the return type, which mean what datatype will this function wil return) {

      }

      convertCurrency(500, "USD");
      ```

    - How to use Props?

      - You can certainly do it like this:

      ```jsx
      export default function Button({props:{bgColor:string}}) {
      const {bgColor} = props
      return (
      	<button className={`${bgColor}`}> Click Me </button>

      	)
      }

      OR

      export default function Button({bgColor, fontSize, pillShape}: {bgColor: string, fontSize: number, pillShape: boolean}) {
      return (
      	<button className={`${bgColor} ${fontSize}`}> Click Me </button>
      	)
      }
      ```

    - Using TYPE is more efficient

      ```jsx
      type ButtonProps = {
        bgColor: string,
        fontSize: number,
        pillShape: boolean,
      };

      export default function Button({
        bgColor,
        fontSize,
        pillShape,
      }: ButtonProps) {
        return <button className={`${bgColor} ${fontSize}`}> Click Me </button>;
      }
      ```

      Then how to do optional fields

      ```jsx
      type ButtonProps = {
        bgColor?: string,
        fontSize: number,
        pillShape?: boolean,
      };

      export default function Button({
        bgColor,
        fontSize,
        pillShape,
      }: ButtonProps) {
        return <button className={`${bgColor} ${fontSize}`}> Click Me </button>;
      }
      ```

      What does UNION type mean?

      ```jsx
      // If you want only particular type to be accepted or any one of the thing then you can use UNIONS

      eX: bgColor: "red" | "green" | "blue"            OR            something: string | number | boolean

      // You can even do it like this

      type Color = "red" | "green" | "blue"

      type ButtonProps = {bgColor?: Color, fontSize: number, pillShape?: Color}
      ```

      What about arrays then?

      ```jsx
      type ButtonProps = {
        bgColor?: Color[],
        fontSize: number,
        pillShape?: Color,
        padding: number[],
      }; // this mean number of arrays, similary you can do it for others too OR even custom type.
      ```

      - But where ever you pass the props, it should send the props in array format: `padding={[5,6,7]}`
        How about a tuple?

      ```jsx
      type ButtonProps = {
      	 bgColor?: Color[],
      	 fontSize: number,
      	 pillShape?: Color,
      	 padding: [number, number, string] // This is known as tuple | this can also fix the problem for length.
       }

       // This is how we wil pass the props for tuple

       padding={[5,6,"5px"]}


       // This is how you can access the props

       <button style={{padidng: `${padding[0]px padding[1]px padding[2]`}} />


       OR

       You can also get access of inbuilt feature of React.CSSProperties

       type ButtonProps = {
      	 style: React.CSSProperties; // This will provide all the properties you need for CSS | but this will work for plain CSS.
       };
      ```

      And how about passing the object?

      ```jsx
      // Passing the props

      <Button
      	borderRadius={{
      		'topLeft': 5, // BUT pretier remvoes the string for keys, but it is string
      		'topRight': 5,
      		'bottomRight': 5,
      		'bottomLeft': 5,
      }}

      // accessing the props

      type ButtonProps = {
      	borderRadius: Record<string, number> // probably used for objects, who are passing as props.
      };

      export default function Button({borderRadius}: ButtonProps) {
      return (
      	<button className={`${borderRadius} ${fontSize}`}> Click Me </button>
      	)
      }
      ```

      Functions?

      ```jsx
      // Passing as props
      const onClick = (test: string) => 5;
      // If it returns nothing
      const onClick = () => {}
      <Button onClick={onClick}  />

      // Accessing as props
      type ButtonProps = {
      	onClick: () => void // IF it is not passing any params or returning anything
      	onClick: (test: string) => number// IF it is passing any params or returning anything
      };

      export default function Button({onClick}: ButtonProps) {
      return (
      	<button onClick={onClick}> Click Me </button>
      	)
      }
      ```

      How to use that, children `React.ReactNode`

      ```jsx
      // Passing the Children

      <Button>Click Me Or Anything </Button>;

      // Accessing it:
      type ButtonProps = {
        children: React.ReactNode, // This will provide anything you pass in children
      };

      export default function Button({ children }: ButtonProps) {
        return <button> {children} </button>;
      }
      ```

      How about passing an `React.JSX.Element`

      ```jsx
      // Passing the Children
      const icon = <i></i>
      <Button>{icon}</Button>

      // Accessing it:
      type ButtonProps = {
      	children: JSX.Element; // This will provide only JSX element not texts or anything else which provides some of handling power what should be passing
      };

      export default function Button({children}: ButtonProps) {
      return (
      	<button> {children} </button>
      	)
      }
      ```

      Typing `useState` setter functions:

      ```jsx
      // Passing the Children
      const [count, setCount] = useState(0);
      <Button setCount={setCount} />;

      // Accessing it:
      type ButtonProps = {
        setCount: React.Dispatch<React.SetStateAction<number>>, // You dont need to memorize it you can hover over setCount at state and see what ts infered on them.
      };

      export default function Button({ setCount }: ButtonProps) {
        setCount(1);
        return <button> Click ME! </button>;
      }
      ```

      Default Props values:

      ```jsx

      type ButtonProps = {
      	setCount: React.Dispatch<React.SetStateAction<number>>; // You dont need to memorize it you can hover over setCount at state and see what ts infered on them.
      };

      export default function Button({count: 0}: ButtonProps) { // this is how we pass defualt props
      setCount(1)
      return (
      	<button> Click ME! </button>
      	)
      }
      ```

    - Type Alias vs Interface

      - Some codebases follow these naming conventions in Interface and type (But this is used less now-a-days). YOU can avoid

      ```jsx
      interface IButtonProps {
      	text: string;
      	count: number;
      }

      const TInputProps {
      	text: string;
      	count: number;
      }
      ```

      - For more info you can still go through the section Above

    - Component Props Without Ref

      ```jsx
      // Passing the props
      <Button type="submit" autoFocus={true} />

      // accessing it

      type ButtonProps = {
      	type: "submit" | "reset" | "button";
      	autoFocus?: boolean;

      export default function Button({type, autoFocus}: ButtonProps) {
      return (
      	<button type="submit" autoFocus> Click Me </button>
      	)
      }

      // But it can hundered of props here, so better use something inBulit like React.ComponentsProps;
      type ButtonProps = React.ComponentPropsWithoutRef<"button">

      //IF you pass REF
      type ButtonProps = React.ComponentPropsWithRef<"button">

      export default function Button({type, autoFocus}: ButtonProps) {
      return (
      	<button> Click Me </button>
      	)
      }
      ```

    - rest and …spread & Intersection

      - Rest mean whatever extra user have passed should be taken altogether and spread in the native component

      ```jsx
      // Passing the props
      <Button type="submit" autoFocus={true} />;

      // accessing it

      // But it can hundered of props here, so better use something inBulit like React.ComponentsProps;
      type ButtonProps = React.ComponentPropsWithoutRef<"button">;

      export default function Button({
        type,
        autoFocus,
        ...rest
      }: ButtonProps) {
        // It can be rest or props
        return (
          <button type={type} autoFocus={autoFocus} {...rest}>
            {" "}
            Click Me{" "}
          </button>
        );
      }
      ```

      - we can also use intersection

      ```jsx
      // Passing the props
      <Button type="submit" autoFocus={true} />;

      // accessing it

      // You can also use to specify & if varaint is primary or secondary just to specify it
      type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
        variant?: "primary" | "secondary",
      };

      export default function Button({
        type,
        autoFocus,
        ...rest
      }: ButtonProps) {
        // It can be rest or props
        return (
          <button type={type} autoFocus={autoFocus} {...rest}>
            {" "}
            Click Me{" "}
          </button>
        );
      }
      ```

      - How can we use the intersection in various ways?

      ```jsx
      // Passing the props
      <Button type="submit" autoFocus={true}  />

      // accessing it

      // Intersection with type
      type ButtonProps {
      	type: "button" | "submit" | "reset";
      	color: "red" | "blue" | "green"
      }

      type SuperButtonProps = ButtonProps & {
      	size: "md" | "lg";
      }

      // intersection with interface

      interface ButtonProps {
      	type: "button" | "submit" | "reset";
      	color: "red" | "blue" | "green";
      }

      interface SuperButtonProps extends  ButtonProps {
      	size: "md" | "lg"
      }

      // ==============================================================================================================================================================================

      export default function Button({}: ButtonProps) { // It can be rest or props
      return (
      	<button> Click Me </button>
      	)
      }
      ```

    - Event Handler functions

      ```jsx
      // Passing the props
      <Button />;

      // accessing it

      // if you have a handleClick which is handler of some event then you can first write it down inside the onClick and hover over it you will get the type for it, then you can do this:

      export default function Button() {
        const handleClick = (
          e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => {
          console.log("CLicked");
        };

        return <button onClick> Click Me </button>;
      }
      ```

    - Using hooks

      - For `useState`

        ```jsx
        // It is not neccessary but you can do it:

        type User = {
        	name: string;
        	age: string
        }

        // aceesing props section:
        export function Button() {
        // for number
        	const [count. setCount] = useState<number>(0);
        // for boolean
        	const [count. setCount] = useState<boolen>(true);
        // for string
        	const [count. setCount] = useState<string>("yes");
        // for object (initially it should be null)
        	const [count. setCount] = useState<User | null>(null);

        	// while accesing it: **const name = user?.name** (as we have given initial as null)

        	return <button> Click ME! </button>;
        }
        ```

      - For `useRef`

        ```jsx
        type User = {
          name: string,
          age: string,
        };

        // aceesing props section:
        // TO be more specific we have HTMLButtonElement that will only pass button element
        export function Button() {
          const ref = (useRef < HTMLButtonElement) | (null > null);

          return <button ref={ref}> Click ME! </button>;
        }
        ```

    - Using as const [readOnly]

      ```jsx
      const buttonTextOptions = [
      	"Click me",
      	"Click it one more time",
      	"Click that again"
      ] as const; // doing this will provide you only readOnly for this and no one can mutate it

      export function Button() {
      	return (
      		<button>
      			{buttonTextOptions.map((option) => return option)}
      		</button>
      	)
      }
      ```

    - Omit Utility & as ‘Type Assertion’

      ```jsx
      // if you want a specific type from another type:

      type User = {
      	sessionId: string;
      	name: string;
      }

      type Guest = Omit<User, "name">; // This will omit name from type User into Guest.

      export function Button() {
      	return (
      		<button>
      			Click me
      		</button>
      	)
      }

      // as

      // for example you want to use that type in something you can use as;

      type ButtonColor = "red" | "green";

      export default function Button() {
      	useEffect(() => {
      		const perviousButtonColor = localStorage.getItem("buttonColor") as ButtonColor; // It can be red or green
      	}, []);

      	return <button>Click Me</button>;
      }

      ```

    - Using of Generics

      ```jsx
      // Basic understanding:
      // Here we dont need to specific the type using generics can take according what it's been passed.

      // this is for arrow function
      const convertToArray = <T,>(value: T): T[] => {
      	return [value];
      };

      // This is for normal function
      function convertToArray<T>(value: T): T[] => {
      	return [value];
      };

      convertToArray(5);
      convertToArray("Hello")
      ```

      - Example with React component

      ```jsx
      type ButtonProps<T> = {
      	countValue: T;
      	countHistory: T[]; // but it should same type as it was earlier, like string then you cant add number init.
      }; // This sets relationship between countValue and countHistory

      export fucntion Button<T>({
      	countValue,
      	countHistory
      }: ButtonProps<T>
      ) {
      	return <button>Click Me!</button>
      }
      ```

    - You can export and import your type

      ```jsx
      // Create a type.ts in lib folder

      export type Color = "red" | "green";

      // importing it, You can use type to get extra clear that it is type
      import { type Color } from "./lib/types";

      type ButtonProps = {
        color: Color,
      };
      ```

  - `useState`

    ```jsx
    const [postTitle, setPostTitle] = (useState < string) | (null > "");

    const changeTitle = () => {
      setPostTitle(null);
    };
    ```

  - Children Prop

    ```jsx
    type PostProps = {
    	id: number
    	title: string
    	toggle?: false
    }

    export default function Post({id,title,toggle}: PostProps) {
    	return (
    		<div>
    			<h1>Hello</h1>
    		</div>
    	)
    }

    // ===================================================================

    <Post id={post.id} title={post.title} /> // post is mapped from an array.
    ```

    ```jsx
    type ChildrenProps = {
      children: React.ReactNode,
    };

    export default function RootLayout({ children }: ChildrenProps) {
      return <body>{children}</body>;
    }
    ```

    OR → Older Version we did this

    ```jsx
    interface ButtonProps extends React.PropsWithChildren {
      type?: "button" | "submit" | "reset";
      bgColor?: string;
      textColor?: string;
      className?: string;
      // children: React.ReactNode; // SO here you don't need to pass this.
      [key: string]: any; // Allows additional props like onClick, disabled, etc.
    }

    function Button({
      type = "button",
      bgColor = "bg-blue-600",
      textColor = "text-white",
      className = "",
      children, // You can directly call it here as we extends PropsWithChildren.
      ...props
    }: ButtonProps) {
      return (
        <button
          className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
          {...props}
        >
          {children}
        </button>
      );
    }
    ```

  - Event Listeners

    ```jsx
    export default function Post({id, title}: PostProps) {

    	const [newTitle, setNewTitle] = useState<string>("")

    	constt changeTitle = (e: React.MouseEvent) => {
    		setNewTitle("wooo")
    	}

    	return (
    		<button onClick={changeTitle}>Click Me</button>
    	)

    }
    ```

- Using ReduxToolkit

  - In Main.tsx

  ```jsx
  import { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import "./index.css";

  import App1 from "./App1.tsx";
  import { Provider } from "react-redux";
  import { store } from "./redux.ts";

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Provider store={store}>
        <App1 />
      </Provider>
    </StrictMode>
  );
  ```

  - In Store & slice.ts

  ```jsx
  import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

  export interface StateType {
    count: number;
  }

  const initialState: StateType = { count: 0 };

  const rootSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
      increment: (state) => {
        state.count += 1;
      },

      decrement: (state) => {
        state.count -= 1;
      },
      incrementByValue: (state, action: PayloadAction<number>) => {
        state.count = action.payload;
      },
    },
  });

  export const { increment, decrement, incrementByValue } = rootSlice.actions;
  export const reducer = rootSlice.reducer;

  export const store = configureStore({ reducer: reducer });
  ```

  - In App.tsx

  ```jsx
  import { useState } from "react";
  import { incrementByValue, StateType } from "./redux";
  import { useDispatch, useSelector } from "react-redux";

  function App1() {
    const [val, setVal] = useState < number > 0;
    const dispatch = useDispatch();
    const count = useSelector((state: StateType) => state.count);

    const incrementByValueHandler = () => {
      dispatch(incrementByValue(val));
    };
    return (
      <div>
        <h1> Redux Toolkkit</h1>
        <h2>Count: {count}</h2>
        <br />
        <input type="text" />
        <br />
        <button>+</button>
        <button>-</button>
        <br />
        <input
          type="number"
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
        />
        <button disabled={val < 0} onClick={incrementByValueHandler}>
          Add
        </button>
      </div>
    );
  }

  export default App1;
  ```

- Using ContextApi

  - In Component called Box.tsx

  ```jsx
  import { useContext } from "react";
  import { ThemeContext } from "../App";

  function Box() {
    const { toggleTheme, theme } = useContext(ThemeContext);
    return (
      <div
        className="boxContainer"
        style={{
          backgroundColor: theme === "dark" ? "rgb(40,40,40)" : "white",
          color: theme === "dark" ? "white" : "rgb(40,40,40)",
        }}
      >
        <h1>Box 1</h1>
        <p>{theme === "light" ? "Theme is Light" : "Theme is Dark"}</p>
        <button onClick={toggleTheme}>Switch Theme</button>
      </div>
    );
  }

  export default Box;
  ```

  - In App.tsx

  ```jsx
  // Creating context

  import { createContext, ReactNode, useState } from "react";
  import Box from "./components/Box";

  type ThemeType = "light" | "dark";

  interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
  }

  export const ThemeContext =
    createContext <
    ThemeContextType >
    {
      theme: "light",
      toggleTheme: () => {},
    };

  const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState < ThemeType > "light";
    const toggleTheme = () => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

  function App() {
    return (
      <ThemeProvider>
        <Box />
      </ThemeProvider>
    );
  }

  export default App;
  ```

  - In Index.css

  ```jsx
  :root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .boxContainer {
    padding: 2rem;
  }

  ```
