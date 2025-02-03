export default function Buttons({ setcolor, color, colorname }) {
  return (
    <button
      onClick={() => setcolor(color)}
      className="outline-none px-4 rounded-full text-white shadow-2xl"
      style={{ backgroundColor: color }}
    >
      {colorname}
    </button>
  );
}
