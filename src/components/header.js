import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userslice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Navigate to the root page after sign-out
    } catch (error) {
      console.error("Sign-out error:", error);
      navigate("/error"); // Navigate to an error page in case of sign-out error
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        }));
        navigate("/browse"); // Navigate to the browse page after successful sign-in
      } else {
        dispatch(removeUser());
        navigate("/"); // Navigate to the root page when there's no user logged in
      }
    });

    return () => {
      unsubscribe(); // Cleanup function to unsubscribe from the auth state listener
    };
  }, [dispatch, navigate]);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-44" src={LOGO} alt='logo' />
      {user && (
        <div className='flex p-2'>
          <img className="w-12 h-12" src={user?.photoURL} alt='emoji' />
          <button onClick={handleSignOut} className='font-bold text-red-500 cursor-pointer'>looged out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
