// there can be multiple context (for cart, user, auth etc.)
// Every context is a provider

// 1st step

import React from "react";
// import { createContext } from "react";

const UserContext = React.createContext();

export default UserContext;
