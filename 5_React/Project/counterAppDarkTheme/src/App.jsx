import { useState } from "react";
import Counter from "./Counter";
import SwtichTheme from "./SwtichTheme";

function App() {
  const [isDark, setIsDark] = useState(false);

  function switchToDark() {
    setIsDark((prevTheme) => {
      let newTheme = !prevTheme;
      if (newTheme) {
        document.body.classList.add("darkMode");
      } else {
        document.body.classList.remove("darkMode");
      }

      return newTheme;
    });
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col">
        <SwtichTheme dark={isDark} toggleDarkMode={switchToDark} />
        <h1 className="counterTitle">Counter APP</h1>
        <Counter dark={isDark} />
      </div>
    </>
  );
}

export default App;
