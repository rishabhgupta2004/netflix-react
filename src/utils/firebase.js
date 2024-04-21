// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth function for authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe9AphC02Y3qRt17CXL9S8st5I-4I9br4",
  authDomain: "netflix-gpt-9e4b4.firebaseapp.com",
  projectId: "netflix-gpt-9e4b4",
  storageBucket: "netflix-gpt-9e4b4.appspot.com",
  messagingSenderId: "301065448931",
  appId: "1:301065448931:web:732cefa066522819ed44d6",
  measurementId: "G-QPV32RQDDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the authentication module
export const auth = getAuth(); // Call getAuth function to get the authentication object
