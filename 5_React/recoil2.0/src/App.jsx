import { notifications } from "./atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import { totalNotificationSelector } from "./selectors";

// import axios from "axios";
// import { useEffect } from "react";

function App() {
  const networkCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // useEffect(() => {
  //   axios
  //     .get("https://mocki.io/v1/f6f565c7-103d-4b15-a81a-cb53476827db")
  //     .then((res) => {
  //       console.log(res.data);
  //       setNetworkCount(res.data);
  //     });
  // }, []);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await axios.get(
  //       "https://mocki.io/v1/3d9efb6c-214c-4452-bdba-070464412f81"
  //     );
  //     setNetworkCount(response.products);
  //   };

  //   getProducts();
  // }, []);

  if (!networkCount) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Not gonna tell you </h1>

      <button>Home </button>

      <button>
        My network ({networkCount.network >= 100 ? "99+" : networkCount.network}
        )
      </button>
      <button>
        Jobs ({networkCount.jobs === 0 ? null : networkCount.jobs})
      </button>
      <button>
        Messages ({networkCount.messaging ? networkCount.messaging : null})
      </button>
      <button>
        Notifications (
        {networkCount.notifications >= 100 ? "99+" : networkCount.notifications}
        )
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
