import logo from "../assets/react.svg";
import { NavLink } from "react-router";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-[#3674B5] text-white cursor-pointer pt-1 pb-1 pr-3 pl-3 rounded-full font-semibold"
      : "hover:bg-[#123458] hover:text-white cursor-pointer pt-1 pb-1 pr-3 pl-3 rounded-full font-semibold";
  return (
    <nav className="bg-[#093FB4] text-white">
      <div className="flex justify-between items-center p-4 ">
        <div>
          <img src={logo} alt="react-svg" />
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs" className={linkClass}>
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-job" className={linkClass}>
                Add Job
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
