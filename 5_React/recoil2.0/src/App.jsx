import { jobAtom, messageAtom, networkAtom, notificationAtom } from "./atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import { totalMessageCountSelector } from "./selectors";

function App() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const jobsCount = useRecoilValue(jobAtom);
  // const [messageCount, setMessageCount] = useRecoilState(messageAtom);
  const messageCount = useRecoilValue(messageAtom);
  const totalNotificationCount = useRecoilValue(totalMessageCountSelector);

  return (
    <>
      <h1>Not gonna tell you </h1>
      <button>Home </button>

      <button>
        My network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsCount === 0 ? null : jobsCount})</button>
      <button>Messages ({messageCount ? messageCount : null})</button>
      <button>
        Notifications ({notificationCount >= 100 ? "99+" : notificationCount})
      </button>

      <button>Me ({totalNotificationCount})</button>

      {/* <button
        onClick={() => {
          setMessageCount(messageCount + 1); // JUST FOR DEMONSTRATION PURPOSE
        }}
      >
        Me
      </button> */}
    </>
  );
}

export default App;
