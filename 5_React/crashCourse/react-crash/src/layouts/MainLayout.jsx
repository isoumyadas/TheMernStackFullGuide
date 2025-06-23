import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/* <ToastContainer /> */}
      {/* Renders child components */}
      <Outlet />
    </>
  );
};

export default MainLayout;
