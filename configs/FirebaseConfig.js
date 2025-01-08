// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp_iIR6C_3N5tgnlRt5aoeCPQ4xd0sHiY",
  authDomain: "mobile-application-14af2.firebaseapp.com",
  projectId: "mobile-application-14af2",
  storageBucket: "mobile-application-14af2.firebasestorage.app",
  messagingSenderId: "839071411451",
  appId: "1:839071411451:web:61368ed7dd95102b20545e",
  measurementId: "G-0E1T2EXCVP",
};

//! Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

