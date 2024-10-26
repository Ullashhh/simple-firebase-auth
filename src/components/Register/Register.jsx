// import React from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./../../firebase/firebase.config";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth(app);
  const onGoogleReg = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };

  const onGithubReg = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        if (!user) setUser(loggedUser);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        alert("Logout Successfully");
      })
      .catch((error) => {
        console.log("Logout Error: ", error.message);
      });
  };
  return (
    <div className="mt-20 flex flex-col items-center">
      <h2 className="my-10 text-3xl">
        Please make a registration for access of the website...
      </h2>
      {!user ? (
        <div>
          <button onClick={onGoogleReg}>Google Signup</button>
          <button onClick={onGithubReg} className="ml-3">
            Github Signup
          </button>
        </div>
      ) : (
        <button className="" onClick={logOut}>
          Sign Out
        </button>
      )}
      {user && (
        <div className="mt-10">
          <p className="mb-3">User Name: {user.displayName}</p>
          <p className="mb-3">
            User email:{" "}
            {user.email ? user.email : "Please sign in with another email."}
          </p>
          <img className="mx-auto " src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Register;
