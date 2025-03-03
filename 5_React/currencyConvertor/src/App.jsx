import { useEffect, useState } from "react";
import axios from "axios";

// This is how we create custom hooks
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //auto-refresh every 5 seconds
    const cleanTimer = setInterval(() => {
      axios.get("https://dummyjson.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    // at least run once:
    axios.get("https://dummyjson.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    // clean up: clean the timer when their is something change in dependency (so it will not add up) or it unmounts.
    return () => {
      clearInterval(cleanTimer);
    };
  }, [n]);

  return { todos, loading };
}

function App() {
  const { todos, loading } = useTodos(5);

  if (loading) {
    return <div>loading....</div>;
  }
  return (
    <>
      {todos.map((todo) => (
        <Track key={todo.id} todo={todo} />
      ))}
    </>
  );
}

function Track({ todo }) {
  return (
    <div className="flex bg-red-500">
      <div>
        {todo.id}
        <br />
        {todo.todo}
      </div>
    </div>
  );
}

export default App;

// You can use this to fetch the data : https://swr.vercel.app/
/*

 ================ basic example of SWR ==============================

import useSWR from 'swr'

// const fetcher = (url) => fetch(url).then((res) => res.json());
const fetcher = async function(url) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
};

function Profile() {
  const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello, you have {data.todos.length} todos!</div>
}

*/
