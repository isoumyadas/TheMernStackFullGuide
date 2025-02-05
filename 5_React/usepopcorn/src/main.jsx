import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from './App.jsx'
import StarRating from "./StarRating.jsx";
import Test from "./Test.jsx";
import Sap from "./Sap.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} className="test" defualtRating={3} />
    <Test /> */}

    <Sap />
  </StrictMode>
);

// You can also pass the className for user to pass the their preffered styling
