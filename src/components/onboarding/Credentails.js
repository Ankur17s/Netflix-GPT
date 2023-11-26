import React, { useState } from "react";

const Credentails = () => {
  const [isSignInForm, setIsSingInForm] = useState(true);
  const handleSignInForm = () => {
    setIsSingInForm(!isSignInForm);
  };
  return (
    <div className="absolute mx-auto right-0 left-0 w-4/12">
      <form className="bg-black bg-opacity-80 flex flex-col my-32 px-14 py-12 rounded-lg">
        <h1 className="text-white font-semibold pb-6 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="indent-3 py-3 rounded-md bg-gray-900 text-white"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="indent-3 py-3 mt-4 rounded-md bg-gray-900 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="indent-3 py-3 mt-4 rounded-md bg-gray-900 text-white"
        />
        <button className="w-full bg-red-600 py-3 my-7 text-white rounded-lg">
          { isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 my-5">
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span
            onClick={handleSignInForm}
            className="text-white cursor-pointer hover:underline"
          >
            {isSignInForm ? "Sign Up now." : "Sign In now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Credentails;
