import { useState } from "react";
import { Login } from "./Login";
import { Signup } from "./SignUp";

export const LoginMerge = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      <div className="max-w-md  w-full p-6 space-y-2 bg-white rounded-lg shadow-md ">
        <h2 className="text-4xl  font-extrabold text-center">
          {isSignUp ? "Sign Up" : "Welcome Back"}
        </h2>

        <h3 className=" font-bold text-center">
          {isSignUp ? "create your account" : "Enter your credential to login "}
        </h3>

        {isSignUp ? <Signup /> : <Login />}

        <p className="text-center mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span
            className="text-[#EC525E] cursor-pointer hover:underline decoration-red-500"
            onClick={toggleSignUp}
          >
            {isSignUp ? " Login here" : " Sign Up here"}
          </span>
        </p>
      </div>
    </div>
  );
};
