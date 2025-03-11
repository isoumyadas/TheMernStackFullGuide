import { selector } from "recoil";
import { notifications } from "./atoms";
import axios from "axios";

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    console.log("3", allNotifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.messaging +
      allNotifications.notifications
    );
  },
});

export const dataFetcher = selector({
  key: "dataFetcher",
  get: async () => {
    // await new Promise((r) => setTimeout(r, 5000));
    const res = await axios.get(
      "https://mocki.io/v1/f6f565c7-103d-4b15-a81a-cb53476827db"
    );
    return res.data;
  },
});
