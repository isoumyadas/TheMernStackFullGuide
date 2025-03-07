import React from "react";

// 2nd step : 1st way to do
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

// the user and setUser can be access by useContext in particular component.
