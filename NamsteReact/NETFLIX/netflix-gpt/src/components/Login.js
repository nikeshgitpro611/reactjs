import React, { useRef, useState } from "react";
import Header from "./Header";
import { Logo } from "../logo";
import { checkValidation } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../dbFirebase/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      const user = userCredential.user;
    } catch (error) {
      const { code, message } = error;
      setErrorMessage(`${code} ${message}`);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      const user = userCredential.user;
      console.log('User:', user);
      
    } catch (error) {
      console.log('Error:', error.message);
      
      const { code, message } = error;
      setErrorMessage(`${code} ${message}`);
    }
  };

  const handelSubmit = () => {
    let namePass = null;
    if (!isSignIn) {
      namePass = name.current.value;
    }
    const message = checkValidation(
      email.current.value,
      password.current.value,
      namePass
    );
    setErrorMessage(message);
    if (message) return;

    {!isSignIn ? handleSignUp() : handleLogin()}
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Logo[0].logo} alt={Logo[0].name} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black px-12 my-20 mx-auto left-0 right-0 font-bold text-white opacity-90"
      >
        <h1 className="py-4 text-3xl font-light">
          {isSignIn ? "Sign In" : "Sign-Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 p-4 w-full bg-gray-700 rounded-md outline-none"
            ref={name}
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Please type email"
          className="my-4 p-4 w-full bg-gray-700 rounded-md outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="Please type Password"
          className=" my-4 p-4 w-full bg-gray-700 rounded-md outline-none"
        />
        <p className="text-red-700">{errorMessage}</p>
        <button className="my-6 p-4 bg-red-500 w-full" onClick={handelSubmit}>
          {isSignIn ? "Sign In" : "Sign-Up"}
        </button>
        <p
          className="capitalize my-2 font-thin cursor-pointer font-serif"
          onClick={handleToggle}
        >
          {isSignIn ? (
            " new to netfilx ? Sign-Up"
          ) : (
            <span className="font-thin"> All ready registerd? SignIn Now</span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
