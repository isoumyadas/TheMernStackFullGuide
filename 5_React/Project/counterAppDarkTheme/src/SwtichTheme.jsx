export default function SwtichTheme({ dark, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className={`
        ${
          dark
            ? "border-solid border-2 px-2 mb-4 border-white"
            : " border-solid border-2 px-2 mb-4 border-black"
        }`}
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
