import { selector } from "recoil";
import { jobAtom, messageAtom, networkAtom, notificationAtom } from "./atoms";

// Selector is something dervied from atoms or slectors
export const totalMessageCountSelector = selector({
  key: "totalMessageCountSelector",
  get: ({ get }) => {
    const networksAtomCount = get(networkAtom);
    const messagesAtomCount = get(messageAtom);
    const jobsAtomCount = get(jobAtom);
    const notificationsAtomCount = get(notificationAtom);
    return (
      networksAtomCount +
      messagesAtomCount +
      jobsAtomCount +
      notificationsAtomCount
    );
  },
});
