import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../utils/auth";
import API from "../utils/API";

function AdminRoute(props) {
  const { isLoggedIn, user, role } = useAuth();
  console.log("admin router");
  console.log(user);
  console.log(role);
  if(isLoggedIn && role === "admin") {
    return <Route {...props} />;
  } else {
    return <Redirect to="/signup" />;
  }
  
}

export default AdminRoute;
