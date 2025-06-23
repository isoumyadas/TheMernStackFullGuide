import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/* Renders child components */}
      <Outlet />
    </>
  );
};

export default MainLayout;
