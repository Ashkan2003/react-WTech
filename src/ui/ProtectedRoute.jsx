import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { useUser } from "../features/authentication/useUser";

/* eslint-disable react/prop-types */
function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load the authenticated user
  const { isAuthenticated, isLoadingUser } = useUser();
  // 2. if there is no authenticated user, redirect to the "/login"
  useEffect(
    function () {
      if (!isAuthenticated && !isLoadingUser) {
        navigate("/login", { replace: true }); // whit replace : true we can navigate back
      }
    },
    [isAuthenticated, isLoadingUser, navigate],
  );

  // 3. while loading, show a spinner
  if (isLoadingUser) {
    return <Spinner />;
  }

  // 4. if thre is a user, render the entire app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
