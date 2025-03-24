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
