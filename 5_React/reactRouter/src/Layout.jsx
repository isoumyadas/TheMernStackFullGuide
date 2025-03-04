import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

// with the help of Outlet from react-router you can use the nesting |  which is used in main.jsx, as we used Layout as top level and used every other component inside it.

export default Layout;
