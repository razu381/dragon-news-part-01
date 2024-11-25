import React, { useContext } from "react";
import { AuthContext } from "../Auth/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  let { user, loading } = useContext(AuthContext);
  let location = useLocation();
  //console.log(location);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) return children;
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
}

export default PrivateRoute;
