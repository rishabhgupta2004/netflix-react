import React, { useRef, useState } from 'react';
import Header from './header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { updateProfile } from 'firebase/auth';
import { addUser } from "../utils/userslice";
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR // Replace with a valid image URL
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          });
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage("Error signing up. Please try again.");
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage("Invalid email or password. Please try again.");
        });
    }
  };

  const toggleSigninForm = () => {
    setIsSignForm(!isSignForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="logos" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50">
        <h1 className="font-bold text-3xl py-4">{isSignForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignForm && (
          <input type="text" placeholder="Full Name" ref={name} className="p-4 my-4 w-full bg-gray-700" />
        )}
        <input type="text" ref={email} placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
        <input type="password" ref={password} placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button onClick={handleButtonClick} className="p-4 my-6 bg-red-700 rounded-lg w-full">
          {isSignForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-4" onClick={toggleSigninForm}>
          {isSignForm ? 'New to Netflix? Sign Up Now' : 'Already registered'}
        </p>
      </form>
    </div>
  );
};

export default Login;
