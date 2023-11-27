import React, { useRef, useState } from "react";
import { checkValidateData } from "../../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";

const Credentails = () => {
  const [isSignInForm, setIsSingInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = () => {
    // Form Validation function
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    // return if there is any error message
    if (message) return;

    // SignIn and SignUp Logic
    if (!isSignInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/47055072?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  displayName,
                  email,
                  photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    } else {
      // SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //   console.log(errorCode + "-" + errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignInForm = () => {
    setIsSingInForm(!isSignInForm);
  };

  return (
    <div className="absolute mx-auto right-0 left-0 w-4/12">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-80 flex flex-col my-32 px-14 py-12 rounded-lg"
      >
        <h1 className="text-white font-semibold pb-6 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="indent-3 py-3 rounded-md bg-gray-900 text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="indent-3 py-3 mt-4 rounded-md bg-gray-900 text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="indent-3 py-3 mt-4 rounded-md bg-gray-900 text-white"
        />
        <p className="text-red-600 py-2 font-bold">{errorMessage}</p>
        <button
          onClick={handleFormSubmit}
          className="w-full bg-red-600 py-3 my-7 text-white rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* form validatio message */}
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
