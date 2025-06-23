// const Card = ({ title, subtitle, btnName, bgColor, btnBgColor }) => {
//   return (
//     <div className={`bg-[#${bgColor}] p-4 flex flex-col gap-2 rounded-lg`}>
//       <h2 className="text-xl font-bold">{title}</h2>
//       <p className="text-sm">{subtitle}</p>
//       <button
//         className={`pt-1 pb-1 pr-3 pl-3 text-white font-semibold rounded-lg cursor-pointer`}
//         style={{ backgroundColor: `#${btnBgColor}` }}
//         // Why this is been added?
//         /*
//         because Tailwind does not know ahead of time what values ${dynamicValue} will be. It only includes explicitly written utility classes (like bg-[#3674B5]) in your final CSS bundle.

//         ✅ When you use the same hex code, both buttons use the same class, which was already included in the build — so it works.

//         ❌ When you use different hex codes, Tailwind doesn’t see them in your static code and doesn’t generate the CSS for them.
//         */
//       >
//         {btnName}
//       </button>
//     </div>
//   );
// };

// export default Card;

{
  /* You can also do this like this: */
}
const Card = ({ children, bg = "bg-gray-100" }) => {
  return (
    <div className={`${bg} p-4 flex flex-col gap-2 rounded-lg`}>{children}</div>
  );
};

export default Card;
