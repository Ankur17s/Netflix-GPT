import React from "react";
import Credentails from "./Credentails";
import Header from "../common/Header";

const Login = () => {
  return (
    <div className="">
      <Header />
      {/* <div className="w-full absolute z-20 bg-gradient-to-b from-black">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="h-24 w-46 mx-7 my-1 object-cover"
        />
      </div> */}
      <div className="h-screen bg-local w-full bg-gradient-to-b from-black absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
          className=""
        />
      </div>
      <Credentails />
    </div>
  );
};

export default Login;
