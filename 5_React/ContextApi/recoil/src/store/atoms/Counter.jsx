// import { atom } from "recoil";

// // now you dont need context or state
// console.log("Count Atom is called");
// export const countAtom = atom({
//   key: "countAtom", // how to uniquely indentify | Dont keep same same for multiple atoms.
//   default: 0,
// });

import { atom } from "recoil";

export const countAtom = atom({
  key: "countAtom", // Unique key (required)
  default: 0, // Initial value
});
