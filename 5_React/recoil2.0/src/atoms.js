import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom", // unique key name
  default: 12, // A defualt value
});

export const jobAtom = atom({
  key: "jobAtom", // unique key name
  default: 0, // A defualt value
});

export const messageAtom = atom({
  key: "messageAtom", // unique key name
  default: 1, // A defualt value
});

export const notificationAtom = atom({
  key: "notificationAtom", // unique key name
  default: 102, // A defualt value
});
