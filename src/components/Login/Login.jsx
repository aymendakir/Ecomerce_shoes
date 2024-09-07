import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import React from "react";
import Navigation from "../Navigation";
import { useNavigate } from "react-router-dom/dist";

function Login() {
  const { isSignedIn, user, isLoaded } = useUser();
  const navigate = useNavigate();
  if (isSignedIn) {
    navigate(-1);
  }
  return (
    <>
      <Navigation />
      <header className="flex items-center justify-center h-[90vh]">
        <SignIn />
      </header>
    </>
  );
}

export default Login;
