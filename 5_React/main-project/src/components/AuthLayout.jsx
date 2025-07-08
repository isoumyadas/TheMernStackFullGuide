import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // authentication is true (so it’s a protected page).
    // If authStatus !== true (i.e., the user is not logged in), redirect to /login.
    if (authentication && authStatus !== authentication) {
      navigate("/login");

      // authentication is false (so it's a public-only route like /login or /signup).
      // If the user is authenticated (authStatus === true), redirect them to / because they shouldn't be on login/signup again.
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default Protected;

// Mechanism to protect pages and routes
