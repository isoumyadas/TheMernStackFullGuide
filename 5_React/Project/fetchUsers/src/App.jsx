import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      async function fetchUsers() {
        const users = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await users.json();
        setUsers(data);
      }

      fetchUsers();
    }, 5000);

    return () => {
      console.log("Timer cleared"); //cleanup
      clearTimeout(timer);
    };
  }, []); // put the state variable whenever you think you need to change!

  return (
    <>
      <div className="bg-red-500 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-white font-bold text-4xl ">Fetch the users</h1>
        {users ? (
          <ul className="flex flex-wrap gap-2 flex-col">
            {users.map((user) => (
              <li className="text-2xl text-yellow-500" key={user.id}>
                {user.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="loader"></p>
        )}
      </div>
    </>
  );
}

export default App;
