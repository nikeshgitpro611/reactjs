import React, { useState } from "react";
import Header from "./Header";
import { Logo } from "../logo";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Logo[0].logo} alt={Logo[0].name} />
      </div>
      <form className="w-3/12 absolute bg-black px-12 my-20 mx-auto left-0 right-0 font-bold text-white opacity-90">
        <h1 className="py-4 text-3xl font-light">
          {isSignIn ? "Sign In" : "Sign-Up"}
        </h1>
        {!isSignIn && <input
          type="text"
          placeholder="Full Name"
          className="my-4 p-4 w-full bg-gray-700 rounded-md outline-none"
        />}
        <input
          type="text"
          placeholder="Please type email"
          className="my-4 p-4 w-full bg-gray-700 rounded-md outline-none"
        />
        <input
          type="password"
          placeholder="Please type Password"
          className=" my-4 p-4 w-full bg-gray-700 rounded-md outline-none"
        />
        <button className="my-6 p-4 bg-red-500 w-full">
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
