import { atom } from "recoil";
import { dataFetcher } from "./selectors";

// export const networkAtom = atom({
//   key: "networkAtom", // unique key name
//   default: 12, // A defualt value
// });

// export const jobAtom = atom({
//   key: "jobAtom", // unique key name
//   default: 0, // A defualt value
// });

// export const messageAtom = atom({
//   key: "messageAtom", // unique key name
//   default: 1, // A defualt value
// });

// export const notificationAtom = atom({
//   key: "notificationAtom", // unique key name
//   default: 102, // A defualt value
// });

// async data queires
export const notifications = atom({
  key: "networkAtom",
  //   default: {
  //     network: 4,
  //     jobs: 6,
  //     messaging: 3,
  //     notifications: 3,
  //   },
  //   default: async () => {
  //     const res = await axios.get(
  //       "https://mocki.io/v1/f6f565c7-103d-4b15-a81a-cb53476827db"
  //     );
  //     return res.data;
  //   }, // you cannot have async defualt values

  default: dataFetcher,
});
