import React from "react";
import Login from '../Sign-IN-UP/Login';

const ProtectedRoute = ({ isAuth, children}) => {


return(
  isAuth ? (
    children
    ) : (
      <Login />
    )
)
    
    
};

export default ProtectedRoute;