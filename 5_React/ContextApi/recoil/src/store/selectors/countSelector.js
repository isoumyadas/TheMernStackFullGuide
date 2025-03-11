// How to define a selector?

// A selector can depend on multiple atoms and also different selectors.

import { selector } from "recoil";
import { countAtom } from "../atoms/Counter";

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2;
  },
});
