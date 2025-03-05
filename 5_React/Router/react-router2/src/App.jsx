import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
// for more optimal way you can use React.lazy(() => {});
// React.lazy helps to call one by one page as the user swtiches.
// If user is in dashboard! instead of giving whole bundle. it will just provide the piece of page that consists dasboard.
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

// import Dashboard from "./components/Dashboard";
// import Landing from "./components/Landing";

// Suspense API, async component fetching, async data fetching
/*

element={<Suspense fallback={"...loading"}><DashBoard /></Suspense>} 

*/

function App() {
  const navigate = useNavigate(); // you cant use browserRouter outside it. you should use inside it. That's why we shfited the browser router to main.jsx
  return (
    // client side rendering
    <>
      <div className="flex gap-4 m-5 ">
        <button
          className="border border-emerald-700 border-solid p-4"
          onClick={() => {
            // window.location.href = "/dashboard";
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>

        <button
          className="border border-emerald-700 border-solid p-4"
          onClick={() => {
            // window.location.href = "/landing"; // this refreshes the page | this is not client side rendering for that you need [useNavigate hook].
            navigate("/landing");
          }}
        >
          Landing
        </button>
      </div>

      {/* <BrowserRouter> */}
      {/* <Appbar /> here we have used thaat*/}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

// or you can use seprate component and use that, Now you can use that in browserRouter

function Appbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex gap-4 m-5 ">
        <button
          className="border border-emerald-700 border-solid p-4"
          onClick={() => {
            // window.location.href = "/dashboard";
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>

        <button
          className="border border-emerald-700 border-solid p-4"
          onClick={() => {
            // window.location.href = "/landing"; // this refreshes the page | this is not client side rendering for that you need [useNavigate hook].
            navigate("/landing");
          }}
        >
          Landing
        </button>
      </div>
    </>
  );
}
