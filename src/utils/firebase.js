// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0yYGkjKnSEdaRzR4gXNyLu_vpgtmyGhE",
  authDomain: "netflix-gpt-76b7a.firebaseapp.com",
  projectId: "netflix-gpt-76b7a",
  storageBucket: "netflix-gpt-76b7a.appspot.com",
  messagingSenderId: "85369876319",
  appId: "1:85369876319:web:242848b64f33268fd790ea",
  measurementId: "G-L6CC0CPGKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()