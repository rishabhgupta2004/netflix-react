import React, { useRef, useState } from 'react';
import Header from './header';
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    // If no validation error, you can proceed with the sign-in/sign-up logic
  };

  const toggleSigninForm = () => {
    setIsSignForm(!isSignForm);
  };

  return (
    <div>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="logos" />
      </div>
      <Header />
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
